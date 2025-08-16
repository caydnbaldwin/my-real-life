# AI Code Examples Reference

This document consolidates all code examples from the AI instruction files to eliminate duplication and provide a single reference source for implementation patterns.

## SOLID Principles Examples

### Single Responsibility Principle (SRP)
```typescript
// ❌ VIOLATES SRP - Multiple responsibilities
class UserManager {
  validateUser(user: User): boolean { /* validation logic */ }
  saveUser(user: User): void { /* database logic */ }
  sendWelcomeEmail(user: User): void { /* email logic */ }
}

// ✅ FOLLOWS SRP - Single responsibility per class
class UserValidator {
  validate(user: User): boolean { /* only validation */ }
}

class UserRepository {
  save(user: User): void { /* only database operations */ }
}

class EmailService {
  sendWelcomeEmail(user: User): void { /* only email sending */ }
}
```

### Open/Closed Principle (OCP)
```typescript
// ✅ FOLLOWS OCP - Extensible without modification
abstract class PaymentProcessor {
  abstract processPayment(amount: number): Promise<PaymentResult>;
  
  protected logTransaction(amount: number): void {
    console.log(`Processing payment: $${amount}`);
  }
}

class CreditCardProcessor extends PaymentProcessor {
  async processPayment(amount: number): Promise<PaymentResult> {
    this.logTransaction(amount);
    // Credit card processing logic
    return { success: true, transactionId: 'cc_123' };
  }
}

class PayPalProcessor extends PaymentProcessor {
  async processPayment(amount: number): Promise<PaymentResult> {
    this.logTransaction(amount);
    // PayPal processing logic
    return { success: true, transactionId: 'pp_456' };
  }
}
```

### Liskov Substitution Principle (LSP)
```typescript
// ✅ FOLLOWS LSP - Proper substitution
interface Bird {
  move(): void;
}

class FlyingBird implements Bird {
  move(): void {
    this.fly();
  }
  
  fly(): void {
    console.log('Flying through the sky');
  }
}

class WalkingBird implements Bird {
  move(): void {
    this.walk();
  }
  
  walk(): void {
    console.log('Walking on the ground');
  }
}
```

## Next.js Implementation Patterns

### Server Components
```typescript
export default async function ServerComponent() {
  const data = await fetch('...', { next: { revalidate: 3600 } });
  return <div>{/* Server-side rendered content */}</div>;
}
```

### Client Components
```typescript
'use client';
export default function ClientComponent() {
  const [state, setState] = useState();
  return <div>{/* Interactive client-side content */}</div>;
}
```

### Supabase Integration
```typescript
// Server-side data fetching
export default async function PostList() {
  const supabase = createSupabaseServer();
  
  const { data: posts } = await supabase
    .from('posts')
    .select('*')
    .order('created_at', { ascending: false });
    
  return <div>{posts?.map(post => <PostCard key={post.id} post={post} />)}</div>;
}

// Real-time client component
export function LivePostUpdates({ initialPosts }: { initialPosts: Post[] }) {
  const [posts, setPosts] = useState(initialPosts);
  const supabase = createSupabaseClient();
  
  useEffect(() => {
    const subscription = supabase
      .channel('posts')
      .on('postgres_changes', { 
        event: '*', 
        schema: 'public', 
        table: 'posts' 
      }, (payload) => {
        // Handle real-time updates
        setPosts(current => [...current, payload.new as Post]);
      })
      .subscribe();
      
    return () => subscription.unsubscribe();
  }, []);
  
  return <div>{/* Live updating posts */}</div>;
}
```

## Testing Examples

### Unit Testing
```typescript
// Example: src/lib/__tests__/utils.test.ts
import { formatDate } from '../utils';

describe('formatDate', () => {
  it('should format date correctly', () => {
    const date = new Date('2025-08-15');
    expect(formatDate(date)).toBe('August 15, 2025');
  });
});
```

### Component Testing
```typescript
// Example: src/components/__tests__/Button.test.tsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from '../Button';

describe('Button', () => {
  it('calls onClick when clicked', async () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    
    await userEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
```

### API Route Testing
```typescript
// Example: src/app/api/users/__tests__/route.test.ts
import { GET } from '../route';
import { NextRequest } from 'next/server';

describe('/api/users', () => {
  it('returns users list', async () => {
    const request = new NextRequest('http://localhost:3000/api/users');
    const response = await GET(request);
    const data = await response.json();
    
    expect(response.status).toBe(200);
    expect(Array.isArray(data.users)).toBe(true);
  });
});
```

### Mock Service Worker (MSW) Setup
```typescript
// src/mocks/handlers.ts
import { rest } from 'msw';

export const handlers = [
  rest.get('/api/users', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Smith' }
      ])
    );
  })
];

// src/mocks/server.ts
import { setupServer } from 'msw/node';
import { handlers } from './handlers';

export const server = setupServer(...handlers);
```

## Architecture Patterns

### Repository Pattern
```typescript
interface UserRepository {
  findById(id: string): Promise<User | null>;
  save(user: User): Promise<User>;
  delete(id: string): Promise<void>;
}

class SupabaseUserRepository implements UserRepository {
  constructor(private supabase: SupabaseClient) {}
  
  async findById(id: string): Promise<User | null> {
    const { data } = await this.supabase
      .from('users')
      .select('*')
      .eq('id', id)
      .single();
    return data;
  }
  
  async save(user: User): Promise<User> {
    const { data } = await this.supabase
      .from('users')
      .upsert(user)
      .select()
      .single();
    return data;
  }
  
  async delete(id: string): Promise<void> {
    await this.supabase
      .from('users')
      .delete()
      .eq('id', id);
  }
}
```

### Service Layer
```typescript
class UserService {
  constructor(
    private userRepository: UserRepository,
    private emailService: EmailService
  ) {}
  
  async createUser(userData: CreateUserData): Promise<User> {
    // Business logic
    const user = await this.userRepository.save(userData);
    await this.emailService.sendWelcomeEmail(user);
    return user;
  }
}
```

## Performance Patterns

### React Performance
```typescript
// Memoization
const ExpensiveComponent = memo(({ data }: { data: ComplexData }) => {
  const processedData = useMemo(() => 
    processComplexData(data), [data]
  );
  
  return <div>{processedData}</div>;
});

// Callback memoization
const ParentComponent = () => {
  const [count, setCount] = useState(0);
  
  const handleClick = useCallback(() => {
    setCount(prev => prev + 1);
  }, []);
  
  return <ExpensiveChild onClick={handleClick} />;
};
```

### Database Optimization
```typescript
// Efficient queries with indexes
const { data } = await supabase
  .from('posts')
  .select(`
    id,
    title,
    author:profiles(name),
    category:categories(name)
  `)
  .eq('published', true)
  .order('created_at', { ascending: false })
  .limit(10);
```

## Error Handling Patterns

### API Error Handling
```typescript
export async function GET(request: NextRequest) {
  try {
    const data = await fetchData();
    return NextResponse.json(data);
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
```

### Component Error Boundaries
```typescript
class ErrorBoundary extends Component<PropsWithChildren, { hasError: boolean }> {
  constructor(props: PropsWithChildren) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }
  
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    
    return this.props.children;
  }
}
```

---

## See Also

### 📚 **Standards and Architecture**
- **AI_CODING_STANDARDS.MD** - SOLID principles and quality standards these examples demonstrate
- **AI_ARCHITECTURE.MD** - System architecture patterns implemented in these examples
- **AI_TESTING.MD** - Testing strategies and examples for code quality

### 🛠️ **Framework and Implementation**
- **AI_NEXTJS_FRAMEWORK.MD** - Next.js specific patterns and optimizations
- **AI_FILESYSTEM.MD** - File organization for the code examples shown
- **AI_FEATURE_DEVELOPMENT.MD** - Applying these patterns during feature development

### 🔧 **Configuration and Setup**
- **AI_CONFIGURATION_REFERENCE.MD** - Configuration files supporting these code patterns
- **AI_PROJECT_SETUP.MD** - Setup required to run these examples
- **AI_ENVIRONMENT.MD** - IDE configuration for optimal coding experience

### ⚡ **Daily Reference**
- **AI_QUICK_REFERENCE.MD** - Quick access to common patterns and troubleshooting

### 🗂️ **Navigation**
- **AI_ALL_IN_ONE.MD** - Master index of all documentation

**Reference Note**: All code examples follow the patterns and standards defined in AI_CODING_STANDARDS.MD and AI_ARCHITECTURE.MD. Use these examples as templates for consistent implementation across the project.

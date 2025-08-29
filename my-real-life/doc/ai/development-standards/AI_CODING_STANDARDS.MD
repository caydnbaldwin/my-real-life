# AI Coding Standards Instructions

This document contains coding standards for AI agents working on this Next.js project. Adhere to SOLID principles, polymorphism, and abstraction patterns.

## Core Requirements

Apply these principles consistently:
1. Follow SOLID programming principles
2. Implement polymorphism for varying implementations
3. Apply abstraction to hide complexity and implementation details
4. Prioritize simplicity and conciseness
5. Maintain clean architecture patterns

## SOLID Principles

### Single Responsibility Principle (SRP)
Every class, component, function, and module should have exactly one reason to change.

**See ../references/AI_CODE_EXAMPLES.MD for detailed SRP implementation examples.**

### Open/Closed Principle (OCP)
Classes and components should be open for extension but closed for modification.

```typescript
// ✅ Extensible without modification
abstract class PaymentProcessor {
  abstract processPayment(amount: number): Promise<PaymentResult>;
}

class CreditCardProcessor extends PaymentProcessor {
  async processPayment(amount: number): Promise<PaymentResult> {
    // Credit card implementation
    return { success: true, transactionId: 'cc_123' };
  }
}

class PayPalProcessor extends PaymentProcessor {
  async processPayment(amount: number): Promise<PaymentResult> {
    // PayPal implementation  
    return { success: true, transactionId: 'pp_456' };
  }
}
```

### Liskov Substitution Principle (LSP)
Derived classes should be substitutable for their base classes without breaking functionality.

```typescript
// ✅ Subtypes are substitutable
interface Bird {
  move(): void;
}

class FlyingBird implements Bird {
  move(): void { this.fly(); }
  private fly(): void { console.log('Flying through the air'); }
}

class WalkingBird implements Bird {
  move(): void { this.walk(); }
  private walk(): void { console.log('Walking on the ground'); }
}

// Both can be used interchangeably
function moveBird(bird: Bird): void {
  bird.move(); // Works for any Bird implementation
}
```

### Interface Segregation Principle (ISP)
Clients should not be forced to depend on interfaces they don't use.

```typescript
// ✅ Segregated interfaces
interface Workable {
  work(): void;
}

interface Eatable {
  eat(): void;
}

class Human implements Workable, Eatable {
  work(): void { /* implementation */ }
  eat(): void { /* implementation */ }
}

class Robot implements Workable {
  work(): void { /* implementation */ }
  // Robot doesn't need eat()
}
```

### Dependency Inversion Principle (DIP)
High-level modules should not depend on low-level modules. Both should depend on abstractions.

**See ../references/AI_CODE_EXAMPLES.MD for detailed DIP implementation examples.**

## Polymorphism Implementation

Implement polymorphism for varying implementations with common behavior.

```typescript
// ✅ Interface-based polymorphism
interface NotificationService {
  send(message: string, recipient: string): Promise<void>;
}

class EmailNotification implements NotificationService {
  async send(message: string, recipient: string): Promise<void> {
    // Email implementation
  }
}

class SMSNotification implements NotificationService {
  async send(message: string, recipient: string): Promise<void> {
    // SMS implementation  
  }
}

// Polymorphic usage
class NotificationManager {
  constructor(private services: NotificationService[]) {}
  
  async sendToAll(message: string, recipient: string): Promise<void> {
    await Promise.all(
      this.services.map(service => service.send(message, recipient))
    );
  }
}
```

### React Component Polymorphism
```typescript
// ✅ Polymorphic React components
interface ButtonProps {
  children: React.ReactNode;
  variant: 'primary' | 'secondary' | 'danger';
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, variant, onClick }) => {
  const variantClasses = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
    danger: 'bg-red-600 text-white hover:bg-red-700'
  };
  
  return (
    <button className={`px-4 py-2 rounded ${variantClasses[variant]}`} onClick={onClick}>
      {children}
    </button>
  );
};
```

## Abstraction Patterns

Hide implementation details and expose only essential interfaces.

**See ../references/AI_CODE_EXAMPLES.MD for detailed abstraction implementation examples.**
```typescript
// ✅ MANDATORY - Abstract business logic complexity
interface AuthService {
  signIn(credentials: SignInCredentials): Promise<AuthResult>;
  signOut(): Promise<void>;
  getCurrentUser(): Promise<User | null>;
  refreshToken(): Promise<string>;
}

class JWTAuthService implements AuthService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly tokenService: TokenService
  ) {}
  
  async signIn(credentials: SignInCredentials): Promise<AuthResult> {
    // Hide authentication complexity
    const user = await this.validateCredentials(credentials);
    const tokens = await this.generateTokens(user);
    await this.storeRefreshToken(user.id, tokens.refreshToken);
    
    return {
      user,
      accessToken: tokens.accessToken,
      expiresIn: tokens.expiresIn
    };
  }
  
  // Hide implementation details
  private async validateCredentials(credentials: SignInCredentials): Promise<User> {
    // Complex validation logic hidden from public interface
  }
}
```

## REACT-SPECIFIC SOLID PRINCIPLES

### Component Single Responsibility
```typescript
// ✅ FOLLOWS SRP - Each component has one responsibility
const UserProfile: React.FC<{ userId: string }> = ({ userId }) => {
  const { user, loading, error } = useUser(userId);
  
  if (loading) return <UserProfileSkeleton />;
  if (error) return <UserProfileError error={error} />;
  if (!user) return <UserNotFound />;
  
  return <UserProfileContent user={user} />;
};

const UserProfileContent: React.FC<{ user: User }> = ({ user }) => (
  <div className="user-profile">
    <UserAvatar user={user} />
    <UserDetails user={user} />
    <UserActions user={user} />
  </div>
);
```

### Hook Single Responsibility
```typescript
// ✅ FOLLOWS SRP - Each hook has one responsibility
const useUser = (userId: string) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  
  useEffect(() => {
    fetchUser(userId).then(setUser).catch(setError).finally(() => setLoading(false));
  }, [userId]);
  
  return { user, loading, error };
};

const useUserActions = (user: User) => {
  const updateUser = useCallback(async (updates: Partial<User>) => {
    // Update logic
  }, [user]);
  
  const deleteUser = useCallback(async () => {
    // Delete logic
  }, [user]);
  
  return { updateUser, deleteUser };
};
```

## MANDATORY PATTERNS IMPLEMENTATION

### Factory Pattern (Polymorphism + Abstraction)
```typescript
// ✅ MANDATORY - Factory for creating related objects
abstract class ComponentFactory {
  abstract createButton(props: ButtonProps): React.ReactElement;
  abstract createInput(props: InputProps): React.ReactElement;
  abstract createCard(props: CardProps): React.ReactElement;
}

class MaterialUIFactory extends ComponentFactory {
  createButton(props: ButtonProps): React.ReactElement {
    return <MaterialButton {...props} />;
  }
  
  createInput(props: InputProps): React.ReactElement {
    return <MaterialInput {...props} />;
  }
  
  createCard(props: CardProps): React.ReactElement {
    return <MaterialCard {...props} />;
  }
}

class TailwindFactory extends ComponentFactory {
  createButton(props: ButtonProps): React.ReactElement {
    return <TailwindButton {...props} />;
  }
  
  createInput(props: InputProps): React.ReactElement {
    return <TailwindInput {...props} />;
  }
  
  createCard(props: CardProps): React.ReactElement {
    return <TailwindCard {...props} />;
  }
}
```

### Strategy Pattern (Polymorphism)
```typescript
// ✅ MANDATORY - Strategy pattern for varying algorithms
interface ValidationStrategy {
  validate(value: string): ValidationResult;
}

class EmailValidationStrategy implements ValidationStrategy {
  validate(value: string): ValidationResult {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return {
## Anti-Patterns to Avoid

### Avoid God Objects
Don't create classes with too many responsibilities.

### Avoid Tight Coupling  
Depend on abstractions, not concrete implementations.

### Avoid Interface Pollution
Keep interfaces focused and segregated.

## Quick Reference Checklist

Before completing implementations, verify:
- [ ] Single Responsibility - Each class/component has one reason to change
- [ ] Open/Closed - Open for extension, closed for modification  
- [ ] Liskov Substitution - Derived types are substitutable for base types
- [ ] Interface Segregation - No unused interface dependencies
- [ ] Dependency Inversion - Depend on abstractions
- [ ] Polymorphism - Common behavior through interfaces
- [ ] Abstraction - Hide implementation details
- [ ] Simplicity - As simple as possible while maintaining principles

---

## See Also

### 📚 **Essential Reading**
- **AI_ARCHITECTURE.MD** - System architecture patterns and design decisions
- **AI_TESTING.MD** - Testing strategies that reinforce coding standards
- **AI_CODE_EXAMPLES.MD** - Detailed SOLID principle examples and implementation patterns

### 🛠️ **Implementation Guides**
- **AI_NEXTJS_FRAMEWORK.MD** - Framework-specific applications of these standards
- **AI_FILESYSTEM.MD** - Code organization and file structure patterns
- **AI_FEATURE_DEVELOPMENT.MD** - Applying standards during feature development

### 🔧 **Setup and Configuration**
- **AI_PROJECT_SETUP.MD** - Initial setup to support coding standards
- **AI_ENVIRONMENT.MD** - IDE configuration for code quality enforcement
- **AI_CONFIGURATION_REFERENCE.MD** - ESLint, Prettier, and TypeScript configurations

### ⚡ **Quick References**
- **AI_QUICK_REFERENCE.MD** - Daily development checklist including standards verification

### 🗂️ **Navigation**
- **AI_ALL_IN_ONE.MD** - Master index of all documentation

**Implementation Details**: Detailed code examples and patterns are available in AI_CODE_EXAMPLES.MD.

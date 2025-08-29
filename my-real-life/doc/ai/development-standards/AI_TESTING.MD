# AI Testing Instructions

This document contains testing instructions for AI agents working on this Next.js project. Follow Test-Driven Development (TDD) principles and utilize Next.js testing capabilities.

## Core Testing Philosophy

**TDD Approach**: When creating, updating, or modifying features:
1. Write tests before implementation
2. Test happy paths, edge cases, and error conditions  
3. Implement code to make tests pass
4. Refactor with confidence using tests

## Testing Framework Stack

**See ../core-setup/AI_PROJECT_SETUP.MD for complete testing setup and configuration.**

### Primary Tools
- **Jest** - Unit and snapshot testing
- **React Testing Library** - Component testing utilities  
- **Cypress** - End-to-end testing
- **MSW** - API mocking
- **@testing-library/jest-dom** - Custom Jest matchers

### Next.js Integration  
- **@next/jest** - Jest configuration for Next.js
- **@testing-library/react** - React component testing
- **@testing-library/user-event** - User interaction simulation

## Testing Types and Implementation

### Unit Testing
Test individual functions, hooks, and isolated components.

**See ../references/AI_CODE_EXAMPLES.MD for detailed unit testing examples.**

### Component Testing  
Test React components in isolation with props and user interactions.

```typescript
// Example: Component testing pattern
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from '../Button';

describe('Button', () => {
  it('should render with correct text and handle clicks', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    
    expect(screen.getByRole('button')).toHaveTextContent('Click me');
    
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
```

### Integration Testing
Test how multiple components/units work together.

**See ../references/AI_CODE_EXAMPLES.MD for detailed integration testing examples.**

### End-to-End (E2E) Testing  
Test complete user flows in browser environment.

```typescript
// Example: cypress/e2e/user-authentication.cy.ts
describe('User Authentication', () => {
  it('should complete full login flow', () => {
    cy.visit('/login');
    cy.get('[data-testid="email-input"]').type('user@example.com');
    cy.get('[data-testid="password-input"]').type('password123');
    cy.get('[data-testid="submit-button"]').click();
    cy.url().should('include', '/dashboard');
    cy.get('[data-testid="welcome-message"]').should('be.visible');
  });
});
```

### 5. Snapshot Testing
**Purpose**: Capture component rendered output for regression testing

```typescript
// Example: src/components/__tests__/Header.snapshot.test.tsx
import { render } from '@testing-library/react';
import { Header } from '../Header';

describe('Header Snapshot', () => {
  it('should match snapshot', () => {
    const { container } = render(<Header title="Test App" />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
```

## Next.js Specific Testing Requirements

### Server Components Testing
**For Async Server Components**: Use E2E testing over unit testing due to ecosystem limitations

**See ../references/AI_CODE_EXAMPLES.MD for detailed E2E testing examples.**

### App Router Testing
Test routing behavior and navigation.

```typescript
// Example: Navigation testing
import { useRouter } from 'next/navigation';
import { Navigation } from '../Navigation';

jest.mock('next/navigation');

describe('Navigation', () => {
  it('should highlight active route', () => {
    (useRouter as jest.Mock).mockReturnValue({
      pathname: '/dashboard'
    });
    
    render(<Navigation />);
    expect(screen.getByText('Dashboard')).toHaveClass('active');
  });
});
```

### API Routes Testing
Test API endpoints and server actions.

**See ../references/AI_CODE_EXAMPLES.MD for detailed API testing examples.**

## Testing Structure

**See ../implementation-guides/AI_FILESYSTEM.MD for complete testing directory structure.**

Key directories:
- `cypress/e2e/` - End-to-End tests
- `cypress/component/` - Cypress component tests  
- `__mocks__/` - Jest mocks
- Component tests alongside source files

## Testing Configuration

**See ../references/AI_CONFIGURATION_REFERENCE.MD for complete testing configuration files.**

Key requirements:
- Jest configuration with Next.js integration
- React Testing Library setup
- Cypress E2E configuration  
- 80% minimum coverage threshold
- MSW for API mocking
```

## TDD Workflow

Follow the TDD cycle:
1. **Write failing test first**
2. **Implement minimal code to pass test**
3. **Run tests to verify** 
4. **Refactor with confidence using tests**
5. **Repeat for next feature**

**See ../references/AI_CODE_EXAMPLES.MD for detailed TDD workflow examples.**

## Testing Standards

### Coverage Requirements
- Minimum 80% coverage for lines, functions, branches, statements  
- 100% coverage for critical paths (authentication, payments, data mutations)
- All public components and utilities must have tests

### Quality Standards
- Use descriptive test names ("should [expected behavior]")
- Structure tests with Arrange-Act-Assert pattern
- Use `data-testid` for reliable element selection
- Mock external dependencies
- Keep tests isolated and independent

## Mock Service Worker (MSW) Integration

**See ../references/AI_CODE_EXAMPLES.MD for detailed MSW setup and usage examples.**

## Accessibility & Performance Testing

Include accessibility tests using jest-axe and performance tests for large datasets.

**See ../references/AI_CODE_EXAMPLES.MD for accessibility and performance testing examples.**
  const { container } = render(<MyComponent />);
## Continuous Integration

**See ../references/AI_CONFIGURATION_REFERENCE.MD for complete CI pipeline configuration.**

Key CI requirements:
- All tests pass before commits
- Linting and type checking required  
- Coverage thresholds met (80%)
- E2E tests run on deployment

## Common Testing Issues & Solutions

1. **Async Operations** - Always use `waitFor` for async operations
2. **Timer Mocks** - Use `jest.useFakeTimers()` for time-dependent code  
3. **Router Mocking** - Mock Next.js router for navigation tests
4. **Environment Variables** - Mock env vars in test environment

## Testing Checklist

Before completing feature implementation:
- [ ] Tests written before implementation (TDD)
- [ ] Unit tests cover functions/components
- [ ] Integration tests verify interactions  
- [ ] E2E tests validate user workflows
- [ ] API routes tested comprehensively
- [ ] Error scenarios tested
- [ ] Accessibility tests included
- [ ] Coverage thresholds met (80%)
- [ ] All tests pass in CI environment

---

## See Also

### 📚 **Foundation Reading**
- **AI_CODING_STANDARDS.MD** - Quality standards that testing supports and validates
- **AI_ARCHITECTURE.MD** - Testing architectural decisions and system boundaries
- **AI_PROJECT_SETUP.MD** - Initial testing setup and configuration

### 🛠️ **Implementation Guides**
- **AI_CODE_EXAMPLES.MD** - Complete testing examples (unit, integration, E2E)
- **AI_CONFIGURATION_REFERENCE.MD** - Jest, Playwright, and testing tool configurations
- **AI_NEXTJS_FRAMEWORK.MD** - Framework-specific testing patterns and best practices

### 🔄 **Development Workflow**
- **AI_FEATURE_DEVELOPMENT.MD** - Integrating TDD into feature development process
- **AI_QUICK_REFERENCE.MD** - Testing checklists and troubleshooting guides
- **AI_ENVIRONMENT.MD** - IDE testing configuration and debugging setup

### 🏗️ **System Integration**
- **AI_FILESYSTEM.MD** - Test file organization and placement patterns

### 🗂️ **Navigation**
- **AI_ALL_IN_ONE.MD** - Master index of all documentation

**Implementation Details**: Complete testing configurations, examples, and CI setup are available in AI_CODE_EXAMPLES.MD and AI_CONFIGURATION_REFERENCE.MD.

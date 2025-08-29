# AI Quick Reference Guide

This document provides rapid access checklists, decision trees, and troubleshooting guides for daily development workflow.

## AI Agent Self-Validation System

### 🤖 **Before Code Submission - AI Agent Checklist**
**Use this checklist to validate all code before submission:**

#### **Documentation Compliance**
- [ ] **Consulted single source of truth** - Referenced the authoritative file for this topic area
- [ ] **Cross-referenced related files** - Checked all relevant documentation sections
- [ ] **Followed established patterns** - Used existing project patterns and conventions
- [ ] **Maintained consistency** - Ensured code aligns with project standards throughout

#### **Architecture & Design Compliance**  
- [ ] **Applied SOLID principles** - Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion
- [ ] **Proper abstraction** - Hidden complexity behind clean interfaces
- [ ] **Polymorphism implemented** - Used appropriate polymorphic patterns where applicable
- [ ] **Clean architecture** - Followed proper layer separation and dependencies

#### **Testing & Quality Compliance**
- [ ] **Followed TDD approach** - Wrote tests before implementation (Red-Green-Refactor)
- [ ] **Comprehensive test coverage** - Unit, integration, and E2E tests as appropriate
- [ ] **Edge cases covered** - Tested error conditions and boundary cases
- [ ] **Performance considerations** - Optimized for Core Web Vitals and bundle size

#### **File Organization & Structure**
- [ ] **Correct file placement** - Used AI_FILESYSTEM.MD decision tree for file location
- [ ] **Proper naming conventions** - Followed project naming standards
- [ ] **Import organization** - Used absolute imports with @/ alias where appropriate
- [ ] **Type definitions** - Added proper TypeScript types and interfaces

#### **Framework & Technology Compliance**
- [ ] **Next.js 15 patterns** - Used App Router, Server/Client Components correctly
- [ ] **React 19 features** - Applied concurrent features and modern React patterns  
- [ ] **TypeScript strict mode** - Full type safety with no any types
- [ ] **Supabase integration** - Proper database client usage and SSR patterns

### 🎯 **AI Decision Verification Framework**
**Before implementing any solution, validate decisions by asking:**

#### **Source of Truth Validation**
1. **"Which single source of truth file covers this topic?"**
   - Technology Stack → `AI_PROJECT_SETUP.MD`
   - Code Standards → `AI_CODING_STANDARDS.MD`  
   - File Placement → `AI_FILESYSTEM.MD`
   - Testing Strategy → `AI_TESTING.MD`

#### **Implementation Approach Validation**
2. **"What would the TDD approach require here?"**
   - Write failing test first
   - Implement minimal code to pass
   - Refactor with confidence
   - Maintain test coverage >95%

#### **Design Pattern Validation**
3. **"Which SOLID principle applies to this situation?"**
   - Single Responsibility - One reason to change
   - Open/Closed - Extensible without modification
   - Liskov Substitution - Subtypes are substitutable
   - Interface Segregation - Focused interfaces
   - Dependency Inversion - Depend on abstractions

#### **Structure and Organization Validation**  
4. **"Where does AI_FILESYSTEM.MD say this file belongs?"**
   - Pages/Routes → `src/app/[route]/page.tsx`
   - API Endpoints → `src/app/api/[endpoint]/route.ts`
   - Components → `src/components/[category]/`
   - Utilities → `src/lib/utils.ts`
   - Types → `src/types/`

### 🚨 **Common AI Agent Pitfalls to Avoid**

#### **Next.js Specific Mistakes**
- ❌ **Mixing Server/Client Component patterns incorrectly**
- ❌ **Using Pages Router patterns instead of App Router**
- ❌ **Forgetting 'use client' directive for interactive components**
- ❌ **Not leveraging Server Components for performance**

#### **Architecture Mistakes**
- ❌ **Violating single responsibility principle**
- ❌ **Creating tight coupling between layers**
- ❌ **Not implementing proper error boundaries**
- ❌ **Ignoring dependency inversion**

#### **Testing Mistakes**
- ❌ **Skipping test implementation in TDD approach**
- ❌ **Writing tests after implementation**
- ❌ **Not testing edge cases and error conditions**
- ❌ **Insufficient integration test coverage**

#### **File Organization Mistakes**
- ❌ **Not following the single source of truth principle**
- ❌ **Placing files in incorrect directories**
- ❌ **Using relative imports instead of absolute imports**
- ❌ **Inconsistent naming conventions**

### ✅ **Implementation Confidence Indicators**
**Verify your readiness before proceeding:**

#### **Technology Stack Confidence**
- [ ] **Can explain all major technology versions and their integration**
- [ ] **Understand Next.js 15 App Router architecture**
- [ ] **Know when to use Server vs Client Components**
- [ ] **Familiar with Supabase client and SSR patterns**

#### **Code Standards Confidence**  
- [ ] **Can apply all 5 SOLID principles with examples**
- [ ] **Understand polymorphism and abstraction patterns**
- [ ] **Know TypeScript strict mode requirements**
- [ ] **Familiar with clean architecture principles**

#### **Implementation Process Confidence**
- [ ] **Can execute TDD Red-Green-Refactor cycle**
- [ ] **Know correct file placement for any component type**
- [ ] **Understand testing strategy for different code types**
- [ ] **Can reference appropriate documentation quickly**

## Development Workflow Checklist

### 🚀 New Feature Development
- [ ] Read `../implementation-guides/AI_FEATURE_DEVELOPMENT.MD` for planning process
- [ ] Create feature branch: `git checkout -b feature/feature-name`
- [ ] Follow file placement using `../implementation-guides/AI_FILESYSTEM.MD` decision tree
- [ ] Implement using `../development-standards/AI_CODING_STANDARDS.MD` principles
- [ ] Write tests following `../development-standards/AI_TESTING.MD` patterns
- [ ] Follow architectural decisions from `../development-standards/AI_ARCHITECTURE.MD`
- [ ] Use Next.js patterns from `../implementation-guides/AI_NEXTJS_FRAMEWORK.MD`
- [ ] Run verification checklist below

### 🔧 Daily Development Tasks
- [ ] Pull latest changes: `git pull origin main`
- [ ] Install dependencies: `pnpm install`
- [ ] Start development server: `pnpm dev`
- [ ] Run type checking: `pnpm build`
- [ ] Run tests: `pnpm test`
- [ ] Run linting: `pnpm lint`

## File Placement Decision Tree

### Quick File Placement Guide
```
Where does this file go?
├── Page/Route? → src/app/[route]/page.tsx
├── API Endpoint? → src/app/api/[endpoint]/route.ts
├── Reusable Component? → src/components/[category]/
├── Utility Function? → src/lib/utils.ts
├── Custom Hook? → src/hooks/
├── Type Definition? → src/types/
├── Constant/Config? → src/constants/
├── Static Asset? → public/
└── Documentation? → doc/
```

**Detailed Decision Tree:** See `../implementation-guides/AI_FILESYSTEM.MD` for complete flowchart

## Testing Checklist

### 🧪 Before Committing Code
- [ ] All tests pass: `pnpm test`
- [ ] New functionality has tests
- [ ] Test coverage maintained
- [ ] Integration tests for features
- [ ] Performance tests for critical paths

### 🔍 Test Types to Consider
- [ ] **Unit Tests:** Individual functions/components
- [ ] **Integration Tests:** Feature workflows
- [ ] **E2E Tests:** Complete user journeys
- [ ] **Performance Tests:** Load times, bundle sizes
- [ ] **Accessibility Tests:** A11y compliance

**Testing Strategy:** See `../development-standards/AI_TESTING.MD` for detailed patterns

## Deployment Checklist

### 🚀 Pre-Deployment Verification
- [ ] All tests passing
- [ ] Build succeeds: `pnpm build`
- [ ] Environment variables configured
- [ ] Database migrations applied
- [ ] Performance optimizations verified
- [ ] Security checks completed

### 🔒 Security Verification
- [ ] Environment variables secure
- [ ] API endpoints protected
- [ ] Authentication working
- [ ] Authorization properly implemented
- [ ] Input validation in place
- [ ] XSS/CSRF protections active

### 📊 Performance Verification
- [ ] Bundle size optimized
- [ ] Images optimized
- [ ] Caching strategies applied
- [ ] Database queries optimized
- [ ] Server Components used where appropriate
- [ ] Client Components minimized

## Deployment Workflow

### 🌊 Standard Deployment Process (Vercel)

#### 1. Pre-Deployment Phase
```bash
# Ensure clean working directory
git status

# Pull latest changes
git pull origin main

# Install dependencies
pnpm install

# Run comprehensive checks
pnpm build
pnpm test
pnpm lint
```

#### 2. Environment Setup
```bash
# Verify environment variables in Vercel dashboard
vercel env ls

# Add new environment variables if needed
vercel env add [VAR_NAME]

# Pull environment for local testing
vercel env pull .env.local
```

#### 3. Database Preparation
```bash
# Generate and apply migrations (if needed)
pnpm db:generate
pnpm db:push

# Verify database connectivity
pnpm db:studio
```

#### 4. Deployment Execution
```bash
# For preview deployment
vercel

# For production deployment
vercel --prod

# Or deploy via Git (recommended)
git checkout main
git merge feature/branch-name
git push origin main  # Auto-deploys to production
```

#### 5. Post-Deployment Verification
```bash
# Check deployment status
vercel ls

# View deployment logs
vercel logs [deployment-url]

# Run health checks on production
curl -I https://your-domain.com/api/health
```

### 🔄 Rollback Process

#### Quick Rollback (Vercel)
```bash
# List recent deployments
vercel ls

# Promote previous deployment
vercel promote [previous-deployment-url]
```

#### Git-Based Rollback
```bash
# Revert to previous commit
git revert HEAD

# Or reset to specific commit
git reset --hard [commit-hash]
git push origin main --force
```

### 🏷️ Release Workflow

#### 1. Feature Branch Deployment
```bash
# Create feature branch
git checkout -b feature/new-feature

# Push for preview deployment
git push origin feature/new-feature

# Vercel automatically creates preview URL
```

#### 2. Staging Environment
```bash
# Deploy to staging branch
git checkout staging
git merge feature/new-feature
git push origin staging

# Test on staging environment
# https://your-project-git-staging.vercel.app
```

#### 3. Production Release
```bash
# Final checks
pnpm build
pnpm test
pnpm lint

# Merge to main
git checkout main
git merge staging
git tag v1.x.x  # Version tagging
git push origin main --tags

# Monitor deployment
vercel ls
```

### 🔍 Deployment Monitoring

#### Health Check Endpoints
```typescript
// src/app/api/health/route.ts
export async function GET() {
  return Response.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    version: process.env.NEXT_PUBLIC_APP_VERSION
  });
}
```

#### Monitor Deployment
```bash
# Check deployment status
curl https://your-domain.com/api/health

# Monitor logs in real-time
vercel logs --follow

# Check performance metrics
vercel inspect [deployment-url]
```

### 🚨 Emergency Procedures

#### Immediate Rollback
```bash
# Quick rollback to last known good deployment
vercel promote [last-good-deployment-url]

# Notify team
echo "Emergency rollback completed at $(date)" | slack-notify
```

#### Database Emergency
```bash
# Restore from backup (Supabase)
# Use Supabase dashboard for point-in-time recovery

# Or use CLI if available
supabase db restore [backup-id]
```

### 📋 Deployment Environment Checklist

#### Production Environment Variables
- [ ] `NEXT_PUBLIC_SUPABASE_URL`
- [ ] `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- [ ] `SUPABASE_SERVICE_ROLE_KEY`
- [ ] `NEXT_PUBLIC_APP_URL`
- [ ] `DATABASE_URL`
- [ ] `NEXTAUTH_SECRET`
- [ ] `NEXTAUTH_URL`

#### Vercel Project Settings
- [ ] Build command: `pnpm build`
- [ ] Output directory: `.next`
- [ ] Install command: `pnpm install`
- [ ] Node.js version: 18.x or 20.x
- [ ] Framework preset: Next.js

### 🔗 Useful Deployment Commands

```bash
# Vercel CLI commands
vercel login                 # Login to Vercel
vercel link                  # Link local project
vercel env ls               # List environment variables
vercel domains ls           # List custom domains
vercel certs ls             # List SSL certificates

# Git deployment commands
git log --oneline -10       # Recent commits
git diff HEAD~1             # Changes since last commit
git push origin main        # Deploy to production

# Database commands
pnpm db:push               # Push schema changes
pnpm db:seed               # Seed production data
pnpm db:backup             # Create database backup
```

## Troubleshooting Guide

### 🐛 Common Development Issues

#### Build Errors
**Problem:** TypeScript compilation errors
- **Check:** `tsconfig.json` configuration
- **Solution:** See `AI_CONFIGURATION_REFERENCE.MD`
- **Verify:** Type definitions in `src/types/`

**Problem:** Import/export errors
- **Check:** File paths and extensions
- **Solution:** Use absolute imports with `@/` alias
- **Verify:** `tsconfig.json` paths configuration

#### Runtime Errors
**Problem:** Hydration mismatches
- **Check:** Server vs Client component usage
- **Solution:** See `../implementation-guides/AI_NEXTJS_FRAMEWORK.MD` SSR patterns
- **Verify:** `'use client'` directives

**Problem:** Database connection issues
- **Check:** Environment variables
- **Solution:** See `../core-setup/AI_PROJECT_SETUP.MD` database setup
- **Verify:** Supabase client configuration

#### Performance Issues
**Problem:** Slow page loads
- **Check:** Bundle size and imports
- **Solution:** Use dynamic imports and code splitting
- **Verify:** Server Components usage

**Problem:** Poor Core Web Vitals
- **Check:** Image optimization and caching
- **Solution:** See `../implementation-guides/AI_NEXTJS_FRAMEWORK.MD` performance patterns
- **Verify:** Lighthouse scores

### 🔧 Quick Fixes

#### Development Server Issues
```bash
# Clear Next.js cache
rm -rf .next
pnpm dev

# Clear node modules
rm -rf node_modules pnpm-lock.yaml
pnpm install

# Reset database (if needed)
pnpm db:reset
```

#### Environment Issues
```bash
# Verify environment variables
pnpm env:check

# Copy environment template
cp .env.example .env.local
```

#### Git Issues
```bash
# Sync with main
git fetch origin
git rebase origin/main

# Clean working directory
git clean -fd
git reset --hard HEAD
```

## Quick Command Reference

### 📦 Package Management
```bash
pnpm install              # Install dependencies
pnpm add [package]        # Add package
pnpm remove [package]     # Remove package
pnpm update              # Update all packages
```

### 🏗️ Build & Development
```bash
pnpm dev                 # Start development server
pnpm build               # Production build
pnpm start               # Start production server
pnpm lint                # Run linting
pnpm type-check          # TypeScript checking
```

### 🧪 Testing
```bash
pnpm test                # Run all tests
pnpm test:watch          # Watch mode
pnpm test:coverage       # Coverage report
pnpm test:e2e            # End-to-end tests
```

### 🗃️ Database
```bash
pnpm db:generate         # Generate migrations
pnpm db:push             # Push schema changes
pnpm db:reset            # Reset database
pnpm db:seed             # Seed database
```

## Emergency Contacts

### 📚 Documentation References
- **Setup Issues:** `../core-setup/AI_PROJECT_SETUP.MD`
- **Code Standards:** `../development-standards/AI_CODING_STANDARDS.MD`
- **Architecture Questions:** `../development-standards/AI_ARCHITECTURE.MD`
- **Testing Problems:** `../development-standards/AI_TESTING.MD`
- **File Organization:** `../implementation-guides/AI_FILESYSTEM.MD`
- **Next.js Patterns:** `../implementation-guides/AI_NEXTJS_FRAMEWORK.MD`
- **Feature Planning:** `../implementation-guides/AI_FEATURE_DEVELOPMENT.MD`
- **Code Examples:** `AI_CODE_EXAMPLES.MD`
- **Configurations:** `AI_CONFIGURATION_REFERENCE.MD`

### 🆘 When Everything Breaks
1. **Check the logs** - Terminal and browser console
2. **Verify environment** - `.env.local` file exists and is correct
3. **Clean and rebuild** - Clear caches and reinstall
4. **Check git status** - Ensure clean working directory
5. **Read error messages** - They usually contain the solution
6. **Consult documentation** - Start with relevant AI_*.MD file
7. **Create minimal reproduction** - Isolate the problem

---

## See Also

### 📚 **Complete Documentation**
- **AI_ALL_IN_ONE.MD** - Master index and reading order for all documentation
- **AI_PROJECT_SETUP.MD** - Comprehensive setup instructions beyond quick reference
- **AI_ENVIRONMENT.MD** - Complete development environment setup guide

### 🏗️ **Implementation Details**
- **AI_CODING_STANDARDS.MD** - Full coding standards and SOLID principles
- **AI_ARCHITECTURE.MD** - Complete system architecture and design patterns
- **AI_TESTING.MD** - Comprehensive testing strategy and TDD approach

### 🛠️ **Framework and Organization**
- **AI_NEXTJS_FRAMEWORK.MD** - Complete Next.js patterns and optimizations
- **AI_FILESYSTEM.MD** - Detailed file organization and structure guide
- **AI_FEATURE_DEVELOPMENT.MD** - Full feature development workflow

### 📋 **Detailed References**
- **AI_CODE_EXAMPLES.MD** - Comprehensive code examples and implementation patterns
- **AI_CONFIGURATION_REFERENCE.MD** - Complete configuration templates and setup

**Remember:** This guide is for quick reference. Always consult the full AI instruction files for comprehensive guidance and context.

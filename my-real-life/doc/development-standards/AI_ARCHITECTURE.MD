# AI Architecture Instructions

This document contains architectural guidelines and patterns for AI agents working on this Next.js project. Focus on high-level architectural decisions and system-level patterns.

## Core Architecture Overview

### Technology Integration
**See ../core-setup/AI_PROJECT_SETUP.MD for complete technology stack details.**

Key architectural integrations:
- **App Router Architecture** - Next.js 15.4.5 server/client component patterns
- **Database Integration** - Supabase PostgreSQL with real-time capabilities  
- **Edge Deployment** - Vercel Platform with optimized edge functions
- **Type Safety** - Full TypeScript integration across all layers
- **Security Architecture** - Supabase Auth with Row Level Security (RLS)

### Architectural Principles
1. **Clean Architecture** - Separation of concerns with clear boundaries
2. **Domain-Driven Design** - Business logic organized by domain
3. **SOLID Principles** - As enforced by `AI_CODING_STANDARDS.MD`
4. **Database-First Design** - Schema-driven development approach

## System Architecture

### Layered Architecture Pattern
**Four-Layer Structure:**
- **Presentation:** Server/Client Components, Route Groups, Layouts (`src/app/`, `src/components/`)
- **Application:** Server Actions, API Routes, Middleware, Services (`src/lib/`, `src/app/api/`)
- **Domain:** Entities, Value Objects, Domain Services, Repository Interfaces (`src/lib/domain/`, `src/types/`)
- **Infrastructure:** Database Clients, External APIs, Repository Implementations (`src/lib/supabase/`, `src/lib/external/`)

### Database Architecture
**Core Decisions:**
- **Row Level Security (RLS)** for access control
- **Normalized Schema** with performance-focused denormalization
- **Audit Trails** and soft deletes for data integrity
- **Real-time Subscriptions** for live updates

**Schema Organization:**
- Core business tables (users, profiles, organizations)
- Audit and system tables (logs, feature flags)  
- Real-time event tables for subscriptions

### Authentication Architecture
**Strategy:** Supabase Auth with Server-Side Rendering
- **Server Components:** `@supabase/ssr` for SSR-compatible auth
- **Client Components:** `@supabase/supabase-js` for interactive auth
- **Middleware:** Route protection and token refresh
- **Access Control:** Role-Based Access Control via RLS policies

### Data Flow Strategy
**Server-First Pattern:**
- Server Components handle initial data fetching
- Client Components manage user interactions  
- Server Actions process mutations
- Real-time subscriptions for live updates

## Architectural Decision Trees

### Component Architecture Decision
```
Need to display data?
├── Yes → Is data user-specific?
│   ├── Yes → Is it interactive?
│   │   ├── Yes → Client Component (useState, useEffect)
│   │   └── No → Server Component (async fetch)
│   └── No → Server Component (static data)
└── No → Utility function or Server Action
```

### Data Fetching Architecture Decision  
```
Need to fetch data?
├── Initial Load → Server Component
├── User Interaction → useTransition + Server Action
├── Real-time Updates → Client Component + Supabase subscription
└── Background Updates → Server Action + revalidatePath
```

### Authentication Architecture Decision
```
Need authentication?
├── Route Protection → Middleware (auth check)
├── Server-side Auth → createSupabaseServer() 
├── Client-side Auth → createSupabaseClient()
└── API Route Auth → Request header validation
```

### Database Access Decision
```
Need database access?
├── Read Operations → Repository pattern (interface abstraction)
├── Write Operations → Server Actions with validation
├── Real-time Data → Supabase subscriptions
└── Complex Queries → Database functions with RLS
```

## Performance Architecture

**Core Strategy:** Server-First with Strategic Client Hydration
- **Static Generation:** Pre-render at build time where possible
- **Server Components:** Reduce client-side JavaScript bundle
- **Partial Prerendering (PPR):** Hybrid static/dynamic rendering
- **Edge Caching:** Vercel CDN for global distribution

**Caching Layers:**
- **Browser Cache:** Static assets and API responses
- **CDN Cache:** Global edge distribution
- **Database Cache:** Connection pooling and query optimization
- **Application Cache:** Next.js Data Cache with revalidation

## Integration Architecture

### Service Integration Strategy
**External Service Patterns:**
- **Database:** Single Supabase instance with connection pooling
- **Deployment:** Vercel Edge Functions for global distribution
- **Authentication:** Supabase Auth with JWT token validation
- **Real-time:** WebSocket connections via Supabase subscriptions

### API Architecture
**Layered API Strategy:**
- **Route Handlers:** NextJS App Router API routes
- **Server Actions:** Form submissions and mutations
- **Database Functions:** Complex queries with RLS
- **Real-time Channels:** Supabase subscription management

## Security Architecture

### Security Decision Tree
```
Need to protect resource?
├── Database Access → Row Level Security (RLS)
├── API Endpoint → JWT validation + role check
├── Route Access → Middleware authentication
└── Client Data → Server-side validation
```

### Access Control Strategy
**Multi-Layer Security:**
- **Network:** HTTPS encryption, CORS policies
- **Application:** Middleware authentication, input validation
- **Database:** RLS policies, prepared statements
- **Client:** Secure token storage, XSS protection

## System Scalability Patterns

### Horizontal Scaling Strategy
**Distributed Architecture:**
- **Compute:** Vercel Edge Functions (auto-scaling)
- **Database:** Supabase connection pooling
- **Storage:** CDN-distributed static assets
- **Sessions:** Stateless JWT authentication

### Vertical Scaling Optimizations
**Performance Patterns:**
- **Bundle Optimization:** Server Components reduce client JS
- **Database Optimization:** Indexed queries with connection pooling  
- **Rendering Optimization:** PPR for hybrid static/dynamic content
- **Caching Optimization:** Multi-layer cache hierarchy

## Architectural Decision Trees

### Server vs Client Components
```
Need data fetching?
├── Yes → Interactive features required?
│   ├── Yes → Client Component (with useEffect)
│   └── No → Server Component
└── No → Interactive features required?
    ├── Yes → Client Component
    └── No → Server Component
```

### Real-time Subscriptions
```
Data changes frequently AND multiple users need updates?
├── Yes → Implement real-time subscription
└── No → Use standard caching with revalidation
```

## Compliance Checklist

**Essential Architecture Requirements:**
- [ ] Clean Architecture principles maintained
- [ ] Domain boundaries clearly defined  
- [ ] Supabase RLS policies implemented
- [ ] Authentication flows secure
- [ ] Performance optimizations applied
- [ ] Error handling comprehensive

---

**Implementation Details:** Code examples and detailed configurations are available in AI_CODE_EXAMPLES.MD and AI_CONFIGURATION_REFERENCE.MD.
## Architecture Compliance Framework

### System Design Principles
**Clean Architecture Adherence:**
- **Dependency Inversion:** High-level modules independent of low-level details
- **Interface Segregation:** Client-specific interfaces over general-purpose ones  
- **Single Responsibility:** Each layer focused on specific concerns
- **Domain Isolation:** Business logic separated from infrastructure concerns

### Quality Gates
**Pre-Implementation Checklist:**
- [ ] Architecture aligns with layered design patterns
- [ ] Domain boundaries clearly defined and respected
- [ ] Security patterns implemented (RLS, JWT validation)
- [ ] Performance patterns applied (caching, PPR, Server Components)
- [ ] Real-time capabilities utilized appropriately

**Production Readiness Checklist:**
- [ ] Security measures fully implemented
- [ ] Performance targets achieved  
- [ ] Monitoring and observability configured
- [ ] Database migrations tested
- [ ] Backup and recovery procedures established

### System Boundaries
**Core System Components:**
- **Frontend:** Next.js App Router with React Server Components
- **Backend:** Supabase PostgreSQL with Row Level Security
- **Infrastructure:** Vercel Edge Functions and CDN
- **Authentication:** Supabase Auth with JWT tokens
- **Real-time:** WebSocket subscriptions via Supabase

---

## See Also

### 🏗️ **Implementation Foundations**
- **AI_CODING_STANDARDS.MD** - Code patterns that implement architectural decisions
- **AI_NEXTJS_FRAMEWORK.MD** - Framework-specific architectural patterns and optimizations
- **AI_PROJECT_SETUP.MD** - Infrastructure setup supporting this architecture

### 🧪 **Quality Assurance**
- **AI_TESTING.MD** - Testing strategies for architectural components
- **AI_CODE_EXAMPLES.MD** - Architectural patterns and implementation examples

### 🗂️ **Organization and Structure**
- **AI_FILESYSTEM.MD** - File organization reflecting architectural boundaries
- **AI_FEATURE_DEVELOPMENT.MD** - Applying architectural principles during development

### 🔧 **Configuration and Environment**
- **AI_CONFIGURATION_REFERENCE.MD** - System configurations supporting architecture
- **AI_ENVIRONMENT.MD** - Development environment for architectural development

### ⚡ **Daily Reference**
- **AI_QUICK_REFERENCE.MD** - Architecture decision checklists and troubleshooting

### 🗂️ **Navigation**
- **AI_ALL_IN_ONE.MD** - Master index of all documentation

**Implementation Details:** Specific code patterns, configurations, and examples are documented in:
- `AI_CODE_EXAMPLES.MD` - Code patterns and implementation examples
- `AI_CONFIGURATION_REFERENCE.MD` - Environment and service configurations  
- `AI_NEXTJS_FRAMEWORK.MD` - Framework-specific architectural patterns

# AI Next.js Framework Instructions

This document contains Next.js implementation guidelines prioritized by project relevance. **Focus on Essential features first, then Important and Advanced features as needed.**

## Framework Requirements

- **Next.js**: 15.4.5 (App Router only)
- **React**: 19.1.0 with Server Components
- **TypeScript**: Full integration required

**See ../core-setup/AI_PROJECT_SETUP.MD for complete version requirements and setup.**

## Essential Features (Implement First)

### 🔴 Core App Router Architecture
- **App Router** - Use `app/` directory exclusively
- **Server Components** - Default choice for all components
- **Client Components** - Only when interactivity needed (`'use client'`)
- **Dynamic Routes** - `[param]` and `[...slug]` patterns
- **Route Handlers** - API routes using `route.ts` files

### 🔴 Data Fetching & Rendering
- **Server-Side Data Fetching** - Use `fetch` in Server Components
- **Server Actions** - Form handling and mutations
- **Streaming with Suspense** - Progressive loading
- **Static Generation** - `generateStaticParams` for static routes

### 🔴 Performance Optimization
- **Image Optimization** - Use `next/image` exclusively
- **Font Optimization** - Implement `next/font`
- **Data Cache** - Leverage Next.js caching with `revalidate`

## Important Features (Implement During Development)

### 🟡 Advanced Routing
- **Route Groups** - `(group-name)` for organization
- **Parallel Routes** - `@slot` folders for simultaneous rendering
- **Intercepting Routes** - `(.)` syntax for modals

### 🟡 Metadata & SEO
- **Metadata API** - Dynamic metadata with `generateMetadata`
- **Open Graph** - Comprehensive OG tags
- **Sitemap Generation** - Dynamic sitemaps

### 🟡 Middleware & Edge
- **Middleware** - Request/response manipulation
- **Edge Runtime** - For applicable API routes
- **Authentication** - Handle auth at middleware level

## Advanced Features (Implement As Needed)

### 🟢 Performance & Optimization
- **Partial Prerendering (PPR)** - Hybrid static/dynamic rendering  
- **Incremental Static Regeneration (ISR)** - Content updates
- **Bundle Analyzer** - Optimize bundle sizes
- **Web Vitals** - Monitor Core Web Vitals

### 🟢 Developer Experience
- **Error Boundaries** - `error.tsx` files
- **Loading UI** - `loading.tsx` files
- **Not Found Pages** - Custom `not-found.tsx`

### 🟢 Specialized Features
- **Internationalization (i18n)** - Multi-language support
- **Service Workers** - PWA capabilities
- **WebAssembly** - WASM integration
- Implement proper caching strategies with `next: { revalidate }` 
- Use Server Actions for form submissions and mutations
- Leverage Suspense boundaries for loading states

### 3. Routing Implementation
- Structure routes using App Router conventions
- Implement proper loading and error states
- Use dynamic routes with proper TypeScript typing
- Leverage parallel and intercepting routes when beneficial

### 4. Performance Optimization
- Always use `next/image` for images with proper sizing
- Implement lazy loading for non-critical components  
## Decision Flowcharts

### Server vs Client Components
```
Does component need interactivity (state, events, browser APIs)?
├── Yes → Use Client Component ('use client')
└── No → Use Server Component (default)
```

### Data Fetching Strategy  
```
How often does data change?
├── Never/Rarely → Static Generation (generateStaticParams)
├── Hourly/Daily → ISR with revalidate
├── Real-time → Server Components with fresh data
└── User-specific → Server Actions or Client-side fetching
```

### Routing Architecture
```
Need complex layout sharing?
├── Yes → Consider Route Groups (group-name)
├── Modal-like behavior → Intercepting Routes (.)
├── Simultaneous views → Parallel Routes @slot
└── Simple paths → Standard routing
```

## Implementation Best Practices

- Default to Server Components for all new components
- Add `'use client'` only when interactivity is needed
- Use `next/image` exclusively for all images
- Implement Server Actions for form mutations  
- Add `loading.tsx` and `error.tsx` files for better UX
- Use `fetch` with Next.js caching extensions
- Generate metadata dynamically with `generateMetadata`

## Prohibited Practices

**NEVER do the following:**
- Use Pages Router (`pages/` directory)
- Use `<img>` tags instead of `next/image`
- Create unnecessary Client Components
- Skip Suspense boundaries for async operations
- Ignore Next.js caching opportunities

## Configuration Requirements

**See ../references/AI_CONFIGURATION_REFERENCE.MD for complete next.config.ts setup.**

## Performance Targets

- **First Contentful Paint (FCP)**: < 1.5s
- **Largest Contentful Paint (LCP)**: < 2.5s  
- **Cumulative Layout Shift (CLS)**: < 0.1
- **Time to Interactive (TTI)**: < 3.5s

---

## See Also

### 🏗️ **Architectural Context**
- **AI_ARCHITECTURE.MD** - System architecture and Next.js integration patterns
- **AI_PROJECT_SETUP.MD** - Next.js project configuration and initial setup
- **AI_CODING_STANDARDS.MD** - Code quality standards applied to Next.js development

### 🧪 **Testing and Quality**
- **AI_TESTING.MD** - Next.js specific testing patterns and strategies
- **AI_CODE_EXAMPLES.MD** - Complete Next.js implementation examples

### 🗂️ **Organization**
- **AI_FILESYSTEM.MD** - Next.js App Router file organization patterns
- **AI_FEATURE_DEVELOPMENT.MD** - Applying Next.js patterns during feature development

### 🔧 **Configuration and Setup**
- **AI_CONFIGURATION_REFERENCE.MD** - Complete next.config.ts and related configurations
- **AI_ENVIRONMENT.MD** - Next.js development environment and tooling setup

### ⚡ **Daily Reference**
- **AI_QUICK_REFERENCE.MD** - Next.js development checklists and troubleshooting

### 🗂️ **Navigation**
- **AI_ALL_IN_ONE.MD** - Master index of all documentation

**Implementation Details**: Complete Next.js patterns and examples are available in AI_CODE_EXAMPLES.MD.

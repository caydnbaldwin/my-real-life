# AI Filesystem Structure Instructions

This document defines the established filesystem structure for this Next.js project. **All AI agents must strictly adhere to this structure and follow the architectural principles outlined in `AI_NEXTJS_FRAMEWORK.MD`.**

## Current Filesystem Structure

The project follows this exact filesystem organization:

```
my-real-life/
├── .gitignore                  # Git ignore patterns
├── .next/                      # Next.js build output (auto-generated)
├── doc/                        # AI instruction documentation
│   ├── AI_ALL_IN_ONE.MD       # Master AI instruction index
│   ├── AI_INITIAL_PROMPT.MD   # Initial prompt instructions
│   ├── AI_NEXTJS_FRAMEWORK.MD # Next.js framework guidelines
│   └── AI_FILESYSTEM.MD       # This file
├── next-env.d.ts              # Next.js TypeScript declarations
├── next.config.ts             # Next.js configuration
├── node_modules/              # Dependencies (auto-generated)
├── package.json               # Project dependencies and scripts
├── pnpm-lock.yaml            # Package manager lock file
├── postcss.config.mjs        # PostCSS configuration
├── public/                    # Static assets
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── README.md                  # Project documentation
├── src/                       # Source code directory
│   └── app/                   # Next.js App Router directory
│       ├── favicon.ico        # Application favicon
│       ├── globals.css        # Global CSS styles
│       ├── layout.tsx         # Root layout component
│       └── page.tsx           # Home page component
└── tsconfig.json             # TypeScript configuration
```

## File Placement Decision Flowchart

### "Where Does This File Belong?" Decision Tree
```
Need to add a new file?
├── Is it a page/route?
│   ├── Yes → src/app/ (follow App Router conventions)
│   │   ├── API endpoint? → src/app/api/[name]/route.ts
│   │   ├── Page component? → src/app/[route]/page.tsx
│   │   ├── Layout component? → src/app/[route]/layout.tsx
│   │   └── Loading/Error UI? → src/app/[route]/(loading|error).tsx
│   └── No → Continue below
├── Is it a reusable component?
│   ├── Yes → src/components/
│   │   ├── UI component? → src/components/ui/
│   │   ├── Form component? → src/components/forms/
│   │   ├── Layout component? → src/components/layout/
│   │   └── Feature component? → src/components/features/
│   └── No → Continue below
├── Is it a utility/helper?
│   ├── Yes → src/lib/
│   │   ├── Authentication? → src/lib/auth.ts
│   │   ├── Database? → src/lib/db.ts
│   │   ├── Validation? → src/lib/validations.ts
│   │   └── General utility? → src/lib/utils.ts
│   └── No → Continue below
├── Is it a custom hook?
│   ├── Yes → src/hooks/
│   └── No → Continue below
├── Is it a type definition?
│   ├── Yes → src/types/
│   │   ├── API types? → src/types/api.ts
│   │   └── Global types? → src/types/global.d.ts
│   └── No → Continue below
├── Is it styling/CSS?
│   ├── Yes → src/styles/ or src/app/globals.css
│   └── No → Continue below
├── Is it a constant/config?
│   ├── Yes → src/constants/
│   └── No → Continue below
├── Is it a static asset?
│   ├── Yes → public/ (images, icons, etc.)
│   └── No → Continue below
├── Is it project configuration?
│   ├── Yes → Project root (next.config.ts, package.json, etc.)
│   └── No → Continue below
└── Is it documentation?
    ├── Yes → doc/ (AI instructions)
    └── No → Consult AI_NEXTJS_FRAMEWORK.MD for guidance
```

## Filesystem Architecture Principles

### Core Directory Rules

**Essential Structure:**
1. **Source Code**: All application code in `src/`
2. **App Router**: Use `src/app/` for Next.js routing
3. **Static Assets**: Place in `public/`
4. **Documentation**: Maintain in `doc/`
5. **Configuration**: Keep in project root

### Directory Structure Template

When adding new functionality, follow this structure within `src/`:

```
src/
├── app/                        # Next.js App Router (MANDATORY)
│   ├── (auth)/                # Route groups for authentication
│   ├── (dashboard)/           # Route groups for dashboard
│   ├── api/                   # API route handlers
│   │   └── route.ts           # API endpoints
│   ├── globals.css            # Global styles
│   ├── layout.tsx             # Root layout
│   ├── loading.tsx            # Global loading UI
│   ├── error.tsx              # Global error UI
│   ├── not-found.tsx          # 404 page
│   └── page.tsx               # Home page
├── components/                 # Reusable UI components
│   ├── ui/                    # Base UI components
│   ├── forms/                 # Form components
│   ├── layout/                # Layout components
│   └── features/              # Feature-specific components
├── lib/                       # Utility libraries and configurations
│   ├── auth.ts                # Authentication utilities
│   ├── db.ts                  # Database configuration
│   ├── utils.ts               # General utilities
│   └── validations.ts         # Schema validations
├── hooks/                     # Custom React hooks
├── types/                     # TypeScript type definitions
│   ├── global.d.ts            # Global type declarations
│   └── api.ts                 # API response types
├── styles/                    # Additional CSS/styling files
└── constants/                 # Application constants
```

## File Naming Standards

### Component Files
- **React Components**: PascalCase (`UserProfile.tsx`)
- **Pages/Layouts**: lowercase (`page.tsx`, `layout.tsx`)
- **API Routes**: lowercase (`route.ts`)

### Directory Names  
- **Route Segments**: lowercase with hyphens (`user-profile/`)
- **Route Groups**: parentheses with lowercase (`(auth)/`)
- **Component Directories**: lowercase (`components/`, `hooks/`)

### Utility Files
- **TypeScript**: camelCase (`userUtils.ts`)
- **Configuration**: kebab-case (`next.config.ts`)
- **Styles**: kebab-case (`globals.css`)

## App Router Integration

**Reference**: See `AI_NEXTJS_FRAMEWORK.MD` for complete implementation details.

### Structure Requirements
1. **Use `src/app/` exclusively** (No Pages Router)
2. **Follow route hierarchy** with proper conventions
3. **Include loading/error boundaries** (`loading.tsx`, `error.tsx`)
4. **Organize with route groups** when beneficial
5. **Implement API routes** using `app/api/*/route.ts`

### Component Organization
1. **Default to Server Components**
2. **Mark Client Components** with `'use client'`
3. **Follow Next.js patterns**
4. **Store reusables** in `src/components/`

## File Addition Guidelines

### New File Placement Process

1. **Use Decision Tree Above** to determine correct location
2. **Follow naming conventions** for appropriate case/extensions
3. **Maintain App Router patterns** per `AI_NEXTJS_FRAMEWORK.MD`
4. **Include support files** (`loading.tsx`, `error.tsx`, types)

### Prohibited Actions
- Creating files outside established structure
- Using Pages Router (`pages/` directory)
- Random component placement
- Skipping TypeScript definitions
- Ignoring Next.js conventions

## Quick Reference Checklist

**Before adding files:**
- [ ] Location follows established structure
- [ ] Naming convention correct
- [ ] App Router patterns followed
- [ ] TypeScript types included
- [ ] Error/loading states considered

---

## See Also

### 🏗️ **Framework Integration**
- **AI_NEXTJS_FRAMEWORK.MD** - App Router patterns and Next.js file conventions
- **AI_ARCHITECTURE.MD** - How file structure reflects system architecture
- **AI_PROJECT_SETUP.MD** - Initial directory structure creation

### 🛠️ **Implementation Support**
- **AI_CODING_STANDARDS.MD** - Code organization standards within files
- **AI_TESTING.MD** - Test file placement and organization patterns
- **AI_FEATURE_DEVELOPMENT.MD** - File structure decisions during feature development

### 📋 **References and Examples**
- **AI_CODE_EXAMPLES.MD** - Code organization examples and patterns
- **AI_CONFIGURATION_REFERENCE.MD** - Configuration file templates and placement

### ⚡ **Quick Access**
- **AI_QUICK_REFERENCE.MD** - File placement decision tree and daily workflow
- **AI_ENVIRONMENT.MD** - IDE configuration for file navigation and organization

### 🗂️ **Navigation**
- **AI_ALL_IN_ONE.MD** - Master index of all documentation

**Integration**: This structure works with `AI_NEXTJS_FRAMEWORK.MD` to ensure consistent, optimized Next.js architecture. Strict adherence required for all filesystem operations.

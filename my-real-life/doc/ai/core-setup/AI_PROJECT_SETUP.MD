# AI Project Setup Instructions

This document contains **MANDATORY** project initialization, dependencies, and configuration guidelines for AI agents working on this Next.js project. **All project setup must strictly follow these specifications.**

## Project Overview

**Project Name:** my-real-life  
**Framework:** Next.js 15.4.5 with React 19.1.0  
**Language:** TypeScript with strict configuration  
**Styling:** Tailwind CSS v4 with PostCSS  
**Database:** Supabase PostgreSQL  
**Deployment:** Vercel Platform  
**Package Manager:** pnpm (evidenced by pnpm-lock.yaml)  
**Architecture:** App Router with src/ directory structure  

## Core Technology Stack

### Framework Dependencies
```json
{
  "next": "15.4.5",           // Latest Next.js with App Router
  "react": "19.1.0",          // Latest React with concurrent features
  "react-dom": "19.1.0"       // Latest React DOM
}
```

### Development Dependencies
```json
{
  "typescript": "^5",                    // Latest TypeScript
  "@types/node": "^20",                  // Node.js type definitions
  "@types/react": "^19",                 // React type definitions
  "@types/react-dom": "^19",             // React DOM type definitions
  "@tailwindcss/postcss": "^4",          // Tailwind CSS PostCSS plugin
  "tailwindcss": "^4"                    // Latest Tailwind CSS
}
```

### Database & Deployment Dependencies
```json
{
  "@supabase/supabase-js": "^2",         // Supabase JavaScript client
  "@supabase/ssr": "^0.5.1",            // Supabase SSR utilities for Next.js
  "@vercel/analytics": "^1",             // Vercel Analytics integration
  "@vercel/speed-insights": "^1"         // Vercel Speed Insights
}
```

## Configuration File Standards

### 1. Next.js Configuration (next.config.ts)
```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    ppr: true,
    serverActions: { bodySizeLimit: '2mb' },
    optimizePackageImports: ['lucide-react', '@heroicons/react']
  },
  images: {
    formats: ['image/webp', 'image/avif'],
    remotePatterns: [/* Configure as needed */]
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production'
  },
  async headers() {
    return [{
      source: '/(.*)',
      headers: [
        { key: 'X-Frame-Options', value: 'DENY' },
        { key: 'X-Content-Type-Options', value: 'nosniff' }
      ]
    }];
  }
};
export default nextConfig;
```
```

### 2. TypeScript Configuration (tsconfig.json)
```jsonc
{
  "compilerOptions": {
    "target": "ES2017",
    "strict": true,
    "noEmit": true,
    "moduleResolution": "bundler",
    "paths": { "@/*": ["./src/*"] },
    "plugins": [{ "name": "next" }]
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"]
}
```

### 3. PostCSS Configuration (postcss.config.mjs)
```javascript
const config = { plugins: ["@tailwindcss/postcss"] };
export default config;
```

### 4. Package.json Scripts
```json
{
  "scripts": {
    "dev": "next dev --turbopack",
    "build": "next build",
    "start": "next start", 
    "lint": "next lint",
    "type-check": "tsc --noEmit",
    "test": "jest",
    "test:watch": "jest --watch",
    "test:e2e": "cypress run",
    "cypress:open": "cypress open"
  }
}
```

## Project Initialization

### 1. Dependencies Installation

```bash
# Core dependencies
pnpm add @supabase/supabase-js @supabase/ssr
pnpm add @vercel/analytics @vercel/speed-insights

# Testing dependencies (see ../development-standards/AI_TESTING.MD for strategy) 
pnpm add -D jest @testing-library/react @testing-library/jest-dom
pnpm add -D cypress @next/jest jest-environment-jsdom

# Development tools
pnpm add -D eslint-config-next prettier

### 2. Essential Configuration Files

**jest.config.js:**
```javascript
const nextJest = require('next/jest');
module.exports = nextJest({ dir: './' })({
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jsdom',
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}', '!src/**/*.d.ts'],
  coverageThreshold: { global: { branches: 80, functions: 80, lines: 80, statements: 80 } }
});
```

**jest.setup.js:** `import '@testing-library/jest-dom';`

**cypress.config.ts:**
```typescript
import { defineConfig } from 'cypress';
export default defineConfig({
  e2e: { baseUrl: 'http://localhost:3000' },
  component: { devServer: { framework: 'next', bundler: 'webpack' } }
});
```

**tailwind.config.ts:**
```typescript
import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: { extend: {} },
  plugins: []
} satisfies Config;
```

## Directory Structure Setup

**See ../implementation-guides/AI_FILESYSTEM.MD for complete directory structure requirements.**

**Quick Setup Commands:**
```bash
# Essential directories (see ../implementation-guides/AI_FILESYSTEM.MD for complete structure)
mkdir -p src/{components,lib,hooks,types,constants,styles}
mkdir -p src/components/{ui,forms,layout,features}
mkdir -p src/lib/{supabase,database,auth}
mkdir -p src/app/{api,(auth),(dashboard)}
mkdir -p supabase/{migrations,functions}
```

## Environment Variables

Create `.env.local`:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_KEY=your_supabase_service_key
```

## Verification Checklist

- [ ] All dependencies installed via pnpm
- [ ] Configuration files created (next.config.ts, tsconfig.json, etc.)
- [ ] Directory structure matches AI_FILESYSTEM.MD
- [ ] Environment variables configured
- [ ] Development server starts with `pnpm dev`
- [ ] Tests run with `pnpm test`

---

## See Also

### 📚 **Next Reading Steps**
- **AI_CODING_STANDARDS.MD** - Learn code quality standards and SOLID principles
- **AI_TESTING.MD** - Understand TDD approach and testing requirements
- **AI_ARCHITECTURE.MD** - Review system architecture and design decisions

### 🔗 **Related Documentation**
- **AI_FILESYSTEM.MD** - Detailed file organization patterns and decision trees
- **AI_CONFIGURATION_REFERENCE.MD** - Complete configuration file templates
- **AI_ENVIRONMENT.MD** - IDE setup and development environment configuration
- **AI_NEXTJS_FRAMEWORK.MD** - Framework-specific implementation patterns

### ⚡ **Quick References**
- **AI_QUICK_REFERENCE.MD** - Development workflow checklists and troubleshooting
- **AI_CODE_EXAMPLES.MD** - Implementation examples and code patterns

### 🗂️ **Navigation**
- **AI_ALL_IN_ONE.MD** - Master index of all documentation
- **AI_FEATURE_DEVELOPMENT.MD** - Feature planning and development workflow

**Next Steps**: Follow AI_CODING_STANDARDS.MD for code implementation and AI_TESTING.MD for TDD approach.

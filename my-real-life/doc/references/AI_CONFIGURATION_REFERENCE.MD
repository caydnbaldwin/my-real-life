# AI Configuration Reference

This document provides a single source of truth for all configuration files and templates used in the project.

## Core Configuration Files

### next.config.ts
```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    ppr: true,                              // Partial Prerendering
    serverActions: { bodySizeLimit: '2mb' }, // Server Actions optimization
    optimizePackageImports: [                // Bundle optimization
      'lucide-react',
      '@heroicons/react',
      'date-fns'
    ]
  },
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      // Configure based on external image sources
      // Example:
      // {
      //   protocol: 'https',
      //   hostname: 'example.com',
      //   port: '',
      //   pathname: '/images/**',
      // }
    ]
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production'
  },
  async headers() {
    return [{
      source: '/(.*)',
      headers: [
        { key: 'X-Frame-Options', value: 'DENY' },
        { key: 'X-Content-Type-Options', value: 'nosniff' },
        { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' }
      ]
    }];
  }
};

export default nextConfig;
```

### tsconfig.json
```jsonc
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "es6"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts"
  ],
  "exclude": ["node_modules"]
}
```

### tailwind.config.ts
```typescript
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Custom color palette
        primary: {
          50: '#eff6ff',
          500: '#3b82f6',
          900: '#1e3a8a',
        },
        // Add more custom colors as needed
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        // Add custom fonts
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        // Add custom spacing
      }
    },
  },
  plugins: [
    // Add Tailwind plugins as needed
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/typography'),
  ],
};

export default config;
```

### postcss.config.mjs
```javascript
const config = {
  plugins: ["@tailwindcss/postcss"],
};

export default config;
```

## Testing Configuration

### jest.config.js
```javascript
const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jsdom',
  moduleNameMapping: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.d.ts',
    '!src/**/*.stories.{js,jsx,ts,tsx}',
    '!src/app/layout.tsx',
    '!src/app/globals.css',
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  testMatch: [
    '**/__tests__/**/*.(js|jsx|ts|tsx)',
    '**/*.(test|spec).(js|jsx|ts|tsx)'
  ],
};

module.exports = createJestConfig(customJestConfig);
```

### jest.setup.js
```javascript
import '@testing-library/jest-dom';

// Global test setup
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
};

// Mock Next.js router
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn(),
    prefetch: jest.fn(),
    back: jest.fn(),
  }),
  useSearchParams: () => ({
    get: jest.fn(),
  }),
}));
```

### cypress.config.ts
```typescript
import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: 'cypress/support/e2e.ts',
  },
  component: {
    devServer: {
      framework: 'next',
      bundler: 'webpack',
    },
    specPattern: 'src/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: 'cypress/support/component.ts',
  },
  video: false,
  screenshot: false,
  viewportWidth: 1280,
  viewportHeight: 720,
});
```

## Environment Variables

### .env.local Template
```bash
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# Database URLs (automatically provided by Supabase)
DATABASE_URL=postgresql://postgres:[password]@db.[ref].supabase.co:5432/postgres
DIRECT_URL=postgresql://postgres:[password]@db.[ref].supabase.co:5432/postgres

# Authentication
NEXT_PUBLIC_SUPABASE_AUTH_REDIRECT_TO=http://localhost:3000/auth/callback

# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Vercel Analytics (optional for development)
NEXT_PUBLIC_VERCEL_ANALYTICS_ID=your_analytics_id

# Development
NODE_ENV=development
```

### .env.example Template
```bash
# Copy this to .env.local and fill in your actual values

# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=

# Database URLs (get from Supabase dashboard)
DATABASE_URL=
DIRECT_URL=

# Authentication
NEXT_PUBLIC_SUPABASE_AUTH_REDIRECT_TO=http://localhost:3000/auth/callback

# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Vercel Analytics (optional)
NEXT_PUBLIC_VERCEL_ANALYTICS_ID=

# Development
NODE_ENV=development
```

## Package.json Scripts Template
```json
{
  "scripts": {
    "dev": "next dev --turbopack",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "lint:fix": "next lint --fix",
    "type-check": "tsc --noEmit",
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage",
    "test:e2e": "cypress run",
    "test:e2e:open": "cypress open",
    "build:analyze": "ANALYZE=true npm run build",
    "clean": "rm -rf .next out node_modules/.cache"
  }
}
```

## Supabase Configuration

### Database Client Setup
```typescript
// lib/supabase/client.ts
import { createBrowserClient } from '@supabase/ssr';

export const createSupabaseClient = () =>
  createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
```

### Server-side Client Setup
```typescript
// lib/supabase/server.ts
import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';

export const createSupabaseServer = () => {
  const cookieStore = cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            );
          } catch {
            // The `setAll` method was called from a Server Component.
            // This can be ignored if you have middleware refreshing
            // user sessions.
          }
        },
      },
    }
  );
};
```

## Deployment Configuration

### vercel.json
```json
{
  "buildCommand": "pnpm run build",
  "devCommand": "pnpm run dev",
  "installCommand": "pnpm install",
  "framework": "nextjs",
  "outputDirectory": ".next",
  "regions": ["iad1"],
  "functions": {
    "src/app/api/**/*.ts": {
      "runtime": "nodejs20.x"
    }
  },
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        }
      ]
    }
  ]
}
```

### .gitignore Template
```gitignore
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.js
.yarn/install-state.gz

# testing
/coverage
/cypress/downloads
/cypress/screenshots
/cypress/videos

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# local env files
.env*.local
.env
.env.development
.env.production

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts

# IDEs
.vscode/
.idea/
*.swp
*.swo

# OS
Thumbs.db
.DS_Store

# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*
```

---

## See Also

### 🏗️ **Setup and Architecture**
- **AI_PROJECT_SETUP.MD** - How to implement these configurations during project setup
- **AI_ARCHITECTURE.MD** - Architectural decisions reflected in these configurations
- **AI_ENVIRONMENT.MD** - Development environment setup using these configurations

### 🛠️ **Implementation Context**
- **AI_NEXTJS_FRAMEWORK.MD** - Next.js specific configuration patterns and optimizations
- **AI_CODING_STANDARDS.MD** - Code quality configurations (ESLint, Prettier, TypeScript)
- **AI_TESTING.MD** - Testing configurations and setup templates

### 📋 **Usage and Examples**
- **AI_CODE_EXAMPLES.MD** - Code that works with these configurations
- **AI_FILESYSTEM.MD** - File placement for configuration files

### ⚡ **Daily Reference**
- **AI_QUICK_REFERENCE.MD** - Quick troubleshooting for configuration issues
- **AI_FEATURE_DEVELOPMENT.MD** - Configuration considerations during feature development

### 🗂️ **Navigation**
- **AI_ALL_IN_ONE.MD** - Master index of all documentation

**Usage Note**: These configurations are the authoritative templates for the project. Always refer to this file when setting up new environments or updating existing configurations.

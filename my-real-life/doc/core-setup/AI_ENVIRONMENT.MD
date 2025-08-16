# AI Development Environment Setup

This document provides complete instructions for setting up the optimal development environment for this Next.js project with Supabase integration.

## Required Software Installation

### Core Development Tools

#### 1. Node.js and Package Manager
```bash
# Install Node.js (LTS version - currently 20.x)
# Download from: https://nodejs.org/
node --version  # Should be 20.x or higher

# Install pnpm (preferred package manager)
npm install -g pnpm
pnpm --version  # Should be 8.x or higher
```

#### 2. Git Version Control
```bash
# Install Git
# Windows: Download from https://git-scm.com/
# macOS: brew install git
# Linux: sudo apt install git

git --version  # Should be 2.x or higher
```

#### 3. Database Tools
- **Supabase CLI:** `npm install -g supabase`
- **PostgreSQL Client:** For direct database access (optional)

## IDE Configuration

### VS Code Setup (Recommended)

#### Essential Extensions
Install these extensions for optimal development experience:

```json
{
  "recommendations": [
    "ms-vscode.vscode-typescript-next",
    "bradlc.vscode-tailwindcss",
    "esbenp.prettier-vscode",
    "ms-vscode.vscode-eslint",
    "formulahendry.auto-rename-tag",
    "christian-kohler.path-intellisense",
    "ms-vscode.vscode-json",
    "ms-playwright.playwright",
    "supabase.supabase-vscode",
    "github.copilot"
  ]
}
```

#### VS Code Settings
Create `.vscode/settings.json` in project root:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.organizeImports": true
  },
  "typescript.preferences.importModuleSpecifier": "relative",
  "emmet.includeLanguages": {
    "javascript": "javascriptreact",
    "typescript": "typescriptreact"
  },
  "files.associations": {
    "*.css": "tailwindcss"
  },
  "tailwindCSS.experimental.classRegex": [
    ["cva\\(([^)]*)\\)", "[\"'`]([^\"'`]*).*?[\"'`]"],
    ["cx\\(([^)]*)\\)", "(?:'|\"|`)([^']*)(?:'|\"|`)"]
  ]
}
```

#### VS Code Tasks
Create `.vscode/tasks.json`:

```json
{
  "version": "2.0.0",
  "tasks": [
    {
      "type": "shell",
      "label": "pnpm dev",
      "command": "pnpm",
      "args": ["dev"],
      "group": "build",
      "presentation": {
        "echo": true,
        "reveal": "always",
        "focus": false,
        "panel": "shared"
      },
      "isBackground": true,
      "problemMatcher": []
    },
    {
      "type": "shell",
      "label": "pnpm build",
      "command": "pnpm",
      "args": ["build"],
      "group": {
        "kind": "build",
        "isDefault": true
      }
    },
    {
      "type": "shell",
      "label": "pnpm test",
      "command": "pnpm",
      "args": ["test"],
      "group": "test"
    }
  ]
}
```

### Alternative IDEs

#### WebStorm Configuration
- Enable TypeScript service
- Configure Prettier and ESLint
- Set up Node.js interpreter
- Configure run configurations for Next.js

#### Cursor (AI-powered)
- Same extension recommendations as VS Code
- Enable Copilot-style AI features
- Configure TypeScript and Tailwind support

## Git Configuration

### Global Git Setup
```bash
# Configure user information
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# Configure default branch
git config --global init.defaultBranch main

# Configure line endings (Windows)
git config --global core.autocrlf true
# Configure line endings (macOS/Linux)
git config --global core.autocrlf input
```

### Git Hooks and Workflows

#### Pre-commit Hooks (Recommended)
Install Husky for git hooks:

```bash
pnpm add -D husky lint-staged
npx husky install

# Create pre-commit hook
npx husky add .husky/pre-commit "npx lint-staged"
```

Add to `package.json`:
```json
{
  "lint-staged": {
    "*.{js,jsx,ts,tsx}": [
      "eslint --fix",
      "prettier --write"
    ],
    "*.{json,md,mdx}": [
      "prettier --write"
    ]
  }
}
```

#### Conventional Commits
Configure commit message linting:

```bash
pnpm add -D @commitlint/config-conventional @commitlint/cli

# Create commitlint.config.js
echo "module.exports = {extends: ['@commitlint/config-conventional']}" > commitlint.config.js

# Add commit-msg hook
npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'
```

## Development Server Setup

### Environment Configuration

#### 1. Environment Files Setup
```bash
# Copy environment template
cp .env.example .env.local

# Edit environment variables
# Use your preferred editor to configure:
# - NEXT_PUBLIC_SUPABASE_URL
# - NEXT_PUBLIC_SUPABASE_ANON_KEY  
# - SUPABASE_SERVICE_ROLE_KEY
# - DATABASE_URL (if using direct connection)
```

#### 2. Development Server Startup
```bash
# Install dependencies
pnpm install

# Generate database types (if using Supabase)
pnpm db:types

# Start development server
pnpm dev

# Verify setup at http://localhost:3000
```

### Database Development Setup

#### Supabase Local Development
```bash
# Login to Supabase CLI
supabase login

# Initialize local Supabase
supabase init

# Start local Supabase services
supabase start

# Link to remote project (optional)
supabase link --project-ref YOUR_PROJECT_REF
```

#### Database Tools
- **Supabase Dashboard:** Web-based management
- **pgAdmin:** GUI for PostgreSQL (if needed)
- **psql:** Command-line PostgreSQL client
- **VS Code PostgreSQL extension:** In-editor database access

## Browser Development Tools

### Recommended Browser Extensions

#### Chrome/Edge Extensions
- **React Developer Tools:** Debug React components
- **Redux DevTools:** State management debugging
- **Lighthouse:** Performance auditing
- **Web Vitals:** Core Web Vitals monitoring
- **JSON Formatter:** API response formatting

#### Browser Configuration
```javascript
// Enable React DevTools Profiler
if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
  window.__REACT_DEVTOOLS_GLOBAL_HOOK__?.onCommitFiberRoot = (id, root) => {
    // Custom profiling logic
  };
}
```

## Performance and Debugging Tools

### Development Monitoring

#### Bundle Analyzer
```bash
# Add bundle analyzer
pnpm add -D @next/bundle-analyzer

# Analyze bundle size
ANALYZE=true pnpm build
```

#### Performance Monitoring
```javascript
// next.config.ts - Add performance monitoring
const nextConfig = {
  experimental: {
    instrumentationHook: true,
  },
  // Enable webpack bundle analyzer
  webpack: (config, { isServer }) => {
    if (process.env.ANALYZE) {
      const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'static',
          reportFilename: isServer ? 'server.html' : 'client.html',
        })
      );
    }
    return config;
  },
};
```

### Debugging Configuration

#### VS Code Debugging
Create `.vscode/launch.json`:

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Next.js: debug server-side",
      "type": "node",
      "request": "attach",
      "port": 9229,
      "skipFiles": ["<node_internals>/**"]
    },
    {
      "name": "Next.js: debug client-side",
      "type": "pwa-chrome",
      "request": "launch",
      "url": "http://localhost:3000"
    },
    {
      "name": "Next.js: debug full stack",
      "type": "node",
      "request": "launch",
      "program": "${workspaceFolder}/node_modules/.bin/next",
      "args": ["dev"],
      "console": "integratedTerminal",
      "skipFiles": ["<node_internals>/**"]
    }
  ]
}
```

## Team Development Workflows

### Code Review Process
1. **Feature Branches:** Always work in feature branches
2. **Pull Requests:** Use PR templates for consistency
3. **Code Review:** Require reviews before merging
4. **CI/CD:** Automated testing and deployment

### Shared Development Practices
- **Consistent Formatting:** Prettier configuration shared
- **Linting Rules:** ESLint configuration enforced
- **Type Safety:** Strict TypeScript configuration
- **Testing Standards:** Consistent testing approaches

## Environment Verification Checklist

### ✅ Development Environment Ready
- [ ] Node.js 20.x or higher installed
- [ ] pnpm package manager installed
- [ ] Git configured with user information
- [ ] VS Code with recommended extensions
- [ ] Project dependencies installed (`pnpm install`)
- [ ] Environment variables configured (`.env.local`)
- [ ] Development server starts (`pnpm dev`)
- [ ] Build process works (`pnpm build`)
- [ ] Tests can run (`pnpm test`)
- [ ] Linting passes (`pnpm lint`)
- [ ] Database connection established
- [ ] Git hooks configured (optional but recommended)
- [ ] Browser developer tools ready

### 🔧 Troubleshooting Setup Issues

#### Node.js Version Issues
```bash
# Use nvm to manage Node.js versions
nvm install 20
nvm use 20
nvm alias default 20
```

#### Package Installation Issues
```bash
# Clear package cache
pnpm store prune

# Remove and reinstall
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

#### Environment Variable Issues
```bash
# Verify environment variables are loaded
pnpm dev --debug

# Check Next.js environment variable access
console.log(process.env.NEXT_PUBLIC_SUPABASE_URL);
```

---

## See Also

### 🚀 **Next Steps After Environment Setup**
- **AI_PROJECT_SETUP.MD** - Project-specific setup steps after environment is ready
- **AI_CONFIGURATION_REFERENCE.MD** - Configuration templates for your development environment
- **AI_QUICK_REFERENCE.MD** - Daily development workflow with your configured environment

### 🏗️ **Development Workflow Integration**
- **AI_CODING_STANDARDS.MD** - Code quality standards enforced by your IDE configuration
- **AI_TESTING.MD** - Testing setup and IDE integration for TDD workflow
- **AI_FEATURE_DEVELOPMENT.MD** - Feature development workflow using your environment

### 🛠️ **Framework and Architecture**
- **AI_NEXTJS_FRAMEWORK.MD** - Next.js development patterns in your configured environment
- **AI_ARCHITECTURE.MD** - System architecture development using your setup
- **AI_FILESYSTEM.MD** - File organization supported by your IDE configuration

### 📋 **Implementation Support**
- **AI_CODE_EXAMPLES.MD** - Code examples optimized for your development environment

### 🗂️ **Navigation**
- **AI_ALL_IN_ONE.MD** - Master index of all documentation

**Integration Note:** This environment setup works seamlessly with all AI instruction files. Once configured, follow `AI_PROJECT_SETUP.MD` for project-specific setup steps.

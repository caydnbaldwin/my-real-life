# AI All-in-One Instructions

This document serves as the master index for all AI agent instructions. **Read this file first, then use the Task-Based Reading Strategy below to determine which additional files to read based on your specific task complexity and requirements.**

## Directory Structure

The documentation is organized into four main categories:

```
doc/
├── AI_ALL_IN_ONE.MD (This file - Master Index)
├── core-setup/ (Essential for getting started)
│   ├── AI_PROJECT_SETUP.MD
│   └── AI_ENVIRONMENT.MD
├── development-standards/ (How to code)
│   ├── AI_CODING_STANDARDS.MD
│   ├── AI_ARCHITECTURE.MD
│   └── AI_TESTING.MD
├── implementation-guides/ (How to build)
│   ├── AI_NEXTJS_FRAMEWORK.MD
│   ├── AI_FILESYSTEM.MD
│   └── AI_FEATURE_DEVELOPMENT.MD
└── references/ (Detailed examples)
    ├── AI_CODE_EXAMPLES.MD
    ├── AI_CONFIGURATION_REFERENCE.MD
    └── AI_QUICK_REFERENCE.MD
```

## Documentation Hierarchy and Reading Order

### 🎯 **Primary Workflow (Start Here)**
1. **Always read this file first** (AI_ALL_IN_ONE.MD) - Contains master index and reading strategies
2. **Complete Context Restoration** - Follow the Session Initialization Protocol below  
3. **Use Task-Based Reading Strategy** - Load only the documentation needed for your specific task
4. **Apply Progressive Knowledge Loading** - Scale reading time from 5min to 60min based on complexity
5. **Self-Validate Before Submission** - Complete AI Agent Checklist in AI_QUICK_REFERENCE.MD

### 📚 **Reading Strategy Override**
**Important:** The Task-Based Reading Strategy below takes precedence over any "read all files" instructions. Only read additional files as determined by your specific task complexity and the Progressive Knowledge Loading levels.

## AI Agent Context Restoration

When starting a new session, follow this context restoration process:

### 🔄 **Session Initialization Protocol**
1. **Read this master file first** (AI_ALL_IN_ONE.MD) to understand the current documentation structure
2. **Check project current state** - Review recent commits, active branches, and development phase
3. **Assess task complexity** - Use the Task-Based Reading Strategy below to load relevant documentation
4. **Validate understanding** - Confirm comprehension of requirements before proceeding with implementation
5. **Establish context anchors** - Note key decisions, patterns, and constraints from previous sessions

### 📋 **Context Restoration Checklist**
Before beginning any development work:
- [ ] **Project Phase:** Identify current phase (setup/active development/maintenance/refactoring)
- [ ] **Active Branch:** Note current branch and any feature work in progress  
- [ ] **Last Completed Task:** Review recent commits and changes to understand context
- [ ] **Technology Stack:** Confirm current versions (Next.js 15.4.5, React 19.1.0, TypeScript, Supabase)
- [ ] **Key Constraints:** Identify any architectural decisions or patterns already established
- [ ] **Environment Status:** Verify which environment context is relevant (local/staging/production)

## Task-Based Reading Strategy

Optimize documentation reading based on task type and complexity:

### 🎯 **Smart Reading Strategy by Task Type**

#### **🔧 Bug Fix / Minor Change**
1. **AI_QUICK_REFERENCE.MD** - Check troubleshooting and common fixes
2. **Relevant specific file** - Consult the single source of truth for the affected area
3. **AI_CODE_EXAMPLES.MD** - Reference implementation patterns if needed

#### **🆕 New Feature Implementation** 
1. **AI_PROJECT_SETUP.MD** - Confirm technology stack and dependencies
2. **AI_CODING_STANDARDS.MD** - Review SOLID principles and code quality requirements
3. **AI_TESTING.MD** - Understand TDD approach and testing requirements
4. **AI_FILESYSTEM.MD** - Determine correct file placement using decision tree
5. **AI_FEATURE_DEVELOPMENT.MD** - Follow complete feature development workflow
6. **Task-specific files** - Load additional files based on feature requirements

#### **🏗️ Refactoring / Architecture Changes**
1. **AI_ARCHITECTURE.MD** - Review system design patterns and architectural decisions
2. **AI_CODING_STANDARDS.MD** - Ensure SOLID principles compliance
3. **AI_TESTING.MD** - Plan testing strategy for refactored code
4. **Affected domain files** - Review all files related to the refactoring scope

#### **⚙️ Configuration / Setup Changes**
1. **AI_CONFIGURATION_REFERENCE.MD** - Find relevant configuration templates
2. **AI_PROJECT_SETUP.MD** - Understand setup requirements and dependencies
3. **AI_ENVIRONMENT.MD** - Review development environment implications

#### **📚 Complete System Understanding** 
- Follow the complete **AI Agent Path** listed below for comprehensive understanding

### 🧠 **Progressive Knowledge Loading**
Load documentation incrementally based on task complexity:

**Level 1 (Quick Tasks - 5 min):** AI_QUICK_REFERENCE.MD
**Level 2 (Standard Tasks - 15 min):** + AI_PROJECT_SETUP.MD + AI_CODING_STANDARDS.MD  
**Level 3 (Complex Tasks - 30 min):** + AI_TESTING.MD + AI_ARCHITECTURE.MD + AI_FILESYSTEM.MD
**Level 4 (Complete Understanding - 60+ min):** Full AI Agent Path (all 11 files)

## Reading Order for AI Agents

### Phase 1: Essential Reading (Start Here)
Read these files first to understand the project foundation:

1. **core-setup/AI_PROJECT_SETUP.MD** - Get the project running and understand the technology stack
2. **development-standards/AI_CODING_STANDARDS.MD** - Learn how to write code that meets project standards  
3. **development-standards/AI_TESTING.MD** - Understand testing requirements and TDD approach

### Phase 2: Implementation Guides (Reference During Development)
Consult these files while building features:

4. **development-standards/AI_ARCHITECTURE.MD** - System design patterns and architectural decisions
5. **implementation-guides/AI_NEXTJS_FRAMEWORK.MD** - Framework-specific patterns and best practices
6. **implementation-guides/AI_FILESYSTEM.MD** - Where files belong in the project structure

### Phase 3: Development Workflow
Use this for feature planning and implementation:

7. **implementation-guides/AI_FEATURE_DEVELOPMENT.MD** - Feature planning and implementation process

### Phase 4: Reference Files (As Needed)
Quick reference for specific implementation details:

8. **references/AI_CODE_EXAMPLES.MD** - Consolidated code examples and patterns
9. **references/AI_CONFIGURATION_REFERENCE.MD** - All configuration files and templates

## File Descriptions and Priority Levels

### 🔴 Critical (Must Read First)
- **core-setup/AI_PROJECT_SETUP.MD** - Project setup, dependencies, and configuration *(226 lines)*
- **development-standards/AI_CODING_STANDARDS.MD** - SOLID principles, code patterns, and quality standards *(348 lines)*
- **development-standards/AI_TESTING.MD** - TDD approach, testing frameworks, and quality requirements *(241 lines)*

### 🟡 Important (Read During Development)  
- **development-standards/AI_ARCHITECTURE.MD** - System architecture, design patterns, and integration strategies *(257 lines)*
- **implementation-guides/AI_NEXTJS_FRAMEWORK.MD** - Next.js specific implementations and optimizations *(164 lines)*
- **implementation-guides/AI_FILESYSTEM.MD** - Project structure and file organization patterns *(221 lines)*
- **implementation-guides/AI_FEATURE_DEVELOPMENT.MD** - Feature development workflow and planning *(262 lines)*

### 🟢 Reference (Consult As Needed)
- **references/AI_CODE_EXAMPLES.MD** - Consolidated implementation examples *(386 lines)*
- **references/AI_CONFIGURATION_REFERENCE.MD** - Configuration templates and examples *(472 lines)*
- **references/AI_QUICK_REFERENCE.MD** - Development checklists and troubleshooting guide *(240 lines)*
- **core-setup/AI_ENVIRONMENT.MD** - IDE setup, tools, and development environment configuration *(429 lines)*

## Specialized Reading Paths

### 🆕 **New Developer Path** (First Time Setup)
**Estimated Time: 30-45 minutes**
1. **core-setup/AI_ENVIRONMENT.MD** - Set up your development environment first
2. **core-setup/AI_PROJECT_SETUP.MD** - Get the project running locally  
3. **implementation-guides/AI_FILESYSTEM.MD** - Understand where files belong
4. **references/AI_QUICK_REFERENCE.MD** - Bookmark for daily use
5. **development-standards/AI_CODING_STANDARDS.MD** - Learn code quality requirements
6. **development-standards/AI_TESTING.MD** - Understand testing approach

### 🛠️ **Feature Development Path** (Building New Features)
**Estimated Time: 20-30 minutes**
1. **implementation-guides/AI_FEATURE_DEVELOPMENT.MD** - Feature planning workflow
2. **development-standards/AI_ARCHITECTURE.MD** - System design decisions  
3. **implementation-guides/AI_NEXTJS_FRAMEWORK.MD** - Framework-specific patterns
4. **references/AI_CODE_EXAMPLES.MD** - Implementation reference
5. **references/AI_QUICK_REFERENCE.MD** - Development checklist

### 🐛 **Troubleshooting Path** (When Things Break)
**Estimated Time: 5-10 minutes**
1. **AI_QUICK_REFERENCE.MD** - Common issues and fixes
2. **AI_ENVIRONMENT.MD** - Development environment problems
3. **AI_CONFIGURATION_REFERENCE.MD** - Configuration issues
4. **AI_PROJECT_SETUP.MD** - Setup-related problems

### ⚡ **Quick Reference Path** (Daily Development)
**Estimated Time: 2-5 minutes**
1. **AI_QUICK_REFERENCE.MD** - Checklists and commands
2. **AI_CODE_EXAMPLES.MD** - Implementation patterns
3. **AI_CONFIGURATION_REFERENCE.MD** - Configuration templates

### 🤖 **AI Agent Path** (Systematic Understanding)
**Estimated Time: 60-90 minutes**
1. **AI_PROJECT_SETUP.MD** - Foundation setup
2. **AI_CODING_STANDARDS.MD** - Quality requirements
3. **AI_TESTING.MD** - Testing strategy
4. **AI_ARCHITECTURE.MD** - System design
5. **AI_NEXTJS_FRAMEWORK.MD** - Framework patterns
6. **AI_FILESYSTEM.MD** - File organization
7. **AI_FEATURE_DEVELOPMENT.MD** - Development workflow
8. **AI_CODE_EXAMPLES.MD** - Implementation reference
9. **AI_CONFIGURATION_REFERENCE.MD** - Configuration templates
10. **AI_QUICK_REFERENCE.MD** - Daily reference
11. **AI_ENVIRONMENT.MD** - Development environment

## Single Source of Truth Assignments

Each topic has one authoritative source to eliminate duplication and confusion:

### **Technology Stack & Versions**
**Single Source**: `core-setup/AI_PROJECT_SETUP.MD`
- Next.js 15.4.5 with React 19.1.0, Supabase PostgreSQL, Vercel Platform, Tailwind CSS v4, TypeScript, pnpm

### **Configuration Files** 
**Single Source**: `references/AI_CONFIGURATION_REFERENCE.MD`
- Complete templates: next.config.ts, tsconfig.json, jest.config.js, cypress.config.ts, tailwind.config.ts, postcss.config.mjs

### **Directory Structure & File Organization**
**Single Source**: `implementation-guides/AI_FILESYSTEM.MD`
- Complete project structure, file naming conventions, directory organization principles, file placement rules

### **SOLID Principles & Code Standards**
**Single Source**: `development-standards/AI_CODING_STANDARDS.MD`
- All SOLID principle examples, TypeScript standards, React component patterns, code quality requirements

### **Testing Standards & TDD**
**Single Source**: `development-standards/AI_TESTING.MD` (strategy) + `core-setup/AI_PROJECT_SETUP.MD` (setup)
- AI_TESTING.MD: Testing philosophy, TDD approach, testing patterns
- AI_PROJECT_SETUP.MD: Testing dependencies, configuration files

### **Next.js Framework Usage**
**Single Source**: `implementation-guides/AI_NEXTJS_FRAMEWORK.MD`
- App Router patterns, Server/Client Components, performance optimizations, Next.js specific features

### **System Architecture**
**Single Source**: `development-standards/AI_ARCHITECTURE.MD`
- Architectural patterns, layer responsibilities, database design patterns, integration patterns

### **Feature Development Workflow**
**Single Source**: `implementation-guides/AI_FEATURE_DEVELOPMENT.MD`
- Feature planning process, implementation workflow, AI_FEATURE_<NAME>.MD template

## Cross-Reference Guidelines

When files reference other files, use this consistent pattern:
- **"See ../category/AI_[FILE].MD for [specific topic]"**
- **"Complete [topic] details in ../category/AI_[FILE].MD"**
- **"As specified in ../category/AI_[FILE].MD"**

## Compliance Requirements

1. **Read all referenced files** before beginning any development work
2. **Follow all guidelines** specified in the documentation consistently  
3. **Use as authoritative reference** for all project decisions
4. **Refer back regularly** throughout the development process
5. **Implement all requirements** as specified in the documents
6. **Follow single source of truth** - reference the designated authoritative file for each topic

## Quick Start for New AI Agents

### 🚀 **Immediate Action Items**
1. **Context Restoration** - Complete the Session Initialization Protocol above
2. **Task Assessment** - Use the Task-Based Reading Strategy to determine required documentation
3. **Progressive Loading** - Start with Level 1-2 documentation unless complete understanding is needed
4. **Self-Validation** - Use the AI Agent Checklist in AI_QUICK_REFERENCE.MD before submitting code

### � **Reading Priority Guide**
1. Read the �🔴 Critical files first (AI_PROJECT_SETUP, AI_CODING_STANDARDS, AI_TESTING)
2. Reference 🟡 Important files while developing features
3. Use 🟢 Reference files for specific implementation details
4. Follow the Task-Based Reading Strategy above for optimal efficiency
5. Complete the AI Agent Self-Validation System before code submission

---

**Total Documentation**: ~3,844 lines across 12 files | **Est. Reading Time**: 5-90 minutes based on task complexity and progressive loading strategy

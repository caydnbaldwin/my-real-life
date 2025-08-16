# AI Feature Development Instructions

This document defines the development workflow for implementing features in this Next.js project. **Follow this structured approach for all feature development.**

## Core Development Philosophy

Every feature implementation must:
1. Begin with comprehensive planning before coding
2. Follow the established workflow with clear tasks  
3. Adhere to architectural principles from AI instruction files
4. Include proper documentation and diagrams
5. Provide clear implementation tasks

## Feature Planning Documentation

### Naming Convention
```
AI_FEATURE_<FEATURE_NAME>.MD
```

Examples: `AI_FEATURE_USER_AUTHENTICATION.MD`, `AI_FEATURE_DASHBOARD.MD`

### Required File Structure

Each feature planning file must contain these sections:

```markdown
# AI Feature: [Feature Name]

## 1. Overview & Purpose
## 2. Architecture Plan  
## 3. Implementation Guidelines
## 4. Development Workflow
## 5. Diagrams
## 6. Acceptance Criteria
## 7. Testing Strategy
```

## Section Requirements

### 1. Overview & Purpose
- Clear feature description and business value
- Integration points with existing features
- Success metrics and performance targets

### 2. Architecture Plan
- High-level architectural decisions
- Component relationships and data flow
- Integration with existing architecture
- References to applicable AI instruction files

**Example Architecture References:**
- Follows `AI_CODING_STANDARDS.MD` SOLID principles
- Adheres to `AI_NEXTJS_FRAMEWORK.MD` patterns
- Implements `AI_TESTING.MD` TDD approach
- Maintains `AI_FILESYSTEM.MD` structure
- Performance requirements
- Security considerations
- Accessibility requirements

```markdown
## 3. Implementation Guidelines

### Coding Standards
- [Specific SOLID principle applications]
- [Component design patterns to use]
- [TypeScript requirements]

### Performance Requirements
- [Page load time targets]
- [Bundle size constraints]
- [Rendering optimization needs]

### Security Considerations
- [Authentication/authorization requirements]
- [Data validation needs]
- [Privacy protection measures]

### Accessibility Requirements
- [WCAG compliance level]
- [Keyboard navigation requirements]
- [Screen reader compatibility]
```

### 4. Development Workflow
**MUST include:**
- Singular, concise tasks in logical order
- Recommended AI prompts for each task
- Dependencies between tasks
- Estimated complexity/time

```markdown
## 4. Development Workflow

### Task 1: [Task Name]
**Description:** [Brief task description]
**Dependencies:** [Previous tasks required]
**Complexity:** [Low/Medium/High]

### 3. Implementation Guidelines
- Specific coding standards and patterns to follow
- Technology choices and justifications  
- Performance requirements and constraints

### 4. Development Workflow
Break down implementation into discrete tasks:

```markdown
### Task 1: [Task Name]
**Description:** [What needs to be done]

**AI Prompt:**
```
[Exact prompt for AI agent]
```

**Acceptance Criteria:**
- [ ] [Specific deliverable 1]
- [ ] [Specific deliverable 2]

### Task 2: [Next Task]
[Continue pattern...]
```

### 5. Diagrams
Include relevant Mermaid diagrams:
- System architecture diagram
- Component relationships  
- Data flow sequences
- User journey (if applicable)

**See ../references/AI_CODE_EXAMPLES.MD for Mermaid diagram templates.**

### 6. Acceptance Criteria
- Functional requirements checklist
- Non-functional requirements
- Integration requirements
- Quality gates and performance targets

### 7. Testing Strategy
- Unit testing approach aligned with `AI_TESTING.MD`
- Integration testing plan
- E2E testing scenarios
- Performance testing requirements

## Development Workflow Process

### Phase 1: Planning & Documentation
1. Create `AI_FEATURE_<NAME>.MD` file with all required sections
2. Include comprehensive diagrams and task breakdown
3. Review against existing AI instruction files for compliance

### Phase 2: Implementation  
1. Follow TDD approach per `AI_TESTING.MD`
2. Execute tasks sequentially using provided AI prompts
3. Validate acceptance criteria before proceeding
4. Maintain continuous compliance with AI instruction files

### Phase 3: Integration & Testing
1. Integration testing with existing system
2. Performance validation against targets
3. Security and accessibility review
4. Complete acceptance criteria validation

## Quick Implementation Checklist

- [ ] Feature planning file created (`AI_FEATURE_<NAME>.MD`)
- [ ] All sections completed with required detail
- [ ] Mermaid diagrams included for system visualization  
- [ ] Tasks broken down into discrete, actionable steps
- [ ] AI prompts provided for each implementation task
- [ ] Acceptance criteria defined and testable
- [ ] Testing strategy aligned with project standards
- [ ] Compliance verified against all AI instruction files

---

**Implementation Details**: Feature planning templates and examples are available in AI_CODE_EXAMPLES.MD.
   - Conduct accessibility testing

## AI Prompt Templates for Feature Development

### For Creating Feature Planning File:
```
Create an AI_FEATURE_<FEATURE_NAME>.MD file following the exact structure outlined in AI_FEATURE_DEVELOPMENT.MD. Include comprehensive planning for [feature description], with detailed architecture plan, implementation guidelines, development workflow with specific AI prompts, and complete Mermaid diagrams showing system architecture, component relationships, and data flow.
```

### For Implementing Feature Tasks:
```
Implement [specific task] from AI_FEATURE_<FEATURE_NAME>.MD following the TDD approach outlined in AI_TESTING.MD. Strictly adhere to SOLID principles from AI_CODING_STANDARDS.MD, utilize Next.js optimizations from AI_NEXTJS_FRAMEWORK.MD, and maintain the filesystem structure from AI_FILESYSTEM.MD.
```

### For Feature Integration:
```
Integrate the [feature name] with the existing system following the architecture plan in AI_FEATURE_<FEATURE_NAME>.MD. Ensure all acceptance criteria are met and perform comprehensive testing as outlined in the feature's testing strategy.
```

## Feature Documentation Management

### File Organization
- All feature planning files in `doc/` directory
- Follow consistent naming convention
- Maintain version control of planning documents
- Update planning files as features evolve

### Documentation Updates
- Update feature files when requirements change
- Maintain alignment with core AI instruction files
- Document architectural decisions and rationale
- Keep Mermaid diagrams current with implementation

## Compliance Requirements

**Before beginning any feature development:**
- [ ] Feature planning file created and complete
- [ ] Architecture plan validated against existing standards
- [ ] Development workflow defined with specific tasks
- [ ] AI prompts provided for each implementation step
- [ ] Mermaid diagrams completed and accurate
- [ ] Testing strategy aligned with `AI_TESTING.MD`
- [ ] Acceptance criteria clearly defined

**During feature development:**
- [ ] Follow TDD approach strictly
- [ ] Complete tasks in defined workflow order
- [ ] Use provided AI prompts for guidance
- [ ] Validate against acceptance criteria continuously
- [ ] Maintain adherence to all AI instruction files

**Upon feature completion:**
- [ ] All acceptance criteria validated
- [ ] Integration testing completed successfully
- [ ] Performance requirements met
- [ ] Security and accessibility requirements satisfied
- [ ] Documentation updated and current

---

## See Also

### 🏗️ **Foundation Knowledge**
- **AI_ARCHITECTURE.MD** - System design principles guiding feature development
- **AI_CODING_STANDARDS.MD** - Quality standards for feature implementation
- **AI_TESTING.MD** - TDD approach and testing strategies for features

### 🛠️ **Implementation Guides**
- **AI_NEXTJS_FRAMEWORK.MD** - Next.js patterns and optimizations for features
- **AI_FILESYSTEM.MD** - File placement and organization during feature development
- **AI_PROJECT_SETUP.MD** - Setup requirements for new features

### 📋 **References and Examples**
- **AI_CODE_EXAMPLES.MD** - Implementation patterns and code examples
- **AI_CONFIGURATION_REFERENCE.MD** - Configuration templates for feature setup

### ⚡ **Daily Workflow**
- **AI_QUICK_REFERENCE.MD** - Feature development checklists and troubleshooting
- **AI_ENVIRONMENT.MD** - Development environment optimization for feature work

### 🗂️ **Navigation**
- **AI_ALL_IN_ONE.MD** - Master index of all documentation

**MANDATORY**: No feature development begins without a complete `AI_FEATURE_<NAME>.MD` planning file. This structured approach ensures consistent, high-quality implementations that align with all project standards and architectural principles.

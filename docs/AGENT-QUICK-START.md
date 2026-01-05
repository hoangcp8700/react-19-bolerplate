# Agent Quick Start - BMAD Workflow

> **For AI Agents:** Read this file FIRST before any BMAD workflow step.

---

## ⚠️ MANDATORY: Before ANY Output

Per `docs/core/governance/agent-operating-rules.md` Section 0.1:

### 1. Load ALL Required Files

You MUST load and review these files before generating any artifact:

**Governance (Process):**

- `docs/core/governance/agent-operating-rules.md` ⭐ READ THIS FIRST
- `docs/core/governance/definition-of-done.md`

**Standards (How to Code):**

- `docs/core/standards/component-architecture.md`
- `docs/core/standards/page-layer.md`
- `docs/core/standards/ssot-standards.md`
- `docs/core/standards/coding-standards.md`
- `docs/core/standards/a11y-standards.md`
- `docs/core/standards/coding-standards.md`
- `docs/core/standards/components/table.md`
- `docs/core/standards/components/form-standards.md`
- `docs/core/standards/components/form-stack.md`

**Architecture (Structure):**

- `docs/core/architecture/folder-structure.md`
- `docs/core/architecture/auth-seams.md`
- `docs/core/architecture/routing-and-guards.md`
- `docs/core/architecture/ui-gating-patterns.md`
- `docs/core/architecture/rendering-strategy.md`

**Product (Constraints):**

- `docs/core/product/ux-guardrails.md`
- `docs/core/product/layout-blueprints.md`
- `docs/core/product/acceptance-criteria-library.md`
- `docs/core/product/ux-guardrails.md`

**Project Overrides (if exists):**

- `docs/project/**` (check if exists, use core defaults if not)

---

### 2. Confirm Initialization

Before proceeding, confirm:

```txt
✅ AGENT INITIALIZATION CHECKLIST:

[ ] Loaded: docs/core/governance/agent-operating-rules.md
[ ] Loaded: docs/core/governance/definition-of-done.md
[ ] Loaded: docs/core/standards/** (ALL standards files)
[ ] Loaded: docs/core/architecture/** (ALL architecture files)
[ ] Loaded: docs/core/product/** (ALL product files)
[ ] Loaded: docs/project/** (if exists)

[ ] Standards Gate prepared (will list all loaded files in output)
[ ] Standards Application plan documented
[ ] Exceptions documented (if any)

Proceeding with: [WORKFLOW STEP NAME]
```

---

### 3. Include Standards Gate in Output

Every artifact MUST include a Standards Gate section showing:

1. **Standards Loaded:** List all files you loaded
2. **Standards Applied:** How each standard applies to this output
3. **Exceptions:** Any deviations from standards (with rationale logged in `decision-log.md`)

Example:

```markdown
## Standards Gate (MUST)

**Standards Loaded (per agent-operating-rules.md Section 1):**

**Governance:**

- docs/core/governance/agent-operating-rules.md
- docs/core/governance/definition-of-done.md

**Standards:**

- docs/core/standards/component-architecture.md
- docs/core/standards/page-layer.md
- ...

**Standards Applied:**

- **Atomic Design:** All components classified per component-architecture.md
- **Page Layer:** Pages are composition-only per page-layer.md
- **SSOT:** Routes/capabilities/messages centralized per ssot-standards.md
- ...

**Exceptions:**

- [None] OR [Document exception with reason/tradeoff/rollback plan]
```

---

## Workflow Commands

When user runs these commands, follow the initialization protocol above:

- `*workflow-init` → Kickoff questions
- `*brainstorm` → Generate Brainstorm.md
- `*brief` → Generate Brief.md
- `*prd` → Generate PRD.md
- `*spec` → Generate FrontendSpec.md
- Implementation → Follow standards for all code

---

## What If Files Are Missing?

If a required standard file does not exist:

1. **STOP** and report: "Required file X is missing"
2. **Ask user:** "Should I proceed with core defaults, or create this file?"
3. **Log decision:** Add assumption to `docs/core/decision-log.md`
4. **Mark clearly:** In output, state "Assumed [X] because file missing"

---

## Non-Negotiables

Per `agent-operating-rules.md`:

- ❌ **NO guessing** at standards
- ❌ **NO skipping** the initialization checklist
- ❌ **NO output** without loading required files
- ❌ **NO duplicating** technical rules (read standards instead)
- ✅ **ALWAYS** include Standards Gate
- ✅ **ALWAYS** respect existing contracts
- ✅ **ALWAYS** follow SSOT principles

---

## Quick Reference: Key Standards

### Component Architecture

- Atomic Design: ui → atoms → molecules → organisms → templates
- No raw HTML where shared components exist
- Pages are composition-only (no business logic)

### Page Layer

- Pages render Feature components only
- All state/coordination in Features/Templates
- Example: `<ProductsFeature />` not `useProducts()` in page

### SSOT

- Routes, capabilities, messages, constants → centralized
- Location: `src/lib/` (not `src/config/`)
- No scattered string literals

### Forms

- Stack: React Hook Form + Zod
- Schema validation mandatory
- No form logic in pages
- Required blocks: Form.Provider, Form.Field, Form.Submit

### Tables

- Pagination + search (declare mode: debounce/enter)
- 4 states: Loading, Empty, Error, Empty-results (distinct!)
- Horizontal scroll + column min-width
- Action columns capability-gated

### Layouts

- MainLayout = providers wrapper only
- BaseLayout = chrome (Header + Sidebar + content)
- AuthLayout = public/minimal

### Auth & Permissions

- Use `can(user, capability)` only (no role checks in UI)
- Routes define intent capability
- 4 guard layers: Layout → Route → Component → Data

---

## For Users: How to Use

Add this to your prompt when starting any workflow:

```txt
⚠️ BEFORE YOU BEGIN:
Read docs/AGENT-QUICK-START.md
Load ALL standards per agent-operating-rules.md Section 0.1
Confirm initialization checklist before proceeding.
```

---

**Last Updated:** 2026-01-05  
**Version:** 1.0  
**Ref:** `docs/core/governance/agent-operating-rules.md`

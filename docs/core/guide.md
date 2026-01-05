> **Purpose:** Explain what `docs/core/` contains, how projects override it safely, and how to use it with BMAD agents and coding assistants without drifting from company standards.  
> **Use when:** Bootstrapping a new repo, onboarding contributors, running `*workflow-init`, or updating rules/templates across projects.  
> **Applies to:** All projects that adopt BMAD Company Core Pack.

# guide.md — BMAD Company Core Pack

This guide explains:

- what’s inside `docs/core/`
- how to customize it per project
- how to update it manually or using tools like Cursor / CodeX

---

## 1) What’s inside `docs/core/`

- `standards/` — non-negotiable engineering rules and guardrails  
  Examples: SSOT, page-layer, components, forms, tables, a11y, performance, framework-agnostic rules

- `governance/` — process ownership, workflow gates, and verification policy  
  Includes: agent operating rules, definition of done, checklists (if present)

- `architecture/` — default patterns that must remain centralized and swap-friendly  
  Includes: auth seams, routing/guards, UI gating patterns, folder structure baseline

- `product/` — product-level rules and reusable criteria packs  
  Includes: UX guardrails, layout blueprints, acceptance criteria library, PRD rules (if present)

- `templates/` — process templates used in BMAD workflow  
  Brainstorm → Brief → PRD → UX Spec → UI Architecture → Stories

---

## 2) New project workflow (recommended)

1. Create project overrides:

   - `docs/project/project-overrides.md`
   - Include: objective, roles, routes, entities, constraints, rendering intent, backend readiness

2. Use the core templates:

   - Copy from `docs/core/templates/` or reference them directly

3. Run BMAD with **Core + Overrides**:

   - Brainstorm → Brief → PRD → UX Spec → UI Architecture → Shard → Stories

4. Implement only Approved stories:
   - Enforce role gates and verification (DEV self-verify before QA)
   - DoD must be satisfied before a story is marked Done

---

## 3) What to change per project

### Change (project-owned)

- Roles and capability mapping
- Route map and navigation
- Entities and domain fields
- Compliance and delivery constraints
- Backend readiness and mock strategy
- Rendering strategy decision for the project

### Keep (core-owned)

- Standards: coding, components, forms, tables, SSOT, page-layer
- Architecture: guard order, auth seams, centralized `can(user, capability)`
- Governance: workflow gates, decision log policy, DoD verification rules

---

## 4) How to update safely

### Project changes

- Update `docs/project/project-overrides.md`
- Update SSOT modules in code:
  - `src/lib/routes.ts`
  - `src/lib/capabilities.ts`
  - `src/lib/messages.ts`
  - `src/lib/config/*`

### Core changes

- If a standard changes: update `docs/core/standards/*`
- If an architecture pattern changes: update `docs/core/architecture/*`
- If a rule requires an exception: log it before handoff in `docs/core/decision-log.md`

Rule:

- Do not “hot-fix” core rules inside a project. Use overrides + decision log.

---

## 5) Cursor / CodeX prompts (copy/paste)

### Update SSOT constants only

“Update SSOT modules `src/lib/routes.ts`, `src/lib/capabilities.ts`, `src/lib/messages.ts` to match `docs/project/project-overrides.md`. Keep keys stable, types safe, and do not change UI behavior.”

### Enforce form standards

“Ensure every form uses schema validation, submit loading, and success/error feedback per `docs/core/standards/components/form-standards.md`. Use shared form contracts only. Do not move form logic into page files.”

### Implement a story exactly

“Implement Story <ID> exactly as written. Follow `docs/core/standards/**` and `docs/core/architecture/**`. If any required info is missing, propose a new story or decision log entry. Do not expand scope.”

### Verify a story before handoff

“Run self-verify for Story <ID>: execute repo scripts (format or format:check, lint, typecheck, test if present, build). Perform a basic runtime smoke check for happy path + one negative path. Report results and failures; do not claim Done if not verified.”

---

## 6) Always-load list (mandatory)

Before producing any artifact or code, load and apply:

- `docs/core/governance/agent-operating-rules.md`
- `docs/core/standards/**`
- `docs/core/governance/**`
- `docs/core/architecture/**`
- `docs/core/product/**`
- `docs/project/**` if present

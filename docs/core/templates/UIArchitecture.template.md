# ui-architecture.md (Template)

## Standards Gate (MUST)

- Before writing, record:
  - Standards Loaded: list all files from `docs/core/standards/*`
  - Standards Applied: bullets mapping decisions to standards
  - Exceptions: link `docs/core/decision-log.md` entries (reason, tradeoff, scope, rollback)
- Ensure routing/components/forms align with standards; log deviations.

## Goals

- **[REPLACE]**

## Rendering Strategy (required)

Reference: `docs/core/standards/rendering-strategy.md`

- Decision: **[REPLACE: SSR-first | Hybrid | CSR-first]**
- Notes/exceptions (optional): **[REPLACE]**

## Routing & Guards

Reference: `docs/core/architecture/routing-and-guards.md`

## Auth seams

Reference: `docs/core/architecture/auth-seams.md`

## UI gating

Reference: `docs/core/architecture/ui-gating-patterns.md`

## Folder structure

Reference: `docs/core/architecture/folder-structure.md`

## Component Breakdown & State Strategy (required)

- Atomic classification: list key components + target paths (atoms/molecules/organisms/templates/features)
- State ownership:
  - what stays server-side vs client-side (and why)
  - where shared/cross-component state lives (feature/template, not pages)
- Forms/tables approach:
  - form stack source: `docs/core/standards/components/form-stack.md`
  - table contract: `docs/core/standards/components/table-contract.md`

## Implementation Notes (handoff-ready)

- Key files/paths to touch: **[REPLACE]**
- Risks / follow-ups: **[REPLACE]**

# Story <ID> — <Title> (Template)

## Standards Gate (MUST for implementation planning/QA)

- Before planning/implementing/QA-ing this story, record in the story or accompanying notes:
  - Standards Loaded: list all files from `docs/core/standards/*`
  - Standards Applied: bullets mapping work to standards
  - Exceptions: link `docs/core/decision-log.md` entries (reason, tradeoff, scope, rollback)
- Tooling evidence required before marking Done: formatter + linter + typecheck; tests/build if scripts exist.

Status: Draft | Ready | Approved | In Progress | Done

## Status Flow (Do NOT skip)

- In Progress (DEV) → Verify by DEV → Ready for QA → QA Verify → Done
- DEV Self-Verify (required to move to Ready for QA):
  - Run repo scripts: formatter/format-check (if present), lint, typecheck, tests (if present), build.
  - Smoke paths: story happy path + at least one negative path.
  - Standards: confirm coding-standard, component-standard, form-standards, definition-of-done; log exceptions in decision-log.
  - Evidence: list commands + results, smoke results (PASS/FAIL), environment/limitations, link exceptions.
- QA Verify: verify AC + UX/PRD, regression smoke for touched areas; if FAIL, return to DEV (In Progress) then repeat flow.

## Goal

**[REPLACE]**

## References

- PRD shard: **[REPLACE]**
- Architecture shard: **[REPLACE]**
- UX spec: **[REPLACE]**

## Scope (In)

- **[REPLACE]**

## Scope (Out)

- **[REPLACE]**

## Target Paths (required)

- **[REPLACE: file/folder paths to touch]**

## Acceptance Criteria

Use packs from: `docs/core/product/acceptance-criteria-library.md`

- [ ] **[REPLACE]**

## Test / Verify Focus (required)

- **[REPLACE: key happy path]**
- **[REPLACE: at least one negative path]**
- **[REPLACE: permission/gating focus if relevant]**

## Definition of Done

Reference: `docs/core/governance/definition-of-done.md`

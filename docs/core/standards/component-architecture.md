> **Purpose:** Define universal component layering (atomic classification, ownership boundaries, contract reuse) to keep UI maintainable and consistent.  
> **Use when:** Creating/moving components, deciding where logic/state lives, or reviewing PRs for duplication/architecture drift.

# Component Architecture (Non-Negotiables)

## 1) Prefer shared UI over raw primitives

If a design-system/shared component exists (e.g., `Button`, `Input`, `Dialog`, `Table`), do **not** introduce raw HTML equivalents in feature code.

Exceptions require:

- a short justification comment, and
- explicit reviewer approval.

## 2) Atomic classification is mandatory

Every new component must be classified up front and placed accordingly:

- `src/components/ui/` — design-system primitives (lowest-level reusable UI)
- `src/components/atoms/` — single-responsibility reusable pieces
- `src/components/molecules/` — composition of atoms (reusable block)
- `src/components/organisms/` — feature-oriented section blocks
- `src/components/templates/` — composition layer (coordinates organisms; minimal logic)
- `src/features/` — route-level container, orchestrates data & components and templates

- `src/app/**` (or framework routing folder) — **page/route entrypoints** (composition-only; see `docs/core/standards/page-layer.md`)

## 3) Ownership boundaries (state + coordination)

- **Pages/routes**: compose templates; no UI state/coordination logic.
- **Templates/containers**: own cross-component state and coordinate multiple organisms.
- **Organisms**: encapsulate feature blocks; may own local UI state if isolated.
- **Molecules/atoms/ui**: prefer presentational and reusable behavior.

Rule of thumb: if two components need shared state → introduce a **Template/Container**.

## 4) No duplicate variants

- Extend variants/props in existing components rather than creating near-duplicates.

## 5) Accessibility baseline

- Interactive elements must be keyboard accessible.
- Icon-only actions must include an accessible label (e.g., `aria-label`).

## 6) Existing component contracts must be respected

If a shared component exists (e.g., `DataTable`, `Form.Field`, `Button`), you must use its **public props/types contract**.

Rules:

- ✅ Import and reuse existing types from the contract source module.
- ❌ Do not redefine parallel types (e.g., `TableQuery`, `PaginationState`) inside features.

If the contract is insufficient:

- extend it in the **contract source file** (not locally),
- keep backward compatibility when possible,
- log the change in `docs/core/decision-log.md`.

## PR review checks

- New components are classified + placed correctly.
- No near-duplicate UI created when an existing component can be extended.
- No raw primitives used where shared UI exists (unless approved).
- Page layer remains composition-only (per `page-layer.md`).

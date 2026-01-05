> **Purpose:** Enforce a thin, composition-only Page layer across frameworks (no UI state/feature logic in pages).  
> **Use when:** Designing routes/screens, deciding where state/logic belongs, or reviewing PRs for architecture drift.

# Page Layer Rule (Framework-Agnostic)

## Principle

**Pages must be composition-only.**  
A page file is a routing entry that assembles UI from higher-level components and delegates all state/logic downward.

---

## MUST (allowed in Page)

- Compose layout/UI: render **Feature/Template/Organism** components and pass props.
- Read routing context: params, query/search params, locale, route meta.
- Trigger navigation/redirect after actions (framework-specific).
- Fetch/load initial data (SSR/loader/server) and pass data down.
- Light branching for rendering (e.g., EmptyState vs List) is OK.

---

## MUST NOT (forbidden in Page)

- Manage UI state in page (e.g., `useState`, stores, local state, complex derived state).
- Coordinate interactions between multiple components inside page.
- Implement business logic, permission logic, or non-trivial data transformation in page.
- Implement table/form behaviors in page (search/pagination/sort/form state belongs in components).
- Add side-effects in page that are not routing-level concerns.

---

## Where logic should live instead

### UI layers

- **Atoms**: purely presentational primitives.
- **Molecules**: small reusable interactions (input + label + error).
- **Organisms**: feature blocks (table, form sections, card grids).
- **Templates (Containers)**: coordinate multiple organisms/molecules for a screen section.

### Feature composition layer (new)

- **Features**: combine multiple Templates (and related organisms) into a single feature-level entrypoint.
  - Purpose: keep page imports short and predictable.
  - Rule: if a route needs multiple templates to work together, create a `Feature` component that composes them.
  - The page should import **one** feature entry (or a small number of them), not wire templates together inline.

### Services / Domain

- API calls, contracts, business rules, RBAC evaluation.

---

## Feature folder convention (recommended)

Use a feature entrypoint to compose templates for a route/feature.

Suggested placement (choose one project-wide and keep it consistent):

- `src/features/<feature>/*` (recommended for large apps)

Example structure:

- `src/features/products/ProductsFeature.tsx` (composes list + filters + actions templates)
- `src/features/dashboard/DashboardFeature.tsx` (composes KPI + activity templates)

Page usage (conceptual):

- Page loads initial data (SSR/loader) → renders `<ProductsFeature initialData={...} />`

---

## Pattern: “If it needs state, it’s not the page”

If you need state to make the route work → move that state update/coordination into:

- a **Template/Container**, or
- a **Feature** component that composes multiple templates.

---

## Examples (conceptual)

✅ Good

- Page loads initial data → renders `<ProductsFeature initialData={...} />`
- Feature composes templates and owns cross-template wiring/state.

❌ Bad

- Page owns table state: query/pagination/sorting
- Page wires callbacks between SearchBar and Table
- Page stitches multiple templates together inline

---

## Enforcement (review checklist)

- Page files contain no UI state management.
- Cross-template coordination lives in a Feature or Template/Container component.
- Business logic is not implemented in page.
- Page imports are short and feature-oriented (prefer Feature entrypoints).

> **Purpose:** Define the canonical folder structure (SSOT) so all architecture plans and code follow the same module boundaries and Atomic UI rules.  
> **Use when:** Creating files/folders, planning architecture, generating stories, or reviewing PRs for structure drift.

# Folder Structure Baseline (SSOT)

This document is the single source of truth for folder layout decisions.  
All architecture planning and code plans must follow it.

---

## 1) Principles

- UI components are organized strictly by **Atomic Design**.
- Shared logic must be centralized (no feature-silo duplication):
  - API clients live in `src/api/`
  - Domain services/use-cases live in `src/services/`
  - Shared hooks live in `src/hooks/`
- Cross-cutting SSOT values live in `src/lib/` (routes, messages, config, capabilities, etc.).
- Pages/routes are composition-only (see `docs/core/standards/page-layer.md`).

---

## 2) UI layer structure (Atomic Design — hard requirement)

### `src/components/` (UI-only)

Every UI component MUST be placed in exactly one Atomic folder:

- `src/components/ui/` — design-system primitives/wrappers (Radix/shadcn, base UI primitives)
- `src/components/atoms/`
- `src/components/molecules/`
- `src/components/organisms/`
- `src/components/templates/`

> Note: route entrypoints belong to the framework router folder (e.g., `src/app/**`), not `src/components/pages/`.

### Forbidden under `src/components/` (Fail PR)

- `components/common/`
- `components/shared/`
- `components/layout/`
- `components/feedback/`
- any ad-hoc grouping that bypasses Atomic classification

### Mapping guidance

- Primitives (Badge, Spinner, Icon wrappers) → `atoms/`
- Small compositions (EmptyState, ErrorState, ConfirmDialog) → `molecules/`
- Layout building blocks (Header, Sidebar, Topbar, Shell parts) → `organisms/`
- Route-level composition blocks (MainLayout/BaseLayout/AuthLayout) → `templates/`

---

## 3) Feature composition layer (recommended)

Use features to keep pages thin and imports short.

- `src/features/<feature>/` — feature entrypoint + feature-specific composition
  - compose multiple templates/organisms when needed
  - feature-level controllers/stores/hooks are allowed here
  - feature schemas live here (forms/tables)

> Feature code must still reuse shared contracts and SSOT modules (no duplicated constants/types).

---

## 4) Shared logic layers (centralized)

### API layer (shared, not feature-siloed)

- `src/api/`
  - `http/` — fetch/axios wrappers, interceptors
  - `clients/` — typed domain clients (productsClient, usersClient, etc.)
  - `queries/` — query keys/helpers (optional; if using a query library)

### Domain/services layer (shared)

- `src/services/`
  - `auth/`
  - `products/`
  - `users/`
  - ...

Rules:

- Services own business rules and data transformations.
- UI should not duplicate domain logic.

### Shared hooks (shared)

- `src/hooks/` — cross-feature hooks only
- Feature-specific hooks belong in `src/features/<feature>/`.

---

## 5) SSOT modules (cross-cutting)

- `src/lib/`
  - `routes.ts` — route paths + helpers
  - `capabilities.ts` — capability keys + role mapping
  - `messages.ts` — UI copy/messages
  - `config/` — env/runtime config helpers
  - `storage/` — session/token storage helpers
  - `utils/` — cross-cutting utilities

SSOT rule: if used in 2+ places → move here (see `docs/core/standards/ssot-standards.md`).

---

## 6) Types and styles

- `src/types/` — shared domain types (non-UI)
- `src/styles/`
  - `globals.css`
  - `theme.css` (if applicable)

---

## 7) Reference structure (recommended)

```txt
src/
  (app|pages)/                      # framework router (e.g., Next.js App Router)
    ...

  components/               # UI only (Atomic)
    ui/
    atoms/
    molecules/
    organisms/
    templates/

  features/
    <feature>/
      components/           # optional: feature-only UI (still Atomic inside)
      schemas.ts            # form/table schemas (preferred)
      <Feature>.tsx         # feature entrypoint composition (recommended)

  api/
    http/
    clients/
    queries/

  services/
    auth/
    products/
    users/

  hooks/
  types/
  lib/
    routes.ts
    capabilities.ts
    messages.ts
    config/
    storage/
    utils/

  styles/
    globals.css
    theme.css
```

---

## PR review checks

- New UI components are placed under the correct Atomic folder.
- No ad-hoc folders under `src/components/`.
- Pages remain thin and composition-only (prefer `src/features/*` entrypoints).
- No duplicated domain logic in UI; services are used for business rules.
- SSOT values are centralized in `src/lib/` when reused.

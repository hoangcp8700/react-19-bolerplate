> **Purpose:** Define a universal routing + guard model that prevents unauthorized flash and enforces centralized authorization (`can`) consistently across routes, layouts, UI, and data layers.  
> **Use when:** Designing route taxonomy, implementing auth redirects/guards, adding locale-aware routing, or reviewing PRs for access-control drift.  
> **Applies to:** All projects with protected areas.

# Routing & Guards (Core Default)

## 1) Goals

- Prevent unauthorized content flash
- Keep access control consistent and centralized
- Make authorization swappable, testable, and non-scattered

---

## 2) Route taxonomy (classification)

A route is either **Public** or **Protected**. Avoid “sometimes protected” routes—use explicit routing.

### Public routes (no session required)

- Marketing/home: `/`
- Auth: `/login` (and auth callbacks if any)
- Errors: `/403`, `/404`
- Session UX (optional): `/session-expired`

### Protected routes (session required)

- Any internal/app area such as:
  - `/`
  - `/<module>` (e.g., `/products`, `/users`, `/settings`, etc.)

---

## 3) Default redirect rules (core behavior)

- Unauthenticated → `/login?next=<original_path>`
- Authenticated but forbidden → `/403`
- Not found → `/404`
- Session expired → `/login?reason=session_expired`
  - Optional UX route: `/session-expired` (messaging only; redirect still applies)

---

## 4) Guard layers (required order)

### 1) Layout guard (required)

- Block protected shell until session is known
- Prevent unauthorized flash:
  - no protected chrome while session is unknown/loading

### 2) Route guard (required)

- Enforce redirects for deep links and direct URL access
- Apply redirect rules consistently across protected routes

### 3) Component guard (required)

- Gate nav items, actions, and sensitive widgets
- Use centralized authorization only: `can(user, capability)`
- No direct role checks in UI

### 4) Data guard (recommended)

- Filter/mask at service/repository layer when needed (especially for list data)
- Enforce least privilege in services (even with mocks/fixtures)

---

## 5) Authorization contract (SSOT)

- UI gating and action authorization use: `can(user, capability)`
- Capability keys and role mappings live in SSOT (e.g., `src/lib/capabilities.ts`)
- UI code must not implement `if (role === ...)` checks

See also:

- `docs/core/architecture/ui-gating-patterns.md`
- `docs/core/architecture/auth-seams.md`

---

## 6) Locale / i18n routing (optional, core-safe)

If locale routing exists:

- Paths may be:
  - no-locale: `/`, `/products`
  - optional locale prefix: `/<locale>/`, `/<locale>/products`
- Redirects must preserve:
  - locale (if present/required)
  - `next` parameter consistently

---

## 7) Testing expectations (minimum)

- Unauthenticated → redirected to `/login?next=...`
- Forbidden → redirected to `/403`
- Allowed → can access protected routes
- No unauthorized flash (protected UI never renders before session confirmed)
- Session expired → triggers correct redirect + messaging

---

## 8) Project overrides (allowed)

Projects may override:

- module route list
- locale strategy
- auth mechanism (cookies vs tokens)

Projects must NOT override:

- guard layer order
- centralized `can()` authorization pattern

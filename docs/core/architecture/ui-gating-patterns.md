> **Purpose:** Standardize authorization gating across UI using a single capability-based helper (`can`) and SSOT mappings (no scattered role checks).  
> **Use when:** Implementing route guards, nav visibility, action gating, or data masking; reviewing PRs for auth drift.  
> **Applies to:** All projects with authentication/authorization.

# UI Gating Patterns (Core Default)

## 1) Principle

Never scatter ad-hoc role checks across UI.  
Centralize authorization in helpers and SSOT mappings.

---

## 2) Primary helper (required)

- Use `can(user, capability)` as the single gating function.
- Prefer capabilities over roles.
- Roles may exist, but UI must not branch on roles directly.

> Role → capability mapping belongs in SSOT (not inline in UI).

---

## 3) Where gating must be applied (required)

- **Routes/layouts:** enforce access early to prevent unauthorized content flash
- **Navigation:** show only destinations the user can access
- **Actions/CTAs/widgets:** guard sensitive controls and mutations
- **Data visibility:** filter/mask in UI and also enforce at service/repository layer when possible

---

## 4) Hide vs disable (default)

- Hide actions the user cannot perform (default).
- Disable only when:
  - the capability exists but state blocks the action, or
  - UX explicitly requires discoverability (and this is documented in UX Spec).

---

## 5) Route intent capabilities (pattern)

Protected routes must define an access intent capability, e.g.:

- `dashboard:view`
- `<module>:read`
- `<module>:manage`

Alignment rules:

- If a route requires `<module>:read`, the nav link must require the same.
- Manage-only actions inside a read screen must be gated by `<module>:manage` while the page remains accessible via `<module>:read`.

---

## 6) Navigation gating (core-safe)

Nav links render only when:

- session exists AND `can(user, capability)` is true for the destination

Auth-dependent UI:

- Session exists → show Profile/Logout (Settings optional)
- No session → show Login

---

## 7) SSOT placement (required)

Concrete capability keys, role mappings, and route definitions must be centralized (SSOT), e.g.:

- `src/lib/capabilities.ts`
- `src/lib/routes.ts`

---

## PR review checks

- No direct role checks in UI (`if (user.role === ...)` is forbidden).
- All gating uses `can(user, capability)`.
- Routes/layouts enforce access without unauthorized flash.
- Nav links match route intent capabilities.
- Actions are hidden by default when unauthorized.

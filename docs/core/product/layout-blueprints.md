> **Purpose:** Define the default layout architecture (runtime shell + UI chrome) so apps stay consistent, secure (no unauthorized flash), and easy to extend.  
> **Use when:** Designing app structure, implementing layouts, adding navigation, or writing UX/Architecture/Stories that reference layouts.  
> **Applies to:** All frontend projects.

# Layout Blueprints (Company Default)

This defines the default layout architecture for frontend apps.

---

## 1) Layout types (required)

### MainLayout (runtime shell)

**Purpose:** App-level wrapper for providers and bootstrapping.

MainLayout is responsible for:

- Global providers (Auth, Theme, i18n, query/data, etc.)
- Toast system (if enabled)
- Global modals/portals (if any)
- Bootstrap calls (restore session / get profile / warm caches)
- Error boundary (recommended)
- Rendering children (router outlet)

Rules:

- MainLayout must not own page chrome (header/sidebar/footer).
- MainLayout must not render protected chrome until session is confirmed (see `docs/core/architecture/routing-and-guards.md`).

### BaseLayout (default UI chrome)

**Purpose:** Standard UI frame for most protected screens.

Contains:

- Header
- Optional Sidebar
- Optional Footer
- Main content slot/container

Rules:

- BaseLayout is structure/chrome only (no business rules).
- Navigation items inside chrome must be capability-gated via `can(user, capability)` (see `docs/core/architecture/ui-gating-patterns.md`).

### AuthLayout (public/auth screens)

**Purpose:** Layout for login/auth flows.

Contains:

- Minimal chrome (brand mark optional)
- Centered content container
- Clean spacing + clear error states

Rules:

- Must not render protected navigation/chrome.
- Must support safe session-expired messaging when redirected.

### Optional: AdminLayout (only if needed)

Use only if admin screens require distinct chrome/navigation density.
Otherwise, use BaseLayout with gated admin nav groups.

---

## 2) Sidebar requirements (when BaseLayout includes sidebar)

If BaseLayout has a sidebar, it must support:

- **Sticky behavior:** sidebar remains visible while content scrolls
- **Collapsible toggle:** icons-only collapsed state + expanded labels state
- **Mobile behavior:** sidebar becomes a drawer overlay with header toggle button
- **Navigation structure:** grouped sections allowed; active route state clearly visible

Rules:

- Sidebar items must be gated via `can(user, capability)`.
- Collapsed state must remain keyboard accessible.

---

## 3) Header requirements (default)

Header must support:

- Primary navigation affordance (menu button if sidebar exists)
- User menu (Avatar/Name dropdown) with:
  - Profile (optional)
  - Logout (required)
  - Settings (optional)

Rules:

- Auth-dependent header content must respect session presence (no session → no user menu).
- Actions must be capability-gated where applicable.

---

## 4) Recommended composition

Typical composition:

- `MainLayout` wraps the router/runtime
- Routes render either:
  - `AuthLayout` for public/auth screens
  - `BaseLayout` for protected screens (with Header/Sidebar/Content)

Conceptual:

- MainLayout
  - Router
    - `/login` → AuthLayout
    - `/app/*` → BaseLayout

---

## PR review checks

- MainLayout contains providers/bootstrap only (no chrome).
- Protected chrome never renders before session is confirmed (no unauthorized flash).
- Nav and action visibility uses `can(user, capability)` (no role checks).
- Sidebar behavior meets sticky/collapse/mobile requirements when present.

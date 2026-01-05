> **Purpose:** Provide a single, universal baseline of UI framework conventions (state, side-effects, lifecycle, performance, a11y, errors) used when no framework presets exist.  
> **Use when:** Any UI project; UI Architecture and DEV implementation; when deciding where logic/state/side-effects should live.  
> **Applies to:** All projects and frameworks (unless overridden in project docs).

# Framework-Agnostic Conventions (Default)

These rules apply to any UI framework unless explicitly overridden by project docs.

---

## 1) Component design

- Keep components small and single-purpose.
- Prefer composition over inheritance.
- Extract complex logic into a dedicated layer (services, domain modules, stores/hooks/composables).
- Presentational components should not own business rules.

---

## 2) State & side-effects (hard guidance)

- Side-effects (API calls, storage, timers, subscriptions) must be centralized in a dedicated layer:
  - services/domain modules, or
  - feature-level controllers/stores/hooks (framework idiomatic)
- Avoid mixing data fetching deep inside presentational UI.
- Keep state close to usage:
  - local UI state stays local
  - shared cross-component state lives in feature/template containers (not pages)
- Do not leak side-effects across layers (no “random fetch” inside atoms/molecules).

---

## 3) Lifecycle policy (framework-agnostic)

- Lifecycle hooks must be used only for:
  - subscribing/unsubscribing resources
  - syncing external state (when unavoidable)
  - initiating effects that cannot be expressed declaratively
- Always clean up:
  - unsubscribe listeners
  - clear intervals/timeouts
  - cancel in-flight requests when the framework supports it
- Avoid lifecycle-driven “hidden workflows” (effects that implicitly mutate critical state without explicit user/system triggers).

---

## 4) Performance baseline

- Avoid unnecessary re-renders/re-computations.
- Prefer derived state over duplicated state.
- Use memoization/caching patterns provided by the framework only when needed (measure/observe first).
- Lazy-load heavy modules/components when appropriate.

---

## 5) Accessibility baseline

- Interactive controls must be keyboard accessible.
- Focus states must be visible and consistent.
- Icon-only actions must have accessible labels (e.g., `aria-label`).

(See: `docs/core/standards/a11y-standards.md` for detailed requirements.)

---

## 6) Error handling

- Handle async errors explicitly; no silent failures.
- Provide safe and actionable UI feedback (no sensitive info leakage).
- Log enough context to debug (action + scope), without secrets/PII.

(See: `docs/core/standards/coding-standards.md` for enforcement expectations.)

---

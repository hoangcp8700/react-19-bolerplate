> **Purpose:** Set a universal performance baseline (SSR-first mindset, minimal client JS, stable data loading) to keep apps fast and predictable.  
> **Use when:** Designing rendering/data strategies, building data-heavy screens, or reviewing dependency and bundle impact.  
> **Applies to:** All projects.

# Performance Standards (Non-Negotiables)

## 1) SSR-first mindset

- Prefer server-rendered output by default where the stack supports it.
- Keep the page layer composition-only and avoid pushing state/logic into route entrypoints.

## 2) Client islands only when needed

- Only use client-side components where interaction is required (search inputs, theme toggles, complex UI widgets).
- Avoid turning entire pages into client-rendered experiences for convenience.

## 3) Data loading rules

- Avoid over-fetching and repeated requests for the same data.
- Debounce user-driven search inputs (or use explicit submit) to reduce request spam.
- Pagination should be server-driven for large lists/data screens.

## 4) Keep bundles lean

- Avoid heavy dependencies unless justified by clear value.
- Prefer tree-shakeable, modular imports.
- Do not ship debug-only code to production (respect build tooling rules).

## 5) Stable rendering and state boundaries

- Keep state close to where it’s used; avoid global state for local UI needs.
- If multiple UI blocks need shared state, move it into a Feature/Template container (not the page).
- Prevent unnecessary re-renders by designing clean component boundaries.

## 6) UX performance guarantees (minimum)

- Always provide loading states for data fetching and submit actions.
- Use skeletons/spinners appropriately to avoid “blank screen” moments.
- Avoid unauthorized content flash on protected routes (also a UX/security concern).

## 7) Observability (recommended baseline)

- Prefer centralized error logging (safe, non-sensitive).
- Capture enough context to debug slow screens (route, action, request type) when a logging system exists.

## PR review checks

- Page remains composition-only; client islands are justified.
- Data screens use pagination and reduce request spam (debounce/submit).
- No new heavy dependencies without justification.
- Loading/empty/error states exist and feel responsive.

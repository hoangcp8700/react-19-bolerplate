> **Purpose:** Define universal UX non-negotiables (states, errors, access UX, a11y targets, responsiveness) that apply across all projects.  
> **Use when:** Writing UX Spec, UI Architecture, Stories, or reviewing UI changes for consistency and regressions.

# UX Guardrails (Non-Negotiables)

## 1) Access UX (protected areas)

- No unauthorized content flash on protected routes/screens.
- Protected chrome must not render until session is confirmed.
- Redirect behaviors must be consistent (see `docs/core/architecture/routing-and-guards.md`).

---

## 2) Required UI states (actions + data)

Any screen with async work must implement clear states:

### Actions (forms/mutations)

- `idle` → `submitting` (or `loading`) → `success` / `error`
- Prevent double-submit
- Safe error messaging (no sensitive details)

### Data screens (lists/details)

- `loading`
- `empty` (no dataset)
- `empty-results` (filters/search yield no matches)
- `error`

(See: `docs/core/standards/components/form-standards.md` and `docs/core/standards/components/table-contract.md`)

---

## 3) Error pages (brand-lite)

Projects must provide brand-lite pages or equivalents:

- `403` Forbidden
- `404` Not Found
- Session expired UX (either `/session-expired` page or messaging on redirect target)

Rules:

- Keep copy short, actionable, and localized if i18n exists.
- Offer a clear primary action (Back / Go Home / Login).

---

## 4) Accessibility target (required)

- Project must declare an accessibility target level.
- Default: **WCAG AA** unless overridden in project docs.

(See: `docs/core/standards/a11y-standards.md`)

---

## 5) Responsive target (required)

- Web responsive by default.
- Layout must support common breakpoints without horizontal overflow (except within approved horizontal-scroll containers like tables).

---

## 6) Form feedback consistency (required)

- Validate before submit (schema-driven).
- Show submit loading state.
- Success toast only if a toast system exists/enabled.
- Field-level errors + safe form-level error message for submission failures.

(See: `docs/core/standards/components/form-standards.md`)

---

## PR review checks

- No unauthorized flash on protected screens.
- All async screens have correct loading/empty/error states.
- 403/404/session-expired UX exists and is clear.
- A11y target declared; keyboard flow works for core paths.
- Forms follow consistent feedback behavior.

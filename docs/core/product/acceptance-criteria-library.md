> **Purpose:** Provide reusable, story-ready acceptance criteria packs so teams write consistent, testable AC without reinventing checklists per project.  
> **Use when:** Creating stories, refining AC from PRD/UX, or verifying DEV_SELF_VERIFY/QA for common feature types (auth, guards, tables, forms, i18n, a11y).

# Acceptance Criteria Library (Reusable Packs)

Pick relevant packs and tailor to the story context.
Do not duplicate DoD here — use `docs/core/governance/definition-of-done.md` for quality gates.

---

## Pack A — Auth, Session & Guards

- Login works with valid credentials.
- Invalid credentials show a safe error message.
- Session restore works (if applicable).
- Logout clears session and redirects appropriately.
- Unauthenticated access redirects to `/login?next=<path>` (preserve `next` when applicable).
- Session expired is handled with a reason (e.g., `reason=session_expired`).
- No unauthorized content flash on protected areas.

---

## Pack B — Forbidden & Not Found

- Authenticated but forbidden redirects to `/403` (or renders a forbidden screen).
- Not found routes render `/404` (or equivalent).

---

## Pack C — Capability Gating (UI + Actions)

- Restricted nav items are hidden by default.
- Restricted actions are hidden/disabled per UX rules.
- Authorization checks use centralized `can(user, capability)` only (no inline role checks).

---

## Pack D — Data Tables (Company Standard)

- Pagination exists and works correctly.
- Search exists and works correctly.
  - Search mode is explicitly chosen: `debounce` OR `enter`.
- Horizontal overflow is handled (no layout break).
- Columns have stable sizing (min-width where needed).
- Action column respects capability gating (hide by default).
- States exist and are distinct:

  - loading / empty / error / empty-results

- Optional sorting is behind a feature flag (if enabled).

---

## Pack E — Forms & Mutations (Company Standard)

- Schema validation exists and is enforced (no schema = not done).
- Form logic does not live in page files (page is composition-only).
- Submit UX:
  - loading while submitting/validating
  - disabled to prevent double-submit
  - success feedback (toast if enabled)
  - safe error messaging (field-level + form-level)
- Uses shared form contracts (`FormProvider`, `Field`, `Control`, `Submit`) when forms exist.
- Server errors and validation errors are distinct.

---

## Pack F — i18n & Copy (When Applicable)

- No hard-coded user-facing strings in feature UI.
- All visible copy uses the project i18n system (if enabled).
- Error messages are short, safe, and actionable.
- Routes/redirects preserve locale when locale routing exists.

---

## Pack G — Accessibility & UX States (Baseline)

- Core flows are usable via keyboard (tab/enter/esc where relevant).
- Icon-only actions have accessible labels.
- Loading/empty/error states exist where async work happens.

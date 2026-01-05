> **Purpose:** Provide a universal UI baseline (typography, tokens, spacing, components behavior) so projects look consistent and decisions don’t get re-litigated.  
> **Use when:** Setting up UI defaults, reviewing design/system consistency, building shared components, or writing UX/Architecture/Stories that reference UI rules.

# UI Foundation (Company Default)

This is the default UI baseline used across projects. Project overrides are optional and should be minimal.

---

## 1) Typography (default)

- Font family: **Inter** (primary UI font)
- Base font size: **16px**
- Line height:
  - Body: **1.5**
  - Headings: **1.2–1.3**
- Font weights:
  - Body: **400/500**
  - Headings: **600/700**
- Heading hierarchy (recommended):
  - H1: 28–32px / 700
  - H2: 22–24px / 700
  - H3: 18–20px / 600
  - Body: 14–16px / 400–500
- Text rules:
  - Prefer clear contrast and readable line lengths
  - Avoid overly tight letter spacing

---

## 2) Color system (default)

- Theme support: dark mode **must be supported** (project decides default in project docs)
- Use **semantic tokens** only (no hard-coded hex in components):
  - Surfaces: `bg`, `surface`, `muted`
  - Text: `text`, `text-muted`, `text-inverse`
  - Brand: `primary`, `primary-foreground`
  - Status: `success`, `warning`, `danger`, `info`
  - Borders/rings: `border`, `ring`
- Contrast rule: text must remain readable on all surfaces.

> Token implementation details are framework/design-system-specific, but the semantic naming is universal.

---

## 3) Spacing & layout rhythm (default)

- Spacing scale: **4px increments** (Tailwind-like rhythm)
- Page padding baseline:
  - Desktop: `px-6 py-6`
  - Tablet: `px-4 py-5`
  - Mobile: `px-4 py-4`
- Section spacing:
  - Between sections: `gap-6`
  - Between form fields: `gap-4`
- Use whitespace to separate meaning; avoid cramped UI.

---

## 4) Radius & shadows (default)

- Radius baseline: `md`
- Shadow policy (minimal):
  - Prefer borders first, subtle elevation second
  - Avoid heavy shadows for core workflows

---

## 5) Component behavior (baseline)

This section defines behavior expectations only. Component contracts live in `docs/core/standards/components/**`.

### Buttons

- Primary button must be visually distinct (brand emphasis).
- Secondary/ghost variants for non-primary actions.
- Buttons must support:
  - loading state (spinner + label)
  - disabled state
  - icon + text alignment
- Prevent double-trigger on loading/disabled.

### Inputs

- Consistent label + error rendering (prefer `Form.Field` contract when forms exist).
- Clear focus ring; avoid aggressive glow.

### Tables

- Tables must follow the Table Contract:
  - pagination required
  - search required (debounce or enter)
  - horizontal scroll supported
  - column `min-width` required
  - optional sorting behind a feature flag

(See: `docs/core/standards/components/table-contract.md`)

---

## 6) Motion (default)

- Keep animations subtle and short.
- Avoid distracting motion for core workflows.
- Respect reduced-motion preferences when the stack supports it.

---

## PR review checks

- No hard-coded hex colors inside feature components (tokens only).
- Typography and spacing follow baseline rhythm (no random one-offs without reason).
- Buttons/inputs/tables meet baseline behaviors and states.
- Motion is subtle and not blocking usability.

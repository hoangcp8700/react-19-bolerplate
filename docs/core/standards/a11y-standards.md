> **Purpose:** Define a minimal, universal accessibility baseline to prevent common UX regressions and ensure keyboard/screen-reader usability.  
> **Use when:** Building any interactive UI (forms, dialogs, menus, tables, navigation, toasts) or reviewing PRs.  
> **Applies to:** All projects.

# Accessibility Standards (a11y) (Non-Negotiables)

## 1) Keyboard access is mandatory

- All interactive elements must be reachable and usable via keyboard.
- Visible focus state must exist for interactive controls.
- Do not remove focus outlines unless replaced with an accessible equivalent.

## 2) Semantic HTML first

- Prefer semantic elements where possible (button/link/heading/list).
- Do not use `div`/`span` as buttons/links when a proper element/component exists.

## 3) Accessible names for controls

- Every input/control must have an accessible label (label text, `aria-label`, or `aria-labelledby`).
- Icon-only actions must include `aria-label`.
- Placeholder text is not a label.

## 4) Forms: errors must be perceivable

- Field errors must be tied to inputs (e.g., `aria-describedby`) when supported by the stack/components.
- Error messaging must be clear and non-sensitive.
- Required fields must be indicated consistently.

## 5) Dialogs/menus: focus management is required

- Dialogs/modals must trap focus while open and restore focus on close.
- ESC closes dialogs/menus where appropriate.
- Menus and dropdowns must support keyboard navigation (Arrow keys/Enter/Escape) when the UI library provides it.

## 6) Tables and data screens

- Tables must have clear column headers.
- Pagination/search controls must be keyboard accessible and labeled.
- Empty/loading/error states must be announced/visible (at least visually; ARIA live regions optional unless required).

## 7) Color and contrast

- Text and interactive controls must have sufficient contrast in both themes.
- Do not rely on color alone to convey status (use icons/text).

## PR review checks

- Can complete core flows with keyboard only (tab/shift-tab/enter/esc).
- All icon-only buttons have labels.
- Dialog focus behavior is correct (trap + restore).
- Form errors are visible and tied to fields.

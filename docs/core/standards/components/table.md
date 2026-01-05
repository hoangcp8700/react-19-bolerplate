> **Purpose:** Define the universal contract for any data table screen/component (features, states, and reuse rules) to prevent UX drift and inconsistent implementations.  
> **Use when:** Building or reviewing any list/table/CRUD screen or a reusable DataTable component.  
> **Applies to:** All projects with data tables.

# Table Contract (Non-Negotiables)

This applies to any **data table component/screen** used in the product.

---

## 1) Mandatory features

- Pagination is required.
- Search is required. Search mode must be one of:
  - `debounce` (auto search after typing pause)
  - `enter` (search only on Enter/click)
- Horizontal scroll must be supported.
- Columns must define `min-width` to prevent layout collapse.
- Action column must respect capability gating (**hide by default** when not allowed).

---

## 2) Optional (feature-flagged)

- Column sort:
  - Must be controlled by a flag/config to enable/disable.

---

## 3) Required states

- Loading
- Empty (no dataset)
- Error
- Empty-results (search yields no matches) must be distinct from Empty dataset.

---

## 4) Contract rule (reuse)

- If a shared `DataTable` component/type already exists, feature code must use its public types/props.
- Do not duplicate table query/pagination types inside features.

---

## PR review checks

- Pagination + search implemented with declared search mode.
- Horizontal scroll works with narrow viewports.
- Columns have `min-width` (no layout collapse).
- Action column is capability-gated (hidden when unauthorized).
- Loading/Empty/Error/Empty-results states are implemented and distinct.
- No duplicated table contracts/types in feature code.

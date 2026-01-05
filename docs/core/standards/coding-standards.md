> **Purpose:** Set universal coding quality baselines (type safety, formatting/linting, imports, error handling, required scripts).  
> **Use when:** Writing/reviewing code, defining repo tooling, or deciding whether a change can be merged.  
> **Applies to:** All projects (unless explicitly overridden in project docs).

# Coding Standards (Non-Negotiables)

These rules apply to all projects unless explicitly overridden in a project’s Brief/PRD.

---

## 1) Type safety & correctness

- Use the strictest reasonable compiler settings for the stack (e.g., TypeScript `strict: true`).
- Avoid `any`. If unavoidable, add a short justification comment and keep it scoped.
- Prefer explicit types at **module boundaries** (API clients, storage, auth, services).
- No unused exports, unreachable code, or dead code.

---

## 2) Formatting & linting

- Prettier is the single source of truth for formatting.
- ESLint is enforced. Lint/typecheck failures block merges.
- Do not downgrade type errors into warnings.

---

## 3) Imports

- Use path aliases; avoid deep `../../..` imports. (default: `@/component`,`@/api`, etc...)

- Keep imports stable and readable (group logically; remove unused).
- Do not create circular dependencies (refactor shared modules instead).

---

## 4) Error handling

- No silent catches. Errors must be surfaced appropriately:
  - UI: safe user-facing message (no secrets)
  - Logs: enough context to debug (action, entity, correlation info if available)
- Do not leak sensitive data (tokens, secrets, PII) into logs.

---

## 5) Required scripts (CI-ready)

Projects must provide these scripts (or equivalents), and they must be runnable in CI:

- `lint`
- `format` and/or `format:check`
- `typecheck`
- `test` (if tests exist)
- `build`

---

## PR review checks

- Change passes lint/format/typecheck/build (and tests if applicable).
- No new `any` without justification.
- No new duplicated utilities that belong in SSOT/shared modules.

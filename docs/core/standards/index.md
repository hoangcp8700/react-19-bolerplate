> **Purpose:** Define the mandatory standards-loading order and enforcement gates for UX Spec → Done.  
> **Use when:** Starting any role step from UX Spec onward; verifying compliance during handoff.

# Standards Manifest (Non-Negotiable)

From **UX Spec → Done**, the owner of each step MUST load and apply the standards below **before doing any work**.

---

## 1) Required load set (order of precedence)

1. `docs/core/governance/definition-of-done.md`
2. `docs/core/standards/*`
3. `docs/core/standards/components/*`
4. `docs/core/standards/framework/*`

Notes:

- `components/*` includes design-system/component contracts (forms/tables/etc.).
- `frameworks/*` applies only when a preset exists; otherwise use `framework-agnostic.md`.

---

## 2) Enforcement rules (hard gates)

- Do not proceed without explicitly stating:
  - `Standards Loaded: YES`
  - `Standards Applied: YES`
- If any rule must be broken, log an exception **before continuing**:
  - `docs/core/decision-log.md`

---

## 3) Process gates (UX Spec → Done)

Role handoffs and evidence requirements are defined in:

- `docs/Playbook.md#4-role-gated-workflow-ux-spec--done`

Apply those gates **in addition to** this standards manifest.

---

## 4) Standards Map

| Path                                                   | Purpose                                                           |
| ------------------------------------------------------ | ----------------------------------------------------------------- |
| `docs/core/standards/coding-standards.md`              | Baseline coding conventions for all code.                         |
| `docs/core/standards/ssot-standards.md`                | SSOT rules for routes/messages/config/roles/constants.            |
| `docs/core/standards/page-layer.md`                    | Pages are composition-only; no UI state/logic in page layer.      |
| `docs/core/standards/component-architecture.md`        | Atomic architecture + state ownership boundaries.                 |
| `docs/core/standards/a11y-standards.md`                | Minimum accessibility rules to prevent regressions.               |
| `docs/core/standards/performance-standards.md`         | Performance baseline (SSR-first, client islands, bundle hygiene). |
| `docs/core/standards/rendering-strategy.md`            | Require an explicit project-wide rendering decision .             |
| `docs/core/standards/components/form-standards.md`     | Non-negotiable form rules.                                        |
| `docs/core/standards/components/form-stack.md`         | Declares form + schema libs (no guessing).                        |
| `docs/core/standards/components/table-contract.md`     | Non-negotiable table/data screen rules.                           |
| `docs/core/standards/frameworks/framework-agnostic.md` | Fallback conventions when no preset exists.                       |
| `docs/core/standards/frameworks/<framework>.md`        | Framework-specific preset (when available).                       |

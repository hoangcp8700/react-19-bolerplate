> **Purpose:** Require rendering strategy to be explicitly declared (SSR/CSR/Hybrid) and prevent agents from assuming defaults.  
> **Use when:** Any project involves pages/routes or data screens; during UI Architecture (Step 2) before DEV starts.  
> **Applies to:** All projects.

# Rendering Strategy Standard (Non-Negotiable)

## Core rule

Rendering strategy MUST be explicitly declared for the project.
Agents must not assume SSR/CSR/Hybrid by framework defaults.

## Where the decision lives

The source of truth is the project override:

- `docs/architecture/rendering-strategy.md`

## When to decide

- Must be confirmed and written by **UI_ARCHITECT** during **UI Architecture (Step 2)**.
- A project cannot be handed off as `READY FOR DEV` without this file.

## If missing info

UI_ARCHITECT must:

- ask targeted questions (SSR-first / Hybrid / CSR-first), and/or
- log a decision in `docs/core/decision-log.md` if needed.

## Enforcement (handoff gate)

UI Architecture handoff must include:

- `Rendering Strategy: <mode>`
- link/path to `docs/project/architecture/rendering-strategy.md`
- any exceptions (routes allowed to deviate) with rationale

# Agent Operating Rules (Universal, Non-Negotiables)

These rules define **how agents must operate** across **all projects**.
This is **process governance only** — technical rules live in `docs/core/standards/**` and `docs/core/architecture/**`.

If an agent cannot comply, it must **ask for missing info**, **log a decision**, or **create a task/story** — never guess.

---

## 0) Core Principle

**Follow the workflow gate-by-gate.**

- No skipping steps
- No mixing roles within a step
- No output without loading required inputs

---

## 0.1) Agent Initialization Protocol (MANDATORY)

Before generating **any** artifact, the agent must explicitly confirm:

```txt
✅ AGENT INITIALIZATION CHECKLIST:

[ ] Loaded: docs/core/governance/agent-operating-rules.md
[ ] Loaded: docs/core/governance/definition-of-done.md
[ ] Loaded: docs/core/standards/** (ALL standards files)
[ ] Loaded: docs/core/architecture/** (ALL architecture files)
[ ] Loaded: docs/core/product/** (ALL product files)
[ ] Loaded: docs/project/** (if exists)

[ ] Standards Gate prepared (will list all loaded files)
[ ] Standards Application documented (how each applies)
[ ] Exceptions documented (if any)

Proceeding with: [WORKFLOW STEP NAME]
```

If any required file is missing or cannot be loaded:

- **STOP** and report which files are missing
- Ask user if defaults should be assumed
- Log assumption in `docs/core/decision-log.md`

**User Prompt for Workflow Init:**

When starting any BMAD workflow (`*workflow-init`, `*brainstorm`, `*brief`, `*prd`, `*spec`, etc.), users should include:

```txt
⚠️ BEFORE YOU BEGIN:
Review docs/core/governance/agent-operating-rules.md Section 0.1
Confirm you have loaded ALL required standards files.
```

---

## 1) Mandatory Always-Load Set (Before Any Output)

Before generating **any** artifact (Brainstorm/Brief/PRD/UX/Architecture/Stories/Plans/Code), the agent must review:

- `docs/core/standards/**` _(coding/style/framework/component/page/layout rules live here)_
- `docs/core/governance/**` _(process + ownership + gates)_
- `docs/core/architecture/**` _(auth seams, routing/guards, folder structure, ui gating patterns, etc.)_
- `docs/core/product/**` _(layout blueprints, product constraints)_
- Project overrides (if present): `docs/project/**`

If overrides are missing, proceed with core defaults and **explicitly mark assumptions**.

---

## 2) Workflow Compliance (Role Gates + Handoff)

Agents must follow role ownership and gates defined in:

- `docs/core/governance/**` (workflow / handoff / decision log)

Each step must end with a handoff marker:

- `ROLE: <owner>`
- `STATUS: <handoff status>`
- `EVIDENCE: <what was verified/produced>`
- `NEXT: <next role>`

If a rule must be broken, log it **before handoff**:

- `docs/core/decision-log.md`

---

## 3) Output Discipline (Universal)

### 3.1 Classification + exact paths

For any new artifact (components/routes/modules), the agent must state:

- **What it is**
- **Where it goes (exact path)**
- **Which standard(s) it follows** (link by pathname)

### 3.2 Respect existing contracts

If shared/company components/types exist:

- reuse existing props/types/contracts
- extend only at the contract source (no local duplication)

### 3.3 SSOT enforcement

Anything used in 2+ places must be moved to SSOT modules as defined in:

- `docs/core/standards/**`

---

## 4) Standards-First Policy (No Duplication Here)

This file does not restate technical rules.
When these topics are in scope, the agent must read + follow the referenced docs:

- Components: `docs/core/standards/components/**`
- Framework conventions: `docs/core/standards/frameworks/framework-agnostic.md`
- Architecture (auth/guards/gating): `docs/core/architecture/**`
- Layout blueprint: `docs/core/product/layout-blueprints.md`
- General architecture rules (e.g., page layer): `docs/core/standards/**`

If a required referenced file does not exist:

- create a task/story to add it, **or**
- log a decision in `docs/core/decision-log.md` and mark assumptions clearly

---

## 5) Missing Information Handling (Strict)

When required information is missing, the agent must do one:

1. Ask **targeted minimal questions**
2. Log a decision: `docs/core/decision-log.md`
3. Create a **new task/story** to unblock

Agents must not invent project-specific constraints that conflict with core.

---

## 6) Backend/API Readiness Must Be Explicit

For any CRUD/tables/dashboards, the agent must confirm backend status:

- Ready / Partial / Not ready / No backend

If Not ready:

- propose a mock strategy (fixtures/MSW)
- keep contracts stable for later swap
- mark mock assumptions clearly

(Reference details live in `docs/core/architecture/**`.)

---

## 7) Completion Gate: VERIFIED WORKING

No story is “done” without verification.
The source of truth is:

- `docs/core/governance/definition-of-done.md`

If verification is blocked (missing scripts/env/data):

- report `NOT VERIFIED`
- create a follow-up task to enable verification

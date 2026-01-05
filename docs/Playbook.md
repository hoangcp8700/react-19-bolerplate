# BMAD Playbook (Company Standard)

This Playbook defines how we run BMAD end-to-end and how work is handed off across roles until a story is Done.
It is governance/process-first. Technical rules live in `docs/core/standards/**` and `docs/core/architecture/**`.

---

## 1) What BMAD Is

BMAD is a spec-first workflow that produces a predictable chain of artifacts:

Brainstorm → Brief → PRD → UX Spec → UI Architecture → Sharded Docs → Stories → DEV → DEV_VERIFY → QA → Close

Goal:

- reduce ambiguity
- standardize decisions
- keep execution fast and consistent

---

## 2) Company Core Rails (Read-First)

Core baseline is `docs/core/**` and must be treated as the default truth.

Before generating any artifact, agents MUST load:

- Standards: `docs/core/standards/**`
- Governance: `docs/core/governance/**`
- Architecture: `docs/core/architecture/**`
- Product rules: `docs/core/product/**`
- Project overrides (if any): `docs/project/**`

Detailed agent behavior: `docs/core/governance/agent-operating-rules.md`

---

## 3) Workflow Overview (Greenfield UI)

This workflow is role-gated from UX Spec onward (single owner per step; no skipping).

| Phase           | Owner         | Primary Output                      |
| --------------- | ------------- | ----------------------------------- |
| Brainstorm      | Analyst/BA    | `brainstorm.md`                     |
| Brief           | Analyst/BA    | `brief.md`                          |
| PRD             | PM            | `prd.md`                            |
| UX Spec         | UX            | `frontend-spec.md` (or equivalent)  |
| UI Architecture | UI_ARCHITECT  | `ui-architecture.md`                |
| Shard Docs      | PO/PM         | `docs/prd/*`, `docs/architecture/*` |
| Stories         | SM            | `docs/stories/*`                    |
| Implementation  | DEV           | Code + notes                        |
| Dev Self-Verify | DEV_VERIFY    | Verification evidence               |
| QA Verify       | QA            | QA report                           |
| Close Story     | PM/PO/Release | Done confirmation                   |

---

## 4) Handoff Contract (Mandatory)

Every step MUST end with this template:

```txt
ROLE: <OWNER_ROLE>
INPUTS: <what you used from previous step>
WORK: <what you did>
OUTPUTS: <deliverables>
EVIDENCE: <proof: logs/checklists/screenshots if required>
STATUS: READY FOR <NEXT_ROLE>
HANDOFF NOTE: <what the next role needs>
```

Exceptions must be logged BEFORE handoff:

- `docs/core/decision-log.md`

---

## 5) Role-Gated Execution (UX Spec → Close)

### Step 1 — UX Spec (Owner: UX)

- Must follow: `docs/core/standards/**` + `docs/core/product/**`
- Output: screen flows + states + edge cases + gating UX
- Complete when: `STATUS: READY FOR UI_ARCHITECT`

### Step 2 — UI Architecture (Owner: UI_ARCHITECT)

- Gate: must read/apply `docs/core/standards/**` (incl. `docs/core/standards/components/**`)
- Output (high-level only; details live in standards):

  - component breakdown (templates/organisms/molecules/atoms)
  - server/client split + state ownership
  - routing + permission gating approach
  - references to relevant standards files by pathname

- Rendering strategy must be declared in docs/architecture/rendering-strategy.md before READY FOR DEV
- Complete when: `STATUS: READY FOR DEV`

### Step 3 — Implementation (Owner: DEV)

- Implement exactly per story + architecture.
- Must follow: `docs/core/standards/**`, `docs/core/architecture/**`
- Complete when: `STATUS: READY FOR DEV_VERIFY`

### Step 4 — Dev Self-Verify (Owner: DEV_VERIFY)

- Verification must follow DoD: `docs/core/governance/definition-of-done.md`
- Complete when: `STATUS: READY FOR QA`

### Step 5 — QA Verify (Owner: QA)

- Verify against AC + UX Spec + regressions.
- QA gate references DoD: `docs/core/governance/definition-of-done.md`
- Pass → `STATUS: READY FOR CLOSE`
- Fail → `STATUS: BACK TO DEV` with bug list + repro

### Step 6 — Close Story (Owner: PM/PO/Release)

- Confirm QA pass + evidence attached + decision-log links if any exceptions
- Complete when: `STATUS: DONE`

---

## 6) Story “Done” Definition (Company Baseline)

DoD is the only source of truth for “Done”:

- `docs/core/governance/definition-of-done.md`

Key rule:

- DEV must pass self-verify before QA verify (DoD-enforced).

---

## 7) Init + Integrate BMAD Into a New Project

1. Install BMAD:

```bash
npx bmad-method install
```

2. Copy `docs/core` into the repo root (next to `node_modules`).

3. Start workflow init:

```txt
*workflow-init
```

4. Produce artifacts in order:
   Brainstorm → Brief → PRD → UX → UI Architecture → Shard → Stories → DEV → Verify → QA → Close

---

## 8) Drift Prevention (Rules of Thumb)

- Follow: `docs/core/governance/agent-operating-rules.md`
- Do not restate standards inside artifacts; **reference pathnames** instead.
- If requirements change: update upstream docs first (PRD/UX/Architecture), then regenerate stories.
- If a standard must be broken: log it in `docs/core/decision-log.md` before handoff.

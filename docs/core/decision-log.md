# Decision Log

Record key decisions and any standards exceptions.  
If a standard must be broken, log it here **before** handoff.

---

## Index (Quick Scan)

| ID              |       Date | Status   | Area                   | Title                                                              |
| --------------- | ---------: | -------- | ---------------------- | ------------------------------------------------------------------ |
| DL-20260103-001 | 2026-01-03 | Accepted | Tooling                | Yarn-only package manager                                          |
| DL-20260103-002 | 2026-01-03 | Accepted | Rendering/Architecture | SSR-first + thin Page layer (composition-only)                     |
| DL-20260103-003 | 2026-01-03 | Accepted | Auth                   | MVP uses mock auth (fixtures)                                      |
| DL-20260103-004 | 2026-01-03 | Accepted | Standards Structure    | Component standards live under `docs/core/standards/components/**` |
| DL-20260103-005 | 2026-01-03 | Accepted | Forms                  | Form stack must be declared (form lib + schema lib) before DEV     |

---

## How to write a decision (Template)

### DL-YYYYMMDD-###

- **Date:** YYYY-MM-DD
- **Status:** Proposed | Accepted | Superseded
- **Area:** (e.g., Tooling / Auth / UI / Data / Standards / Performance)
- **Context:** Why this decision is needed (1–3 lines).
- **Decision:** What we will do (clear + direct).
- **Options considered:** (bullet list; optional but recommended)
- **Consequences:** Trade-offs / impacts (short bullets).
- **References:** Links/paths to standards/docs/stories (pathnames only).

---

## Decisions

### DL-20260103-001

- **Date:** 2026-01-03
- **Status:** Accepted
- **Area:** Tooling
- **Title:** Yarn-only package manager
- **Context:** Consistent DX across all projects and automation steps.
- **Decision:** Use **Yarn only** for installs, scripts, and CLIs. No pnpm usage.
- **Consequences:**
  - All docs/scripts must use `yarn ...`
  - Agents must not output `pnpm` / `pnpm dlx`
- **References:**
  - `docs/core/governance/agent-operating-rules.md`

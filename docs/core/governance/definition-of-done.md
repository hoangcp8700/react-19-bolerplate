# Definition of Done (DoD) (Company Baseline)

A story is **Done** only when all requirements below are satisfied.
DoD is a **process gate**: every handoff must include the verification evidence for that stage.

---

## 1) Functional completion

- Acceptance Criteria are met and demonstrably working.
- Story-defined edge cases are handled.

---

## 2) Quality gates (required)

- `lint` passes
- `format:check` passes (or equivalent)
- `typecheck` passes
- `test` passes (if present for the story scope)
- `build` passes

---

## 3) UX guarantees (when applicable)

- No unauthorized content flash on protected areas.
- Loading/empty/error states exist where relevant.
- Submit actions prevent double-submit and provide success/error feedback.

---

## 4) Review & traceability

- Code review completed (or explicitly marked ready for review where applicable).
- Exceptions are documented and approved (if any).
- Docs updated if decisions changed (PRD/UX/Architecture/Decision Log).

---

## 5) Minimum manual validation (required)

- Happy path verified
- Failure path verified
- Permission/role gating verified (if relevant)

---

## 6) Role-based verification gates (mandatory)

### DEV Self-Verify (must happen BEFORE QA)

DEV must complete all applicable items in sections (1)–(5) and provide evidence:

- command outputs (or CI logs): lint/format/typecheck/test/build
- short smoke notes: happy path + failure path + role gating (if relevant)

DEV must not hand off to QA as verified if self-verify is not complete.
If verification is blocked (missing env/scripts/data) → report `NOT VERIFIED` and create a follow-up task to enable verification.

### QA Verify (after DEV self-verify)

QA verifies end-to-end against Acceptance Criteria and key flows:

- regression spot-check on affected areas
- role/permission checks where relevant
- confirm no UX breakages (loading/error states, unauthorized flash)

QA does not replace DEV self-verify; QA is the second gate.

---

## 7) Handoff evidence (required)

Every handoff must include:

- what was verified
- how it was verified (commands/logs + manual checks)
- known limitations or exceptions (with links)

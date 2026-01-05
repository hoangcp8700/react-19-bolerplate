> Purpose: PR review checklist to prevent regressions and enforce core rails.
> Use when: Opening a PR, reviewing a PR, or doing DEV_SELF_VERIFY before QA.

# PR Checklist (Method)

## Required gates

- Standards gate: `docs/core/standards/index.md`
- DoD gate: `docs/core/governance/definition-of-done.md`
- Exceptions: `docs/core/decision-log.md`

## Checklist

- [ ] Scope matches the story (no silent expansion)
- [ ] Standards Loaded/Applied/Exceptions are recorded
- [ ] SSOT used for routes/messages/config/capabilities where applicable
- [ ] Page layer has no UI state/business logic
- [ ] Forms follow form standards (schema + provider/field/control/submit; no raw primitives in forms) (optional)
- [ ] Tables follow table contract (pagination + search + states + horizontal scroll + min-width) (optional)
- [ ] Auth/guards prevent unauthorized flash; gating uses `can()`
- [ ] i18n applied where enabled (no hard-coded strings) (optional)
- [ ] A11y baseline met (keyboard + labels + focus)
- [ ] Performance baseline met (no accidental client-bloat; minimal client islands)
- [ ] Verification evidence attached (commands + smoke notes); NOT VERIFIED if blocked

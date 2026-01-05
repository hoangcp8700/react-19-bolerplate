> Purpose: Entry point for BMAD Company Core. Explains what core is, what to read first, and how projects override it safely.
> Use when: Bootstrapping a new repo, onboarding contributors, or running `*workflow-init`.

# BMAD Company Core

`docs/core/` is the company baseline. Treat it as read-only.
Projects customize behavior via `docs/project/**`, not by editing core.

## Start here (required)

1. Standards manifest: `docs/core/standards/index.md`
2. Governance rules: `docs/core/governance/agent-operating-rules.md`
3. Architecture defaults: `docs/core/architecture/**`
4. Product defaults: `docs/core/product/**`

## Templates

Process templates live in: `docs/core/templates/**`

## Project overrides

Project-owned inputs live in: `docs/project/**`
Recommended: `docs/project/project-overrides.md`

## Exceptions

If any core rule must be broken, log it before handoff:

- `docs/core/decision-log.md`

## More details

See: `docs/core/guide.md`

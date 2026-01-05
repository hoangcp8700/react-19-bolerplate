> Purpose: Define how to slice PRD/UX/Architecture into executable stories with minimal coupling.
> Use when: Creating a story backlog from sharded docs.

# Slices (Method)

## Gates (reference only)

- Standards: `docs/core/standards/index.md`
- DoD: `docs/core/governance/definition-of-done.md`
- AC packs: `docs/core/product/acceptance-criteria-library.md`

## Slicing principles

- Slice vertically by user value (screen + states + gating + data contract)
- Keep stories independently verifiable end-to-end
- One owner per step; each story must reach VERIFIED WORKING before moving on
- Avoid tech-only slices unless they unlock multiple slices

## Default slices for CRUD apps

- Slice A: Auth + session restore + routing guards + 403/404/session-expired
- Slice B: App shell layouts + navigation gating (BaseLayout/AuthLayout)
- Slice C: Module list screen (table contract: search/pagination/states)
- Slice D: Module detail screen (read-only)
- Slice E: Module create/edit (form contract: schema + submit UX + errors)
- Slice F: Cross-cutting SSOT modules (routes/messages/capabilities) when needed
- Slice G: i18n wiring (if enabled) and copy coverage
- Slice H: a11y/performance cleanup only if it’s blocking DoD

## Definition of a “good slice”

- Clear goal + scope in/out
- Uses AC packs
- Has explicit verify focus (happy + negative + gating)
- Touches the smallest set of folders possible

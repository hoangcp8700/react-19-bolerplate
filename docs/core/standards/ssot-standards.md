> **Purpose:** Define how to centralize shared values (routes/messages/config/constants) to avoid duplicated literals and drift.  
> **Use when:** A value is reused across files/features (2+ places) or affects navigation, copy, config, or permissions.

# Single Source of Truth (SSOT) Standards (Non-Negotiables)

## Core rule

If a value is used in **2+ places**, it must live in an SSOT module.  
No scattered literals across files (route strings, status strings, magic numbers, error copy).

## What must be SSOT

Create dedicated modules for:

- **Routes:** paths, route IDs, navigation items
- **Config:** env-driven settings, runtime config, feature flags
- **Messages:** UI copy, error messages, empty states
- **Constants:** statuses, roles, capabilities, permission keys

## Type safety (required)

- Prefer `as const` and derive unions from keys for stable typing.
- Export typed helpers instead of repeating string literals.

## Placement (recommended)

- `src/lib/routes.ts`
- `src/lib/messages.ts`
- `src/lib/config/index.ts`
- `src/lib/constants/*`

## PR review checks

- Status/role/capability keys are never duplicated inline.
- Numbers with meaning (timeouts, thresholds) are named and centralized.

> **Purpose:** Declare the project’s rendering strategy (SSR/CSR/Hybrid) so implementation is consistent and non-ambiguous.  
> **Use when:** UI Architecture (Step 2) and anytime rendering rules change.  
> **Applies to:** This project only.

# Rendering Strategy (Project Override)

## Mode (required)

- Mode: SSR-first | Hybrid | CSR-first

## Page layer rule (required)

- Pages are composition-only (see `docs/core/standards/page-layer.md`).

## Client islands policy (required)

List the only UI areas allowed to be client-side:

- <example> Search input (debounce/enter)
- <example> Pagination controls
- <example> Theme toggle
- <add more as needed>

## Data fetching & caching policy (required)

- Default fetch/cache behavior: <no-store | revalidate | cache>
- Pagination/search endpoints: <policy>
- Mutation behavior (after create/edit): <revalidate/redirect strategy>

## Allowed exceptions (optional)

If any route deviates from the mode, list it here:

- Route: </path>
  - Exception: <why>
  - Constraints: <what is allowed / not allowed>

## Change log

- YYYY-MM-DD: <what changed and why>

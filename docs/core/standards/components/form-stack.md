> **Purpose:** Declare the project’s form + validation libraries so agents integrate correctly (no guessing, no mismatched adapters).  
> **Use when:** Forms exist in scope; must be completed during UI Architecture (Step 2) before DEV starts.  
> **Applies to:** Any project that includes forms.

# Form Stack Declaration (Required)

When forms exist in scope, this file MUST be filled.  
If missing, UI_ARCHITECT must ask and update it before `READY FOR DEV`.

---

## Chosen stack (required)

- Form state library: <REQUIRED>
- Validation schema library: <REQUIRED>
- Resolver/adapter (if applicable): <REQUIRED or N/A>
- Notes (optional): <any constraints, e.g., SSR, server actions, async validation>

---

## Defaults (use only if user did not specify)

- React/Next.js: React Hook Form + Zod (`@hookform/resolvers/zod`)
- Vue: vee-validate + Zod/Yup (via vee-validate schema adapters)
- Svelte: Felte + Zod/Yup (via Felte validator extensions)

---

## Handoff requirement (UI Architecture gate)

UI_ARCHITECT handoff must include:

- `Form Stack: <form lib> + <schema lib> (+ adapter)`
- link/path to this file

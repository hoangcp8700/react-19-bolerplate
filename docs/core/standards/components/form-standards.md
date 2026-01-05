> **Purpose:** Define universal, non-negotiable form rules (schema validation, UX gates, reuse/ownership, and required form building blocks).  
> **Use when:** Any form exists in scope; during UI Architecture (Step 2) and DEV implementation/review.  
> **Applies to:** All projects with forms.

# Form Standards (Non-Negotiables)

## 0) Hard Architecture Rule: No form logic in Pages

Pages/routes are **composition-only** (see `docs/core/standards/page-layer.md`).

**Therefore:**

- Pages MUST NOT own form state, validation, submit handlers, or error handling.
- Pages MAY render a `Feature` or `Template` that contains the form.
- All form logic must live in:
  - `src/features/<feature>/**` (preferred), or
  - `src/components/templates/**` (acceptable for smaller apps)

---

## 1) Form stack must be declared (no guessing)

Before DEV starts, the chosen form libraries MUST be declared in:

- `docs/core/standards/components/form-stack.md`

This declaration must include:

- Form state library (e.g., React Hook Form / Felte / vee-validate)
- Schema validation library (e.g., Zod / Yup / Valibot)
- Resolver/adapter (if applicable)

If missing, UI_ARCHITECT must ask and fill it before `READY FOR DEV`.

---

## 2) Schema validation is mandatory

- Every form MUST have a schema. No schema = not done.
- Required fields, formats, min/max, and cross-field rules live in the schema (not inline).

---

## 3) Submit UX is mandatory

- Submit must:
  - show loading while validating/submitting
  - disable to prevent double-submits
- Post-submit feedback:
  - success: toast if the project has a toast system
  - error: field-level errors + a safe form-level error message
- No silent failures.

---

## 4) Consistent UI primitives

Inside forms, use shared UI components when available.

- Do not use raw `<input>`, `<select>`, `<textarea>`, `<button>` inside form containers (Fail PR).
- Keep validation errors and server errors distinct.

---

## 5) Validation reuse & ownership

- No duplicated validation helpers across forms/components.
- Reusable validation helpers live in one shared module:
  - `src/lib/utils/validation.ts` (framework-agnostic)
  - adapters per framework/library only if needed
- Schemas must be centralized per feature:
  - `src/features/<feature>/schemas.ts` (preferred)
  - or `src/schema/<feature>.ts`
- Naming:
  - Helpers: `isValidPhone`, `requiredTrimmedString`, `normalizeCurrency`
  - Schemas: `<FormName>Schema` (e.g., `CreateProductSchema`)
- Change policy:
  - Update helper/schema files only; UI must import schemas, not recreate them inline.

---

## 6) Required Form Building Blocks (project UI contract)

Any project that includes forms MUST provide these building blocks under a shared Form module:

- `Form.FormProvider` — provides form instance/context
- `Form.Field` — renders a field using the shared contract, binds a UI control (Input/Select/Textarea/etc.) to the form
- `Form.Submit` — standardized submit button behavior (loading/disabled)

If the project does not have these yet, UI_ARCHITECT must create a story/task to add them before feature forms are implemented.

---

## 7) Example pattern (idea, not exact library)

The goal is: schema + form instance + provider + fields + standardized submit.

```tsx
// feature/schema.ts
export const LoginSchema = /* Zod/Yup/Valibot schema */;

// feature/LoginForm.tsx (Feature/Template - NOT in page)
const formInstance = createForm({
  initialValues: { email: "", password: "" },
  schema: LoginSchema,
  onSubmit: async (values) => { /* submit */ },
  onError: (errors) => { /* map errors */ },
});

<Form.FormProvider formInstance={formInstance}>
  <Form.Field
    name="email"
    label="Email"
    component={Textfield}
    type="email"
    placeholder="Enter Email"
  />

  <Form.Field
    name="password"
    label="Password"
    component={Textfield}
    type="password"
    placeholder="Enter Password"
  />

  <Form.Submit>Submit</Form.Submit>
</Form.FormProvider>
```

✅ Page usage (composition-only):

```tsx
// page.tsx
export default function LoginPage() {
  return <LoginFeature />; // Feature owns the form logic
}
```

---

## PR review checks

- No form state/handlers/validation exist in page files.
- Form stack is declared in `form-stack.md` and followed.
- Schema exists and is imported (not recreated inline).
- Submit UX: loading + disabled + success/error feedback.
- Raw primitives are not used inside form containers.
- Form module provides Provider/Field/Control/Submit (or a task exists to add them).

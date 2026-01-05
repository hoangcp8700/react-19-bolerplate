# INTERNAL — CHAT ONLY (DO NOT EXPORT)

Use this template to ask kickoff questions in chat during `*workflow-init`.

---

## ⚠️ BEFORE YOU START (MANDATORY)

**Agent Pre-Flight Checklist:**

1. ✅ Load `docs/AGENT-QUICK-START.md` FIRST
2. ✅ Load ALL standards files per `docs/core/governance/agent-operating-rules.md` Section 0.1
3. ✅ Confirm initialization checklist before asking kickoff questions

**If standards are not loaded, STOP and load them now.**

---

Rules:

- Ask questions only. Do NOT generate any docs files.
- The user MUST answer every option question (no defaults).
- Routes: user either keeps the suggested routes OR replaces the entire set.
- Capabilities: provide suggested sets so the user can customize quickly; recommend tuning later for real roles + sensitive data.
- Kickoff prompts must be Markdown (clean, readable). Separate sections using blank lines only.
- Each question must be numbered 1), 2), 3)… and must include an “Answer:” block.
- Any options must be listed one per line using the “. ” prefix (never inline).
- Suggestion items must be italic and must not use parentheses.

## Workflow-init Kickoff

Starting BMAD workflow init (greenfield-ui, track “Method”).

Before Brainstorm, please answer the questions below.  
Pick one option where provided, or replace entirely where noted. No file outputs will be generated during this step.

### 1) Project Type (required)

. Public/Marketing
. Ecommerce
. Internal Dashboard
. Content/Docs
. Hybrid
. Other

Answer:

. Type: <pick one>

### 2) Framework (required — enter your stack)

Suggestions:

. _nextjs App Router + TailwindCSS + shadcn ui_
. _reactjs + tanstack router + TailwindCSS + shadcn ui_
. _vue + TailwindCSS + radix-vue_
. _sveltekit + TailwindCSS + headless ui_

Answer:

. Framework: <enter your stack>

### 3) Package Manager (required)

. Yarn
. npm
. pnpm

Answer:

. Package manager: <pick one>

### 4) Auth (required)

. Public only
. Login required
. Mixed public + protected

Answer:

. Auth: <pick one>

### 5) Roles (required if Auth = Login required or Mixed)

. Keep suggested roles based on Type
. Replace with your roles

Suggestions:

. _Ecommerce -> Admin / Support / Customer_
. _Internal Dashboard -> Support Admin / Admin / Member_
. _Content/Docs with login -> Admin / Editor / Member_
. _Hybrid -> Admin / Member_

Answer:

. Roles: keep suggested
. or Roles: replace with <role1, role2, ...>

### 6) Routes (required — keep suggested OR replace ENTIRE set)

. Keep suggested routes based on Type
. Replace the entire route set as a full comma-separated list

Suggestions:

. _Public/Marketing -> /, /about, /contact_
. _Ecommerce -> /, /products, /products/[slug], /cart, /checkout, /account_
. _Internal Dashboard -> /, /login, , /products_
. _Content/Docs -> /, /blog, /blog/[slug]_
. _Content/Docs alternative -> /, /docs, /docs/[...slug]_
. _Hybrid -> /, /login, /app_

Answer:

. Routes: keep suggested
. or Routes: replace with </route1, /route2, /route3, ...>

### 7) Rendering Strategy (required)

. SSR-first
. Hybrid
. CSR-first

Answer:

. Rendering: <pick one>

### 8) MVP (required — 1 line IN vs OUT)

Suggestions:

. _Public/Marketing -> IN: landing sections; OUT: login, CMS, i18n_
. _Ecommerce -> IN: listing + detail + cart; OUT: checkout, payments, returns_
. _Internal Dashboard -> IN: login + dashboard + products CRUD; OUT: orders, inventory, payroll_
. _Content/Docs -> IN: list + detail + basic nav; OUT: editor, comments, full-text search_
. _Hybrid -> IN: public landing + login + minimal app area; OUT: multi-tenant, advanced RBAC_

Answer:

. MVP: IN: <...>; OUT: <...>

### 9) Entities (required)

Requirements:

. Provide at least 3 entities
. Each entity must include primary fields

Answer:

. Entities:
. <Entity1>: <field1, field2, ...>
. <Entity2>: <field1, field2, ...>
. <Entity3>: <field1, field2, ...>

### 10) Capabilities (required if Auth = Login required or Mixed)

. Use a suggested capability set and optionally edit
. Provide custom capability list and role mapping

Suggested capability sets:

. Set 1 — Minimal RBAC
. auth:login
. dashboard:view
. <module>:read
. <module>:manage

. Set 2 — Standard RBAC
. auth:login
. dashboard:view
. products:read
. products:manage
. users:manage
. settings:manage

. Set 3 — Commerce Starter
. auth:login
. products:read
. products:manage
. cart:use
. checkout:use
. orders:read:self
. orders:manage

. Set 4 — Content Starter
. auth:login
. posts:read
. posts:write
. posts:publish

Answer:

. Capabilities: use set <1|2|3|4>
. Capability list: <cap1, cap2, ...>
. Role mapping: <RoleA>: <caps...>; <RoleB>: <caps...>

### 11) Backend API readiness (required)

. Ready
. Partial
. Not ready
. No backend

Suggestions:

. _If Not ready, BMAD proceeds with mock data and stable contracts for later swap_
. _If Partial, list what is ready and what is blocked_

Answer:

. Backend: <pick one>
. Backend notes: <what exists / missing>

### 12) Tooling Baseline (required — keep OR replace ENTIRE set)

. Keep company baseline tooling
. Replace the entire tooling set

Company baseline includes:

. Prettier
. ESLint
. Husky
. lint-staged
. Required scripts: lint, format or format:check, typecheck, test if applicable, build

Answer:

. Tooling: keep baseline
. or Tooling: replace with <your toolchain summary>

### 13) Notes (required; "none" is allowed)

Suggestions:

. _Constraints / timeline / success metric_
. _Target devices: mobile / desktop / tablet_
. _UX tone: formal vs friendly errors_
. _SEO target: none / basic / high_
. _Hosting: Vercel or self-host; environments: dev, stage, prod_
. _Analytics/monitoring: GA, Sentry, none_
. _i18n: yes or no_
. _Dark mode: yes or no_
. _Integrations: payments, email, CMS, auth, shipping_

Answer:

. Notes: <... | none>

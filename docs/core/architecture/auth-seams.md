# Auth Seams (Swap-Friendly Architecture)

## 1. Token Lifecycle & Refresh

- Auth must review token expiry and refresh **before it expires** (pre-expiry window).
- When a new token is issued (login or refresh), it must:
  1. update session storage/state immediately

Recommended:

- refresh window: 20s
- single in-flight refresh (dedupe concurrent refresh calls)
- on refresh failure: invalidate session and redirect to `/login?reason=session_expired`

### Required behavior

- The system must **review token expiry** and **refresh before it expires** (pre-expiry refresh window).
- When a **new token is issued** (via login or refresh), it must:
  1. update session state/storage immediately, and
  2. re-schedule the next refresh check.

### Refresh policy (recommended defaults)

- Use a configurable refresh window (example): refresh when token expires in **≤ 20 seconds**.
- Apply a small jitter (random delay) to avoid synchronized refresh spikes.
- Enforce **single in-flight refresh** (dedupe concurrent refresh calls).
- On refresh failure:
  - retry once if safe,
  - otherwise invalidate the session and redirect to `/login?reason=session_expired` (or equivalent).

### Minimal refresh flows

- `login()` → receives tokens → **persist + notify + schedule refresh**
- `restoreSession()` → loads persisted session → **schedule refresh**
- `refreshIfNeeded()` → checks expiry → refreshes token → **persist + notify + reschedule**
- `logout()` → clears session → cancels scheduled refresh

---

## 2. Class-Based Auth Architecture (Required)

All auth layers must be implemented as classes:

- AuthProvider (provider boundary)
- SessionStorage (persistence boundary)
- AuthService (single app-facing API)

### Required classes (baseline)

- **AuthProvider** (transport/provider boundary)
  - Responsible for talking to the auth source (mock, JWT endpoint, OAuth, SSO).
- **SessionStorage** (persistence boundary)
  - Responsible for reading/writing the session (localStorage now, cookies later).
- **AuthService** (application-facing API)
  - The single entry point the UI uses (`getSession`, `login`, `logout`, `can`, `refreshIfNeeded`, etc.).
  - Owns scheduling logic (or delegates to a TokenManager).

Optional (recommended):

- **TokenManager / TokenRefresher**
  - Encapsulates expiry parsing, refresh window, jitter, single-flight lock.

### Rules

- UI depends on AuthService only.
- Provider/storage swap must not require UI rewrites.

---

## 3. Required Auth Service API (Baseline)

AuthService must provide at least:

- `login(credentials): Promise<Session>`
- `logout(): Promise<void>`
- `getSession(): Session | null`
- `restoreSession(): Promise<Session | null>`
- `refreshIfNeeded(): Promise<Session | null>`
- `subscribe(listener): Unsubscribe` (or equivalent event mechanism)
- `can(user, capability): boolean` (or delegates to an AuthZ module)

---

## 4. Reference Skeleton (TypeScript Example)

```ts
export type Session = {
  userId: string;
  role: string;
  capabilities: string[];
  accessToken?: string;
  refreshToken?: string;
  expiresAt?: number; // epoch ms
};

export interface IAuthProvider {
  login(input: { email: string; password: string }): Promise<Session>;
  refresh(session: Session): Promise<Session>;
  logout(session: Session | null): Promise<void>;
}

export interface ISessionStorage {
  read(): Session | null;
  write(session: Session | null): void;
  clear(): void;
}

export class AuthService {
  private session: Session | null = null;
  private refreshTimer: ReturnType<typeof setTimeout> | null = null;
  private refreshInFlight: Promise<Session> | null = null;

  constructor(
    private provider: IAuthProvider,
    private storage: ISessionStorage,
    private options: { refreshWindowMs: number } = {
      refreshWindowMs: 20 * 1000,
    } // 20s
  ) {}

  restoreSession(): Session | null {
    this.session = this.storage.read();
    this.scheduleRefresh();
    return this.session;
  }

  async login(email: string, password: string): Promise<Session> {
    const next = await this.provider.login({ email, password });
    this.setSession(next);
    return next;
  }

  async logout(): Promise<void> {
    await this.provider.logout(this.session);
    this.setSession(null);
  }

  getSession(): Session | null {
    return this.session;
  }

  async refreshIfNeeded(): Promise<Session | null> {
    if (!this.session?.expiresAt) return this.session;

    const remaining = this.session.expiresAt - Date.now();
    if (remaining > this.options.refreshWindowMs) return this.session;

    if (!this.refreshInFlight) {
      this.refreshInFlight = this.provider
        .refresh(this.session)
        .then((next) => {
          this.setSession(next);
          return next;
        })
        .finally(() => {
          this.refreshInFlight = null;
        });
    }

    return this.refreshInFlight;
  }

  private setSession(next: Session | null) {
    this.session = next;
    this.storage.write(next);
    this.scheduleRefresh();
    // TODO: notify subscribers
  }

  private scheduleRefresh() {
    if (this.refreshTimer) clearTimeout(this.refreshTimer);
    if (!this.session?.expiresAt) return;

    const remaining = this.session.expiresAt - Date.now();
    const triggerIn = Math.max(0, remaining - this.options.refreshWindowMs);

    this.refreshTimer = setTimeout(() => {
      void this.refreshIfNeeded();
    }, triggerIn);
  }
}
```

---

## PR review checks

- UI only calls `AuthService` (no direct provider/storage usage).
- Refresh is single-flight (no concurrent refresh storms).
- Refresh scheduling is re-armed after login/restore/refresh.
- Failure path invalidates session and triggers routing-level redirect (per guards doc).

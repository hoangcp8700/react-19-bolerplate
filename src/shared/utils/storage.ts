export function getLocalItem(key: string): string | null {
  return localStorage.getItem(key);
}

export function setLocalItem(key: string, value: string) {
  localStorage.setItem(key, value);
}

export function removeLocalItem(key: string) {
  localStorage.removeItem(key);
}

export function getSessionItem(key: string): string | null {
  return sessionStorage.getItem(key);
}

export function setSessionItem(key: string, value: string) {
  sessionStorage.setItem(key, value);
}

export function removeSessionItem(key: string) {
  sessionStorage.removeItem(key);
}

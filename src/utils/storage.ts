// Safe storage helper with memory fallback for sandboxed iframe environments

const memoryStore: Record<string, string> = {};

export function safeGetItem(key: string): string | null {
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      return window.localStorage.getItem(key);
    }
  } catch (err) {
    // Storage access is denied or disabled in iframe sandbox
  }
  return memoryStore[key] || null;
}

export function safeSetItem(key: string, value: string): void {
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      window.localStorage.setItem(key, value);
      return;
    }
  } catch (err) {
    // Storage access is denied or disabled in iframe sandbox
  }
  memoryStore[key] = value;
}

export function safeParseJson<T>(jsonStr: string | null, fallback: T): T {
  if (!jsonStr) return fallback;
  try {
    return JSON.parse(jsonStr) as T;
  } catch (err) {
    return fallback;
  }
}

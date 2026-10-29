const API_URL = import.meta.env.VITE_API_URL ?? "";

type TokenPair = {
  access: string;
  refresh: string;
};

const ACCESS_KEY = "mettos_access";
const REFRESH_KEY = "mettos_refresh";

export function getAccessToken() {
  return localStorage.getItem(ACCESS_KEY);
}

export function getRefreshToken() {
  return localStorage.getItem(REFRESH_KEY);
}

export function setTokens(tokens: TokenPair) {
  localStorage.setItem(ACCESS_KEY, tokens.access);
  localStorage.setItem(REFRESH_KEY, tokens.refresh);
}

export function clearTokens() {
  localStorage.removeItem(ACCESS_KEY);
  localStorage.removeItem(REFRESH_KEY);
}

async function refreshAccessToken(): Promise<string | null> {
  const refresh = getRefreshToken();
  if (!refresh) return null;

  const res = await fetch(`${API_URL}/api/auth/token/refresh/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ refresh }),
  });

  if (!res.ok) {
    clearTokens();
    return null;
  }

  const data = (await res.json()) as { access: string };
  localStorage.setItem(ACCESS_KEY, data.access);
  return data.access;
}

export async function apiFetch<T>(
  path: string,
  options: RequestInit = {},
  retry = true,
): Promise<T> {
  const headers = new Headers(options.headers);
  if (!headers.has("Content-Type") && options.body) {
    headers.set("Content-Type", "application/json");
  }

  const access = getAccessToken();
  if (access) headers.set("Authorization", `Bearer ${access}`);

  const res = await fetch(`${API_URL}${path}`, { ...options, headers });

  if (res.status === 401 && retry) {
    const next = await refreshAccessToken();
    if (next) return apiFetch<T>(path, options, false);
  }

  if (!res.ok) {
    let detail = "Request failed";
    try {
      const err = await res.json();
      detail =
        typeof err === "string"
          ? err
          : err.detail ||
            err.non_field_errors?.[0] ||
            Object.values(err).flat?.()?.[0] ||
            detail;
    } catch {
      /* ignore */
    }
    throw new Error(String(detail));
  }

  if (res.status === 204) return undefined as T;
  return res.json() as Promise<T>;
}

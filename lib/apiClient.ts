import { cookies } from "next/headers"; 

export async function apiFetch(url: string, options: RequestInit = {}) {
  const token = (await cookies()).get("token")?.value;

  const defaultHeaders = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };

  return fetch(url, {
    ...options,
    headers: {
      ...defaultHeaders,
      ...options.headers,
    },
    credentials: "include",
  });
}

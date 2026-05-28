import { headers } from "next/headers";

export async function getAuthToken() {
  const headersList = await headers();
  const cookie = headersList.get("cookie");
  if (!cookie) return null;

  const baseURL =
    process.env.BETTER_AUTH_URL ||
    process.env.NEXT_PUBLIC_BETTER_AUTH_URL ||
    "http://localhost:3000";

  const res = await fetch(`${baseURL}/api/auth/token`, {
    headers: { cookie },
    cache: "no-store",
  });

  if (!res.ok) return null;

  const data = await res.json();
  return data.token ?? null;
}

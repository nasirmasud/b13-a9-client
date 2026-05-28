import { getAuthToken } from "./get-auth-token.server";

const API = process.env.NEXT_PUBLIC_API_URL;

export async function fetchTutorBookings(path = "", options = {}) {
  const token = await getAuthToken();
  if (!token) {
    throw new Error("Unauthorized");
  }

  return fetch(`${API}/tutor-bookings${path}`, {
    ...options,
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
      ...options.headers,
    },
    cache: options.cache ?? "no-store",
  });
}

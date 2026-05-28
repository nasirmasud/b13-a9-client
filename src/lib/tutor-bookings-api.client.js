"use client";

import { authClient } from "@/lib/auth-client";

const API = process.env.NEXT_PUBLIC_API_URL;

export async function fetchTutorBookings(path = "", options = {}) {
  const { data, error } = await authClient.token();

  if (error || !data?.token) {
    throw new Error("Unauthorized");
  }

  return fetch(`${API}/tutor-bookings${path}`, {
    ...options,
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${data.token}`,
      ...options.headers,
    },
  });
}

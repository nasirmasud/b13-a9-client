import { auth } from "@/lib/auth";
import { createPageMetadata, PAGE_TITLES } from "@/lib/site-metadata";
import { headers } from "next/headers";

export const dynamic = "force-dynamic";

export async function generateMetadata() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const name = session?.user?.name?.trim();
  const title = name ? `${name}'s Profile` : PAGE_TITLES.profile;

  return createPageMetadata(title);
}

export default function ProfileLayout({ children }) {
  return children;
}

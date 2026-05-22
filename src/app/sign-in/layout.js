import { createPageMetadata, PAGE_TITLES } from "@/lib/site-metadata";

export const metadata = createPageMetadata(PAGE_TITLES.signIn);

export default function SignInLayout({ children }) {
  return children;
}

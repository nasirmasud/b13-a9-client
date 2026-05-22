import { createPageMetadata, PAGE_TITLES } from "@/lib/site-metadata";

export const metadata = createPageMetadata(PAGE_TITLES.signUp);

export default function SignUpLayout({ children }) {
  return children;
}

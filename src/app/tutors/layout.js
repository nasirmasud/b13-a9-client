import { createPageMetadata, PAGE_TITLES } from "@/lib/site-metadata";

export const metadata = createPageMetadata(PAGE_TITLES.tutors);

export default function TutorsLayout({ children }) {
  return children;
}

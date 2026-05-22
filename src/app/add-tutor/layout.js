import { createPageMetadata, PAGE_TITLES } from "@/lib/site-metadata";

export const metadata = createPageMetadata(PAGE_TITLES.addTutor);

export default function AddTutorLayout({ children }) {
  return children;
}

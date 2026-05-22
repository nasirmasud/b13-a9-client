import NotFoundContent from "./components/NotFoundContent";
import { createPageMetadata, PAGE_TITLES } from "@/lib/site-metadata";

export const metadata = createPageMetadata(PAGE_TITLES.notFound);

export default function NotFound() {
  return <NotFoundContent />;
}

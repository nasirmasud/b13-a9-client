import { createPageMetadata, PAGE_TITLES } from "@/lib/site-metadata";
import AvailableTutors from "./components/AvailableTutors";

export const metadata = createPageMetadata(PAGE_TITLES.home);
import HowItWorks from "./components/HowItWorks";
import Slider from "./components/Slider";
import WhyChooseUs from "./components/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Slider />
      <AvailableTutors />
      <HowItWorks />
      <WhyChooseUs />
    </>
  );
}

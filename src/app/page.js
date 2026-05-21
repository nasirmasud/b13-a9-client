import AvailableTutors from "./components/AvailableTutors";
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

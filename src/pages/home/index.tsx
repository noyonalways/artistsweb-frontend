import ContactSection from "./modules/contact-section";
import HeroSection from "./modules/hero";
import ServiceSection from "./modules/service-section";
import WorkSection from "./modules/work-section";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <WorkSection />
      <ServiceSection />
      <ContactSection />
    </>
  );
};

export default HomePage;

import CaseStudySection from "./modules/case-study";
import ContactSection from "./modules/contact-section";
import FeaturedSection from "./modules/featured-section";
import FeedbackSection from "./modules/feedback-section";
import HeroSection from "./modules/hero-section";
import PartnerSection from "./modules/partner-section";
import WorkSection from "./modules/work-section";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <WorkSection />
      <CaseStudySection />
      <PartnerSection />
      <FeaturedSection />
      <ContactSection />
      <FeedbackSection />
    </>
  );
};

export default HomePage;

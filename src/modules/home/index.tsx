import CaseStudySection from "./modules/case-study";
import ContactSection from "./modules/contact-section";
import FeaturedSection from "./modules/features-section";
import FeedbackSection from "./modules/feedback-section";
import HeroSection from "./modules/hero";
import WorkSection from "./modules/work-section";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <WorkSection />
      <CaseStudySection />
      <FeaturedSection />
      <ContactSection />
      <FeedbackSection />
    </>
  );
};

export default HomePage;

import { loadHeroSectionData } from "@/service/heroSection";
import { THeroSection } from "@/types/hereSection";
import HeroAnimation from "./hero-animation";

const HeroSection = async () => {
  try {
    const res = await loadHeroSectionData();
    const data = res?.data as THeroSection;

    return (
      <section className="min-h-svh flex items-center justify-center bg-background">
        <div className="container">
          <HeroAnimation data={data} />
        </div>
      </section>
    );
  } catch (error) {
    // Log error for debugging
    console.error("Failed to load hero section:", error);
    // Fallback content in case of error
    return (
      <section className="min-h-svh flex items-center justify-center bg-background">
        <div className="container">
          <HeroAnimation
            data={{
              _id: "fallback",
              heading: "We Create Digital Experiences",
              subheading:
                "We craft innovative digital solutions that help businesses grow and succeed in the modern world.",
              highlights: [
                { _id: "1", title: "Projects", value: "300+" },
                { _id: "2", title: "Experience", value: "20+" },
                { _id: "3", title: "Awards", value: "15" },
              ],
            }}
          />
        </div>
      </section>
    );
  }
};

export default HeroSection;

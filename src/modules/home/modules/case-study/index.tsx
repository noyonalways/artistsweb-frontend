import { getCaseStudies } from "@/service/caseStudy";
import { TCaseStudy } from "@/types/caseStudy";
import CaseStudyAnimation from "./case-study-animation";

const CaseStudySection = async () => {
  const res = await getCaseStudies({ limit: 4 });
  const caseStudies: TCaseStudy[] = res?.data;

  return (
    <section className="bg-foreground py-14 lg:py-20 relative overflow-hidden">
      <div className="container">
        <CaseStudyAnimation caseStudies={caseStudies} />
      </div>
      <div className="absolute bottom-0 lg:-bottom-[140px] right-0 w-full h-[380px] bg-[radial-gradient(circle_at_73%_145%,#545cff_0%,transparent_35%)] "></div>
    </section>
  );
};

export default CaseStudySection;

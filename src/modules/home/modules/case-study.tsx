import CaseStudyCard from "@/components/case-study-card";
import { getCaseStudies } from "@/service/caseStudy";
import { TCaseStudy } from "@/types/caseStudy";

const CaseStudySection = async () => {
  const res = await getCaseStudies({ limit: 4 });
  const caseStudies: TCaseStudy[] = res?.data;

  return (
    <section className="bg-foreground py-14 lg:py-20 relative overflow-hidden">
      <div className="container ">
        <div className="">
          <h2 className="text-lg lg:text-3xl font-medium text-background mb-4 lg:mb-6">
            Our team of experts can help you with...
          </h2>

          <div className="space-y-6 lg:space-y-8 border-b border-b-gray-600 pb-8">
            {caseStudies.map((service) => (
              <CaseStudyCard key={service._id} caseStudy={service} />
            ))}
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between pt-8 gap-y-8 lg:gap-y-0">
            <div>
              <h2 className="text-3xl lg:text-6xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-indigo-400 pb-6">
                Creative Agency
              </h2>
              <p className="text-background text-lg lg:text-2xl w-full max-w-xl">
                We&#39;re an award-winning creative agency based in London,
                focused on E-Commerce, Web Design London, Digital Products,
                Branding and SEO.
              </p>
            </div>

            <div className="flex space-x-3 lg:space-x-4">
              <div className="border border-primary px-6 lg:px-12 py-2 lg:py-4 text-base lg:text-2xl rounded-ful text-background font-medium rounded-full">
                300+ Projects
              </div>
              <div className="border border-primary px-6 lg:px-12 py-2 lg:py-4 text-base lg:text-2xl rounded-ful text-background font-medium rounded-full">
                15 Awards
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 lg:-bottom-[140px] right-0 w-full h-[380px] bg-[radial-gradient(circle_at_73%_145%,#545cff_0%,transparent_35%)] "></div>
    </section>
  );
};

export default CaseStudySection;

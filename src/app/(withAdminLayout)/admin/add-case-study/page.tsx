import AddCaseStudy from "@/modules/admin/add-case-study";
import ManageCaseStudies from "@/modules/admin/manage-case-studies";
import { getCaseStudies } from "@/service/caseStudy";
import { getServices } from "@/service/service";
import { TCaseStudy } from "@/types/caseStudy";
import { TService } from "@/types/service";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Add Case Study | Admin Dashboard | Digital Agency",
  description: "Add a new case study to your digital agency portfolio",
};

const AddCaseStudyPage = async () => {
  const [caseStudiesRes, servicesRes] = await Promise.all([
    getCaseStudies(),
    getServices(),
  ]);

  const caseStudies: TCaseStudy[] = caseStudiesRes?.data || [];
  const services: TService[] = servicesRes?.data || [];

  return (
    <div className="grid lg:grid-cols-2 gap-4">
      <AddCaseStudy services={services} />
      <ManageCaseStudies caseStudies={caseStudies} />
    </div>
  );
};

export default AddCaseStudyPage;

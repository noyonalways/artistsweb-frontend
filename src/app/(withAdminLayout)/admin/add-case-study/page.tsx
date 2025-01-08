import AddCaseStudy from "@/modules/admin/add-case-study";
import ManageCaseStudies from "@/modules/admin/manage-case-studies";
import { getCaseStudies } from "@/service/case-study";
import { TCaseStudy } from "@/types/caseStudy";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Add Case Study | Admin Dashboard | Digital Agency",
  description: "Add a new case study to your digital agency portfolio",
};

const AddCaseStudyPage = async () => {
  const res = await getCaseStudies();
  const caseStudies: TCaseStudy[] = res?.data;

  return (
    <div className="grid lg:grid-cols-2 gap-4">
      <AddCaseStudy />
      <ManageCaseStudies caseStudies={caseStudies} />
    </div>
  );
};

export default AddCaseStudyPage;

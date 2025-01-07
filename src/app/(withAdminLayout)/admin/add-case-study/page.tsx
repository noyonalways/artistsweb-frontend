import AddCaseStudy from "@/modules/admin/add-case-study";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Add Case Study | Admin Dashboard | Digital Agency",
  description: "Add a new case study to your digital agency portfolio",
};

const AddCaseStudyPage = () => {
  return (
    <div>
      <AddCaseStudy />
    </div>
  );
};

export default AddCaseStudyPage;

import AddFeedback from "@/modules/admin/add-feedback";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Add Feedback | Admin Dashboard | Digital Agency",
  description: "Add a new client feedback to your digital agency portfolio",
};

const AddFeedbackPage = () => {
  return (
    <div>
      <AddFeedback />
    </div>
  );
};

export default AddFeedbackPage;

import AddFeedback from "@/modules/admin/add-feedback";
import ManageFeedbacks from "@/modules/admin/manage-feedbacks";
import { getFeedbacks } from "@/service/feedback";
import { TFeedback } from "@/types/feedback";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Add Feedback | Admin Dashboard | Digital Agency",
  description: "Add a new client feedback to your digital agency portfolio",
};

const AddFeedbackPage = async () => {
  const res = await getFeedbacks();
  const feedbacks: TFeedback[] = res?.data;

  return (
    <div className="grid lg:grid-cols-2 gap-4">
      <AddFeedback />
      <ManageFeedbacks feedbacks={feedbacks} />
    </div>
  );
};

export default AddFeedbackPage;

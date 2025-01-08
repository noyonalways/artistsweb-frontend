import { getFeedbacks } from "@/service/feedback";
import { TFeedback } from "@/types/feedback";
import Feedbacks from "./feedbacks";

const FeedbackSection = async () => {
  const res = await getFeedbacks();
  const feedbacks: TFeedback[] = res?.data;

  return (
    <section className="bg-foreground text-background py-10 lg:py-32 relative">
      <div className="z-10">
        <Feedbacks feedbacks={feedbacks} />
      </div>

      <div className="z-0 absolute top-0 left-0 w-full h-[450px] lg:h-[1780px] bg-[radial-gradient(circle_at_-55%_50%,#545cffa4_0%,transparent_50%)]  lg:bg-[radial-gradient(circle_at_-20%_50%,#545cffe1_0%,transparent_40%)]"></div>

      <div className="z-0 absolute bottom-0 left-0 w-full h-[450px] lg:h-[1780px] bg-[radial-gradient(circle_at_140%_50%,#545cffa4_0%,transparent_50%)] lg:bg-[radial-gradient(circle_at_120%_55%,#545cffe1_0%,transparent_42%)]"></div>
    </section>
  );
};

export default FeedbackSection;

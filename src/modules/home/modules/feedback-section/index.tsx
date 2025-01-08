import FeedbackCard from "@/components/feedback-card";
import { getFeedbacks } from "@/service/feedback";
import { TFeedback } from "@/types/feedback";
import { ImSpinner8 } from "react-icons/im";

const FeedbackSection = async () => {
  const res = await getFeedbacks();
  const feedbacks: TFeedback[] = res?.data;

  return (
    <section className="bg-foreground text-background py-10 lg:py-32 relative">
      <div className="container md:max-w-[768px] lg:max-w-[1024] xl:max-w-[1280px] 2xl:max-w-[1440px]">
        <div className="z-10">
          <div className="mb-8 lg:mb-20">
            <h1 className="text-3xl lg:text-[3.5vw] font-semibold mb-6 lg:mb-16">
              Client Feedback
            </h1>
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
              <h3 className="lg:text-2xl">
                We&apos;re collaborators - We build tight-knit partnerships with
                our clients.
              </h3>
              <div className="hidden lg:inline-flex lg:space-x-4 lg:items-center text-[#71777e]">
                <ImSpinner8 className="animate-spin text-4xl" />
                <p className="text-xl">Keep scrolling</p>
              </div>
            </div>
          </div>

          <div className="space-y-6 lg:space-y-16">
            {feedbacks.map((feedback) => {
              return <FeedbackCard key={feedback._id} feedback={feedback} />;
            })}
          </div>
        </div>
      </div>

      <div className="z-0 absolute top-0 left-0 w-full h-[450px] lg:h-[1780px] bg-[radial-gradient(circle_at_-55%_50%,#545cffa4_0%,transparent_50%)]  lg:bg-[radial-gradient(circle_at_-20%_50%,#545cffe1_0%,transparent_40%)]"></div>

      <div className="z-0 absolute bottom-0 left-0 w-full h-[450px] lg:h-[1780px] bg-[radial-gradient(circle_at_140%_50%,#545cffa4_0%,transparent_50%)] lg:bg-[radial-gradient(circle_at_120%_55%,#545cffe1_0%,transparent_42%)]"></div>
    </section>
  );
};

export default FeedbackSection;

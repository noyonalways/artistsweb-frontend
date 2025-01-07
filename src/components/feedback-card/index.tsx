import { TFeedback } from "@/types/feedback";
import Image from "next/image";

interface IProps {
  feedback: TFeedback;
}

const FeedbackCard = ({ feedback }: IProps) => {
  return (
    <div className="p-6 lg:p-20 rounded-2xl lg:rounded-3xl border border-[#282828]">
      <p className="text-base lg:text-[2vw] leading-7 lg:leading-snug font-semibold mb-6 lg:mb-[72px]">
        &quot;{feedback.message}&quot;
      </p>
      <div className="flex flex-col gap-y-4 lg:gap-y-0 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center space-x-4 lg:space-x-6">
          <Image
            className="rounded-full size-[40px] lg:size-[65px]"
            src={feedback.avatar}
            width={65}
            height={65}
            alt={`avatar-image`}
          />
          <span className="text-base lg:text-xl text-[#71777e]">
            {feedback.name}
          </span>
        </div>
        <h3 className="text-primary text-lg lg:text-3xl">
          {feedback.companyName}
        </h3>
      </div>
    </div>
  );
};

export default FeedbackCard;

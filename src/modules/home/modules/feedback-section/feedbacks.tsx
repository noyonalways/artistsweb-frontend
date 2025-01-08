"use client";

import FeedbackCard from "@/components/feedback-card";
import { TFeedback } from "@/types/feedback";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ImSpinner8 } from "react-icons/im";

const TitleCard = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: cardProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(cardProgress, [0, 0.5, 1], [0.9, 1, 1]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        transition: {
          duration: 0.5,
        },
      }}
      style={{ scale }}
      viewport={{ once: true, margin: "-100px" }}
      className="origin-center container md:max-w-[768px] lg:max-w-[1024] xl:max-w-[1280px] 2xl:max-w-[1440px] mb-8 lg:mb-20"
    >
      <div>
        <h1 className="text-3xl lg:text-[3.5vw] font-semibold mb-6 lg:mb-16">
          Client Feedback
        </h1>
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <h3 className="lg:text-2xl">
            We&apos;re collaborators - We build tight-knit partnerships with our
            clients.
          </h3>
          <div className="hidden lg:inline-flex lg:space-x-4 lg:items-center text-[#71777e]">
            <ImSpinner8 className="animate-spin text-4xl" />
            <p className="text-xl">Keep scrolling</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

interface IFeedbackItemProps {
  feedback: TFeedback;
  index: number;
}

const FeedbackItem = ({ feedback, index }: IFeedbackItemProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: cardProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(cardProgress, [0, 0.5, 1], [0.9, 1, 1]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        transition: {
          duration: 0.5,
          delay: index * 0.1,
        },
      }}
      style={{ scale }}
      viewport={{ once: true, margin: "-100px" }}
      className="origin-center container md:max-w-[768px] lg:max-w-[1024] xl:max-w-[1280px] 2xl:max-w-[1440px]"
    >
      <FeedbackCard feedback={feedback} />
    </motion.div>
  );
};

interface IProps {
  feedbacks: TFeedback[];
}

const Feedbacks = ({ feedbacks }: IProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={containerRef} className="space-y-6 lg:space-y-16 relative">
      <TitleCard />

      {feedbacks.map((feedback, index) => (
        <FeedbackItem key={feedback._id} feedback={feedback} index={index} />
      ))}

      {/* Scroll Progress Indicator */}
      <div className="absolute right-20 top-0 h-full hidden lg:block">
        <div className="sticky top-1/2 h-[200px]">
          <div className="relative h-full w-2 bg-gray-800 rounded-full overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 w-full bg-primary rounded-full origin-top"
              style={{
                height: "100%",
                scaleY: scrollYProgress,
                transformOrigin: "top",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedbacks;

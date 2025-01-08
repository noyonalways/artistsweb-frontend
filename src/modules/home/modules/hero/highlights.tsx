"use client";

import { THighlight } from "@/types/hereSection";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface IProps {
  highlights: THighlight[];
}

const Highlights = ({ highlights }: IProps) => {
  const [currentHighlightIndex, setCurrentHighlightIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHighlightIndex(
        (prevIndex) => (prevIndex + 1) % highlights?.length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [highlights?.length]);

  return (
    <div className="flex flex-col gap-y-10 lg:gap-y-0 lg:flex-row justify-between">
      <div className="flex text-2xl items-center space-x-4">
        <div className="bg-foreground text-background p-7 size-[62px] lg:size-[72px] rounded-full flex items-center justify-center">
          <motion.div
            key={highlights?.[currentHighlightIndex]?.value}
            initial={{ opacity: 0, y: -5 }} // Start slightly above
            animate={{ opacity: 1, y: 0 }} // Move to the original position
            exit={{ opacity: 0, y: 5 }} // Move slightly below on exit
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {highlights?.[currentHighlightIndex]?.value}
          </motion.div>
        </div>
        <motion.span
          key={highlights?.[currentHighlightIndex]?.title}
          initial={{ opacity: 0, y: -5 }} // Start slightly above
          animate={{ opacity: 1, y: 0 }} // Move to the original position
          exit={{ opacity: 0, y: 5 }} // Move slightly below on exit
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="text-gray-700"
        >
          {highlights?.[currentHighlightIndex]?.title}
        </motion.span>
      </div>
    </div>
  );
};

export default Highlights;

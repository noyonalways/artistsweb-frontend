"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ScrollText = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["100%", "-100%"]);

  return (
    <div
      ref={containerRef}
      className="overflow-hidden min-h-[200px] lg:min-h-[600px] flex items-center"
    >
      <motion.h1
        style={{ x }}
        className="text-5xl text-center lg:text-left lg:text-[9.365vw] font-semibold whitespace-nowrap"
      >
        Elevate your digital presence
      </motion.h1>
    </div>
  );
};

export default ScrollText;

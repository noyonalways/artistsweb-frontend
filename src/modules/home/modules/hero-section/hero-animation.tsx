"use client";

import Button from "@/components/ui/button";
import { THeroSection } from "@/types/hereSection";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Highlights from "./highlights";

interface HeroAnimationProps {
  data: THeroSection;
}

const HeroAnimation = ({ data }: HeroAnimationProps) => {
  const headingWords = data?.heading?.split(" ") || [];
  const [firstWord, middleWord, lastWord] = headingWords;
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkIsDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    checkIsDesktop();
    window.addEventListener("resize", checkIsDesktop);

    return () => window.removeEventListener("resize", checkIsDesktop);
  }, []);

  const getInitialY = () => (isDesktop ? 100 : 30);
  const getDuration = () => (isDesktop ? 0.5 : 0.3);

  return (
    <div className="space-y-10 lg:space-y-28">
      <div className="overflow-hidden">
        <motion.h1 className="text-[12vw] md:text-[6.5vw] lg:text-[7.75vw] lg:leading-tight font-semibold font-onest flex flex-wrap">
          <motion.span
            initial={{ y: getInitialY(), opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: getDuration() }}
            className="mr-4"
          >
            {firstWord}
          </motion.span>
          <motion.span
            initial={{ y: getInitialY(), opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: getDuration() }}
            className="text-transparent bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text animate-heroTextGradient bg-[length:200%_auto] mr-4"
          >
            {middleWord}
          </motion.span>
          <motion.span
            initial={{ y: getInitialY(), opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: getDuration(), delay: 0.4 }}
          >
            {lastWord}
          </motion.span>
        </motion.h1>
      </div>

      <div className="flex flex-col gap-y-10 lg:gap-y-0 lg:flex-row justify-between">
        <motion.div
          initial={{ opacity: 0, y: getInitialY() }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: getDuration(), delay: 0.6 }}
        >
          <Highlights highlights={data?.highlights} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: getInitialY() }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: getDuration(), delay: 0.6 }}
          className="flex flex-col gap-y-6 lg:flex-row lg:items-center text-2xl lg:text-3xl lg:gap-20"
        >
          <motion.p
            initial={{ opacity: 0, y: getInitialY() }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: getDuration(), delay: 0.8 }}
            className="w-full max-w-lg leading-snug"
          >
            {data?.subheading}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: getInitialY() }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: isDesktop ? 0.8 : 0.3,
              delay: 1,
              type: isDesktop ? "spring" : "tween",
              stiffness: 100,
            }}
          >
            <Button className="bg-primary text-white rounded-full px-8 w-48 lg:w-64 h-14 lg:h-[72px] hover:scale-105 duration-200 text-xl lg:text-2xl">
              Case Studies
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroAnimation;

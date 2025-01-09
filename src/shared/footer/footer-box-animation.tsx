"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FooterBoxAnimationProps {
  children: ReactNode;
  className?: string;
  bgColor?: string;
  delay?: number;
}

const FooterBoxAnimation = ({
  children,
  className,
  bgColor = "bg-[#ecf1f4]",
  delay = 0,
}: FooterBoxAnimationProps) => {
  return (
    <div className={`relative ${className}`}>
      <motion.div
        className={`absolute inset-0 ${bgColor} rounded-3xl lg:rounded-[32px]`}
        initial={{ height: 0 }}
        whileInView={{ height: "100%" }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay, ease: "easeInOut" }}
      />
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: delay + 0.5, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default FooterBoxAnimation;

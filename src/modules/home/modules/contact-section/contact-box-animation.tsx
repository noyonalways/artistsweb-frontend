"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ContactBoxAnimationProps {
  children: ReactNode;
}

const ContactBoxAnimation = ({ children }: ContactBoxAnimationProps) => {
  return (
    <div className="relative">
      <motion.div
        className="absolute inset-0 bg-primary rounded-3xl lg:rounded-[32px]"
        initial={{ height: 0 }}
        whileInView={{ height: "100%" }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      />
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.5, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default ContactBoxAnimation;

"use client";

import { motion } from "framer-motion";

const FeaturedAnimation = () => {
  return (
    <div className="text-5xl lg:text-[5.9vw] space-y-1 lg:space-y-3 font-semibold leading-none w-fit overflow-hidden">
      <div className="overflow-hidden py-1">
        <motion.h1
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
        >
          Crafting digital
        </motion.h1>
      </div>

      <div className="overflow-hidden py-1">
        <motion.h1
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1, ease: [0.33, 1, 0.68, 1] }}
          className="text-right bg-clip-text text-transparent bg-gradient-to-r from-primary to-foreground"
        >
          experiences
        </motion.h1>
      </div>

      <div className="overflow-hidden py-1">
        <motion.h1
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.15, ease: [0.33, 1, 0.68, 1] }}
        >
          since 2004
        </motion.h1>
      </div>
    </div>
  );
};

export default FeaturedAnimation;

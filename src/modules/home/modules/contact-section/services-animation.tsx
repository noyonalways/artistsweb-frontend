"use client";

import { TService } from "@/types/service";
import { motion } from "framer-motion";

interface ServicesAnimationProps {
  services: TService[];
}

const ServicesAnimation = ({ services }: ServicesAnimationProps) => {
  return (
    <div className="flex-1">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="text-3xl lg:text-[3.5vw] font-semibold mb-4 lg:mb-10"
      >
        We&apos;re good at
      </motion.h1>
      <div>
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mb-5"
        >
          Services
        </motion.h3>
        <ul className="space-y-3 lg:space-y-6">
          {services?.map((service, index) => {
            return (
              <motion.li
                key={service._id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: 0.4 + index * 0.1,
                  ease: "easeOut",
                }}
              >
                <a className="text-2xl lg:text-4xl font-semibold" href="#">
                  {service?.name}
                </a>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ServicesAnimation;

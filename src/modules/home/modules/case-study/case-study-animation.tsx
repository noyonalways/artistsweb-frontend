"use client";

import CaseStudyCard from "@/components/case-study-card";
import { TCaseStudy } from "@/types/caseStudy";
import { motion } from "framer-motion";

interface CaseStudyAnimationProps {
  caseStudies: TCaseStudy[];
}

const CaseStudyAnimation = ({ caseStudies }: CaseStudyAnimationProps) => {
  return (
    <div>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="text-lg lg:text-3xl font-medium text-background mb-4 lg:mb-6"
      >
        Our team of experts can help you with...
      </motion.h2>

      <motion.div className="space-y-6 lg:space-y-8 border-b border-b-gray-600 pb-8">
        {caseStudies?.map((caseStudy, index) => (
          <motion.div
            key={caseStudy._id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.2 + index * 0.1,
              ease: "easeOut",
            }}
          >
            <CaseStudyCard caseStudy={caseStudy} />
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="flex flex-col lg:flex-row lg:items-end justify-between pt-8 gap-y-8 lg:gap-y-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.6 }}
      >
        <div>
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="text-3xl lg:text-6xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-indigo-400 pb-6"
          >
            Creative Agency
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-background text-lg lg:text-2xl w-full max-w-xl"
          >
            We&#39;re an award-winning creative agency based in London, focused
            on E-Commerce, Web Design London, Digital Products, Branding and
            SEO.
          </motion.p>
        </div>

        <motion.div
          className="flex space-x-3 lg:space-x-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.9 }}
        >
          <div className="border border-primary px-6 lg:px-12 py-2 lg:py-4 text-base lg:text-2xl rounded-ful text-background font-medium rounded-full">
            300+ Projects
          </div>
          <div className="border border-primary px-6 lg:px-12 py-2 lg:py-4 text-base lg:text-2xl rounded-ful text-background font-medium rounded-full">
            15 Awards
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CaseStudyAnimation;

"use client";

import Button from "@/components/ui/button";
import WorkCard from "@/components/work-card";
import { TWork } from "@/types/work";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface IProps {
  works: TWork[];
  totalWorks: number;
}

const Works = ({ works, totalWorks }: IProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Calculate total width including gaps
  const cardWidth = 730;
  const gapWidth = 40;
  const totalWidth = (works?.length + 1) * (cardWidth + gapWidth);

  // Transform scroll progress to x position with smoother easing
  const x = useTransform(
    scrollYProgress,
    [0.1, 0.9],
    [0, -totalWidth + cardWidth]
  );

  return (
    <>
      <div className="container">
        <div className="lg:hidden space-y-6">
          {/* title card box - Mobile */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
            className="bg-white rounded-3xl flex flex-col justify-between space-y-6 overflow-hidden"
          >
            <div className="flex-1 space-y-4">
              <div className="overflow-hidden">
                <motion.div
                  initial={{ y: 20 }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
                  className="flex items-center space-x-6"
                >
                  <h1 className="text-4xl font-semibold">Work</h1>
                  <div className="size-[72px] border rounded-full flex items-center justify-center text-2xl">
                    {totalWorks || 0}
                  </div>
                </motion.div>
              </div>
              <div className="overflow-hidden">
                <motion.p
                  initial={{ y: 20 }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: 0.2,
                    ease: [0.33, 1, 0.68, 1],
                  }}
                  className="text-lg max-w-sm"
                >
                  A selection of our crafted work, built from scratch by our
                  talented in-house team.
                </motion.p>
              </div>
            </div>

            <div className="overflow-hidden">
              <motion.div
                initial={{ y: 20 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.3,
                  ease: [0.33, 1, 0.68, 1],
                }}
              >
                <Button className="text-xl w-48 h-[48px] font-medium">
                  Case Studies
                </Button>
              </motion.div>
            </div>
          </motion.div>

          {/* Work Cards */}
          {works?.map((work, index) => (
            <motion.div
              key={work._id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.33, 1, 0.68, 1],
              }}
              className="flex-shrink-0 w-full lg:w-[830px]"
            >
              <WorkCard work={work} />
            </motion.div>
          ))}

          {/* view more box - Mobile */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
            className="flex flex-col space-y-6 items-center justify-center py-16 overflow-hidden"
          >
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: 20 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
                className="text-4xl font-semibold"
              >
                View More
              </motion.h1>
            </div>
            <div className="overflow-hidden">
              <motion.div
                initial={{ y: 20 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.2,
                  ease: [0.33, 1, 0.68, 1],
                }}
              >
                <Button className="text-xl w-48 h-[48px] font-medium">
                  Case Studies
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* for large screen */}
      <div
        ref={containerRef}
        className="relative h-svh lg:h-[400vh] hidden lg:block"
      >
        <div className="sticky top-0 h-svh lg:h-screen w-full overflow-hidden">
          <div className="absolute inset-0 flex items-center">
            <motion.div
              style={{ x }}
              className="flex gap-10 lg:pl-[calc(100vw-1880px)]"
            >
              {/* Title Card - Desktop */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                className="flex-shrink-0 lg:w-[600px] h-[710px] bg-white rounded-3xl p-12 flex flex-col justify-between overflow-hidden"
              >
                <div className="flex-1 space-y-6">
                  <div className="overflow-hidden">
                    <motion.div
                      initial={{ y: 20 }}
                      whileInView={{ y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
                      className="flex items-center space-x-6"
                    >
                      <h1 className="text-6xl font-semibold">Work</h1>
                      <div className="size-[72px] border rounded-full flex items-center justify-center text-2xl">
                        {totalWorks || 0}
                      </div>
                    </motion.div>
                  </div>
                  <div className="overflow-hidden">
                    <motion.p
                      initial={{ y: 20 }}
                      whileInView={{ y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.6,
                        delay: 0.2,
                        ease: [0.33, 1, 0.68, 1],
                      }}
                      className="text-[28px] leading-snug max-w-sm"
                    >
                      A selection of our crafted work, built from scratch by our
                      talented in-house team.
                    </motion.p>
                  </div>
                </div>

                <div className="overflow-hidden">
                  <motion.div
                    initial={{ y: 20 }}
                    whileInView={{ y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: 0.3,
                      ease: [0.33, 1, 0.68, 1],
                    }}
                  >
                    <Button className="text-2xl w-60 h-[72px] font-medium">
                      Case Studies
                    </Button>
                  </motion.div>
                </div>
              </motion.div>

              {/* Work Cards */}
              {works?.map((work) => (
                <motion.div
                  key={work._id}
                  className="flex-shrink-0 w-full lg:w-[830px]"
                >
                  <WorkCard work={work} />
                </motion.div>
              ))}

              {/* View More Card - Desktop */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                className="lg:w-[650px] h-[710px] flex flex-col space-y-6 items-center justify-center overflow-hidden"
              >
                <div className="overflow-hidden">
                  <motion.h1
                    initial={{ y: 20 }}
                    whileInView={{ y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
                    className="text-6xl font-semibold"
                  >
                    View More
                  </motion.h1>
                </div>
                <div className="overflow-hidden">
                  <motion.div
                    initial={{ y: 20 }}
                    whileInView={{ y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.8,
                      delay: 0.4,
                      ease: [0.33, 1, 0.68, 1],
                    }}
                  >
                    <Button className="text-2xl w-60 h-[72px] font-medium">
                      Case Studies
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Works;

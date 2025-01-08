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
  const gapWidth = 40; // gap-16 = 4rem = 64px
  const totalWidth = (works?.length + 1) * (cardWidth + gapWidth); // +1 for title card

  // Transform scroll progress to x position
  const x = useTransform(
    scrollYProgress,
    [0.1, 0.9], // Use more scroll space for the animation
    [0, -totalWidth + cardWidth] // Leave one card width at the end
  );

  return (
    <>
      <div className="container">
        <div className="lg:hidden space-y-6">
          <div className="bg-white rounded-3xl flex flex-col justify-between space-y-6">
            <div className="flex-1">
              <div className="flex items-center space-x-6">
                <h1 className="text-4xl font-semibold">Work</h1>
                <div className="size-[72px] border rounded-full flex items-center justify-center text-2xl">
                  {totalWorks || 0}
                </div>
              </div>
              <p className="text-lg max-w-sm">
                A selection of our crafted work, built from scratch by our
                talented in-house team.
              </p>
            </div>

            <div className="pb-6">
              <Button className="text-xl w-48 h-[48px] font-medium">
                Case Studies
              </Button>
            </div>
          </div>

          {/* Work Cards */}
          {works?.map((work) => (
            <motion.div
              key={work._id}
              className="flex-shrink-0 w-full lg:w-[830px]"
            >
              <WorkCard work={work} />
            </motion.div>
          ))}

          <div className="flex flex-col space-y-6 items-center justify-center py-16">
            <h1 className="text-4xl font-semibold">View More</h1>
            <Button className="text-xl w-48 h-[48px] font-medium">
              Case Studies
            </Button>
          </div>
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
              {/* Title Card */}
              <div className="flex-shrink-0 lg:w-[600px] h-[710px] bg-white rounded-3xl p-12 flex flex-col justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-6 mb-6">
                    <h1 className="text-6xl font-semibold">Work</h1>
                    <div className="size-[72px] border rounded-full flex items-center justify-center text-2xl">
                      {totalWorks || 0}
                    </div>
                  </div>
                  <p className="text-[28px] leading-snug max-w-sm">
                    A selection of our crafted work, built from scratch by our
                    talented in-house team.
                  </p>
                </div>

                <div className="pb-6">
                  <Button className="text-2xl w-60 h-[72px] font-medium">
                    Case Studies
                  </Button>
                </div>
              </div>

              {/* Work Cards */}
              {works?.map((work) => (
                <motion.div
                  key={work._id}
                  className="flex-shrink-0 w-full lg:w-[830px]"
                >
                  <WorkCard work={work} />
                </motion.div>
              ))}

              <div className="lg:w-[650px] h-[710px] flex flex-col space-y-6 items-center justify-center">
                <h1 className="text-6xl font-semibold">View More</h1>
                <Button className="text-2xl w-60 h-[72px] font-medium">
                  Case Studies
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Works;

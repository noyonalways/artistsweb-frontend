"use client";

import { brands } from "@/constant";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const BrandLogos = () => {
  const [currentGroup, setCurrentGroup] = useState(0);
  const itemsPerGroup = {
    mobile: 3,
    desktop: 5,
  };

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Calculate total number of groups
  const groupSize = isMobile ? itemsPerGroup.mobile : itemsPerGroup.desktop;
  const totalGroups = Math.ceil(brands.length / groupSize);

  // Get current group of brands
  const getCurrentGroup = () => {
    const startIndex = currentGroup * groupSize;
    const endIndex = startIndex + groupSize;
    let groupBrands = brands.slice(startIndex, endIndex);

    // If the last group is incomplete, fill it with items from the start
    if (groupBrands.length < groupSize) {
      const remaining = groupSize - groupBrands.length;
      groupBrands = [...groupBrands, ...brands.slice(0, remaining)];
    }

    return groupBrands;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGroup((prev) => (prev + 1) % totalGroups);
    }, 4000);

    return () => clearInterval(interval);
  }, [totalGroups]);

  return (
    <div className="mt-12 lg:mt-28 overflow-hidden">
      <motion.div className="flex justify-between items-center gap-6 lg:gap-10 mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentGroup}
            className="flex justify-between items-center gap-6 lg:gap-10 w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {getCurrentGroup().map((brand, index) => (
              <motion.div
                key={`${brand.id}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="w-[calc(33%-1rem)] lg:w-[calc(25%-1rem)]"
              >
                <Image
                  width={200}
                  height={100}
                  className="w-full h-12 lg:h-16 object-contain"
                  src={brand.logo}
                  alt={brand.name}
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default BrandLogos;

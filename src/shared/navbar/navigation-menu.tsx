"use client";

import Button from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect } from "react";
import { HiX } from "react-icons/hi";
import { AnimatedLink } from "./animated-link";

interface NavigationMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function NavigationMenu({ isOpen, onClose }: NavigationMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed left-0 right-0 inset-0 text-white flex h-screen items-start lg:items-center lg:justify-center p-5 lg:p-0 z-50 bg-[#111]/50 backdrop-blur lg:backdrop-blur-lg"
            onClick={onClose}
          >
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="w-full max-w-[940px] flex flex-col bg-[#111] px-8 py-10 lg:py-24 lg:px-20 rounded-[28px] relative overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="z-10">
                <motion.div
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                  className="flex justify-between items-center mb-8"
                >
                  <h2 className="text-xl lg:text-3xl">Navigation</h2>
                  <button
                    onClick={onClose}
                    className="p-2 hover:opacity-70 transition-opacity bg-gray-600/50 rounded-full"
                  >
                    <HiX className="" />
                  </button>
                </motion.div>

                <motion.nav
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                  className="lg:flex-1 bg-[#111]"
                >
                  <ul className="lg:space-y-4 font-semibold">
                    <motion.li
                      initial={{ y: -20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.6 }}
                      className="flex items-start"
                    >
                      <AnimatedLink
                        href="/case-studies"
                        className="text-4xl lg:text-6xl"
                      >
                        Case Studies
                      </AnimatedLink>
                      <span className="ml-4 lg:ml-6 flex items-center justify-center rounded-full border border-gray-600 text-xl size-10 lg:text-2xl lg:size-16">
                        13
                      </span>
                    </motion.li>
                    <motion.li
                      initial={{ y: -20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.7 }}
                    >
                      <AnimatedLink
                        href="/agency"
                        className="text-4xl lg:text-6xl"
                      >
                        Our Agency
                      </AnimatedLink>
                    </motion.li>
                    <motion.li
                      initial={{ y: -20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.8 }}
                    >
                      <AnimatedLink
                        href="/contact"
                        className="text-4xl lg:text-6xl"
                      >
                        Contact Us
                      </AnimatedLink>
                    </motion.li>
                    <motion.li
                      initial={{ y: -20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.9 }}
                    >
                      <AnimatedLink
                        href="/news"
                        className="text-4xl lg:text-6xl"
                      >
                        News
                      </AnimatedLink>
                    </motion.li>
                  </ul>
                </motion.nav>

                <motion.div
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 1 }}
                  className="mt-16 lg:mt-20"
                >
                  <div className="flex flex-col gap-8 lg:flex-row lg:items-center sm:justify-between">
                    <div className="space-y-2">
                      <p className="text-sm text-gray-400">Follow us</p>
                      <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
                        <motion.div
                          initial="initial"
                          animate="animate"
                          variants={{
                            initial: {
                              y: window.innerWidth >= 1024 ? 0 : -20,
                              x: window.innerWidth >= 1024 ? -20 : 0,
                              opacity: 0,
                            },
                            animate: {
                              y: 0,
                              x: 0,
                              opacity: 1,
                            },
                          }}
                          transition={{ duration: 0.3, delay: 1.1 }}
                        >
                          <Link href="#">Instagram</Link>
                        </motion.div>
                        <motion.div
                          initial="initial"
                          animate="animate"
                          variants={{
                            initial: {
                              y: window.innerWidth >= 1024 ? 0 : -20,
                              x: window.innerWidth >= 1024 ? -20 : 0,
                              opacity: 0,
                            },
                            animate: {
                              y: 0,
                              x: 0,
                              opacity: 1,
                            },
                          }}
                          transition={{ duration: 0.3, delay: 1.2 }}
                        >
                          <Link href="#">Facebook</Link>
                        </motion.div>
                        <motion.div
                          initial="initial"
                          animate="animate"
                          variants={{
                            initial: {
                              y: window.innerWidth >= 1024 ? 0 : -20,
                              x: window.innerWidth >= 1024 ? -20 : 0,
                              opacity: 0,
                            },
                            animate: {
                              y: 0,
                              x: 0,
                              opacity: 1,
                            },
                          }}
                          transition={{ duration: 0.3, delay: 1.3 }}
                        >
                          <Link href="#">Twitter</Link>
                        </motion.div>
                        <motion.div
                          initial="initial"
                          animate="animate"
                          variants={{
                            initial: {
                              y: window.innerWidth >= 1024 ? 0 : -20,
                              x: window.innerWidth >= 1024 ? -20 : 0,
                              opacity: 0,
                            },
                            animate: {
                              y: 0,
                              x: 0,
                              opacity: 1,
                            },
                          }}
                          transition={{ duration: 0.3, delay: 1.4 }}
                        >
                          <Link href="#">Awwwards</Link>
                        </motion.div>
                      </div>
                    </div>
                    <Button className="bg-primary text-white rounded-full px-8 w-full lg:w-[228px] h-[48px] lg:h-[72px] hover:scale-105 duration-200 text-xl lg:text-2xl">
                      Get in touch
                    </Button>
                  </div>
                </motion.div>
              </div>
              <div className="absolute -bottom-10 right-0 w-full h-[800px] bg-[radial-gradient(circle_at_73%_145%,#545cff_0%,transparent_45%)]"></div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

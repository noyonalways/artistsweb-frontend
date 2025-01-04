"use client";

import Button from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect } from "react";
import { HiX } from "react-icons/hi";

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
        <motion.div
          initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
          animate={{ opacity: 1, backdropFilter: "blur(10px)" }}
          exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 bg-[#111]/80 text-white flex h-screen items-start lg:items-center lg:justify-center p-5 lg:p-0"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="w-full max-w-[940px] flex flex-col bg-[#111] px-8 py-10 lg:py-24 lg:px-20 rounded-[28px] relative overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="z-10">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-xl lg:text-3xl">Navigation</h2>
                <button
                  onClick={onClose}
                  className="p-2 hover:opacity-70 transition-opacity bg-gray-600/50 rounded-full"
                >
                  <HiX className="" />
                </button>
              </div>

              <nav className="lg:flex-1 bg-[#111]">
                <ul className="space-y-4 lg:space-y-6 font-semibold">
                  <li>
                    <Link
                      href="/case-studies"
                      className="group text-4xl lg:text-6xl hover:opacity-70 transition-opacity flex items-start"
                    >
                      <span>Case Studies</span>
                      <span className="ml-4 lg:ml-6 flex items-center justify-center rounded-full border border-gray-600 text-xl size-10 lg:text-2xl lg:size-16">
                        13
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/agency"
                      className="text-4xl lg:text-6xl hover:opacity-70 transition-opacity"
                    >
                      Our Agency
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="text-4xl lg:text-6xl hover:opacity-70 transition-opacity"
                    >
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/news"
                      className="text-4xl lg:text-6xl hover:opacity-70 transition-opacity"
                    >
                      News
                    </Link>
                  </li>
                </ul>
              </nav>

              <div className="mt-16 lg:mt-20">
                <div className="flex flex-col gap-8 lg:flex-row lg:items-center sm:justify-between">
                  <div className="space-y-2">
                    <p className="text-sm text-gray-400">Follow us</p>
                    <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
                      <Link
                        href="#"
                        className="hover:opacity-70 transition-opacity"
                      >
                        Instagram
                      </Link>
                      <Link
                        href="#"
                        className="hover:opacity-70 transition-opacity"
                      >
                        Facebook
                      </Link>
                      <Link
                        href="#"
                        className="hover:opacity-70 transition-opacity"
                      >
                        Twitter
                      </Link>
                      <Link
                        href="#"
                        className="hover:opacity-70 transition-opacity"
                      >
                        Awwwards
                      </Link>
                    </div>
                  </div>
                  <Button className="bg-primary text-white rounded-full px-8 w-full lg:w-[228px] h-[48px] lg:h-[72px] hover:scale-105 duration-200 text-xl lg:text-2xl">
                    Get in touch
                  </Button>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-10 right-0 w-full h-[800px] bg-[radial-gradient(circle_at_73%_145%,#545cff_0%,transparent_45%)]"></div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

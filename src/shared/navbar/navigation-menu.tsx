"use client";

import Button from "@/components/ui/button";
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

  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 bg-[#111]/80 text-white ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      } transition-opacity duration-300 flex h-screen lg:items-center lg:justify-center`}
    >
      <div className="w-full max-w-[940px] flex flex-col bg-foreground px-8 py-10 lg:py-24 lg:px-20 lg:rounded-[28px] relative overflow-hidden">
        <div className="z-10">
          <div className="flex justify-between items-start mb-8">
            <h2 className="text-3xl">Navigation</h2>
            <button
              onClick={onClose}
              className="p-2 hover:opacity-70 transition-opacity bg-gray-600/50 rounded-full"
            >
              <HiX className="h-5 w-5" />
            </button>
          </div>

          <nav className="lg:flex-1 bg-foreground">
            <ul className="space-y-6 font-semibold">
              <li>
                <Link
                  href="/case-studies"
                  className="group text-5xl lg:text-6xl hover:opacity-70 transition-opacity flex items-start"
                >
                  <span>Case Studies</span>
                  <span className="ml-4 lg:ml-6 flex items-center justify-center rounded-full border border-gray-600 text-xl size-16 !leading-none p-4">
                    13
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/agency"
                  className="text-5xl lg:text-6xl hover:opacity-70 transition-opacity"
                >
                  Our Agency
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-5xl lg:text-6xl hover:opacity-70 transition-opacity"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/news"
                  className="text-5xl lg:text-6xl hover:opacity-70 transition-opacity"
                >
                  News
                </Link>
              </li>
            </ul>
          </nav>

          <div className="mt-16 lg:mt-20">
            <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
              <div className="space-y-2">
                <p className="text-sm text-gray-400">Follow us</p>
                <div className="flex gap-4 lg:gap-8">
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
              <Button className="bg-primary text-white rounded-full px-8 w-56 h-[72px] hover:scale-105 duration-200 text-2xl">
                Get in touch
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute -bottom-10 right-0 w-full h-[800px] bg-[radial-gradient(circle_at_73%_145%,#545cff_0%,transparent_45%)]"></div>
      </div>
    </div>
  );
}

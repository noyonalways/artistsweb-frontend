"use client";

import Button from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { NavigationMenu } from "./navigation-menu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", controlNavbar);

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`sticky top-0 z-50 bg-white/40 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="backdrop-blur-md">
        <nav className="container">
          <div className="flex justify-between items-center h-[70px] lg:h-[100px]">
            <Link href="/">
              <Image src="/logo.svg" alt="Logo" width={65} height={100} />
            </Link>

            <div className="flex gap-x-4">
              <Button className="w-36 font-medium">Get in touch</Button>

              {/* menu button  */}
              <button
                onClick={() => setIsMenuOpen(true)}
                className="rounded-full flex flex-col hover:bg-gray-100 text-xl border border-primary size-10 items-center justify-center relative overflow-hidden group"
                aria-label="Open menu"
              >
                <div className="flex flex-col gap-[6px] items-center justify-center w-full h-full">
                  <div className="relative h-[2px] w-[40%]">
                    <span className="absolute inset-0 bg-foreground transition-all duration-300 ease-in-out group-hover:-translate-y-8" />
                    <span className="absolute inset-0 bg-foreground translate-y-8 transition-all duration-300 ease-in-out group-hover:translate-y-0" />
                  </div>
                  <div className="relative h-[2px] w-[40%]">
                    <span className="absolute inset-0 bg-foreground transition-all duration-300 ease-in-out group-hover:-translate-y-8" />
                    <span className="absolute inset-0 bg-foreground translate-y-8 transition-all duration-300 ease-in-out group-hover:translate-y-0 delay-100" />
                  </div>
                </div>
              </button>
            </div>
          </div>
        </nav>
      </div>

      <NavigationMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
    </header>
  );
};

export default Navbar;

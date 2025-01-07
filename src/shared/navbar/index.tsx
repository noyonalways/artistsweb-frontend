"use client";

import Button from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { NavigationMenu } from "./navigation-menu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70">
      <nav className="container">
        <div className="flex justify-between items-center h-[70px] lg:h-[100px]">
          <Link href="/">
            <Image src="/logo.svg" alt="Logo" width={65} height={100} />
          </Link>

          <div className="flex gap-x-4">
            <Button className="w-36 font-medium">Get in touch</Button>
            <button
              onClick={() => setIsMenuOpen(true)}
              className="rounded-full flex flex-col hover:bg-gray-100 text-xl border border-primary size-10 items-center justify-center"
              aria-label="Open menu"
            >
              <span className="w-[40%] h-[2px] bg-foreground"></span>
              <span className="w-[40%] h-[2px] bg-foreground mt-1"></span>
            </button>
          </div>
        </div>
        <NavigationMenu
          isOpen={isMenuOpen}
          onClose={() => setIsMenuOpen(false)}
        />
      </nav>
    </header>
  );
};

export default Navbar;

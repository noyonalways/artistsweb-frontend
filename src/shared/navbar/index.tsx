"use client";

import Button from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { HiOutlineBars2 } from "react-icons/hi2";
import { NavigationMenu } from "./navigation-menu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50  backdrop-blur-sm">
      <nav className="container">
        <div className="flex justify-between items-center h-[100px]">
          <Link href="/">
            <Image src="/logo.svg" alt="Logo" width={65} height={100} />
          </Link>

          <div className="flex gap-x-4">
            <Button className="w-36 font-medium">Get in touch</Button>
            <button
              onClick={() => setIsMenuOpen(true)}
              className="rounded-full hover:bg-gray-100 text-xl border border-primary size-10 flex items-center justify-center"
              aria-label="Open menu"
            >
              <HiOutlineBars2 />
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

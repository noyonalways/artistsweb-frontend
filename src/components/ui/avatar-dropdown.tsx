"use client";

import { useUser } from "@/context/user-context";
import { useEffect, useRef, useState } from "react";

export default function AvatarDropdown() {
  const { user, logout } = useUser();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!user) return null;

  const firstLetter = user.email.charAt(0).toUpperCase();

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-x-2 rounded-full hover:bg-gray-50 p-1 transition-colors duration-200"
      >
        <div className="h-8 w-8 rounded-full bg-primary text-white flex items-center justify-center font-semibold">
          {firstLetter}
        </div>
      </button>

      {isOpen && (
        <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="pt-1">
            <div className="px-4 py-2 border-b">
              <p className="text-sm font-medium text-gray-900">{user.email}</p>
              <p className="text-xs text-gray-500 capitalize">{user.role}</p>
            </div>
            <button
              onClick={logout}
              className="w-full px-4 py-2 text-left text-sm text-red-400 hover:bg-red-500/10 transition-colors duration-200"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

"use client";

import Header from "@/shared/admin-header";
import Sidebar from "@/shared/admin-sidebar";
import { useEffect, useState } from "react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSidebarOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex h-screen overflow-hidden lg:bg-gray-100">
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />

      <div className="flex flex-col flex-1 w-0 overflow-hidden">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main className="relative flex-1 overflow-y-auto focus:outline-none">
          <div className="lg:p-4 p-2">{children}</div>
        </main>
      </div>
    </div>
  );
}

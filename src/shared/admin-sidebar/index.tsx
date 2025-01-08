import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { FiBookOpen } from "react-icons/fi";
import { HiX } from "react-icons/hi";
import {
  MdMiscellaneousServices,
  MdOutlineDashboard,
  MdOutlineFeedback,
  MdWorkOutline,
} from "react-icons/md";

const navItems = [
  { name: "Home", href: "/", icon: AiOutlineHome },
  { name: "Dashboard", href: "/admin/dashboard", icon: MdOutlineDashboard },
  { name: "Add Work", href: "/admin/add-work", icon: MdWorkOutline },
  {
    name: "Add Service",
    href: "/admin/add-service",
    icon: MdMiscellaneousServices,
  },
  {
    name: "Add Feedback",
    href: "/admin/add-feedback",
    icon: MdOutlineFeedback,
  },
  { name: "Add Case Study", href: "/admin/add-case-study", icon: FiBookOpen },
];

export default function Sidebar({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) {
  const pathname = usePathname();
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        open &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [open, setOpen]);

  return (
    <>
      <div
        className={`fixed inset-0 z-20 bg-gray-900 bg-opacity-50 transition-opacity duration-300 lg:hidden ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
        onClick={() => setOpen(false)}
      ></div>

      <div
        ref={sidebarRef}
        className={`fixed inset-y-0 left-0 z-30 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between h-16 px-6 bg-gray-100 border-b">
          <Link
            href="/admin/dashboard"
            className="text-xl font-semibold text-gray-800"
          >
            Manage Contents
          </Link>
          <button
            className="p-1 text-gray-500 rounded-md lg:hidden hover:text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            onClick={() => setOpen(false)}
          >
            <HiX className="w-6 h-6" />
          </button>
        </div>

        <nav className="px-4 py-4">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center px-2 py-2 mt-2 text-base font-medium rounded-md transition-colors duration-200
                  ${
                    isActive
                      ? "bg-primary text-white"
                      : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                  }
                `}
                onClick={() => setOpen(false)}
              >
                <item.icon className={`w-5 h-5 mr-4`} />
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
}

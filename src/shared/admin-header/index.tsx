import { HiMenu } from "react-icons/hi";

export default function Header({
  setSidebarOpen,
}: {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}) {
  return (
    <header className="sticky top-0 z-10 flex-shrink-0 bg-white border-b border-gray-200">
      <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-4">
        <div className="flex items-center flex-1">
          <button
            type="button"
            className="text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 lg:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <HiMenu className="w-6 h-6" />
            <span className="sr-only">Open sidebar</span>
          </button>
          <div className="ml-4 lg:ml-0">
            <h1 className="text-2xl font-semibold text-gray-900">
              Admin Dashboard
            </h1>
          </div>
        </div>
      </div>
    </header>
  );
}

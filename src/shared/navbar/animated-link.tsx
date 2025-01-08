import Link from "next/link";
import { ReactNode } from "react";

interface AnimatedLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  badge?: ReactNode;
}

export function AnimatedLink({
  href,
  children,
  className = "",
  badge,
}: AnimatedLinkProps) {
  return (
    <Link
      href={href}
      className={`group relative flex items-center overflow-hidden ${className}`}
    >
      <div className="relative overflow-hidden">
        <span className="py-2 block translate-y-0 [transition:none] group-hover:transition-transform group-hover:duration-300 group-hover:ease-in-out group-hover:-translate-y-full">
          {children}
        </span>
        <span className="py-2 absolute inset-0 translate-y-full [transition:none] group-hover:transition-transform group-hover:duration-300 group-hover:ease-in-out group-hover:translate-y-0">
          {children}
        </span>
      </div>
      {badge && badge}
    </Link>
  );
}

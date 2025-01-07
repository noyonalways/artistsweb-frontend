import { NextRequest, NextResponse } from "next/server";
import { getCurrentUser } from "./service/auth";

type Role = keyof typeof roleBasedRoutes;

const authRoutes = ["/auth/login"];

const roleBasedRoutes = {
  admin: [
    "/admin",
    "/admin/dashboard",
    "/admin/add-work",
    "/admin/add-service",
    "/admin/add-feedback",
    "/admin/add-case-study",
  ],
};

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Get current user from token
  const user = await getCurrentUser();

  // If no user and trying to access protected route
  if (!user) {
    if (authRoutes.includes(pathname)) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(
        new URL(`/auth/login?redirect=${pathname}`, request.url)
      );
    }
  }

  // If user exists and tries to access auth routes
  if (user && authRoutes.includes(pathname)) {
    return NextResponse.redirect(new URL("/admin/dashboard", request.url));
  }
  // Check role-based access
  if ("role" in user && roleBasedRoutes[user.role as Role]) {
    const routes = roleBasedRoutes[user.role as Role];

    // Check if current path matches any allowed routes for the role
    if (routes.some((route) => pathname.startsWith(route))) {
      return NextResponse.next();
    }
  }

  // If none of the conditions match, redirect to home
  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: ["/auth/login", "/admin/:path*"],
};

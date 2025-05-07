import { NextRequest, NextResponse } from "next/server";
import { auth } from "./auth";

const protectedRoutes = ["/tv", "/movies","/favorites","/search"];

const middleware = async (request: NextRequest) => {
  const session = await auth();
  const { pathname } = request.nextUrl;
  const isProtected = protectedRoutes.includes(pathname);
  if (!session && isProtected) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  return NextResponse.next();
};

export default middleware;

import { NextRequest, NextResponse } from "next/server";
import { auth } from "./auth";

const protectedRoutes = ["/movies", "/tv"];
const middleware = async (request: NextRequest) => {
  const session = await auth();
  const { pathname } = request.nextUrl;
  if (!session && protectedRoutes.includes(pathname)) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  return NextResponse.next();
};

export default middleware;

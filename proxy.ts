import { NextRequest, NextResponse } from "next/server";

const PROTECTED_PREFIX = "/dashboard";
const LOGIN_PAGE = "/dashboard/login";
const COOKIE_NAME = "bs_session";

export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Protect /dashboard/** but not /dashboard/login itself
  if (
    pathname.startsWith(PROTECTED_PREFIX) &&
    !pathname.startsWith(LOGIN_PAGE)
  ) {
    const session = req.cookies.get(COOKIE_NAME);
    if (!session) {
      const loginUrl = req.nextUrl.clone();
      loginUrl.pathname = LOGIN_PAGE;
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};

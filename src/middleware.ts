import { NextRequest, NextResponse } from "next/server";
import { getUrl } from "@/lib/get-url";

export const middleware = (request: NextRequest) => {
  const token = request.cookies.get("authjs.session-token");
  const pathname = request.nextUrl.pathname;

  if (pathname.includes("/login-adm") && token) {
    return NextResponse.redirect(new URL(getUrl("/admin")));
  }

  if (pathname.includes("/admin") && !token) {
    return NextResponse.redirect(new URL(getUrl("/login-adm")));
  }
};

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|_next/favicon.ico).*)"],
};

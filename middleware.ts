import { NextResponse } from "next/server";
import type { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
  const token = req.cookies.get('token')?.value;
  const requestHeaders = new Headers(req.headers);

  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  requestHeaders.set('Authorization', `Bearer ${token}`);

  return NextResponse.next({
    headers: requestHeaders,
  });
}

export const config = {
  matcher: ["/dashboard", "/canvas"],
};

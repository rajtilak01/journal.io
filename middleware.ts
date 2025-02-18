import { NextResponse } from 'next/server';
import { cookies } from 'next/headers'; // Import cookies helper

export async function middleware(req: Request) {
  const cookieStore = await cookies(); 
  const token = cookieStore.get('token')?.value; 

  if (!token) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard', '/canvas',],
};

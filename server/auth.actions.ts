'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function setCookie(token: string) {
  if (!token) throw new Error('No token provided');

  const cookieStore = await cookies();
  cookieStore.set('token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    path: '/',
  });

  redirect('/canvas'); // Redirect after setting cookie
}

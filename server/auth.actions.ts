'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

// export async function setCookie(token: string) {
//   if (!token) throw new Error('No token provided');

//   const cookieStore = await cookies();
//   cookieStore.set('token', token, {
//     httpOnly: true,
//     secure: process.env.NODE_ENV === 'production',
//     sameSite: 'strict',
//     path: '/',
//   });

//   redirect('/dashboard'); // Redirect after setting cookie
// }

export async function setCookie(token: string) {
  try {
    (await cookies()).set({
      name: "token",
      value: token,
      sameSite: "strict",
      httpOnly: true,
    });
  } catch (error) {
    console.error("Error setting cookie", error);
    return 
  }
}

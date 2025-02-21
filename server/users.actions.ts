"use server";
import { prisma } from "@/lib/db"; // Import the singleton instance
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function createUser(email: string, user: any) {
  return await prisma.user.create({
    data: {
      email: email,
      firebaseId: user.uid,
    },
  });
}

// export async function setCookie(token: string) {
//   try {
//     (await cookies()).set({
//       name: "token",
//       value: token,
//       sameSite: "strict",
//       httpOnly: true,
//     });
//   } catch (error) {
//     console.error("Error setting cookie", error);
//     return 
//   }
// }

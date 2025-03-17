"use server";
import { prisma } from "@/lib/db"; // Import the singleton instance
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { auth } from "@/lib/firebaseAdmin";

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

export async function deleteAccount(userId: string) {

  try {
    await auth.deleteUser(userId);
    console.log(`User with ID ${userId} deleted successfully.`);
} catch (error: any) {
    console.error(`Error deleting Firebase user: ${error.message}`);
    // throw new Error("Failed to delete Firebase user.");
}

return { success: true };
}

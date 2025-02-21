import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
// import { useAuth } from "@/app/context/AuthContext";

export async function POST(req: NextRequest) {
  // const { signInWithGoogle, loginWithEmailAndPassword } = useAuth();

  try {
    // const { method, email, password } = await req.json(); // Identify the method

    // let user = null;

    // if (method === "email-login") {
    //   user = await loginWithEmailAndPassword(email, password);
    // } else if (method === "google-login") {
    //   user = await signInWithGoogle();
    // } else {
    //   return NextResponse.json({ error: "Invalid login method" }, { status: 400 });
    // }

    // if (!user) {
    //   return NextResponse.json({ error: "Authentication failed" }, { status: 401 });
    // }

    const token = await req.json();

    // Securely set the cookie
    (await cookies()).set({
      name: "token",
      value: token,
      sameSite: "strict",
      httpOnly: true,
    });

    return NextResponse.json({ success: true, token });
  } catch (error) {
    return NextResponse.json({ error: "Authentication failed" }, { status: 401 });
  }
}

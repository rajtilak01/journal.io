import { NextRequest, NextResponse } from "next/server";
import { auth as adminAuth } from "@/lib/firebaseAdmin";
import { prisma } from "@/lib/db";
export async function GET(req: NextRequest) {
  try {
    const authHeader = req.headers.get("Authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }
    const token = authHeader.split(" ")[1];
    const decoded = await adminAuth.verifyIdToken(token.toString());
    const uid = decoded.uid;

    const user = await prisma.user.findUnique({ where: { firebaseId: uid } });
    if (!user)
      return NextResponse.json({ error: "User not found" }, { status: 404 });

    const { searchParams } = new URL(req.url);
    console.log("searchParams", searchParams);
    const id = searchParams.get("id");
    console.log("id", id);
    console.log("type of id", typeof id);
    if (!id)
      return NextResponse.json(
        { error: "Journal ID not provided" },
        { status: 400 }
      );

    const journal = await prisma.journal.findUnique({ where: { id } });
    if (!journal)
      return NextResponse.json(
        { error: "Journal not found" },
        { status: 404 }
      );

      console.log("journal", journal);
    return NextResponse.json(
      {
        data: journal,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

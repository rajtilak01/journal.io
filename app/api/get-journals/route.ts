import { NextRequest, NextResponse } from 'next/server';
import { auth as adminAuth } from '@/lib/firebaseAdmin';
import { prisma } from '@/lib/db';
import { cookies } from "next/headers";
export async function GET(req: NextRequest) {
  try {
    const authHeader = req.headers.get('Authorization');
    // console.log("auth header", authHeader);
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
    }
    const token = authHeader.split(' ')[1];
    
    console.log("token coming from frontend", token);
    const decoded = await adminAuth.verifyIdToken(token.toString());
    const uid = decoded.uid;
    console.log("UID:", uid);

    const user = await prisma.user.findUnique({ where: { firebaseId: uid } });
    if (!user) return NextResponse.json({ error: 'User not found' }, { status: 404 });

    console.log("User:", user.id);

    const journals = await prisma.journal.findMany({ where: { userId: user.id } });

    if (!journals.length) {
      return NextResponse.json({ error: 'No journals found for this user' }, { status: 404 });
    }

    return NextResponse.json(journals, { status: 200 });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

import { NextRequest, NextResponse } from 'next/server';
import { auth as adminAuth } from '@/lib/firebaseAdmin';
import { prisma } from '@/lib/db';

export async function POST(req: NextRequest) {
  try {
    // Get token from cookies
    const token = req.cookies.get('token')?.value;
    if (!token) return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });

    // console.log("Token:", token);
 
    // Verify token
    const decoded = await adminAuth.verifyIdToken(token);
    const uid = decoded.uid;
    // console.log("UID:", uid);

    // Check if user exists
    const journals = await prisma.journal.findMany({ where: { userId: uid } });

    if (!journals.length) {
      return NextResponse.json({ error: 'No journals found for this user' }, { status: 404 });
    }

    return NextResponse.json(journals, { status: 200 });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

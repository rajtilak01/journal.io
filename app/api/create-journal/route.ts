import { NextRequest, NextResponse } from 'next/server';
import { auth as adminAuth } from '@/lib/firebaseAdmin';
import { prisma } from '@/lib/db';

export async function POST(req: NextRequest) {
  try {
    // Get token from cookies
    const authHeader = req.headers.get('Authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
    }

    const token = authHeader.split(' ')[1];

    // Verify token
    const decoded = await adminAuth.verifyIdToken(token);
    const uid = decoded.uid;
    // console.log("UID:", uid);

    const { content } = await req.json();

    // Check if user exists
    const user = await prisma.user.findUnique({ where: { firebaseId: uid } });
    if (!user) return NextResponse.json({ error: 'User not found' }, { status: 404 });

    // Create journal entry
    const journal = await prisma.journal.create({
      data: {
        content,
        user: { connect: { id: user.id } },
      },
    });

    return NextResponse.json(journal, { status: 200 });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

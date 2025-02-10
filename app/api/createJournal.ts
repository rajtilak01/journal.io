// pages/api/createJournal.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { auth as adminAuth } from '@/lib/firebaseAdmin';
import {prisma} from '@/lib/db';

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Assume the token is stored in cookies (you can use a helper to parse cookies)
    const token = req.cookies.token;
    if (!token) return res.status(401).json({ error: 'Not authenticated' });
    console.log("token", token);

    const decoded = await adminAuth.verifyIdToken(token);
    const uid = decoded.uid;
    console.log("uid", uid);

    const { title, content } = req.body;
    const journal = await prisma.journal.create({
      data: {
        title,
        content,
        user: { connect: { firebaseId: uid } }, // securely link journal to the user
      },
    });

    res.status(200).json(journal);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

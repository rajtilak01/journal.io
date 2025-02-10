// pages/api/session.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { auth as adminAuth } from '@/lib/firebaseAdmin'; // initialize Firebase Admin SDK

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }
  const { idToken } = req.body;
  try {
    const decoded = await adminAuth.verifyIdToken(idToken);
    // Set a secure cookie (adjust options as needed)
    res.setHeader(
      'Set-Cookie',
      `token=${idToken}; HttpOnly; Path=/; Secure; SameSite=Strict`
    );
    res.status(200).json({ uid: decoded.uid });
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
}

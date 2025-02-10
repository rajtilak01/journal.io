'use server';
import {prisma} from '@/server/db'; // Import the singleton instance

export async function createUser(email: string, user: any) {    
    return await prisma.user.create({
      data: {
        email: email,
        firebaseId: user.uid
      }
    });
}

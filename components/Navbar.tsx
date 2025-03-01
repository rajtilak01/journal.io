'use client'
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useAuth } from '@/app/context/AuthContext';
// import { useRouter } from 'next/navigation'

function Navbar() {
    // const router = useRouter();
    const { user } = useAuth();
    return (
        <div className='flex justify-between items-center mb-4 border-b border-gray-200 p-4'>
            <div><h1 className="text-2xl font-bold">Hi {user?.email}</h1></div>
            <div>
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>

            </div>
        </div>
    )
}

export default Navbar
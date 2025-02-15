import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// import { useRouter } from 'next/navigation'

function Navbar() {
    // const router = useRouter();
    return (
        <div className='flex justify-between items-center mb-4'>
            <div><h1 className="text-2xl font-bold">Journal.io</h1></div>
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
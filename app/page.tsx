'use client';
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  
  return (
    <div className="flex justify-center items-center text-center h-screen">
      <div>
        <h1 className="text-4xl font-bold underline text-white">Welcome to Journal.io</h1>
        <p className="text-2xl text-white">A place to write your thoughts and reflect on your day.</p>
        <div className="flex justify-center gap-4 mt-4">
          <Button onClick={() => {router.push('/signup')}}>Sign Up</Button>
          <Button onClick={() => {router.push('/login')}}>Sign In</Button>
        </div>
      </div>
    </div>

  );
}

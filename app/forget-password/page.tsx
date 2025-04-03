'use client'
import { Button } from "@/components/ui/button";
import { useAuth } from "@/app/context/AuthContext";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [isRequired, setIsRequired] = useState(false);
  const { sendPasswordResetEmailHandler } = useAuth();
  const router = useRouter();

  const handleSubmit = () => {
    if (!email.trim()) {
      setIsRequired(true);
      return;
    }
    
    setIsRequired(false);
    sendPasswordResetEmailHandler(email);
    router.push("/reset-password");
  };
//implement zod here for email validation
  return (
    <div>
      <div>Forgot password brother</div>
      <input
        id="email-address"
        name="email"
        type="email"
        autoComplete="email"
        className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {isRequired && <p className="text-red-500">Email is required</p>}
      <Button onClick={handleSubmit}>Submit</Button>
    </div>
  );
}

'use client'
import { Button } from "@/components/ui/button";
import { useAuth } from "@/app/context/AuthContext";
import { useState } from "react";

export default function () {
  const [email, setEmail] = useState("");
  const { sendPasswordResetEmailHandler } = useAuth();
  return (
    <div>
      <div>Forgot password brother</div>
      <input
        id="email-address"
        name="email"
        type="email"
        autoComplete="email"
        required
        className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button onClick={() => sendPasswordResetEmailHandler(email)}>
        Submit
      </Button>
    </div>
  );
}

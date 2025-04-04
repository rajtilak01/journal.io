"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/context/AuthContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { cn } from "@/lib/utils";
import { useLoading } from "../context/LoadingContext";

const emailSchema = z.string().email("Invalid email format");

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const { sendPasswordResetEmailHandler } = useAuth();
  const router = useRouter();
  const {show, hide} = useLoading();

  const handleSubmit = async () => {
    const validation = emailSchema.safeParse(email);
    if (!validation.success) {
      setError(validation.error.errors[0].message);
      return;
    }

    setError("");

    show();
    try {
      await sendPasswordResetEmailHandler(email);
    } catch (error) {
      console.log("Error in sending password reset email:", error);
      setError("Failed to send password reset email. Please try again.");
    }
    router.push("/check-inbox");
    hide();
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-900 p-4">
      <Card className="w-full max-w-sm bg-gray-800 shadow-lg rounded-2xl">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl text-white">Forgot Password?</CardTitle>
          <p className="text-sm text-gray-400">
            Enter your email and we'll send you a reset link.
          </p>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={cn(
                "w-full px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-indigo-500",
                error && "border-red-500"
              )}
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <Button onClick={handleSubmit} className="w-full">
              Send Reset Link
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

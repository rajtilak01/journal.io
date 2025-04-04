"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MailCheck } from "lucide-react";
import { useRouter } from "next/navigation";
import { useLoading } from "../context/LoadingContext";

export default function CheckEmailPage() {
  const router = useRouter();
  const { show, hide } = useLoading();
  
  
  const handleSubmit = () => {
    show();
    router.push("/login");
    hide();
  };
  
  return (
    <div className="h-screen flex items-center justify-center bg-gray-900 px-4">
      <Card className="w-full max-w-sm bg-gray-800 text-white rounded-2xl shadow-lg p-6 space-y-6">
        <CardHeader className="flex flex-col items-center text-center">
          <MailCheck className="w-12 h-12 text-indigo-400 animate-bounce mb-2" />
          <CardTitle className="text-2xl">Check your email</CardTitle>
          <p className="text-sm text-gray-400">
            We’ve sent a password reset link to your email. Please follow the
            instructions to reset your password.
          </p>
        </CardHeader>

        <CardContent>
          <Button className="w-full" onClick={() => handleSubmit()}>
            Back to Login
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

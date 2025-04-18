"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/context/AuthContext";
import Link from "next/link";
import { createUser } from "@/server/users.actions";
// import cookies from "next/headers";
import axios from "axios";
import { setCookie } from "@/server/auth.actions";
import { Button } from "@mantine/core";
import { useLoading } from "@/app/context/LoadingContext";

export default function AuthForm({ type }: { type: "signin" | "signup" }) {
  const { show, hide } = useLoading();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const {
    signInWithGoogle,
    loginWithEmailAndPassword,
    signUpWithEmailAndPassword,
  } = useAuth();

  const handleEmailLogin = async (e: React.FormEvent) => {
    show();
    e.preventDefault();
    try {
      let user = null;
      if (type === "signin") {
        user = await loginWithEmailAndPassword(email, password);
      } else if (type === "signup") {
        user = await signUpWithEmailAndPassword(email, password);
        if (!user) return;
        await createUser(email, user.displayName ?? "", { uid: user.uid });
      }

      const token = await user?.getIdToken();
      if (!token) return;
      // console.log("token from firebase", token);
      localStorage.setItem("token", token);
      setCookie(token);
      router.push("/dashboard");
    } catch (error: any) {
      setError(error.message);
    } finally{
      hide();
    }
  };

  const handleGoogleLogin = async () => {
    show();
    try {
      const user = await signInWithGoogle();
      if(!user) return;
      const isNewUser = user?.metadata?.creationTime === user?.metadata?.lastSignInTime;
      if (isNewUser) {
        await createUser(user.email ?? "", user.displayName ?? "", { uid: user.uid });
      }
      // console.log("user from google login", user);
      const token = await user?.getIdToken();
      if (!token) return;
      localStorage.setItem("token", token);
      setCookie(token);
      console.log("result after google login", user);
      router.push("/dashboard");
    } catch (error: any) {
      setError(error.message);
      console.log("Error during google login", error)
    }
    finally{
      hide();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-white-900">
            {type === "signin" ? "Sign in" : "Sign up"} to your account
          </h2>
        </div>
        {error && (
          <div
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
            role="alert"
          >
            <span className="block sm:inline">{error}</span>
          </div>
        )}
        <form className="mt-8 space-y-6" onSubmit={handleEmailLogin}>
          <div className="space-y-4">
            <div className="flex flex-col">
              <label
                htmlFor="email-address"
                className="text-sm font-medium text-gray-300 mb-1"
              >
                Email Address
              </label>
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
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="password"
                className="text-sm font-medium text-gray-300 mb-1"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {type === "signin" ? "Sign in" : "Sign up"}
            </button>
          </div>
        </form>

        <div className="mt-6">
          <button
            onClick={handleGoogleLogin}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            {type === "signin" ? "Sign in" : "Sign up"} with Google
          </button>
        </div>

        <div className="text-center mt-4">
          <Link
            href={type === "signin" ? "/signup" : "/login"}
            className="text-indigo-600 hover:text-indigo-500"
          >
            {type === "signin"
              ? "Don't have an account? Sign up"
              : "Already have an account? Sign in"}
          </Link>
        </div>
        {type === "signin"
            && <div className="text-center mt-4">
          <Link href={"/forget-password"} className="text-indigo-600 hover:text-indigo-500">
            Forgot your password? Reset it here
          </Link>
        </div>}
      </div> 
    </div>
  );
}

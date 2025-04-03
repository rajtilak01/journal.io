'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { confirmPasswordReset, verifyPasswordResetCode } from 'firebase/auth';
import { auth } from '@/lib/firebase';

export default function ResetPasswordPage() {
  const [newPassword, setNewPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const oobCode = searchParams.get('oobCode'); // Extract the oobCode from the URL

  const handlePasswordReset = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!oobCode) {
      setError('Invalid or missing reset code.');
      return;
    }

    try {
      // Verify the reset code
      await verifyPasswordResetCode(auth, oobCode);

      // Confirm the password reset
      await confirmPasswordReset(auth, oobCode, newPassword);

      setSuccess(true);
      setError('');
      setTimeout(() => router.push('/login'), 3000); // Redirect to login after success
    } catch (err: any) {
      setError(err.message || 'Failed to reset password. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
          Reset Your Password
        </h2>
        {error && (
          <div
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
            role="alert"
          >
            <span className="block sm:inline">{error}</span>
          </div>
        )}
        {success ? (
          <div
            className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
            role="alert"
          >
            <span className="block sm:inline">
              Password reset successful! Redirecting to login...
            </span>
          </div>
        ) : (
          <form className="mt-8 space-y-6" onSubmit={handlePasswordReset}>
            <div className="flex flex-col">
              <label
                htmlFor="new-password"
                className="text-sm font-medium text-gray-300 mb-1"
              >
                New Password
              </label>
              <input
                id="new-password"
                name="new-password"
                type="password"
                required
                className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your new password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Reset Password
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
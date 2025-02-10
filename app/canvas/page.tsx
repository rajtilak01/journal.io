'use client';
import Navbar from "@/components/Navbar";
import TipTap from "@/components/TipTap";

export default function Canvas() {
  return (
    <div className="min-h-screen bg-gray-800 text-white p-6">
      <Navbar />

      <div className="flex flex-col md:flex-row gap-4 grid-cols-3 h-screen">
        <div className="w-full md:w-1/5 rounded-lg shadow-lg p-4 text-black">
        </div>
        <div className="w-full md:w-3/5 bg-gray-900 rounded-lg shadow-lg p-4 text-black">
          <TipTap />
        </div>
        <div className="w-full md:w-1/5 rounded-lg shadow-lg p-4 text-black">
        </div>
      </div>
    </div>
  );
}
 
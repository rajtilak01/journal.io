'use client';
import { Textarea } from "@/components/ui/textarea"; // Import Textarea if using ShadCN
import Navbar from "@/components/Navbar";
import TipTap from "@/components/TipTap";


export default function Canvas() {
  return (
    <div className="min-h-screen bg-gray-800 text-white p-6">
      <Navbar />

      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-2/3 bg-gray-900 rounded-lg shadow-lg p-4 text-black">
            {/* <Textarea
              className="w-full h-96 md:h-screen p-4 bg-gray-800 text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Start writing here..."
            /> */}
            <TipTap />
        </div>
      </div>  
    </div>
  );
}
 
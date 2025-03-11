// import React from "react";
// import { Vortex } from "../components/ui/vortex";
// import { Button } from "@/components/ui/button";
// import Link from "next/link";

// export default async function Home() {
//   return (
//     <div className="w-[calc(100%-4rem)] mx-auto rounded-md h-screen overflow-hidden w-full">
//       <Vortex
//         backgroundColor="black"
//         rangeY={1000}
//         particleCount={500}
//         baseHue={120}
//         className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
//       >
//         <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
//           The ultimate Journal App
//         </h2>
//         <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
//           Write your thoughts, feel free to express yourself.
//         </p>
//         <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
//           <Link href="/login">
//             <Button className="px-4 py-2">Login</Button>
//           </Link>
//           <Link href="/signup">
//             <Button variant="outline" className="px-4 py-2">Sign Up</Button>
//           </Link>
//         </div>
//       </Vortex>
//     </div>
//   );
// }


"use client";

import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon, BookText, Feather, Users, Lock, Star, ChevronDown } from "lucide-react";
import { useTheme } from "next-themes";

import Testimonials from "@/components/Testimonial";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";

export default function Home() {
  

  return (
    <div className="min-h-screen bg-background">
      <Navigation/>
      <Hero/>
      <Features/>
      <Testimonials/>
      <FAQ/>
      <CTA/>
      <Footer/>
    </div>
  );
}
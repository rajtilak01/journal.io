"use client"; 

import React from "react";
import { motion } from "framer-motion";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-neutral-900 text-white backdrop-blur-lg bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative">
      {/* Left Section with Animation */}
      <motion.section
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="hidden w-1/2 items-center justify-center p-10 lg:flex xl:w-1/2  relative overflow-hidden "
      >
        {/* Floating Circles Animation - Fixed */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center -z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: .5, ease: "easeOut" }}
        >
          <motion.div
            className="absolute w-40 h-40 bg-red-500 opacity-20 rounded-full blur-3xl"
            animate={{ scale: [1.5, 1.5, 1.5], opacity: [1, 1, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
          <motion.div
            className="absolute w-28 h-28 bg-pink-500 opacity-30 rounded-full blur-2xl"
            animate={{ y: [0, -20, 0], opacity: [1,1,1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          <motion.div
            className="absolute w-20 h-20 bg-red-900 opacity-25 rounded-full blur-2xl"
            animate={{ x: [0, 20, 0], opacity: [1, 1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>

        <div className="flex max-h-[800px] max-w-[430px] flex-col justify-center space-y-12 bg-white/10 backdrop-blur-lg p-6  ">
          <div className="space-y-5 text-white">
            <h1 className="text-3xl font-extrabold tracking-wide">Manage your thoughts the best way</h1>
            <p className="text-lg text-gray-300">This is a place where you can write your heart out.</p>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="flex flex-1 flex-col items-center p-4 py-10 lg:justify-center lg:p-10 lg:py-0  "
      >
        <div className="w-full max-w-md  rounded-lg">
          {children}
        </div>
      </motion.section>
    </div>
  );
}

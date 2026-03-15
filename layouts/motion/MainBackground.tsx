"use client";

import React from "react";
import { motion } from "framer-motion";

const MainBackground = () => {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 h-full w-full overflow-hidden bg-slate-100 dark:bg-slate-950">

      {/* 
        SHARP colorful geometric shapes — NOT blurred.
        The glassmorphism components (backdrop-blur) will blur these themselves,
        creating that beautiful macOS frosted glass effect.
      */}

      {/* Large cyan circle — top left, sharp edge */}
      <motion.div
        animate={{
          x: [0, 60, 0],
          y: [0, 40, 0],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-32 -top-32 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-cyan-400 to-cyan-600 opacity-60 dark:opacity-40"
      />

      {/* Deep blue rectangle — right side, rotated */}
      <motion.div
        animate={{
          rotate: [12, 18, 12],
          y: [0, -30, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-20 top-[15%] h-[400px] w-[300px] rounded-3xl bg-gradient-to-b from-blue-500 to-blue-700 opacity-50 dark:opacity-35"
      />

      {/* Indigo/violet blob — center left, large */}
      <motion.div
        animate={{
          x: [0, 40, -20, 0],
          y: [0, -30, 20, 0],
          scale: [1, 1.05, 0.95, 1],
        }}
        transition={{ duration: 35, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[10%] top-[40%] h-[450px] w-[450px] rounded-full bg-gradient-to-tr from-indigo-500 to-violet-500 opacity-40 dark:opacity-25"
      />

      {/* Teal strip — bottom, horizontal */}
      <motion.div
        animate={{
          x: [-20, 40, -20],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-10 left-[20%] h-[200px] w-[600px] rotate-[-6deg] rounded-3xl bg-gradient-to-r from-teal-400 to-cyan-500 opacity-50 dark:opacity-30"
      />

      {/* Purple accent circle — bottom right */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          y: [0, -20, 0],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-20 -right-10 h-[350px] w-[350px] rounded-full bg-gradient-to-tl from-purple-500 to-pink-500 opacity-45 dark:opacity-30"
      />

      {/* Sky blue square — top center, tilted */}
      <motion.div
        animate={{
          rotate: [-8, -14, -8],
          x: [0, -25, 0],
        }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-16 left-[40%] h-[280px] w-[280px] rounded-2xl bg-gradient-to-br from-sky-400 to-blue-500 opacity-45 dark:opacity-25"
      />

      {/* Dot Grid Pattern — subtle structure */}
      <div
        className="absolute inset-0 opacity-[0.15] dark:opacity-[0.08]"
        style={{
          backgroundImage: `radial-gradient(circle, currentColor 0.5px, transparent 0.5px)`,
          backgroundSize: "24px 24px",
        }}
      />

      {/* Grain/Noise Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
};

export default MainBackground;

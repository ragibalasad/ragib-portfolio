"use client";

import { motion } from "framer-motion";

const Bubbles = () => {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {/* Large Cyan Blob - Top Right */}
      <motion.div
        className="absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-cyan-400/30 to-blue-500/20 blur-3xl"
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Purple Blob - Left Side */}
      <motion.div
        className="absolute -left-20 top-1/4 h-[400px] w-[400px] rounded-full bg-gradient-to-tr from-purple-500/20 to-pink-400/15 blur-3xl"
        animate={{
          x: [0, -20, 0],
          y: [0, 40, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Blue Blob - Bottom Right */}
      <motion.div
        className="absolute -bottom-32 right-1/4 h-[450px] w-[450px] rounded-full bg-gradient-to-tl from-blue-600/25 to-cyan-400/15 blur-3xl"
        animate={{
          x: [0, 40, 0],
          y: [0, -30, 0],
          scale: [1, 1.03, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
      />

      {/* Small Accent Blob - Center */}
      <motion.div
        className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Subtle Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />
    </div>
  );
};

export default Bubbles;

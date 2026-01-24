"use client";

import { motion } from "framer-motion";
import { FaReact, FaPython, FaGolang } from "react-icons/fa6";
import { SiTypescript, SiNextdotjs } from "react-icons/si";

const HeroVisual = () => {
  return (
    <div className="relative flex h-full w-full items-center justify-center perspective-1000">
      
      {/* Floating Icons Orbiting */}
      <FloatingIcon
        icon={<FaReact />}
        color="text-cyan-400"
        position="-top-12 -left-12"
        delay={0}
      />
      <FloatingIcon
        icon={<SiTypescript />}
        color="text-blue-500"
        position="top-1/4 -right-16"
        delay={1.5}
      />
      <FloatingIcon
        icon={<SiNextdotjs />}
        color="text-white"
        position="-bottom-8 left-1/4"
        delay={3}
      />
       <FloatingIcon
        icon={<FaPython />}
        color="text-yellow-400"
        position="bottom-20 -right-8"
        delay={4.5}
      />

      {/* Code Editor Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotateY: -20, rotateX: 10 }}
        animate={{ 
          opacity: 1, 
          scale: 1, 
          rotateY: [-10, 10, -10], 
          rotateX: [5, -5, 5],
          y: [-10, 10, -10]
        }}
        transition={{
          duration: 0.8,
          opacity: { duration: 0.5 },
          y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
          rotateY: { duration: 8, repeat: Infinity, ease: "easeInOut" },
          rotateX: { duration: 9, repeat: Infinity, ease: "easeInOut" },
        }}
        style={{ transformStyle: "preserve-3d" }}
        className="relative z-10 w-[90%] max-w-md overflow-hidden rounded-2xl border border-white/20 bg-slate-900/80 shadow-2xl backdrop-blur-xl dark:border-white/10 dark:bg-black/60"
      >
        {/* Window Controls */}
        <div className="flex items-center gap-2 border-b border-white/10 bg-white/5 px-4 py-3">
          <div className="h-3 w-3 rounded-full bg-red-400"></div>
          <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
          <div className="h-3 w-3 rounded-full bg-green-400"></div>
          <div className="ml-2 text-xs font-medium text-slate-500">welcome.tsx</div>
        </div>

        {/* Code Content */}
        <div className="p-6 font-mono text-sm leading-relaxed text-slate-300">
          <div className="flex">
            <span className="w-6 select-none text-slate-600">1</span>
            <div>
              <span className="text-purple-400">const</span> <span className="text-blue-400">Developer</span> = <span className="text-yellow-300">{"{"}</span>
            </div>
          </div>
          <div className="flex">
            <span className="w-6 select-none text-slate-600">2</span>
            <div className="pl-4">
              name: <span className="text-green-400">"Ragib Al Asad"</span>,
            </div>
          </div>
          <div className="flex">
            <span className="w-6 select-none text-slate-600">3</span>
            <div className="pl-4">
              role: <span className="text-green-400">"Full Stack Engineer"</span>,
            </div>
          </div>
          <div className="flex">
            <span className="w-6 select-none text-slate-600">4</span>
            <div className="pl-4">
              skills: <span className="text-yellow-300">{"["}</span>
              <span className="text-green-400">"React"</span>, <span className="text-green-400">"Next.js"</span><span className="text-yellow-300">{"]"}</span>,
            </div>
          </div>
          <div className="flex">
            <span className="w-6 select-none text-slate-600">5</span>
            <div className="pl-4">
              hardWorker: <span className="text-orange-400">true</span>,
            </div>
          </div>
          <div className="flex">
            <span className="w-6 select-none text-slate-600">6</span>
            <div className="pl-4">
              quickLearner: <span className="text-orange-400">true</span>,
            </div>
          </div>
          <div className="flex">
            <span className="w-6 select-none text-slate-600">6</span>
            <div className="pl-4">
              problemSolver: <span className="text-orange-400">true</span>,
            </div>
          </div>
          <div className="flex">
            <span className="w-6 select-none text-slate-600">7</span>
            <div>
              <span className="text-yellow-300">{"}"}</span>;
            </div>
          </div>
          <div className="flex animate-pulse">
            <span className="w-6 select-none text-slate-600">8</span>
            <div className="h-5 w-2 bg-cyan-400"></div>
          </div>
        </div>

        {/* Glow Effect */}
        <div className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-cyan-500/20 blur-3xl"></div>
        <div className="absolute -left-20 -top-20 h-40 w-40 rounded-full bg-blue-500/20 blur-3xl"></div>
      </motion.div>
    </div>
  );
};

function FloatingIcon({ icon, color, position, delay }: { icon: React.ReactNode, color: string, position: string, delay: number }) {
  return (
    <motion.div
      className={`absolute ${position} z-20 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-3xl shadow-xl backdrop-blur-md ${color}`}
      animate={{
        y: [-10, 10, -10],
        rotate: [0, 10, -10, 0],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay,
      }}
    >
      {icon}
    </motion.div>
  );
}

export default HeroVisual;

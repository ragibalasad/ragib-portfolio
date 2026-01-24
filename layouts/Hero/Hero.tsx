"use client";

import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6";
import { HiArrowRight, HiDownload, HiMail } from "react-icons/hi";
import { motion } from "framer-motion";
import Bubbles from "./Bubbles";

const stats = [
  { value: "4+", label: "Years" },
  { value: "16+", label: "Projects" },
  { value: "7+", label: "Clients" },
];

const Hero = () => {
  return (
    <section className="hero relative min-h-screen overflow-hidden px-6">
      <Bubbles />
      
      {/* Glowing Code Symbol Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          className="select-none font-mono text-[18rem] font-light tracking-tighter text-slate-100 dark:text-slate-800/30 sm:text-[24rem] lg:text-[32rem]"
          animate={{
            y: [0, -15, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            textShadow: "0 0 120px rgba(34, 211, 238, 0.08)",
          }}
        >
          {"</>"}
        </motion.div>
      </div>
      
      {/* Main Content */}
      <div className="container relative mx-auto flex min-h-screen flex-col items-center justify-center max-sm:px-6 pb-10 text-center">
        <div className="max-w-3xl space-y-6">
          
          {/* Name */}
          <div>
            <p className="mb-2 text-sm font-medium uppercase tracking-widest text-cyan-800 dark:text-cyan-400">
              Software Developer
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
              Ragib Al Asad
            </h1>
            <div className="mx-auto mt-4 h-1.5 w-32 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600"></div>
          </div>
          
          {/* Tagline */}
          <p className="mx-auto max-w-xl text-base leading-relaxed text-slate-800 dark:text-slate-400 sm:text-lg">
            Building modern web applications with clean architecture and thoughtful user experiences. Based in Bangladesh.
          </p>
          
          {/* Stats - Inline */}
          <div className="flex items-center justify-center gap-8 pt-2 text-sm text-slate-800 dark:text-slate-500">
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center gap-2">
                <span className="text-lg font-bold text-cyan-700 dark:text-cyan-400">{stat.value}</span>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
          
          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              Get in Touch
              <HiArrowRight />
            </a>
            <a
              href="/ragib-resume.pdf"
              download="ragib-resume.pdf"
              target="_blank"
              className="inline-flex items-center gap-2 rounded-xl border-2 border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition-all duration-300 hover:border-cyan-500 hover:text-cyan-600 dark:border-slate-600 dark:text-slate-300 dark:hover:border-cyan-400 dark:hover:text-cyan-400"
            >
              <HiDownload />
              Resume
            </a>
          </div>
          
        </div>
      </div>
      
      {/* Social Links - Glassy Dock (Bottom) */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <div className="flex items-center gap-2 rounded-2xl border border-white/20 bg-white/40 px-4 py-3 shadow-lg backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
          <a
            href="https://github.com/ragibalasad"
            target="_blank"
            className="group relative flex h-11 w-11 items-center justify-center rounded-xl bg-white/60 text-xl text-slate-600 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:scale-110 hover:bg-gradient-to-br hover:from-slate-700 hover:to-slate-900 hover:text-white hover:shadow-xl hover:shadow-slate-500/25 dark:bg-white/10 dark:text-slate-300 dark:hover:from-slate-600 dark:hover:to-slate-800 dark:hover:text-white dark:hover:shadow-slate-400/20"
            title="GitHub"
          >
            <FaGithub className="transition-transform duration-300 group-hover:scale-110" />
            <span className="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-slate-900 px-2 py-1 text-xs font-medium text-white opacity-0 shadow-lg transition-all duration-200 group-hover:-bottom-10 group-hover:opacity-100 dark:bg-slate-700">
              GitHub
            </span>
          </a>
          <a
            href="https://linkedin.com/in/ragibalasad"
            target="_blank"
            className="group relative flex h-11 w-11 items-center justify-center rounded-xl bg-white/60 text-xl text-slate-600 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:scale-110 hover:bg-gradient-to-br hover:from-blue-500 hover:to-blue-700 hover:text-white hover:shadow-xl hover:shadow-blue-500/30 dark:bg-white/10 dark:text-slate-300 dark:hover:from-blue-500 dark:hover:to-blue-700 dark:hover:text-white dark:hover:shadow-blue-400/25"
            title="LinkedIn"
          >
            <FaLinkedin className="transition-transform duration-300 group-hover:scale-110" />
            <span className="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-slate-900 px-2 py-1 text-xs font-medium text-white opacity-0 shadow-lg transition-all duration-200 group-hover:-bottom-10 group-hover:opacity-100 dark:bg-slate-700">
              LinkedIn
            </span>
          </a>
          <a
            href="https://x.com/ragibalasad"
            target="_blank"
            className="group relative flex h-11 w-11 items-center justify-center rounded-xl bg-white/60 text-xl text-slate-600 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:scale-110 hover:bg-gradient-to-br hover:from-slate-800 hover:to-black hover:text-white hover:shadow-xl hover:shadow-slate-500/25 dark:bg-white/10 dark:text-slate-300 dark:hover:from-slate-700 dark:hover:to-slate-900 dark:hover:text-white dark:hover:shadow-slate-400/20"
            title="Twitter/X"
          >
            <FaTwitter className="transition-transform duration-300 group-hover:scale-110" />
            <span className="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-slate-900 px-2 py-1 text-xs font-medium text-white opacity-0 shadow-lg transition-all duration-200 group-hover:-bottom-10 group-hover:opacity-100 dark:bg-slate-700">
              Twitter/X
            </span>
          </a>
          <a
            href="mailto:ragibalasad@gmail.com"
            className="group relative flex h-11 w-11 items-center justify-center rounded-xl bg-white/60 text-xl text-slate-600 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:scale-110 hover:bg-gradient-to-br hover:from-red-500 hover:to-rose-600 hover:text-white hover:shadow-xl hover:shadow-red-500/30 dark:bg-white/10 dark:text-slate-300 dark:hover:from-red-500 dark:hover:to-rose-600 dark:hover:text-white dark:hover:shadow-red-400/25"
            title="Email"
          >
            <HiMail className="transition-transform duration-300 group-hover:scale-110" />
            <span className="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-slate-900 px-2 py-1 text-xs font-medium text-white opacity-0 shadow-lg transition-all duration-200 group-hover:-bottom-10 group-hover:opacity-100 dark:bg-slate-700">
              Email
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

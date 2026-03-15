"use client";

import { HiArrowRight, HiDownload } from "react-icons/hi";
import { motion } from "framer-motion";
import HeroVisual from "./HeroVisual";

const stats = [
  { value: "4+", label: "Years" },
  { value: "16+", label: "Projects" },
  { value: "7+", label: "Clients" },
];

const Hero = () => {
  return (
    <section id="hero" className="relative w-full min-h-screen overflow-hidden">

      {/* Milky frosted glass overlay — colorful shapes glow through naturally */}
      <div className="absolute inset-0 bg-white/60 backdrop-blur-3xl dark:bg-slate-950/70" />

      {/* Main Content */}
      <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid min-h-screen grid-cols-1 items-center gap-12 pb-24 pt-32 lg:grid-cols-2 lg:gap-16">

        {/* Left Column: Text & Content — no card, just open */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <div className="max-w-2xl space-y-8">

            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mx-auto flex w-fit items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-cyan-600 dark:text-cyan-400 lg:mx-0 backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-500"></span>
              </span>
              Available for Hire
            </motion.div>

            {/* Name & Title */}
            <div className="space-y-4">
              <h1
                className="font-heading text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl xl:text-7xl"
                style={{ textShadow: "0 2px 20px rgba(0,0,0,0.08)" }}
              >
                Ragib <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">Al Asad.</span>
              </h1>
              <p className="max-w-xl text-lg leading-relaxed text-slate-600 dark:text-slate-400 sm:text-xl">
                I am a <span className="font-bold text-slate-900 dark:text-white">Full-Stack Software Engineer</span> dedicated to building exceptional digital experiences that combine clean code with stunning design.
              </p>
            </div>

            {/* Stats Section */}
            <div className="flex flex-wrap items-center justify-center gap-8 border-y border-slate-200/50 py-8 dark:border-white/10 lg:justify-start sm:gap-12">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col items-center gap-1 lg:items-start">
                  <span className="font-heading text-3xl font-bold tracking-tighter text-slate-900 dark:text-white sm:text-4xl">
                    {stat.value}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-400">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
              <a
                href="#contact"
                className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-2xl bg-slate-900 px-8 py-4 text-sm font-bold text-white transition-all hover:scale-105 dark:bg-white dark:text-slate-950 sm:w-auto"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 transition-opacity group-hover:opacity-100"></div>
                <span className="relative flex items-center gap-2">
                  Work With Me
                  <HiArrowRight className="transition-transform group-hover:translate-x-1" />
                </span>
              </a>
              <a
                href="/ragib-resume.pdf"
                download="ragib-resume.pdf"
                target="_blank"
                className="flex w-full items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white/50 px-8 py-4 text-sm font-bold text-slate-700 backdrop-blur-sm transition-all hover:border-cyan-500 hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:bg-white/10 sm:w-auto"
              >
                <HiDownload className="text-lg" />
                Download Resume
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Visual */}
        <div className="hidden h-full w-full items-center justify-center lg:flex">
           <HeroVisual />
        </div>
      </div>

    </section>
  );
};

export default Hero;


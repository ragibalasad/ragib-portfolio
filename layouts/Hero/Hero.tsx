"use client";

import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6";
import { HiArrowRight, HiDownload, HiMail } from "react-icons/hi";
import { motion } from "framer-motion";
import Bubbles from "./Bubbles";
import HeroVisual from "./HeroVisual";

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
      <div className="container relative mx-auto max-w-7xl grid min-h-screen grid-cols-1 items-center gap-12 max-xl:px-6 pb-24 pt-32 lg:grid-cols-2 lg:gap-16">
        
        {/* Left Column: Text & Content */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <div className="max-w-2xl space-y-8">
            
            {/* Status Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mx-auto flex w-fit items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-cyan-600 dark:text-cyan-400 lg:mx-0"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-500"></span>
              </span>
              Available for Hire
            </motion.div>

            {/* Name & Title */}
            <div className="space-y-4">
              <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-6xl lg:text-6xl xl:text-7xl">
                Ragib <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">Al Asad.</span>
              </h1>
              <p className="max-w-xl text-lg leading-relaxed text-slate-600 dark:text-slate-400 sm:text-xl">
                I am a <span className="font-bold text-slate-900 dark:text-white">Full-Stack Software Engineer</span> dedicated to building exceptional digital experiences that combine clean code with stunning design.
              </p>
            </div>
            
            {/* Stats Section */}
            <div className="flex flex-wrap items-center justify-center gap-8 border-y border-slate-200/50 py-8 dark:border-white/5 lg:justify-start sm:gap-12">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col items-center gap-1 lg:items-start">
                  <span className="text-2xl font-black tracking-tighter text-slate-900 dark:text-white sm:text-3xl">
                    {stat.value}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-cyan-600 dark:text-cyan-400">
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
                className="flex w-full items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-8 py-4 text-sm font-bold text-slate-700 transition-all hover:border-cyan-500 hover:bg-slate-50 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:bg-white/10 sm:w-auto"
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
      
      {/* Social Links - Glassy Dock (Bottom) */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 hidden sm:block">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex items-center gap-2 rounded-2xl border border-white/20 bg-white/30 px-3 py-2 shadow-2xl backdrop-blur-2xl dark:border-white/10 dark:bg-slate-900/40"
        >
          <SocialIcon
            href="https://github.com/ragibalasad"
            icon={<FaGithub />}
            label="GitHub"
          />
          <SocialIcon
            href="https://linkedin.com/in/ragibalasad"
            icon={<FaLinkedin />}
            label="LinkedIn"
          />
          <SocialIcon
            href="https://x.com/ragibalasad"
            icon={<FaTwitter />}
            label="Twitter"
          />
          <SocialIcon
            href="mailto:ragibalasad@gmail.com"
            icon={<HiMail />}
            label="Email"
          />
        </motion.div>
      </div>
    </section>
  );
};

const SocialIcon = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => {
  return (
    <a
      href={href}
      target="_blank"
      className="group relative flex h-11 w-11 items-center justify-center rounded-xl bg-white/40 text-xl text-slate-700 transition-all duration-300 hover:scale-110 hover:bg-gradient-to-br hover:from-cyan-500 hover:to-blue-600 hover:text-white hover:shadow-[0_8px_20px_-5px_rgba(34,211,238,0.4)] dark:bg-white/5 dark:text-slate-300 dark:hover:from-cyan-500 dark:hover:to-blue-600 dark:hover:text-white"
      title={label}
    >
      <span className="transition-transform duration-300 group-hover:scale-110">
        {icon}
      </span>
      
      {/* Premium Tooltip */}
      <span className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 translate-y-2 whitespace-nowrap rounded-lg border border-white/20 bg-slate-900/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-white opacity-0 shadow-xl backdrop-blur-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 dark:bg-white dark:text-slate-950">
        {label}
      </span>
    </a>
  );
};

export default Hero;

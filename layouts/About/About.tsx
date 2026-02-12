import Image from "next/image";
import my_potrait from "../../assets/ragib_potrait_md.png";
import { Experiences } from "./Experiences";

import React from "react";

interface Experience {
  count: number;
  label: string;
  afterBg: string;
}

const experiences: Experience[] = [
  { count: 4, label: "Years", afterBg: "after:bg-pink-500" },
  { count: 11, label: "Projects", afterBg: "after:bg-yellow-500" },
  { count: 7, label: "Clients", afterBg: "after:bg-green-500" },
  { count: 5, label: "Reviews", afterBg: "after:bg-indigo-500" },
];

const About = () => {
  return (
    <section className="about container relative mx-auto my-32 max-w-7xl max-xl:px-6">
      <div className="relative h-auto overflow-hidden rounded-[2.5rem] border border-white/20 bg-white/30 p-8 shadow-2xl backdrop-blur-3xl dark:border-white/10 dark:bg-white/5 sm:p-12 lg:p-16">
        {/* Background Decorative Element */}
        <div className="absolute -left-20 -top-20 z-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[100px] dark:bg-cyan-900/10"></div>
        <div className="absolute -bottom-20 -right-20 z-0 h-96 w-96 rounded-full bg-blue-500/10 blur-[100px] dark:bg-blue-900/10"></div>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 items-center relative z-10">
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-10">
            <div className="space-y-4">
              <h2 className="font-heading text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 sm:text-5xl lg:text-6xl">
                 Crafting Digital <br />
                 <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">Experiences.</span>
              </h2>
              <div className="h-1.5 w-24 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600"></div>
            </div>

            <div className="space-y-6">
              <p className="text-xl leading-relaxed text-slate-700 dark:text-slate-300">
                I am a dedicated <span className="font-bold text-slate-900 dark:text-white">Software Engineer</span> from Bangladesh with over 
                <span className="mx-1.5 rounded-md bg-cyan-100 px-2 py-0.5 font-mono text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-400">4+ years</span> 
                of experience building robust applications.
              </p>
              
              <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-400">
                My expertise spans the full stack, including <span className="font-semibold text-slate-800 dark:text-slate-200">TypeScript (Next.js), React, GoLang, and Python (Django)</span>. 
                I focus on creating clean, performant code that solves real-world problems.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <a 
                  href="#projects" 
                  className="group flex items-center gap-2 rounded-xl bg-slate-900 px-6 py-3 text-sm font-bold text-white transition-all hover:scale-105 dark:bg-white dark:text-slate-950"
                >
                  View My Work
                  <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
                </a>
                <a 
                  href="#contact" 
                  className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white/50 px-6 py-3 text-sm font-bold text-slate-700 transition-all hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:bg-white/10"
                >
                  Contact Me
                </a>
              </div>
            </div>

            {/* Stats Integrated */}
            <div className="pt-8">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                <Experiences />
              </div>
            </div>
          </div>

          {/* Portrait Image Container */}
          <div className="lg:col-span-5 relative group">
            <div className="relative aspect-square overflow-hidden rounded-[2rem] border border-white/20 bg-white/40 shadow-2xl backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-transparent transition-opacity group-hover:opacity-0"></div>
              <Image 
                src={my_potrait} 
                alt="Potrait of Ragib" 
                className="-mt-8 w-full object-cover transition-transform duration-700 group-hover:scale-110" 
                placeholder="blur"
              />
            </div>
            
            {/* Abstract Decorative elements around image */}
            <div className="absolute -bottom-6 -right-6 h-32 w-32 rounded-3xl border border-white/20 bg-white/30 p-2 shadow-xl backdrop-blur-2xl dark:border-white/10 dark:bg-white/5 transition-transform group-hover:translate-x-2 group-hover:translate-y-2">
               <div className="flex h-full w-full items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 text-3xl text-white">
                  &lt;/&gt;
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

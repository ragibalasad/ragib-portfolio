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
    <section className="about container relative mx-auto my-32 max-w-7xl max-sm:px-6">
      <div className="placeHolderComponent h-auto">
        <div className="grid grid-cols-1 gap-12 rounded-2xl lg:grid-cols-5">
          <div className="lg:order-2 col-span-1 my-auto h-auto w-full lg:col-span-2">
            <div className="relative flex flex-col items-center justify-center overflow-hidden rounded-2xl border border-white/20 bg-white/40 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
              {/* Glowing Blob Effects */}
              <div className="absolute -right-24 -top-24 z-0 h-80 w-80 rounded-full bg-gradient-to-tr from-cyan-400/40 to-indigo-500/40 blur-3xl dark:from-cyan-900/40 dark:to-indigo-900/40"></div>
              <div className="absolute -bottom-12 -left-12 z-0 h-64 w-64 rounded-full bg-pink-400/30 blur-3xl dark:bg-pink-900/30"></div>
              
              <div className="relative z-10 w-full overflow-hidden rounded-xl">
                 <Image 
                   src={my_potrait} 
                   alt="Potrait of Ragib" 
                   className="h-auto w-full object-cover transition-transform duration-700 hover:scale-[1.03]" 
                   placeholder="blur"
                 />
              </div>
            </div>
          </div>
          <div className="col-span-1 flex lg:col-span-3">
            <div className="my-auto max-md:pt-16">
              <div className="mb-12 flex flex-col items-start">
                <h2 className="text-4xl font-extrabold tracking-tight text-slate-800 dark:text-slate-100 sm:text-5xl">
                   About Me
                </h2>
                <div className="mt-4 h-1.5 w-24 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600"></div>
              </div>
              <p className="about-me mt-8 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
                I am an experienced software engineer from Bangladesh who has been developing applications for 4+ years (both back end & front end) using Full Stack Development technologies like: Python (Django & Flask), TypeScript (Next.JS), React & GoLang.
                <br />
                <br /> 
                Explore my <a href="#projects" className="font-semibold text-cyan-600 underline decoration-cyan-400 decoration-2 underline-offset-4 transition-colors hover:text-cyan-700 dark:text-cyan-400 dark:hover:text-cyan-300">projects gallery</a> to see my work in action. I&apos;m always open to <strong className="text-slate-800 dark:text-slate-100">collaborations</strong> and new opportunities.
                <br />
                <a href="#contact" className="mt-4 inline-flex items-center gap-1 font-semibold text-cyan-600 transition-colors hover:gap-2 hover:text-cyan-700 dark:text-cyan-400 dark:hover:text-cyan-300">
                   Learn More about me &rarr;
                </a>
              </p>

              <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
                <Experiences />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6";

import CodeWindow from "./CodeWindow";
import Bubbles from "./Bubbles";
import { TextEffect } from "../motion/TextEffect";

const Hero = () => {
  return (
    <section className="hero container relative mx-auto sm:w-4/5">
      <Bubbles />
      <div className="relative grid w-full grid-cols-1 pt-32 lg:grid-cols-7 xl:pt-40 2xl:grid-cols-2 2xl:pt-64">
        <div className="justify-between pt-16 max-sm:px-6 lg:col-span-3 2xl:col-span-1">
          <div className="pb-20 sm:py-20">
            <p className="-ml-px font-semibold text-slate-700 dark:text-slate-300">
              Hi there, I&apos;m
            </p>
            <TextEffect className="-ml-1 py-2 pb-4 text-5xl font-semibold text-cyan-700 dark:text-cyan-400">
              Ragib Al Asad
            </TextEffect>
            <TextEffect
              className="border-l-4 border-cyan-400 pl-4 text-xl font-medium text-slate-700 dark:border-cyan-400 dark:text-slate-300"
              preset="slide"
            >
              Software Developer from Bangladesh
            </TextEffect>
            <div className="flex gap-3 pt-16">
              <a
                href=""
                className="group relative inline-block rounded-lg bg-slate-800 p-4 text-xs text-white transition hover:bg-slate-700 dark:ring-1 dark:ring-white/10 dark:hover:bg-slate-800/70"
              >
                <span className="relative">Download Resume</span>
              </a>
              <div className="my-auto flex gap-3 text-xl dark:text-slate-100">
                <a
                  href="https://x.com/ragibalasad"
                  target="_blank"
                  className="rounded-full bg-slate-200 p-2 transition hover:text-cyan-500 dark:bg-slate-800/75 dark:hover:text-cyan-400"
                >
                  <FaTwitter />
                </a>
                <a
                  href="https://github.com/ragibalasad"
                  target="_blank"
                  className="rounded-full bg-slate-200 p-2 transition hover:text-cyan-500 dark:bg-slate-800/75 dark:hover:text-cyan-400"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://linkedin.com/in/ragibalasad"
                  target="_blank"
                  className="rounded-full bg-slate-200 p-2 transition hover:text-cyan-500 dark:bg-slate-800/75 dark:hover:text-cyan-400"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-4 w-full 2xl:col-span-1">
          <CodeWindow />
        </div>
      </div>
    </section>
  );
};

export default Hero;

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
            <p className="-ml-px text-sm font-semibold text-slate-800 dark:text-slate-300">
              Hi there, I&apos;m
            </p>
            <TextEffect className="-ml-1 py-2 pb-4 text-5xl font-semibold text-cyan-800 dark:text-cyan-400">
              Ragib Al Asad
            </TextEffect>
            <h1 className="flex items-center gap-4 text-lg font-medium text-slate-800 dark:text-slate-300">
              <span className="-mt-1 text-2xl font-semibold text-cyan-500 max-sm:-mt-1.5 max-sm:text-5xl max-sm:font-normal">{`{`}</span>
              <TextEffect preset="slide" className="my-auto">
                Software Developer from Bangladesh
              </TextEffect>
            </h1>

            <div className="flex gap-3 pt-16">
              <a
                // href="https://raw.githubusercontent.com/ragibalasad/ragibalasad/main/ragib-resume.pdf"
                href="/ragib-resume.pdf"
                download="ragib-resume.pdf"
                target="_blank"
                className="group relative inline-block rounded-lg bg-slate-900 p-4 text-xs text-white transition hover:bg-slate-800 dark:ring-1 dark:ring-white/10 dark:hover:bg-slate-800/70"
              >
                <span className="relative">Download Resume</span>
              </a>
              <div className="my-auto flex gap-3 text-xl dark:text-white">
                <a
                  href="https://x.com/ragibalasad"
                  target="_blank"
                  className="rounded-full bg-slate-200 p-2 transition hover:text-cyan-500 dark:bg-slate-900 dark:hover:text-cyan-400"
                >
                  <FaTwitter />
                </a>
                <a
                  href="https://github.com/ragibalasad"
                  target="_blank"
                  className="rounded-full bg-slate-200 p-2 transition hover:text-cyan-500 dark:bg-slate-900 dark:hover:text-cyan-400"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://linkedin.com/in/ragibalasad"
                  target="_blank"
                  className="rounded-full bg-slate-200 p-2 transition hover:text-cyan-500 dark:bg-slate-900 dark:hover:text-cyan-400"
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

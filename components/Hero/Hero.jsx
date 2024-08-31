import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

import CodeWindow from "./CodeWindow";
import Bubbles from "./Bubbles";
import { TextEffect } from "../TextEffect";

const Hero = () => {
  return (
    <section className="hero container relative mx-auto sm:w-4/5">
      <Bubbles></Bubbles>
      <div className="relative grid w-full grid-cols-1 pt-32 lg:grid-cols-7 xl:pt-40 2xl:grid-cols-2 2xl:pt-64">
        <div className="justify-between pt-16 max-sm:px-6 lg:col-span-3 2xl:col-span-1">
          <div className="pb-20 sm:py-20">
            <p className="-ml-px font-semibold text-slate-300">
              Hi there, I&apos;m
            </p>
            <TextEffect className="-ml-1 py-2 pb-4 text-5xl font-semibold text-cyan-400">
              Ragib Al Asad
            </TextEffect>
            <TextEffect
              className="border-l-4 border-cyan-400 pl-4 text-xl font-medium text-slate-300"
              preset="slide"
            >
              Software Developer from Bangladesh
            </TextEffect>
            <div className="flex gap-3 pt-16">
              <a
                href=""
                className="group relative inline-block rounded-lg bg-slate-800 p-4 text-xs text-white ring-1 ring-white/10 transition hover:bg-slate-800/70"
              >
                <span className="relative">Download Resume</span>
              </a>
              <div className="my-auto flex gap-3 text-xl text-slate-300">
                <a
                  href="https://facebook.com/ragibalasad"
                  target="_blank"
                  className="transition hover:text-cyan-400/80"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://github.com/ragibalasad"
                  target="_blank"
                  className="transition hover:text-cyan-400/80"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://linkedin.com/in/ragibalasad"
                  target="_blank"
                  className="transition hover:text-cyan-400/80"
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

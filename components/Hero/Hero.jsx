"use client";

import CodeWindow from "./CodeWindow";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="hero container relative mx-auto md:w-4/5">
      <div className="pink-bubble absolute left-10 top-6 -z-10 block h-48 w-48 rounded-full bg-gradient-to-br from-transparent to-pink-500 opacity-70 shadow-2xl shadow-pink-500 blur"></div>
      <div className="blue-bubble absolute bottom-10 right-0 -z-10 block h-52 w-52 rounded-full bg-gradient-to-br from-transparent to-indigo-500 opacity-70 shadow-2xl shadow-indigo-500 blur"></div>
      <div className="green-bubble absolute bottom-1/2 right-1/3 -z-10 block h-40 w-40 rounded-full bg-gradient-to-br from-transparent to-green-500 opacity-70 shadow-2xl shadow-green-500 blur"></div>
      <div className="yellow-bubble absolute -bottom-12 left-1/4 -z-10 block h-32 w-32 rounded-full bg-gradient-to-br from-transparent to-yellow-500 opacity-70 shadow-2xl shadow-yellow-500 blur"></div>

      <div className="relative grid w-full grid-cols-2">
        <div className="mt-32 justify-between">
          <div className="py-20">
            <p className="text-lg text-slate-300">Hi there, I'm</p>
            <h1 className="pb-2 text-5xl font-semibold">Ragib Al Asad</h1>
            <p className="border-l-4 border-cyan-400 px-2 text-xl text-slate-300">
              Software Developer from Bangladesh
            </p>
            <div className="flex gap-3 pt-12">
              <a
                href=""
                className="group relative inline-block rounded-lg bg-gradient-to-br from-cyan-600 to-indigo-600 p-3 text-xs text-white"
              >
                <span className="absolute inset-0 rounded-lg bg-gradient-to-bl from-cyan-500 to-indigo-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
                <span className="relative">Download Resume</span>
              </a>
              <div className="my-auto flex gap-2 text-xl">
                <a href="" className="transition hover:text-cyan-500">
                  <FaFacebook />
                </a>
                <a href="" className="transition hover:text-cyan-500">
                  <FaGithub />
                </a>
                <a href="" className="transition hover:text-cyan-500">
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-32 w-full p-4">
          <CodeWindow />
        </div>
      </div>
    </section>
  );
};

export default Hero;

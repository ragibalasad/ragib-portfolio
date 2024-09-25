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
    <section className="about container relative mx-auto my-24 max-sm:px-6 sm:w-4/5">
      <div className="placeHolderComponent h-auto">
        <div className="grid grid-cols-1 rounded-2xl lg:grid-cols-5 2xl:grid-cols-3">
          <div className="col-span-1 my-auto h-auto w-full lg:col-span-2 2xl:col-span-1">
            <div className="relative overflow-hidden rounded-3xl bg-white/80 px-2 pt-4 shadow-xl ring-1 ring-inset ring-white/10 after:absolute after:right-0 after:top-0 after:-z-10 after:size-60 after:rounded-full after:bg-gradient-to-tr after:from-transparent after:blur-3xl dark:bg-slate-900/70 dark:after:to-indigo-500">
              <Image src={my_potrait} alt="Potrait of Ragib" />
            </div>
          </div>
          <div className="col-span-1 flex lg:col-span-3 2xl:col-span-2">
            <div className="mx-2 my-auto max-md:pt-16 sm:px-16 2xl:p-24">
              <p className="flex items-center gap-4 font-semibold dark:text-slate-300">
                <span className="-mt-1 text-2xl text-cyan-500">{`{`}</span>
                <span className="my-auto text-base">About Me</span>
              </p>
              <h1 className="py-6 text-4xl font-semibold text-cyan-800 dark:text-cyan-400">
                Precision Design,
                <br /> Peak Efficiency
              </h1>
              <p className="about-me mt-4 text-base font-normal text-slate-700 dark:text-slate-400">
                I&apos;m a <strong>software developer</strong> from Bangladesh
                with over <strong>4 years </strong>
                of experience in <strong>full-stack web</strong> app and{" "}
                <strong>desktop</strong> app development. I specialize in the{" "}
                <strong>Python</strong> programming language and have decent
                knowledge in languages like <strong>C</strong>,{" "}
                <strong>TypeScript</strong>, and <strong>Go</strong>. I have
                done several projects throughout the years including personal
                and client projects. <br />
                <br /> Take a look at my work in the{" "}
                <a
                  href="#projects"
                  className="font-medium text-cyan-600 dark:text-cyan-400"
                >
                  {" "}
                  projects
                </a>{" "}
                gallery. I&apos;m always up for <strong>collaborations</strong>.
                <a
                  href="#contact"
                  className="font-medium text-cyan-600 dark:text-cyan-400"
                >
                  {" "}
                  Learn More
                </a>{" "}
                about me.
              </p>

              <div className="mt-12 grid grid-cols-4 gap-x-4 gap-y-8 max-sm:grid-cols-2 max-sm:grid-rows-2 max-sm:items-center max-sm:justify-items-center">
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

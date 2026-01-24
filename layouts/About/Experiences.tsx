"use client";

import { Link } from "react-scroll";
import { AnimatedNumber } from "../motion/AnimatedNumber";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

interface Experience {
  count: number;
  label: string;
  scrollTo: string;
}

const experiences: Experience[] = [
  {
    count: 4,
    label: "Years",
    scrollTo: "projectsSection",
  },
  {
    count: 16,
    label: "Projects",
    scrollTo: "projectsSection",
  },
  {
    count: 7,
    label: "Clients",
    scrollTo: "clientsSection",
  },
  {
    count: 5,
    label: "Reviews",
    scrollTo: "reviewsSection",
  },
];

export function Experiences() {
  return (
    <>
      {experiences.map((exp, index) => (
        <Link key={index} to={exp.scrollTo} smooth={true} duration={500}>
          <ExperienceItem {...exp} />
        </Link>
      ))}
    </>
  );
}

function ExperienceItem({ count, label }: Experience) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref);

  if (isInView && value === 0) {
    setValue(count);
  }

  return (
    <div
      ref={ref}
      className="group flex w-full cursor-pointer flex-col items-center justify-center rounded-2xl border border-white/20 bg-white/40 p-6 py-8 shadow-xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/10 dark:border-white/10 dark:bg-white/5 dark:hover:shadow-cyan-400/10 space-y-2"
    >
      <AnimatedNumber
        className="text-5xl font-bold text-blue-500 dark:text-cyan-400"
        springOptions={{
          bounce: 0,
          duration: 1500,
        }}
        value={value}
      />
      <div className="h-1 w-10 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"></div>
      <span className="text-sm font-medium uppercase tracking-wider text-slate-600 dark:text-slate-400">{label}</span>
    </div>
  );
}

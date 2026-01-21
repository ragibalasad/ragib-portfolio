"use client";

import { Link } from "react-scroll";
import { AnimatedNumber } from "../motion/AnimatedNumber";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

interface Experience {
  count: number;
  label: string;
  afterBg: string;
  scrollTo: string;
}

const experiences: Experience[] = [
  {
    count: 4,
    label: "Years",
    afterBg: "after:bg-pink-500",
    scrollTo: "projectsSection",
  },
  {
    count: 16,
    label: "Projects",
    afterBg: "after:bg-yellow-500",
    scrollTo: "projectsSection",
  },
  {
    count: 7,
    label: "Clients",
    afterBg: "after:bg-green-500",
    scrollTo: "clientsSection",
  },
  {
    count: 5,
    label: "Reviews",
    afterBg: "after:bg-indigo-500",
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

function ExperienceItem({ count, label, afterBg }: Experience) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref);

  if (isInView && value === 0) {
    setValue(count);
  }

  // Extract color from the class string or map based on label
  const getColorClass = (bgClass: string) => {
    if (bgClass.includes("pink")) return "text-pink-500 dark:text-pink-400";
    if (bgClass.includes("yellow")) return "text-yellow-500 dark:text-yellow-400";
    if (bgClass.includes("green")) return "text-emerald-500 dark:text-emerald-400";
    if (bgClass.includes("indigo")) return "text-indigo-500 dark:text-indigo-400";
    return "text-cyan-500 dark:text-cyan-400";
  };
  
  const getBorderClass = (bgClass: string) => {
    if (bgClass.includes("pink")) return "group-hover:border-pink-500/50 dark:group-hover:border-pink-400/50";
    if (bgClass.includes("yellow")) return "group-hover:border-yellow-500/50 dark:group-hover:border-yellow-400/50";
    if (bgClass.includes("green")) return "group-hover:border-emerald-500/50 dark:group-hover:border-emerald-400/50";
    if (bgClass.includes("indigo")) return "group-hover:border-indigo-500/50 dark:group-hover:border-indigo-400/50";
    return "group-hover:border-cyan-500/50 dark:group-hover:border-cyan-400/50";
  };

  const colorClass = getColorClass(afterBg);
  const borderColorHover = getBorderClass(afterBg);

  return (
    <div
      ref={ref}
      className={`group flex h-36 w-full flex-col items-center justify-center rounded-2xl border border-white/20 bg-white/40 p-6 shadow-lg backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:bg-white/60 hover:shadow-2xl dark:border-slate-800/50 dark:bg-slate-900/40 dark:hover:bg-slate-800/60 ${borderColorHover}`}
    >
      <AnimatedNumber
        className={`text-5xl font-extrabold ${colorClass}`}
        springOptions={{
          bounce: 0,
          duration: 1500,
        }}
        value={value}
      />
      <div className={`mt-2 h-1 w-12 rounded-full bg-slate-200 dark:bg-slate-700`}></div>
      <span className="mt-3 text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">{label}</span>
    </div>
  );
}

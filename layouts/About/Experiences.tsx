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
      className="group flex flex-col items-start gap-1 py-2 transition-all duration-300"
    >
      <div className="flex items-baseline gap-1">
        <AnimatedNumber
          className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white"
          springOptions={{
            bounce: 0,
            duration: 1500,
          }}
          value={value}
        />
        <span className="text-2xl font-bold text-cyan-500">+</span>
      </div>
      
      <div className="relative flex items-center gap-3">
        <div className="h-0.5 w-8 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 transition-all duration-500 group-hover:w-12"></div>
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
          {label}
        </span>
      </div>
    </div>
  );
}

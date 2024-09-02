"use client";

import { AnimatedNumber } from "../motion/AnimatedNumber";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

interface Experience {
  count: number;
  label: string;
  afterBg: string;
}

const experiences: Experience[] = [
  { count: 4, label: "Years", afterBg: "after:bg-pink-500" },
  { count: 16, label: "Projects", afterBg: "after:bg-yellow-500" },
  { count: 7, label: "Clients", afterBg: "after:bg-green-500" },
  { count: 5, label: "Reviews", afterBg: "after:bg-indigo-500" },
];

export function Experiences() {
  return (
    <>
      {experiences.map((exp, index) => (
        <ExperienceItem key={index} {...exp} />
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

  return (
    <div
      ref={ref}
      className={`experiences-after flex size-24 flex-col items-center justify-center rounded-lg bg-white p-2 text-slate-700 dark:bg-slate-800 dark:text-slate-300 ${afterBg}`}
    >
      <AnimatedNumber
        className="text-2xl font-semibold"
        springOptions={{
          bounce: 0,
          duration: 1000,
        }}
        value={value}
      />
      <span className="text-sm font-medium">{label}</span>
    </div>
  );
}

import React, { FC } from "react";
import { motion } from "framer-motion";
import { FaEye, FaGithub } from "react-icons/fa";
import Image from "next/image";
import { iconMap } from "../Skills/iconMap";

interface Project {
  title: string;
  image: string;
  live: string;
  github: string;
  category: string;
  tags: string[];
  description: string;
}

interface GridItemProps {
  item: Project;
}

const transitionEffects = {
  hidden: { opacity: 0, scale: 0.95, y: 30 },
  show: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0.9, y: -30, transition: { duration: 0.2 } },
};

const GridItem: FC<GridItemProps> = ({ item }) => (
  <motion.div
    key={item.title}
    className="group relative flex flex-col justify-start overflow-hidden rounded-2xl border border-white/20 bg-white/40 shadow-xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:border-white/10 dark:bg-white/5"
    layout
    variants={transitionEffects}
    initial="hidden"
    animate="show"
    exit="exit"
    transition={{ duration: 0.4, ease: "easeOut" }}
  >
    <div className="relative h-48 overflow-hidden bg-slate-200 dark:bg-slate-800">
      <Image
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        src={`/images/${item.image}`}
        alt={item.title}
        width={500}
        height={300}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
      
      <div className="absolute bottom-4 right-4 flex gap-3 translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <a
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-900 shadow-lg transition hover:text-cyan-600 hover:scale-110"
            href={item.live}
            target="_blank"
            rel="noopener noreferrer"
            title="View Live"
          >
            <FaEye />
          </a>
          <a
            className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-white shadow-lg transition hover:text-cyan-400 hover:scale-110"
            href={item.github}
            target="_blank"
            rel="noopener noreferrer"
            title="View Source"
          >
            <FaGithub />
          </a>
      </div>
    </div>
    
    <div className="group relative justify-between overflow-hidden p-8">

      <h3 className="mb-4 text-2xl font-bold text-slate-900 dark:text-slate-100">
        {item.title}
      </h3>

      <p className="mb-6 leading-relaxed text-slate-900 dark:text-slate-400">
        {item.description || <span className="italic opacity-70">No description available</span>}
      </p>

      <div className="">
        <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-slate-400">
          Tech Stack
        </h4>
        <div className="flex flex-wrap gap-3">
          {item.tags.map((tag, i) => {
            const Icon = iconMap[tag] || iconMap["default"];
            return (
              <div 
                key={i} 
                className="group/icon relative flex h-10 w-10 items-center justify-center rounded-xl bg-white/60 text-xl text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:scale-110 hover:bg-gradient-to-br hover:from-cyan-500 hover:to-blue-600 hover:text-white hover:shadow-xl hover:shadow-blue-500/25 dark:bg-white/10 dark:text-slate-300 dark:hover:from-cyan-400 dark:hover:to-blue-500 dark:hover:text-white dark:hover:shadow-blue-400/20"
              >
                <Icon />
                <span className="pointer-events-none absolute -bottom-8 left-1/2 z-20 -translate-x-1/2 whitespace-nowrap rounded-md bg-slate-900 px-2 py-1 text-xs font-medium text-white opacity-0 shadow-lg transition-all duration-200 group-hover/icon:-bottom-10 group-hover/icon:opacity-100 dark:bg-slate-700">
                  {tag}
                </span>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  </motion.div>
);

export default GridItem;


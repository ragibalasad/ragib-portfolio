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
    className="group relative flex flex-col overflow-hidden rounded-[2.5rem] border border-white/20 bg-white/40 shadow-xl backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl dark:border-white/10 dark:bg-white/5"
    layout
    variants={transitionEffects}
    initial="hidden"
    animate="show"
    exit="exit"
    transition={{ duration: 0.4, ease: "easeOut" }}
  >
    {/* Image Container */}
    <div className="relative aspect-video overflow-hidden">
      <Image
        className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:blur-sm"
        src={`/images/${item.image}`}
        alt={item.title}
        width={600}
        height={400}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
      
      {/* Project Links Overlay */}
      <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 transition-all duration-500 translate-y-4 group-hover:translate-y-0 group-hover:opacity-100">
          <a
            className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-slate-900 shadow-xl transition-all hover:scale-110 hover:bg-cyan-500 hover:text-white"
            href={item.live}
            target="_blank"
            rel="noopener noreferrer"
            title="View Live"
          >
            <FaEye className="text-xl" />
          </a>
          <a
            className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 text-white shadow-xl transition-all hover:scale-110 hover:bg-white hover:text-slate-900"
            href={item.github}
            target="_blank"
            rel="noopener noreferrer"
            title="View Source"
          >
            <FaGithub className="text-xl" />
          </a>
      </div>
    </div>
    
    {/* Content Container */}
    <div className="flex flex-1 flex-col p-8 lg:p-10">
      <div className="mb-4 flex items-center justify-between">
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-400 font-mono">
          {item.category}
        </span>
      </div>

      <h3 className="mb-4 text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
        {item.title}
      </h3>

      <p className="mb-10 line-clamp-3 text-base leading-relaxed text-slate-600 dark:text-slate-400">
        {item.description || "No description available"}
      </p>

      {/* Tech Stack integrated at bottom */}
      <div className="mt-auto">
        <div className="flex flex-wrap gap-2">
          {item.tags.map((tag, i) => {
            const Icon = iconMap[tag] || iconMap["default"];
            return (
              <div 
                key={i} 
                className="flex items-center gap-1.5 rounded-full border border-white/20 bg-white/50 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-700 shadow-sm backdrop-blur-sm transition-all hover:border-cyan-500/50 hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:bg-white/10"
              >
                <Icon className="text-sm text-cyan-600 dark:text-cyan-400" />
                {tag}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  </motion.div>
);

export default GridItem;


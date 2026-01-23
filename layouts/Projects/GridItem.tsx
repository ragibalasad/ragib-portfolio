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
    className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/20 bg-white/40 shadow-xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:border-white/10 dark:bg-white/5"
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
    
    <div className="flex grow flex-col p-8">
      <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">
        {item.title}
      </h3>
      
      <div className="mt-4 mb-4 flex flex-wrap gap-2">
        {item.tags.map((tag, index) => {
          const IconComp = iconMap[tag] || iconMap["default"];
          return (
            <span 
              key={index} 
              className="flex items-center gap-1.5 rounded-lg bg-white/50 px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm ring-1 ring-inset ring-slate-900/5 dark:bg-slate-800/50 dark:text-slate-300 dark:ring-white/10"
            >
              <IconComp className="text-cyan-600 dark:text-cyan-400" />
              {tag}
            </span>
          );
        })}
      </div>

      <div className="">
        <p className="leading-relaxed text-slate-600 line-clamp-3 dark:text-slate-400">
          {item.description || <span className="italic opacity-70">No description available</span>}
        </p>
      </div>
    </div>
  </motion.div>
);

export default GridItem;


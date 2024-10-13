import React, { FC } from "react";
import { motion } from "framer-motion";
import { FaEye, FaGithub } from "react-icons/fa";
import Image from "next/image";

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
  hidden: { opacity: 0, scale: 0.95, x: 50 }, // Slight scaling and moving to the right when hidden
  show: { opacity: 1, scale: 1, x: 0 }, // Moving back into position with full opacity
  exit: { opacity: 0, scale: 0.9, x: -50, transition: { duration: 0.3 } }, // Exit by moving to the left and shrinking
};

const GridItem: FC<GridItemProps> = ({ item }) => (
  <motion.div
    key={item.title} // Use title as unique key to prevent index clashes
    className="flex flex-col overflow-hidden rounded-lg bg-white shadow dark:bg-slate-900"
    layout
    variants={transitionEffects}
    initial="hidden"
    animate="show"
    exit="exit"
    transition={{ duration: 0.4, ease: "easeInOut" }} // Smooth transitions
  >
    <div className="overflow-hidden">
      <Image
        className="transition-all hover:scale-110"
        src={`/images/${item.image}`}
        alt={item.title}
        width={500}
        height={300}
      />
    </div>
    <div className="flex grow flex-col p-4">
      <div className="flex">
        <h1 className="text-base font-semibold dark:text-slate-200">
          {item.title}
        </h1>
        <div className="ml-auto flex gap-4 text-xl dark:text-slate-100">
          <a
            className="rounded-full transition hover:text-cyan-400"
            href={item.live}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEye />
          </a>
          <a
            className="rounded-full transition hover:text-cyan-400"
            href={item.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </div>
      </div>
      <div className="project-tags flex flex-wrap gap-2 py-3">
        {item.tags.map((tag, index) => (
          <span key={index}>{tag}</span>
        ))}
      </div>
      <div className="mt-1 flex grow flex-col text-sm">
        <span className="line-clamp-3 grow">
          {item.description ? (
            item.description
          ) : (
            <span className="italic text-slate-600 dark:text-slate-400">
              No description available
            </span>
          )}
        </span>
        <a
          href="#"
          className="mt-auto inline-block text-cyan-600 dark:text-cyan-400"
        >
          Learn More
        </a>
      </div>
    </div>
  </motion.div>
);

export default GridItem;

"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import GridItem from "./GridItem";
import projects from "./projects.json";

const catagories = ["all", "front end", "back end", "others"];

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const filteredProjects = projects.filter(
    (project) => filter === "all" || project.category === filter,
  );

  // Initialize arrays for the three grids
  const grids: Array<Array<(typeof projects)[0]>> = [[], [], []];

  // Distribute items across the grids
  projects.forEach((project, index) => {
    grids[index % 3].push(project);
  });

  const containerVariants = {
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section
      id="projects"
      className="projectsSection container relative mx-auto my-32 max-sm:px-6 max-w-7xl"
    >
      <div className="placeHolderComponent h-auto">
        <div className="mb-12 flex flex-col items-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-slate-800 dark:text-slate-100">
            My Projects
          </h2>
          <div className="mt-4 h-1.5 w-24 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600"></div>
        </div>

        <div className="mb-12 flex justify-center">
          <ul className="flex flex-wrap justify-center gap-3 rounded-full border border-white/20 bg-white/30 p-1.5 backdrop-blur-md dark:border-slate-800/50 dark:bg-slate-900/30">
            {catagories.map((catagory, index) => (
              <li
                key={index}
                className={`cursor-pointer rounded-full px-6 py-2 text-sm font-semibold capitalize transition-all duration-300 ${
                  filter === catagory 
                    ? "bg-gradient-to-r from-cyan-400 to-blue-600 text-white shadow-md" 
                    : "text-slate-600 hover:bg-white/50 hover:text-cyan-600 dark:text-slate-400 dark:hover:bg-slate-800/50 dark:hover:text-cyan-400"
                }`}
                onClick={() => setFilter(catagory)}
              >
                {catagory}
              </li>
            ))}
          </ul>
        </div>

        <motion.div
          className="grid gap-6 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <GridItem key={index} item={project} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

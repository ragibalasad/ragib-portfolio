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
      className="projectsSection relative my-24 dark:bg-slate-900/70 max-sm:px-6"
    >
      <div className="container mx-auto h-auto py-16 sm:w-4/5">
        <p className="flex items-center gap-4 font-semibold dark:text-slate-300">
          <span className="-mt-1 text-2xl text-cyan-500">{`{`}</span>
          Projects
        </p>

        <div className="mb-6 flex py-6 max-sm:flex-col max-sm:gap-10">
          <h1 className="text-4xl font-semibold dark:text-slate-300">
            {"Works I've Done"}
          </h1>

          <ul className="flex select-none flex-wrap text-sm font-medium sm:ml-auto">
            {catagories.map((catagory, index) => (
              <li
                key={index}
                className={`cursor-pointer rounded-lg px-4 py-2 font-medium capitalize text-cyan-600 dark:text-cyan-400 ${
                  filter === catagory ? "bg-white dark:bg-slate-700/70" : ""
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

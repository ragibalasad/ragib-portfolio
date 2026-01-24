"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import GridItem from "./GridItem";
import projects from "./projects.json";

import { FaCode, FaServer, FaTools, FaLayerGroup } from "react-icons/fa";

const catagories = [
  { id: "all", label: "All", icon: FaLayerGroup },
  { id: "front end", label: "Front End", icon: FaCode },
  { id: "back end", label: "Back End", icon: FaServer },
  { id: "others", label: "Others", icon: FaTools },
];

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
      className="projectsSection container relative mx-auto my-32 max-xl:px-6 max-w-7xl"
    >
      <div className="placeHolderComponent h-auto">
        <div className="mb-12 flex flex-col items-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-slate-800 dark:text-slate-100">
            My Projects
          </h2>
          <div className="mt-4 h-1.5 w-24 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600"></div>
        </div>

        <div className="mb-16 flex justify-center">
          <div className="flex items-center gap-2 rounded-2xl border border-white/20 bg-white/40 px-4 py-3 shadow-lg backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
            {catagories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`group relative flex h-11 w-11 items-center justify-center rounded-xl text-xl shadow-sm transition-all duration-300 hover:-translate-y-2 hover:scale-110 hover:shadow-xl ${
                  filter === category.id
                    ? "bg-gradient-to-br from-cyan-400 to-blue-600 text-white shadow-blue-500/30 ring-2 ring-white/20 dark:ring-white/10"
                    : "bg-white/60 text-slate-600 hover:bg-gradient-to-br hover:from-slate-700 hover:to-slate-900 hover:text-white hover:shadow-slate-500/25 dark:bg-white/10 dark:text-slate-300 dark:hover:from-slate-600 dark:hover:to-slate-800 dark:hover:text-white dark:hover:shadow-slate-400/20"
                }`}
                title={category.label}
              >
                <category.icon className={`transition-transform duration-300 ${filter === category.id ? "scale-110" : "group-hover:scale-110"}`} />
                
                <span className="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-slate-900 px-2 py-1 text-xs font-medium text-white opacity-0 shadow-lg transition-all duration-200 group-hover:-bottom-10 group-hover:opacity-100 dark:bg-slate-700">
                  {category.label}
                </span>
                
                {filter === category.id && (
                  <span className="absolute -bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-white/50"></span>
                )}
              </button>
            ))}
          </div>
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

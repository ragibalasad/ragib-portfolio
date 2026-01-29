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
      className="projectsSection container relative mx-auto my-32 max-w-7xl max-xl:px-6"
    >
      <div className="relative h-auto overflow-hidden rounded-[2.5rem] border border-white/20 bg-white/30 p-8 shadow-2xl backdrop-blur-3xl dark:border-white/10 dark:bg-white/5 sm:p-12 lg:p-16">
        {/* Background Decorative Element */}
        <div className="absolute -right-24 -top-24 z-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[100px] dark:bg-cyan-900/10"></div>
        <div className="absolute -bottom-24 -left-24 z-0 h-96 w-96 rounded-full bg-blue-500/10 blur-[100px] dark:bg-blue-900/10"></div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0 h-80 w-80 rounded-full bg-purple-500/5 blur-[120px] dark:bg-purple-900/5"></div>

        <div className="relative z-10">
          <div className="mb-16 flex flex-col items-start lg:flex-row lg:items-end lg:justify-between gap-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 sm:text-5xl lg:text-6xl">
                 Featured <br />
                 <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent italic">Projects.</span>
              </h2>
              <div className="h-1.5 w-24 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600"></div>
              <p className="max-w-xl text-lg text-slate-600 dark:text-slate-400">
                A curated selection of my work across full-stack development, from interactive UI experiences to robust backend architectures.
              </p>
            </div>

            {/* Filter Section */}
            <div className="flex items-center gap-2 rounded-2xl border border-white/20 bg-white/40 p-2 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
              {catagories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setFilter(category.id)}
                  className={`group relative flex h-11 w-11 items-center justify-center rounded-xl text-xl transition-all duration-300 hover:scale-110 ${
                    filter === category.id
                      ? "bg-gradient-to-br from-cyan-400 to-blue-600 text-white shadow-lg shadow-blue-500/30"
                      : "bg-white/60 text-slate-600 hover:bg-white dark:bg-white/10 dark:text-slate-300 dark:hover:bg-white/20"
                  }`}
                  title={category.label}
                >
                  <category.icon className={`transition-transform duration-300 ${filter === category.id ? "scale-110" : "group-hover:scale-110"}`} />
                  
                  <span className="pointer-events-none absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-slate-900 px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-white opacity-0 shadow-lg transition-all duration-200 group-hover:opacity-100 dark:bg-slate-700">
                    {category.label}
                  </span>
                  
                  {filter === category.id && (
                    <motion.span 
                      layoutId="activeFilter"
                      className="absolute -bottom-1.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]"
                    ></motion.span>
                  )}
                </button>
              ))}
            </div>
          </div>

          <motion.div
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2"
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <GridItem key={project.title} item={project} />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

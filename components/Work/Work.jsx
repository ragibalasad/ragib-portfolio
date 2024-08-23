"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { FaEye, FaGithub } from "react-icons/fa";
import { images } from "../../constants/";

const Work = () => {
const [filter, setFilter] = useState("all");

  const projects = [
    {
      title: "DevEleven Website",
      image: images.project_develeven,
      live: "https://develeven.vercel.app/",
      github: "https://github.com/DEVELEVEN-io/develeven-io",
      category: "frontend",
    },
    {
      title: "Ragib's Portfolio",
      image: images.project_ragib_portfolio,
      live: "https://ragibalasad.me/",
      github: "https://github.com/ragibalasad/ragib-portfolio",
      category: "frontend",
    },
    {
      title: "Test Project 1",
      image: images.project_develeven,
      live: "https://ragibalasad.me/",
      github: "https://github.com/ragibalasad/ragib-portfolio",
      category: "backend",
    },
    {
      title: "Test Project 2",
      image: images.project_develeven,
      live: "https://ragibalasad.me/",
      github: "https://github.com/ragibalasad/ragib-portfolio",
      category: "backend",
    },
  ];

const filteredProjects = projects.filter(
  (project) => filter === "all" || project.category === filter
);


  const containerVariants = {
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const transitionEffects = {
    hidden: { opacity: 0, scale: 0.95, x: 50 }, // Slight scaling and moving to the right when hidden
    show: { opacity: 1, scale: 1, x: 0 }, // Moving back into position with full opacity
    exit: { opacity: 0, scale: 0.9, x: -50, transition: { duration: 0.3 } }, // Exit by moving to the left and shrinking
  };

  return (
    <section className="work relative my-24 bg-slate-800/70 max-sm:px-6">
      <div className="container mx-auto h-auto py-16 sm:w-4/5">
        <p className="border-l-4 border-sky-400 pl-4 font-semibold text-slate-300">
          Projects
        </p>

        <div className="mb-6 flex py-6 max-sm:flex-col max-sm:gap-10">
          <h1 className="text-4xl font-semibold text-slate-300">
            {"Works I've Done"}
          </h1>
          
          <ul className="flex flex-wrap gap-3 text-sm font-medium sm:ml-auto select-none">
            {/* Filter Buttons */}
              <li
                className={`cursor-pointer rounded-lg px-4 py-2 ${filter === "all" ? "bg-slate-900/70" : "bg-slate-700/70"}`}
                onClick={() => setFilter("all")}
              >
                All
              </li>

            <li
              className={`cursor-pointer rounded-lg px-4 py-2 ${filter === "frontend" ? "bg-slate-900/70" : "bg-slate-700/70"}`}
              onClick={() => setFilter("frontend")}
            >
              Front End
            </li>

            <li
              className={`cursor-pointer rounded-lg px-4 py-2 ${filter === "backend" ? "bg-slate-900/70" : "bg-slate-700/70"}`}
              onClick={() => setFilter("backend")}
            >
              Back End
            </li>

            <li
              className={`cursor-pointer rounded-lg px-4 py-2 ${filter === "others" ? "bg-slate-900/70" : "bg-slate-700/70"}`}
              onClick={() => setFilter("others")}
            >
              Others
            </li>

          </ul>
        </div>

        {/* Display Filtered Projects */}
        <motion.div
          className="grid gap-6 lg:grid-cols-3 lg:grid-rows-2"
          variants={containerVariants}
          initial="hidden"
          animate="show"
          layout
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title} // Use title as unique key to prevent index clashes
                className="overflow-hidden rounded-2xl bg-slate-700/70"
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
                    src={project.image}
                    alt={project.title}
                    width={500}
                    height={300}
                  />
                </div>
                <div className="flex p-4 text-slate-300">
                  <h1 className="text-lg font-medium">{project.title}</h1>
                  <div className="ml-auto flex gap-4 text-xl">
                    <a
                      className="transition hover:text-cyan-400"
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaEye />
                    </a>
                    <a
                      className="transition hover:text-cyan-400"
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Work;

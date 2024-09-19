"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { MdOutlineFileDownload } from "react-icons/md";
import { LuExternalLink } from "react-icons/lu";
import { images } from "../../constants";
import GridItem from "./GridItem";

const catagories = ["all", "front end", "back end", "others"];

const projects = [
  {
    title: "DevEleven Website",
    image: images.project_develeven,
    live: "https://develeven.vercel.app/",
    github: "https://github.com/DEVELEVEN-io/develeven-io",
    category: "front end",
    tags: ["TypeScript", "React", "Next.js", "CSS"],
    description:
      "Team DevEleven's landing website. Contributed as a team with @AbidAlWassie",
  },
  {
    title: "Ragib's Portfolio",
    image: images.project_ragib_portfolio,
    live: "https://ragibalasad.me/",
    github: "https://github.com/ragibalasad/ragib-portfolio",
    category: "front end",
    tags: ["JavaScript", "Next.js", "Tailwind CSS", "Framer"],
    description: "Ragib Al Asad's portfolio website. Not Complete Yet ",
  },
  {
    title: "Test Project 1",
    image: images.project_develeven,
    live: "https://ragibalasad.me/",
    github: "https://github.com/ragibalasad/ragib-portfolio",
    category: "back end",
    tags: ["TypeScript", "React", "Next.js", "Tailwind CSS"],
    description: "",
  },
  {
    title: "Test Project 2",
    image: images.project_develeven,
    live: "https://ragibalasad.me/",
    github: "https://github.com/ragibalasad/ragib-portfolio",
    category: "back end",
    tags: ["TypeScript", "React", "Next.js", "Tailwind CSS"],
    description: "",
  },

  {
    title: "Test Project 3",
    image: images.project_develeven,
    live: "https://ragibalasad.me/",
    github: "https://github.com/ragibalasad/ragib-portfolio",
    category: "back end",
    tags: ["TypeScript", "React", "Next.js", "Tailwind CSS"],
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe molestiae, repellendus aut sint vitae officia ipsum corrupti, minima at illo beatae ut! Sunt praesentium cupiditate qui mollitia? Minima, suscipit eum.",
  },
];

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const filteredProjects = projects.filter(
    (project) => filter === "all" || project.category === filter,
  );

  // Initialize arrays for the three grids
  const grids = [[], [], []];

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
        <p className="border-l-4 border-cyan-400 pl-4 font-semibold dark:text-slate-300">
          Projects
        </p>

        <div className="mb-6 flex py-6 max-sm:flex-col max-sm:gap-10">
          <h1 className="text-4xl font-semibold dark:text-slate-300">
            {"Works I've Done"}
          </h1>

          <ul className="flex select-none flex-wrap text-sm font-medium sm:ml-auto">
            {/* Filter Buttons loop */}
            {catagories.map((catagory, index) => (
              <li
                key={index}
                className={`cursor-pointer rounded-lg px-4 py-2 font-medium capitalize text-cyan-600 dark:text-cyan-400 ${filter === catagory ? "bg-white dark:bg-slate-700/70" : ""}`}
                onClick={() => setFilter(catagory)}
              >
                {catagory}
              </li>
            ))}
          </ul>
        </div>

        {/* Display Filtered Projects */}
        <motion.div
          className="grid gap-6 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate="show"
          layout
        >
          <AnimatePresence>
            {/* masonry-style layout. */}

            {/* {grids.map((gridItems, gridIndex) => (
              <div key={gridIndex} className="grid grid-cols-1 gap-6">
                {gridItems.map((item, itemIndex) => (
                  <GridItem key={itemIndex} item={item} />
                ))}
              </div>
            ))} */}

            {/* Typical Grid Layout */}

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

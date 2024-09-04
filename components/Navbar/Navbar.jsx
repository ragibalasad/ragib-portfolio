"use client";

import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { RiMenu4Fill } from "react-icons/ri";
import ThemeSwitcher from "./ThemeSwitcher";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    if (isOpen) {
      setTimeout(() => {
        setIsOpen(false);
      }, 400);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { to: "hero", offset: -100, label: "home" },
    { to: "about", offset: -100, label: "about me" },
    { to: "projectsSection", offset: -60, label: "projects" },
    { to: "skills", offset: -100, label: "skills" },
    { to: "services", offset: -100, label: "services" },
    { to: "contact", offset: -100, label: "contact" },
  ];

  return (
    <nav
      className={`fixed z-50 w-full border-b border-slate-600/10 backdrop-blur-md transition-all dark:border-white/10 max-sm:px-6 ${isScrolled ? "bg-white/80 py-5 dark:bg-slate-800/70 dark:shadow" : "py-7"} ${isOpen ? "overflow-y-hidden max-lg:min-h-dvh" : "min-h-0"} `}
      id="navbar"
    >
      <motion.div
        className="container mx-auto flex items-center justify-between text-center sm:w-4/5"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex w-full items-center">
          <div className="flex items-center gap-0.5">
            {/* <div className="">
              <Image
                src={images.logo}
                alt="ragib logo"
                width={16}
                height={16}
              />
            </div> */}
            <h1 className="text-xl font-semibold text-cyan-700 dark:text-cyan-400">
              {`ragibalasad`}
            </h1>
          </div>

          <ul
            className={`inset-0 flex list-none transition-all max-lg:absolute max-lg:my-20 max-lg:flex-col max-lg:rounded-xl max-lg:text-left max-sm:px-6 lg:ml-auto ${isOpen ? "container mx-auto sm:w-4/5" : "transition-all max-lg:hidden"}`}
          >
            {navLinks.map((link, index) => (
              <li
                key={index}
                className="cursor-pointer text-sm font-semibold uppercase text-slate-800 transition hover:text-slate-900 dark:text-slate-200 dark:hover:text-cyan-50 max-lg:py-2 lg:px-3"
              >
                <Link
                  className="relative h-full w-full after:absolute after:right-1 after:top-1/2 after:-z-10 after:w-full after:rounded-full after:p-1.5 after:opacity-0 after:transition-all hover:after:bg-gradient-to-bl hover:after:from-transparent hover:after:to-cyan-600/80 hover:after:opacity-100 dark:hover:after:to-cyan-400"
                  to={link.to}
                  activeClass="after:bg-gradient-to-bl after:from-transparent after:to-cyan-600/80 dark:after:to-cyan-400 after:opacity-100 dark:text-cyan-50 text-slate-900"
                  spy={true}
                  smooth={true}
                  offset={link.offset}
                  duration={500}
                  onSetActive={handleLinkClick}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <p className="absolute -bottom-12 text-sm font-medium text-slate-600 transition dark:text-slate-400 lg:hidden">
                &copy; {new Date().getFullYear()} Copyright:{" "}
                <a
                  className="font-semibold text-cyan-600 dark:text-cyan-400"
                  href="https://github.com/ragibalasad"
                  target="_blank"
                >
                  Ragib Al Asad
                </a>
              </p>
            </li>
          </ul>
        </div>
        <div className="flex items-center text-xl">
          <ThemeSwitcher className="ml-5 cursor-pointer rounded-full bg-slate-200 p-1 transition hover:text-cyan-500 dark:bg-slate-700 dark:hover:text-cyan-400" />
          <div className="menuBtn">
            <RiMenu4Fill
              onClick={handleMenuToggle}
              className="ml-5 cursor-pointer hover:text-cyan-500 dark:hover:text-cyan-400 lg:hidden"
            />
          </div>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;

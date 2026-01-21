"use client";

import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
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
      }, 300);
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
    { to: "hero", offset: -100, label: "Home" },
    { to: "about", offset: -100, label: "About" },
    { to: "projectsSection", offset: -60, label: "Projects" },
    { to: "skills", offset: -100, label: "Skills" },
    { to: "services", offset: -100, label: "Services" },
    { to: "contact", offset: -130, label: "Contact" },
  ];

  return (
    <nav
      className={`fixed z-50 w-full transition-all duration-300 border-b border-transparent ${
        isScrolled
          ? "border-b border-slate-200/50 bg-white/80 py-4 shadow-sm backdrop-blur-lg dark:border-slate-800/50 dark:bg-slate-950/80"
          : "py-6"
      }`}
      id="navbar"
    >
      <motion.div
        className="container mx-auto flex items-center justify-between px-6 sm:w-4/5"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        {/* Logo */}
        <Link
          to="hero"
          smooth={true}
          duration={500}
          className="cursor-pointer"
        >
          <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
            ragib<span className="text-cyan-500">.</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                to={link.to}
                spy={true}
                smooth={true}
                offset={link.offset}
                duration={500}
                activeClass="text-cyan-600 dark:text-cyan-400"
                className="cursor-pointer rounded-lg px-4 py-2 text-base font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800/50 dark:hover:text-white"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          <ThemeSwitcher className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg bg-slate-100 text-slate-600 transition-colors hover:bg-slate-200 hover:text-cyan-600 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-cyan-400" />
          
          {/* Mobile Menu Button */}
          <button
            onClick={handleMenuToggle}
            className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-slate-600 transition-colors hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700 lg:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? <HiX className="text-xl" /> : <HiMenuAlt3 className="text-xl" />}
          </button>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="border-t border-slate-200/50 bg-white/95 backdrop-blur-lg dark:border-slate-800/50 dark:bg-slate-950/95 lg:hidden"
          >
            <div className="container mx-auto px-6 py-6 sm:w-4/5">
              <ul className="flex flex-col gap-2">
                {navLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.to}
                      spy={true}
                      smooth={true}
                      offset={link.offset}
                      duration={500}
                      onClick={handleLinkClick}
                      activeClass="bg-cyan-50 text-cyan-600 dark:bg-cyan-900/20 dark:text-cyan-400"
                      className="block cursor-pointer rounded-lg px-4 py-3 text-base font-medium text-slate-700 transition-colors hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800/50"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

"use client";

import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import ThemeSwitcher from "./ThemeSwitcher";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

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
      
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { to: "hero", offset: -100, label: "Home" },
    { to: "about", offset: -140, label: "About" },
    { to: "projectsSection", offset: -140, label: "Projects" },
    { to: "skills", offset: -140, label: "Skills" },
    { to: "services", offset: -140, label: "Services" },
    { to: "contact", offset: -140, label: "Contact" },
  ];

  return (
    <nav
      className={`fixed z-50 w-full transition-all duration-500 ${
        isScrolled
          ? "top-4 px-6"
          : "top-0 px-0"
      }`}
      id="navbar"
    >
      <motion.div
        className={`container mx-auto flex items-center justify-between transition-all duration-500 ${
          isScrolled
            ? "max-w-5xl rounded-full border border-white/20 bg-white/60 py-3 shadow-xl backdrop-blur-2xl dark:border-white/10 dark:bg-white/5 px-8"
            : "max-w-7xl border-b border-transparent py-6 max-xl:px-6"
        }`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        {/* Logo */}
        <Link
          to="hero"
          smooth={true}
          duration={500}
          className="group flex cursor-pointer items-center gap-2"
        >
          <motion.span 
            animate={isScrolled ? { scale: [1, 1.1, 1] } : {}}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="font-mono text-2xl font-medium bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent"
          >
            &lt;/&gt;
          </motion.span>
          <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
            ragib<span className="text-cyan-500">.</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link, index) => (
            <li key={index} className="relative group">
              <Link
                to={link.to}
                spy={true}
                smooth={true}
                offset={link.offset}
                duration={500}
                activeClass="!text-cyan-600 dark:!text-cyan-400"
                className="peer cursor-pointer rounded-xl px-4 py-2 text-sm font-bold uppercase tracking-widest text-slate-600 transition-all duration-200 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
              >
                {link.label}
              </Link>
              {/* Active Indicator Dot */}
              <div className="absolute -bottom-1 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-cyan-500 opacity-0 transition-all duration-300 peer-[.active]:opacity-100 peer-[.active]:shadow-[0_0_10px_rgba(34,211,238,0.8)]"></div>
            </li>
          ))}
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          <ThemeSwitcher className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl border border-white/20 bg-white/40 text-lg text-slate-700 shadow-sm backdrop-blur-xl transition-colors duration-200 hover:bg-white/60 hover:text-cyan-500 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-cyan-400" />
          
          {/* Mobile Menu Button */}
          <button
            onClick={handleMenuToggle}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-white/40 text-lg text-slate-700 shadow-sm backdrop-blur-xl transition-colors duration-200 hover:bg-white/60 hover:text-cyan-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-cyan-400 lg:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? <HiX className="text-xl" /> : <HiMenuAlt3 className="text-xl" />}
          </button>
        </div>

        {/* Scroll Progress Bar (Inside Floating Island) */}
        {isScrolled && (
          <div className="absolute bottom-0 left-6 right-6 h-[2px] overflow-hidden rounded-full bg-slate-200/20">
            <motion.div 
              className="h-full bg-gradient-to-r from-cyan-400 to-blue-600"
              style={{ width: `${scrollProgress}%` }}
            />
          </div>
        )}
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className={`mx-auto mt-2 overflow-hidden lg:hidden`}
          >
            <div className={`rounded-3xl border border-white/20 bg-white/60 p-4 shadow-xl backdrop-blur-2xl dark:border-white/10 dark:bg-white/5`}>
              <ul className="flex flex-col gap-1">
                {navLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.to}
                      spy={true}
                      smooth={true}
                      offset={link.offset}
                      duration={500}
                      onClick={handleLinkClick}
                      activeClass="!text-cyan-600 dark:!text-cyan-400 bg-cyan-500/10"
                      className="block cursor-pointer rounded-2xl px-4 py-3 text-sm font-bold uppercase tracking-widest text-slate-600 transition-all duration-200 hover:bg-white/40 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-white/5 dark:hover:text-white"
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

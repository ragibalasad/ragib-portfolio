"use client";

import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6";
import { HiMail } from "react-icons/hi";
import ThemeSwitcher from "./ThemeSwitcher";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
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
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { to: "hero", offset: 0, label: "Home" },
    { to: "about", offset: 0, label: "About" },
    { to: "projects", offset: 0, label: "Projects" },
    { to: "skills", offset: 0, label: "Skills" },
    { to: "services", offset: 0, label: "Services" },
    { to: "contact", offset: 0, label: "Contact" },
  ];

  const socialLinks = [
    { href: "https://github.com/ragibalasad", icon: <FaGithub />, label: "GitHub" },
    { href: "https://linkedin.com/in/ragibalasad", icon: <FaLinkedin />, label: "LinkedIn" },
    { href: "https://x.com/ragibalasad", icon: <FaTwitter />, label: "Twitter" },
    // { href: "mailto:ragibalasad@gmail.com", icon: <HiMail />, label: "Email" },
  ];

  return (
    <nav className="fixed top-4 z-50 w-full px-4 sm:px-6" id="navbar">
      <motion.div
        className="container mx-auto flex max-w-5xl items-center justify-between rounded-full border border-white/30 bg-white/60 px-6 py-3.5 shadow-xl backdrop-blur-2xl dark:border-white/10 dark:bg-slate-900/60 sm:px-8"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Logo */}
        <Link
          to="hero"
          smooth={true}
          duration={500}
          className="group flex cursor-pointer items-center gap-1.5"
        >
          <span className="font-mono text-xl font-medium bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
            &lt;/&gt;
          </span>
          <span className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">
            ragib<span className="text-cyan-500">.</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
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
                className="peer cursor-pointer rounded-full px-4 py-2 text-sm font-medium uppercase tracking-wider text-slate-600 transition-all duration-200 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
              >
                {link.label}
              </Link>
              {/* Active Indicator Dot */}
              <div className="absolute -bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-cyan-500 opacity-0 transition-all duration-300 peer-[.active]:opacity-100 peer-[.active]:shadow-[0_0_8px_rgba(34,211,238,0.8)]"></div>
            </li>
          ))}
        </ul>

        {/* Right Side: Socials + Theme + Mobile Toggle */}
        <div className="flex items-center gap-2">
          {/* Social Icons — Desktop only */}
          <div className="hidden items-center gap-1.5 border-r border-slate-200/50 pr-3 dark:border-white/10 lg:flex">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex h-9 w-9 items-center justify-center rounded-full text-base text-slate-500 transition-all duration-200 hover:scale-110 hover:text-cyan-600 dark:text-slate-400 dark:hover:text-cyan-400"
                title={social.label}
              >
                {social.icon}
                {/* Tooltip */}
                <span className="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 translate-y-1 whitespace-nowrap rounded-md bg-slate-900/90 px-2 py-1 text-[9px] font-bold uppercase tracking-widest text-white opacity-0 shadow-lg backdrop-blur-md transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100 dark:bg-white dark:text-slate-950">
                  {social.label}
                </span>
              </a>
            ))}
          </div>

          {/* Theme Toggle */}
          <ThemeSwitcher className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full text-lg text-slate-600 transition-colors duration-200 hover:text-cyan-500 dark:text-slate-400 dark:hover:text-cyan-400" />

          {/* Mobile Menu Button */}
          <button
            onClick={handleMenuToggle}
            className="flex h-9 w-9 items-center justify-center rounded-full text-lg text-slate-600 transition-colors duration-200 hover:text-cyan-600 dark:text-slate-400 dark:hover:text-cyan-400 lg:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? <HiX className="text-lg" /> : <HiMenuAlt3 className="text-lg" />}
          </button>
        </div>

        {/* Scroll Progress Bar */}
        <div className="absolute bottom-0 left-8 right-8 h-[2px] overflow-hidden rounded-full bg-transparent">
          <motion.div
            className="h-full bg-gradient-to-r from-cyan-400 to-blue-600"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="mx-auto mt-2 max-w-5xl overflow-hidden lg:hidden"
          >
            <div className="rounded-[2rem] border border-white/30 bg-white/60 p-4 shadow-xl backdrop-blur-2xl dark:border-white/10 dark:bg-slate-900/60">
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

              {/* Mobile Social Links */}
              <div className="mt-3 flex items-center justify-center gap-2 border-t border-slate-200/50 pt-3 dark:border-white/10">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-xl text-lg text-slate-500 transition-all duration-200 hover:scale-110 hover:text-cyan-600 dark:text-slate-400 dark:hover:text-cyan-400"
                    title={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

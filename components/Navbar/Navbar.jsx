"use client";

import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { RiMenu4Fill } from "react-icons/ri";

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
    { to: "work", offset: -60, label: "projects" },
    { to: "skills", offset: -100, label: "skills" },
    { to: "services", offset: -100, label: "services" },
    { to: "contact", offset: -100, label: "contact" },
  ];

  return (
    <nav
      className={`fixed z-50 w-full border-b border-white/10 backdrop-blur-md transition-all max-sm:px-6 ${isScrolled ? "bg-slate-800/70 py-5 shadow" : "py-7"} ${isOpen ? "overflow-y-hidden max-lg:min-h-dvh" : "min-h-0"} `}
      id="navbar"
    >
      <motion.div
        className="container mx-auto flex items-center justify-between text-center sm:w-4/5"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="navHolder flex">
          <div className="flex items-center">
            <h1 className="text-xl font-semibold lowercase text-cyan-400">
              ragibalasad
            </h1>
          </div>

          <ul
            className={`inset-0 flex list-none transition-all max-lg:absolute max-lg:my-20 max-lg:flex-col max-lg:rounded-xl max-lg:text-left max-sm:px-6 lg:ml-auto ${isOpen ? "container mx-auto sm:w-4/5" : "transition-all max-lg:hidden"}`}
          >
            {navLinks.map((link, index) => (
              <li
                key={index}
                className="cursor-pointer text-sm font-semibold uppercase text-slate-200 transition hover:text-cyan-50 max-lg:py-2 lg:px-3"
              >
                <Link
                  className="relative h-full w-full after:absolute after:right-1 after:top-1/2 after:-z-10 after:w-full after:rounded-full after:p-1.5 after:opacity-0 after:transition-all hover:after:bg-slate-600 hover:after:opacity-100"
                  to={link.to}
                  activeClass="after:bg-slate-600 after:opacity-100 text-cyan-50"
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
              <p className="absolute -bottom-12 text-sm font-medium text-slate-400 transition lg:hidden">
                &copy; {new Date().getFullYear()} Copyright:{" "}
                <a
                  className="font-semibold text-cyan-400"
                  href="https://github.com/ragibalasad"
                  target="_blank"
                >
                  Ragib Al Asad
                </a>
              </p>
            </li>
          </ul>
        </div>
        <div className="flex text-xl">
          <MdDarkMode className="ml-5 cursor-pointer" />
          <div className="menuBtn">
            <RiMenu4Fill
              onClick={handleMenuToggle}
              className="ml-5 cursor-pointer lg:hidden"
            />
          </div>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;

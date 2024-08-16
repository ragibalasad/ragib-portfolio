"use client";

import { useState, useEffect } from "react";
import { images } from "../../constants";
import Image from "next/image";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { RiMenu4Fill } from "react-icons/ri";

const Navbar2 = () => {
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
    { to: "work", offset: -100, label: "projects" },
    { to: "skills", offset: -100, label: "skills" },
    { to: "services", offset: -100, label: "services" },
    { to: "about", offset: -100, label: "about me" },
    { to: "contact", offset: -100, label: "contact" },
  ];

  return (
    <nav
      className={`fixed z-50 w-full border-b border-slate-50/10 backdrop-blur-md transition-all max-sm:px-4 ${isScrolled ? "bg-slate-800/70 py-5 shadow" : "py-7"} ${isOpen ? "overflow-y-hidden max-lg:pb-96" : ""} `}
      id="navbar"
    >
      <motion.div
        className="container mx-auto flex items-center justify-between text-center md:w-4/5"
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
            className={`inset-0 ml-auto flex list-none transition-all max-lg:absolute max-lg:my-20 max-lg:flex-col max-lg:rounded-xl max-lg:px-2 max-lg:text-left lg:backdrop-blur-none ${isOpen ? "max-lg:container" : "transition-all max-lg:hidden"}`}
          >
            {navLinks.map((link, index) => (
              <li
                key={index}
                className="cursor-pointer px-3 text-sm font-semibold uppercase transition hover:text-cyan-400 max-lg:py-2"
              >
                <Link
                  className="block h-full w-full"
                  to={link.to}
                  activeClass="text-cyan-400"
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
              <p className="absolute -bottom-12 px-3 text-sm font-medium text-slate-400 transition md:hidden">
                Copyright © 2024 <br /> Made with Love by{" "}
                <a
                  className="underline"
                  href="https://github.com/ragibalasad"
                  target="_blank"
                >
                  Ragib Al Asad
                </a>
                .
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

export default Navbar2;

"use client";

import { useState, useEffect } from "react";
import { images } from "../../constants";
import Image from "next/image";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

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
    { to: "header", offset: -100, label: "home" },
    { to: "work", offset: -100, label: "projects" },
    { to: "skills", offset: -100, label: "skills" },
    { to: "services", offset: -100, label: "services" },
    { to: "about", offset: -100, label: "about me" },
    { to: "contact", offset: -100, label: "contact" },
  ];

  return (
    <nav
      className={`navbar fixed z-50
        ${isScrolled ? "scrolled fixed py-5 bg-slate-950/50 backdrop-blur-sm transition-all duration-300" : ""} 
        ${isOpen ? "open" : ""}
        `}
      id="navbar"
    >
      <motion.div
        className="container flex justify-between mx-auto text-center items-center"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="navHolder flex">
          <div className="logo flex items-center">
            <Image src={images.logo} alt="Logo" width={22} height={22} />
            <span className="ml-1 text-indigo-50 font-black uppercase">
              agib
            </span>
          </div>

          <ul className={`nav-list ml-auto ${isOpen ? "open" : ""}`}>
            {navLinks.map((link, index) => (
              <li
                key={index}
                className="nav-link text-slate-800 px-3 font-semibold text-sm"
              >
                <Link
                  to={link.to}
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={link.offset}
                  duration={500}
                  onSetActive={handleLinkClick}
                >
                  {link.label.toUpperCase()}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div
          className="menuBtn hamburger [&>*]:bg-white"
          onClick={handleMenuToggle}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;

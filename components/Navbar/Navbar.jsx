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
    { to: "work", offset: -100, label: "Work" },
    { to: "skills", offset: -100, label: "Skills" },
    { to: "services", offset: -100, label: "Services" },
    { to: "about", offset: -100, label: "About" },
    { to: "contact", offset: -100, label: "Contact" },
  ];

  return (
    <nav
      className={`navbar ${isScrolled ? "scrolled" : ""} ${
        isOpen ? "open" : ""
      }`}
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
            <Image src={images.logo} alt="Logo" width={24} height={24} />
            <span className="ml-1 text-ff font-semibold text-xl">agib</span>
          </div>

          <ul className={`nav-list ml-auto ${isOpen ? "open" : ""}`}>
            {navLinks.map((link, index) => (
              <li key={index} className="nav-link px-2 font-medium">
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

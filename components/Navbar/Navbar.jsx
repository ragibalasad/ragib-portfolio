"use client";

import { useState, useEffect } from "react";
import { images } from "../../constants";
import Image from "next/image";
import { Link } from "react-scroll";

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
    <nav className="navbar" id="navbar">
      <div className="container flex justify-between mx-auto text-center items-center">
        <div className="navHolder flex py-0">
          <div className="logo flex items-center mr-4">
            <Image src={images.logo} alt="Logo" width={25} height={25} />
            <span className="ml-3 text-ff font-bold text-xl">AGIB</span>
          </div>

          <ul className={`nav-list ml-auto ${isOpen ? "open" : ""}`}>
            {navLinks.map((link, index) => (
              <li key={index} className="nav-link px-0 text-md">
                <Link
                  to={link.to}
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={link.offset}
                  duration={500}
                  className="text-txtdark"
                  onSetActive={handleLinkClick}
                >
                  {link.label.toUpperCase()}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

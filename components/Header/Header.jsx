"use client";
import { images } from "../../constants";
import Image from "next/image";
import { React, useRef } from "react";
import { useTypewriter } from "react-simple-typewriter";
import { useScroll, useTransform, motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import TerminalWindow from "./TerminalWindow";

const Header = () => {
  const [text] = useTypewriter({
    words: ['"Web", "Developer"', '"Web", "Designer"', '"Programmer"'],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 60,
  });

  let ref = useRef();
  const isMobile = useMediaQuery({ query: "(max-width: 767.98px)" });

  let { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Always call the hooks
  let yIntroTransform = useTransform(scrollYProgress, [0, 1], ["0%", "75%"]);
  let yTerminalTransform = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "-25%"]
  );

  // Conditionally apply the values
  let yIntro = isMobile ? "0%" : yIntroTransform;
  let yTerminal = isMobile ? "0%" : yTerminalTransform;

  return (
    <header
      ref={ref}
      className="header mx-auto two-color-bg relative flex flex-col items-center h-screen"
    >
      <div className="container flex h-full">
        <div className="intro w-1/2 flex">
          <motion.div
            style={{ y: yIntro }}
            className="flex flex-col my-auto gap-7"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="info md:text-indigo-100 text-white">
              <p className="hi mb-1 text-base ">Hello, I&apos;m</p>
              <p className="text-5xl text-indigo-50 font-black uppercase">
                Ragib Al Asad
              </p>
              <p className="text-lg my-2 uppercase border-l-4 border-l-blue-500 px-3 h-max">
                <span>Software developer from bangladesh</span>
              </p>
            </div>

            <div className="w-max flex gap-4">
              <a
                href=""
                className="group relative inline-block text-white p-3 rounded-lg text-xs bg-gradient-to-br from-sky-600 to-indigo-600"
              >
                <span className="absolute inset-0 bg-gradient-to-bl from-sky-500 to-indigo-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-lg"></span>
                <span className="relative">Download Resume</span>
              </a>

              <div className="social-links flex gap-4 text-2xl my-auto text-indigo-300">
                <a href="https://facebook.com/ragibalasad" target="_blank">
                  <FaFacebook />
                </a>
                <a href="https://github.com/RagibAlAsad" target="_blank">
                  <FaGithub />
                </a>
                <a href="https://linkedin.com/in/RagibAlAsad" target="_blank">
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div
          style={{ y: yTerminal }}
          className="terminal w-1/2 flex justify-center items-end pb-10 my-4 z-10"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <TerminalWindow text={text}></TerminalWindow>
        </motion.div>
      </div>
      <motion.div
        className="showcase-img absolute bottom-0 mx-auto"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          className="mx-auto"
          src={images.ragib_potrait}
          alt="Ragib Al Asad"
          height={610}
        />
      </motion.div>
    </header>
  );
};

export default Header;

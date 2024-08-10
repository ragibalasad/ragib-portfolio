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
    ["0%", "-25%"],
  );

  // Conditionally apply the values
  let yIntro = isMobile ? "0%" : yIntroTransform;
  let yTerminal = isMobile ? "0%" : yTerminalTransform;

  return (
    <header
      ref={ref}
      className="header two-color-bg relative mx-auto flex h-screen flex-col items-center"
    >
      <div className="container flex h-full">
        <div className="intro flex w-1/2">
          <motion.div
            style={{ y: yIntro }}
            className="my-auto flex flex-col gap-7"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-white md:text-indigo-100">
              <p className="hi mb-1 text-base">Hello, I&apos;m</p>
              <p className="text-5xl font-black uppercase text-indigo-50">
                Ragib Al Asad
              </p>
              <p className="my-2 h-max border-l-4 border-l-blue-500 px-3 text-lg uppercase">
                <span>Software developer from bangladesh</span>
              </p>
            </div>

            <div className="flex w-max gap-4">
              <a
                href=""
                className="group relative inline-block rounded-lg bg-gradient-to-br from-sky-600 to-indigo-600 p-3 text-xs text-white"
              >
                <span className="absolute inset-0 rounded-lg bg-gradient-to-bl from-sky-500 to-indigo-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
                <span className="relative">Download Resume</span>
              </a>

              <div className="social-links my-auto flex gap-4 text-2xl text-indigo-300">
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
          className="terminal z-10 my-4 flex w-1/2 items-end justify-center pb-10"
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

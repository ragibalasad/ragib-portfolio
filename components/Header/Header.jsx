"use client";
import { images } from "../../constants";
import Image from "next/image";
import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Header = () => {
  const [text] = useTypewriter({
    words: ["Web Developer", "Web Designer", "Programmer"],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 60,
  });

  return (
    <header className="header mx-auto two-color-bg relative flex flex-col items-center h-screen">
      <div className="container flex w-full h-full">
        <div className="intro w-1/2 flex justify-center items-center">
          <div className="text-right">
            <p className="text-2xl text-ff">Hi 👋 I&apos;m</p>
            <p className="text-7xl text-ff font-semibold">
              Ragib
              <br />
              Al Asad
            </p>
            <p className="sub-heading text-lg text-ff">I BUILD WEBSITES</p>
          </div>
        </div>
        <div className="terminal w-1/2 flex justify-center items-end pb-16">
          <div className="terminal-win">
            <div className="terminal-head flex shadow-sm p-2 gap-1">
              <div className="close"></div>
              <div className="minimize"></div>
              <div className="maximize"></div>
            </div>
            <div className="terminal-body px-6 py-0">
              <span className="text-xl">
                <span className="code-color-1">{"<div "}</span>
                <span className="code-color-2">className</span>
                <span className="code-color-4">=</span>
                <span className="code-color-3">&quot;aboutMe&quot;</span>
                <span className="code-color-1">{">"}</span>
                <br />
                <span className="code-color-1 ml-4">{"<p> "}</span>
                <span className="code-color-4">I&apos;m a</span>
                <span className="code-color-1">{" </p>"}</span>
                <br />
                <span className="code-color-1 ml-4">{"<h1> "}</span>
                <span className="code-color-4 text-2xl">{text}</span>
                <span className="code-color-2">
                  <Cursor cursorStyle="█" />
                </span>
                <span className="code-color-1">{"</h1>"}</span>
                <br />
                <span className="code-color-1">{"</div>"}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="showcase-img absolute bottom-0 left-1/2 transform -translate-x-1/2">
        <Image
          className="object-contain"
          src={images.ragib_potrait}
          alt="Ragib Al Asad"
          height={640}
        />
      </div>
    </header>
  );
};

export default Header;

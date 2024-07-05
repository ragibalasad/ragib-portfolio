"use client";
import { images } from "../../constants";
import Image from "next/image";

const Header = () => {
  return (
    <header className="header relative two-color-bg pt-20">
      <div className="devider absolute w-full flex">
        <div className="w-1/2 left-half flex justify-between">
          <div className="intro container p-10 mt-20 mr-20 text-right">
            <p className="text-2xl text-ff">Hi 👋 I&apos;m</p>
            <p className="text-7xl text-ff font-semibold">
              Ragib
              <br />
              Al Asad
            </p>
            <p className="sub-heading text-lg text-ff mr-16">
              I BUILD WEBSITES
            </p>
          </div>
        </div>
        <div className="w-1/2 right-half flex justify-between pt-6">
          <div className="terminal-win ml-20 mt-80">
            <div className="terminal-head flex shadow-sm p-2 gap-1">
              <div className="close"></div>
              <div className="minimize"></div>
              <div className="maximize"></div>
            </div>
            <div className="terminal-body px-4 py-2">
              <span className="text-xl">
                <span className="code-color-1">{"<div "}</span>
                <span className="code-color-2">className</span>
                <span className="code-color-4">=</span>
                <span className="code-color-3 text-2xl">
                  &quot;aboutMe&quot;
                </span>
                <span className="code-color-1">{">"}</span>
                <br />
                <span className="code-color-1 ml-4">{"<p> "}</span>
                <span className="code-color-4 text-2xl">I&apos;m a</span>
                <span className="code-color-1">{" </p>"}</span>
                <br />
                <span className="code-color-1 ml-4">{"<h1> "}</span>
                <span className="code-color-4 text-2xl">Web Developer</span>
                <span className="code-color-1">{" </h1>"}</span>
                <br />
                <span className="code-color-1">{"</div>"}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="showcase-img relative z-100">
        <Image
          className=""
          src={images.ragib_potrait}
          alt="Ragib Al Asad"
          height={624}
        />
      </div>
    </header>
  );
};

export default Header;

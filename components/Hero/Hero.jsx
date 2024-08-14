"use client";

import CodeWindow from "./CodeWindow";

const Hero = () => {
  return (
    <section className="hero container mx-auto md:w-4/5">
      <div className="relative grid w-full grid-cols-2">
        <div className="">Hey</div>
        {/* <div className="min-h-screen w-1/2 bg-[url('/images/hero-vscode.png')] opacity-90 after:absolute after:block after:min-h-screen after:w-1/2 after:bg-gradient-to-l after:from-transparent after:via-transparent after:to-slate-900"></div> */}

        <div className="mt-32 w-full p-4">
          <CodeWindow />
        </div>
      </div>
    </section>
  );
};

export default Hero;

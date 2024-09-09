const Skills = () => {
  return (
    <section className="skills container relative mx-auto my-24 py-12 sm:w-4/5">
      <div className="placeHolderComponent h-auto max-sm:px-6">
        <div className="mx-auto w-fit">
          <h1 className="rounded border-4 border-slate-800 bg-slate-950/70 p-3 px-10 text-xl font-semibold uppercase text-cyan-300">
            My Skills
          </h1>
        </div>
        <div className="skill-sets mt-20 grid gap-16 py-8 md:grid-cols-2">
          <div className="max-md:col-span-2">
            <h1 className="mb-4 border-l-4 border-cyan-400 pl-4 font-semibold text-slate-700 dark:text-slate-300">
              Frontend Skills
            </h1>
            <ul className="flex flex-wrap gap-4 uppercase md:pr-4">
              <li className="">html</li>
              <li className="">css</li>
              <li className="">javascript</li>
              <li className="">react</li>
              <li className="">next js</li>
              <li className="">tailwind css</li>
              <li className="">framer motion</li>
              <li className="">UX/UI Design</li>
              <li className="">SSR</li>
            </ul>
          </div>
          <div className="max-md:col-span-2">
            <h1 className="mb-4 border-l-4 border-cyan-400 pl-4 font-semibold text-slate-700 dark:text-slate-300">
              Backtend Technologies
            </h1>
            <ul className="flex flex-wrap gap-4 uppercase md:pl-4">
              <li className="">python</li>
              <li className="">flask</li>
              <li className="">fastapi</li>
              <li className="">sql alchemy</li>
              <li className="">node</li>
              <li className="">express</li>
              <li className="">jwt/oauth</li>
              <li className="">sql</li>
              <li className="">postgresql</li>
              <li className="">sqlite</li>
              <li className="">prisma orm</li>
              <li className="">mongo db</li>
            </ul>
          </div>

          <div className="col-span-2 flex flex-col gap-4 md:mt-8">
            <h1 className="mb-4 border-l-4 border-cyan-400 pl-4 font-semibold text-slate-700 dark:text-slate-300">
              Software Developement Tools
            </h1>
            <ul className="flex flex-wrap gap-4 uppercase">
              <li className="">c</li>
              <li className="">python</li>
              <li className="">shell</li>
              <li className="">javascript</li>
              <li className="">typescript</li>
            </ul>
            <ul className="flex flex-wrap gap-4 uppercase">
              <li className="">React Native</li>
              <li className="">git</li>
              <li className="">github</li>
              <li className="">linux</li>
              <li className="">bash</li>
              <li className="">vercel</li>
              <li className="">figma</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

const Skills = () => {
  return (
    <section className="skills container relative mx-auto my-24 py-12 sm:w-4/5">
      <div className="placeHolderComponent h-auto">
        <div className="mx-auto w-fit">
          <h1 className="rounded border-4 border-slate-800 bg-slate-950/70 p-3 px-10 text-xl font-semibold uppercase text-cyan-300">
            My Skills
          </h1>
        </div>
        <div className="skill-sets my-8 mt-20 grid grid-rows-2 gap-12 py-8">
          <div className="grid grid-cols-2 gap-8">
            <div className="">
              <ul className="flex flex-wrap gap-4 pr-4 uppercase">
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
            <div className="">
              <ul className="flex flex-wrap gap-4 pl-4 uppercase">
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
          </div>
          <div className="mt-6 flex flex-col gap-4">
            <ul className="flex flex-wrap gap-4 uppercase">
              <li className="">c</li>
              <li className="">python</li>
              <li className="">bash</li>
              <li className="">javascript</li>
              <li className="">typescript</li>
            </ul>
            <ul className="flex flex-wrap gap-4 uppercase">
              <li className="">React Native</li>
              <li className="">git</li>
              <li className="">github</li>
              <li className="">linux</li>
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

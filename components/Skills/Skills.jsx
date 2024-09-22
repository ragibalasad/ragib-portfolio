const Skills = () => {
  const skills = [
    {
      category: "Frontend Skills",
      items: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React",
        "Next.js",
        "Tailwind CSS",
        "Framer Motion",
        "UI/UX Design",
        "SSR",
      ],
    },
    {
      category: "Backend Technologies",
      items: [
        "Python",
        "Falsk",
        "Fast API",
        "SQL Alchemy",
        "Node.js",
        "Express",
        "JWT/OAUTH",
        "PRISMA ORM",
        "SQL",
        "POSTGRESQL",
        "SQLITE",
        "MongoDB",
      ],
    },
    {
      category: "Software Developement Tools",
      items: [
        "C",
        "Python",
        "Shell",
        "JavaScript",
        "TypeScript",
        "React Native",
        "Giit",
        "GitHub",
        "Linux",
        "Bash",
        "Vercel",
        "Figma",
        "VS Code",
      ],
    },
  ];
  return (
    <section className="skills container relative mx-auto my-24 py-12 sm:w-4/5">
      <div className="placeHolderComponent h-auto max-sm:px-6">
        <div className="mx-auto w-fit">
          <h1 className="rounded border-4 border-slate-200 bg-white p-3 px-10 text-xl font-semibold uppercase text-cyan-600 dark:border-slate-800 dark:bg-slate-950/70 dark:text-cyan-300">
            My Skills
          </h1>
        </div>
        <div className="skill-sets mt-20 grid gap-16 py-8 md:grid-cols-4">
          {skills.map((skillSet, index) => (
            <div
              className={`max-md:col-span-4 ${index == 2 ? "col-span-3 md:mt-8" : "col-span-2"}`}
              key={index}
            >
              <p className="mb-8 flex items-center gap-4 font-semibold dark:text-slate-300">
                <span className="-mt-1 text-2xl font-bold text-cyan-500">{`{`}</span>
                <span className="my-auto text-base">{skillSet.category}</span>
              </p>
              <ul className="flex flex-wrap gap-5 uppercase md:pr-4">
                {skillSet.items.map((skill, i) => (
                  <li
                    key={i}
                    className="cursor-pointer rounded bg-white p-1 px-4 text-sm font-medium text-cyan-700 ring-2 ring-white ring-offset-2 ring-offset-slate-200/80 dark:bg-slate-800 dark:text-cyan-400 dark:ring-slate-800 dark:ring-offset-slate-950"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

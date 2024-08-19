import Image from "next/image";
import ss_develeven from "../../public/images/screenshot-develeven.png";
import ss_ragib_portfolio from "../../public/images/screenshot-ragib-portfolio.png";
import { FaEye, FaGithub } from "react-icons/fa";

const Work = () => {
  const projects = [
    {
      title: "DevEleven Website",
      image: ss_develeven,
      live: "https://develeven.vercel.app/",
      github: "https://github.com/DEVELEVEN-io/develeven-io",
    },
    {
      title: "Ragib's Portfolio",
      image: ss_ragib_portfolio,
      live: "https://ragibalasad.me/",
      github: "https://github.com/ragibalasad/ragib-portfolio",
    },
  ];

  return (
    <section className="work relative mt-8 bg-slate-800 max-sm:px-6 md:mt-24">
      <div className="placeHolderComponent container mx-auto h-auto py-16 sm:w-4/5">
        <p className="border-l-4 border-sky-400 pl-4 font-semibold text-slate-300">
          Projects
        </p>
        <div className="mb-6 flex py-6 max-sm:flex-col max-sm:gap-10">
          <h1 className="text-4xl font-semibold text-slate-300">
            {"Works I've Done"}
          </h1>
          <ul className="flex flex-wrap gap-3 text-sm font-medium sm:ml-auto">
            <li className="rounded-lg bg-slate-900/70 px-4 py-2 text-cyan-300">
              All
            </li>
            <li className="rounded-lg bg-slate-700/70 px-4 py-2">Frontend</li>
            <li className="rounded-lg bg-slate-700/70 px-4 py-2">Backend</li>
            <li className="rounded-lg bg-slate-700/70 px-4 py-2">Others</li>
          </ul>
        </div>

        <div className="grid gap-6 lg:grid-cols-3 lg:grid-rows-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl bg-slate-700/70"
            >
              <div className="overflow-hidden">
                <Image
                  className="transition-all hover:scale-110"
                  src={project.image}
                />
              </div>
              <div className="flex p-4 text-slate-300">
                <h1 className="text-lg font-medium">{project.title}</h1>
                <div className="ml-auto flex gap-4 text-xl">
                  <a
                    className="transition hover:text-cyan-400"
                    href={project.live}
                    target="_blank"
                    rel=""
                  >
                    <FaEye />
                  </a>
                  <a
                    className="transition hover:text-cyan-400"
                    href={project.github}
                    target="_blank"
                    rel=""
                  >
                    <FaGithub />
                  </a>
                </div>
              </div>
            </div>
          ))}

          <div className="overflow-hidden rounded-2xl bg-slate-900 ring-1 ring-white/10">
            <div className="overflow-hidden">
              <Image
                className="transition-all hover:scale-110"
                src={ss_ragib_portfolio}
              />
            </div>
            <div className="flex p-4 text-slate-300">
              <h1 className="text-lg font-medium">Ragib&apos;s Portfolio</h1>
              <div className="ml-auto flex gap-4 text-xl">
                <a href="http://" target="_blank" rel="">
                  <FaEye />
                </a>
                <a href="http://" target="_blank" rel="">
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-slate-900 p-12 ring-1 ring-inset ring-white/10">
            <h1>Project 1</h1>
          </div>
          <div className="rounded-2xl bg-slate-900 p-12 ring-1 ring-inset ring-white/10">
            <h1>Project 1</h1>
          </div>
          <div className="rounded-2xl bg-slate-900 p-12 ring-1 ring-inset ring-white/10">
            <h1>Project 1</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;

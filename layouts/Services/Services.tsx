import {
  FaCode,
  FaSquareJs,
  FaPython,
  FaReact,
  FaServer,
} from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiNextdotjs } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";

import servicesData from "./services.json";

type IconKeys =
  | "FaCode"
  | "FaServer"
  | "FaSquareJs"
  | "FaPython"
  | "FaReact"
  | "RiTailwindCssFill"
  | "SiNextdotjs"
  | "BiLogoTypescript";

const iconMapping: Record<IconKeys, JSX.Element> = {
  FaCode: <FaCode />,
  FaServer: <FaServer />,
  FaSquareJs: <FaSquareJs />,
  FaPython: <FaPython />,
  FaReact: <FaReact />,
  RiTailwindCssFill: <RiTailwindCssFill />,
  SiNextdotjs: <SiNextdotjs />,
  BiLogoTypescript: <BiLogoTypescript />,
};

const Services = () => {
  return (
    <section
      id="services"
      className="services container relative mx-auto my-32 max-sm:px-6 sm:w-4/5"
    >
      <div className="placeHolderComponent h-auto">
        <div className="mb-12 flex flex-col items-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-slate-800 dark:text-slate-100 sm:text-5xl">
            My Services
          </h2>
          <div className="mt-4 h-1.5 w-24 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600"></div>
        </div>
        <div className="grid gap-8 py-12 lg:grid-cols-3">
          {servicesData.map((service, index) => (
            <div key={index} className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/20 bg-white/40 p-8 shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:border-slate-800/50 dark:bg-slate-900/40">
              <div>
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 text-3xl text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
                  {iconMapping[service.icon as IconKeys]}
                </div>
                
                <h3 className="mb-4 text-2xl font-bold text-slate-800 dark:text-slate-100">
                  {service.title}
                </h3>
                
                <p className="mb-6 leading-relaxed text-slate-600 dark:text-slate-400">
                  {service.description}
                </p>

                <div className="mb-8">
                  <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {service.tech.map((tech, i) => (
                      <div 
                        key={i} 
                        className="flex items-center justify-center rounded-lg bg-white/60 p-2 text-xl text-slate-700 shadow-sm transition-colors hover:bg-white hover:text-cyan-600 dark:bg-slate-800/50 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-cyan-400"
                        title={tech.replace("Fa", "").replace("Si", "").replace("Ri", "")} // Simple tooltip hint
                      >
                        {iconMapping[tech as IconKeys]}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 font-semibold text-cyan-600 transition-all hover:gap-3 hover:text-cyan-500 dark:text-cyan-400 dark:hover:text-cyan-300"
              >
                Get Started
                <span className="text-xl">&rarr;</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

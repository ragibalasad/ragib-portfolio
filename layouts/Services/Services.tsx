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
      className="services container relative mx-auto my-32 max-sm:px-6 max-w-7xl"
    >
      <div className="placeHolderComponent h-auto">
        <div className="mb-12 flex flex-col items-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
            My Services
          </h2>
          <div className="mt-4 h-1.5 w-24 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600"></div>
        </div>
        <div className="grid gap-8 py-12 lg:grid-cols-3">
          {servicesData.map((service, index) => (
            <div key={index} className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/20 bg-white/40 p-8 shadow-xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:border-white/10 dark:bg-white/5">
              <div>
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 text-3xl text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
                  {iconMapping[service.icon as IconKeys]}
                </div>
                
                <h3 className="mb-4 text-2xl font-bold text-slate-900 dark:text-slate-100">
                  {service.title}
                </h3>
                
                <p className="mb-6 leading-relaxed text-slate-900 dark:text-slate-400">
                  {service.description}
                </p>

                <div className="mb-8">
                  <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-slate-400">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {service.tech.map((tech, i) => (
                      <div 
                        key={i} 
                        className="group/icon relative flex h-10 w-10 items-center justify-center rounded-xl bg-white/60 text-xl text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:scale-110 hover:bg-gradient-to-br hover:from-cyan-500 hover:to-blue-600 hover:text-white hover:shadow-xl hover:shadow-blue-500/25 dark:bg-white/10 dark:text-slate-300 dark:hover:from-cyan-400 dark:hover:to-blue-500 dark:hover:text-white dark:hover:shadow-blue-400/20"
                      >
                        {iconMapping[tech as IconKeys]}
                        <span className="pointer-events-none absolute -bottom-8 left-1/2 z-20 -translate-x-1/2 whitespace-nowrap rounded-md bg-slate-900 px-2 py-1 text-xs font-medium text-white opacity-0 shadow-lg transition-all duration-200 group-hover/icon:-bottom-10 group-hover/icon:opacity-100 dark:bg-slate-700">
                          {tech.replace("Fa", "").replace("Si", "").replace("Ri", "")}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 font-semibold text-blue-600 transition-all hover:gap-3 hover:text-blue-500 dark:text-cyan-400 dark:hover:text-cyan-300"
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

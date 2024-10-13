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
        <p className="flex items-center gap-4 font-semibold dark:text-slate-300">
          <span className="-mt-1 text-2xl text-cyan-500">{`{`}</span>
          <span className="my-auto text-base">Services</span>
        </p>
        <h1 className="py-6 text-4xl font-semibold text-cyan-800 dark:text-cyan-400">
          Thinks I can do for you
        </h1>
        <div className="grid gap-6 py-12 lg:grid-cols-3">
          {servicesData.map((service, index) => (
            <div key={index} className="col-span-1 2xl:col-span-1">
              <div className="relative overflow-hidden rounded-lg bg-white p-6 shadow-sm ring-1 ring-inset ring-white/10 after:absolute after:right-0 after:top-0 after:-z-10 after:size-60 after:rounded-full after:bg-gradient-to-tr after:from-transparent after:blur-3xl dark:bg-slate-900/70 dark:after:to-indigo-500">
                <div className="mx-auto my-8 h-fit w-fit rounded-full bg-slate-200 p-8 text-4xl text-slate-700 dark:bg-slate-600 dark:text-slate-200">
                  {iconMapping[service.icon as IconKeys]}
                </div>
                <div className="mx-auto flex w-fit gap-2">
                  {service.tech.map((tech, index) => (
                    <div key={index}>{iconMapping[tech as IconKeys]}</div>
                  ))}
                </div>
                <div className="mt-2">
                  <h1 className="text-center text-2xl font-semibold text-cyan-600 dark:text-cyan-400">
                    {service.title}
                  </h1>
                </div>
                <div className="mx-auto my-5 mb-7">
                  <p className="text-center text-sm dark:text-slate-300">
                    {service.description}
                  </p>
                </div>
                <div className="">
                  <a
                    href="#"
                    className="group block w-full rounded-lg bg-slate-800 p-4 text-center text-sm text-slate-200 ring-inset ring-white/10 transition-colors hover:bg-slate-900 hover:text-cyan-400 dark:bg-slate-800/75 dark:ring-1 dark:hover:bg-slate-800"
                  >
                    Get Started{" "}
                    <span className="font-semibold transition-all group-hover:ml-2">
                      &rarr;
                    </span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

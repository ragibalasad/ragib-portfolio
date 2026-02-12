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
    <section id="services" className="services container relative mx-auto my-32 max-w-7xl max-xl:px-6">
      <div className="relative h-auto overflow-hidden rounded-[2.5rem] border border-white/20 bg-white/30 p-8 shadow-2xl backdrop-blur-3xl dark:border-white/10 dark:bg-white/5 sm:p-12 lg:p-16">
        {/* Background Decorative Element */}
        <div className="absolute -right-24 -top-24 z-0 h-96 w-96 rounded-full bg-blue-500/10 blur-[100px] dark:bg-blue-900/10"></div>
        <div className="absolute -bottom-24 -left-24 z-0 h-96 w-96 rounded-full bg-indigo-500/10 blur-[100px] dark:bg-indigo-900/10"></div>

        <div className="relative z-10 flex flex-col gap-12">
          <div className="flex flex-col items-start gap-4">
            <h2 className="font-heading text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 sm:text-5xl lg:text-6xl">
               Services <br />
               <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">I Offer.</span>
            </h2>
            <div className="h-1.5 w-24 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600"></div>
            <p className="max-w-xl text-lg text-slate-600 dark:text-slate-400">
              Providing end-to-end software solutions tailored to your business needs, from concept to deployment.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {servicesData.map((service, index) => (
              <div 
                key={index} 
                className="group relative flex flex-col justify-between overflow-hidden rounded-[2rem] border border-white/20 bg-white/40 p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl dark:border-white/10 dark:bg-white/5"
              >
                <div>
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 text-3xl text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
                    {iconMapping[service.icon as IconKeys]}
                  </div>
                  
                  <h3 className="mb-4 text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
                    {service.title}
                  </h3>
                  
                  <p className="mb-8 leading-relaxed text-slate-600 dark:text-slate-400">
                    {service.description}
                  </p>

                  <div className="mb-8">
                    <h4 className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-400">
                      Core Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2.5">
                      {service.tech.map((tech, i) => (
                        <div 
                          key={i} 
                          className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-white/50 text-xl text-slate-700 shadow-sm backdrop-blur-sm transition-all hover:border-cyan-500/50 hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:bg-white/10"
                        >
                          {iconMapping[tech as IconKeys]}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <a
                  href="#contact"
                  className="group/btn inline-flex items-center gap-2 font-bold uppercase tracking-widest text-slate-900 transition-all hover:gap-3 dark:text-white"
                >
                  Get Started
                  <span className="text-xl transition-transform group-hover/btn:translate-x-1">&rarr;</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

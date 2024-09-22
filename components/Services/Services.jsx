import { FaCode, FaSquareJs, FaReact, FaServer } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiNextdotjs } from "react-icons/si";

const services = [{}];

const Services = () => {
  return (
    <section
      id="services"
      className="services container relative mx-auto my-32 sm:w-4/5"
    >
      <div className="placeHolderComponent h-auto">
        <p className="flex items-center gap-4 font-semibold dark:text-slate-300">
          <span className="-mt-1 text-2xl font-bold text-cyan-500">{`{`}</span>
          <span className="my-auto text-base">Services</span>
        </p>
        <h1 className="py-6 text-4xl font-semibold text-cyan-800 dark:text-cyan-400">
          Thinks I can do for you
        </h1>
        <div className="grid gap-6 py-12 lg:grid-cols-3">
          <div className="col-span-1 2xl:col-span-1">
            <div className="relative overflow-hidden bg-white p-6 shadow-sm ring-1 ring-inset ring-white/10 after:absolute after:right-0 after:top-0 after:-z-10 after:size-60 after:rounded-full after:bg-gradient-to-tr after:from-transparent after:blur-3xl dark:bg-slate-900/70 dark:after:to-indigo-500 sm:rounded-lg">
              <div className="mx-auto my-8 h-fit w-fit rounded-full bg-slate-600 p-8 text-4xl text-slate-200">
                <FaCode />
              </div>
              <div className="mx-auto flex w-fit gap-2">
                <FaSquareJs />
                <FaReact />
                <RiTailwindCssFill />
                <SiNextdotjs />
              </div>
              <div className="mb-4">
                <h1 className="mx-auto w-fit text-2xl font-semibold text-cyan-400">
                  Frontend Development
                </h1>
              </div>
              <div className="mx-auto my-6 mb-8">
                <p className="text-center text-sm dark:text-slate-300">
                  I can craft responsive user interfaces using the latest
                  technologies to ensure your website is interactive and
                  visually appealing on any device.
                </p>
              </div>
              <div className="">
                <a
                  href="#"
                  className="group block w-full rounded-lg bg-slate-800/75 p-4 text-center text-sm ring-1 ring-inset ring-white/10 transition-colors hover:bg-slate-800 hover:text-cyan-400"
                >
                  Get Started{" "}
                  <span className="font-semibold transition-all group-hover:ml-2">
                    &rarr;
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-span-1 content-center justify-between 2xl:col-span-1">
            <div className="relative overflow-hidden bg-white p-6 shadow-sm ring-1 ring-inset ring-white/10 after:absolute after:right-0 after:top-0 after:-z-10 after:size-60 after:rounded-full after:bg-gradient-to-tr after:from-transparent after:blur-3xl dark:bg-slate-900/70 dark:after:to-indigo-500 sm:rounded-lg">
              <div className="mx-auto my-8 h-fit w-fit rounded-full bg-slate-600 p-8 text-4xl text-slate-200">
                <FaCode />
              </div>
              <div className="mx-auto flex w-fit gap-2">
                <FaSquareJs />
                <FaReact />
                <RiTailwindCssFill />
                <SiNextdotjs />
              </div>
              <div className="mb-4">
                <h1 className="mx-auto w-fit text-2xl font-semibold text-cyan-400">
                  Frontend Development
                </h1>
              </div>
              <div className="mx-auto my-6 mb-8">
                <p className="text-center text-sm dark:text-slate-300">
                  I can craft responsive user interfaces using the latest
                  technologies to ensure your website is interactive and
                  visually appealing on any device.
                </p>
              </div>
              <div className="">
                <a
                  href="#"
                  className="group block w-full rounded-lg bg-slate-800/75 p-4 text-center text-sm ring-1 ring-inset ring-white/10 transition-colors hover:bg-slate-800 hover:text-cyan-400"
                >
                  Get Started{" "}
                  <span className="font-semibold transition-all group-hover:ml-2">
                    &rarr;
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-span-1 content-center justify-between 2xl:col-span-1">
            <div className="relative overflow-hidden bg-white p-6 shadow-sm ring-1 ring-inset ring-white/10 after:absolute after:right-0 after:top-0 after:-z-10 after:size-60 after:rounded-full after:bg-gradient-to-tr after:from-transparent after:blur-3xl dark:bg-slate-900/70 dark:after:to-indigo-500 sm:rounded-lg">
              <div className="mx-auto my-8 h-fit w-fit rounded-full bg-slate-600 p-8 text-4xl text-slate-200">
                <FaCode />
              </div>
              <div className="mx-auto flex w-fit gap-2">
                <FaSquareJs />
                <FaReact />
                <RiTailwindCssFill />
                <SiNextdotjs />
              </div>
              <div className="mb-4">
                <h1 className="mx-auto w-fit text-2xl font-semibold text-cyan-400">
                  Frontend Development
                </h1>
              </div>
              <div className="mx-auto my-6 mb-8">
                <p className="text-center text-sm dark:text-slate-300">
                  I can craft responsive user interfaces using the latest
                  technologies to ensure your website is interactive and
                  visually appealing on any device.
                </p>
              </div>
              <div className="">
                <a
                  href="#"
                  className="group block w-full rounded-lg bg-slate-800/75 p-4 text-center text-sm ring-1 ring-inset ring-white/10 transition-colors hover:bg-slate-800 hover:text-cyan-400"
                >
                  Get Started{" "}
                  <span className="font-semibold transition-all group-hover:ml-2">
                    &rarr;
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

import { FaArrowRight } from "react-icons/fa6";
import { MdLocationOn, MdMail, MdPhone } from "react-icons/md";

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
          <div className="col-span-1 content-center justify-between 2xl:col-span-1">
            <div className="relative overflow-hidden bg-white p-12 py-16 shadow-sm ring-1 ring-inset ring-white/10 after:absolute after:right-0 after:top-0 after:-z-10 after:size-60 after:rounded-full after:bg-gradient-to-tr after:from-transparent after:blur-3xl dark:bg-slate-900/70 dark:after:to-indigo-500 sm:rounded-lg">
              Service 1
            </div>
          </div>
          <div className="col-span-1 content-center justify-between 2xl:col-span-1">
            <div className="relative overflow-hidden bg-white p-12 py-16 shadow-sm ring-1 ring-inset ring-white/10 after:absolute after:right-0 after:top-0 after:-z-10 after:size-60 after:rounded-full after:bg-gradient-to-tr after:from-transparent after:blur-3xl dark:bg-slate-900/70 dark:after:to-indigo-500 sm:rounded-lg">
              Service 2
            </div>
          </div>
          <div className="col-span-1 content-center justify-between 2xl:col-span-1">
            <div className="relative overflow-hidden bg-white p-12 py-16 shadow-sm ring-1 ring-inset ring-white/10 after:absolute after:right-0 after:top-0 after:-z-10 after:size-60 after:rounded-full after:bg-gradient-to-tr after:from-transparent after:blur-3xl dark:bg-slate-900/70 dark:after:to-indigo-500 sm:rounded-lg">
              Service 3
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

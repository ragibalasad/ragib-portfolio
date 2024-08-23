import Image from "next/image";
import my_potrait from "../../public/images/me.png";

const About = () => {
  return (
    <section className="about container relative mx-auto my-24 max-sm:px-6 sm:w-4/5">
      {/* <div className="pink-bubble absolute left-10 top-6 -z-10 block h-48 w-48 rounded-full bg-gradient-to-br from-transparent to-pink-500 opacity-70 shadow-2xl shadow-pink-500 blur max-md:left-6"></div> */}
      <div className="placeHolderComponent h-auto">
        <div className="grid grid-cols-1 rounded-2xl lg:grid-cols-5 2xl:grid-cols-3">
          <div className="col-span-1 my-auto h-auto w-full lg:col-span-2 2xl:col-span-1">
            <div className="rounded-3xl bg-slate-800/70 px-2 pt-4 shadow-xl ring-1 ring-inset ring-white/10">
              <Image src={my_potrait} alt="Potrait of Ragib" />
            </div>
          </div>
          <div className="col-span-1 flex lg:col-span-3 2xl:col-span-2">
            <div className="mx-2 my-auto max-md:pt-16 sm:px-16 2xl:p-24">
              <p className="border-l-4 border-sky-400 pl-4 font-semibold text-slate-300">
                About Me
              </p>
              <h1 className="py-6 text-4xl font-semibold text-slate-300">
                Precision Design,
                <br /> Peak Efficiency
              </h1>
              <p className="mt-4 text-lg font-medium text-slate-400">
                I&apos;m your friendly neighborhood{" "}
                <span className="font-semibold text-slate-300">
                  software developer
                </span>{" "}
                with over{" "}
                <span className="font-semibold text-slate-300">4 years </span>
                of experience in coding. I build{" "}
                <span className="font-semibold text-slate-300">
                  full-stack{" "}
                </span>
                solutions that are as{" "}
                <span className="font-semibold text-slate-300">reliable</span>{" "}
                as your morning coffee. When I&apos;m not debugging or
                optimizing, I&apos;m probably sharing
                <span className="font-semibold text-slate-300">
                  {" "}
                  tech tips{" "}
                </span>
                or debating why dark mode is superior to light mode. <br />
                <br /> I&apos;m always up for{" "}
                <span className="font-semibold text-slate-300">
                  collaborations
                </span>
                , so let&apos;s connect and make some code magic together!
              </p>

              <div className="mt-12 grid grid-cols-4 gap-x-4 gap-y-8 max-sm:grid-cols-2 max-sm:grid-rows-2 max-sm:items-center max-sm:justify-items-center">
                <div className="flex size-24 flex-col items-center justify-center rounded-lg bg-slate-800 p-2">
                  <span className="text-2xl font-bold text-slate-300">4+</span>
                  <span className="text-lg font-semibold text-slate-400">
                    Years
                  </span>
                </div>
                <div className="flex size-24 flex-col items-center justify-center rounded-lg bg-slate-800 p-2">
                  <span className="text-2xl font-bold text-slate-300">11</span>
                  <span className="text-lg font-semibold text-slate-400">
                    Projects
                  </span>
                </div>
                <div className="flex size-24 flex-col items-center justify-center rounded-lg bg-slate-800 p-2">
                  <span className="text-2xl font-bold text-slate-300">7</span>
                  <span className="text-lg font-semibold text-slate-400">
                    Clients
                  </span>
                </div>
                <div className="flex size-24 flex-col items-center justify-center rounded-lg bg-slate-800 p-2">
                  <span className="text-2xl font-bold text-slate-300">5</span>
                  <span className="text-lg font-semibold text-slate-400">
                    Reviews
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

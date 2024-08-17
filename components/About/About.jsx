import Image from "next/image";
import my_potrait from "../../public/images/me.png";

const About = () => {
  return (
    <section className="about container relative mx-auto mt-24 sm:w-4/5">
      {/* <div className="pink-bubble absolute left-10 top-6 -z-10 block h-48 w-48 rounded-full bg-gradient-to-br from-transparent to-pink-500 opacity-70 shadow-2xl shadow-pink-500 blur max-md:left-6"></div> */}
      <div className="placeHolderComponent h-auto py-8">
        <div className="grid grid-cols-1 rounded-2xl max-sm:px-6 lg:grid-cols-5 2xl:grid-cols-3">
          <div className="col-span-1 h-auto w-full rounded-2xl bg-gray-800/70 px-4 pt-4 shadow-xl ring-1 ring-inset ring-white/10 backdrop-blur-xl lg:col-span-2 2xl:col-span-1">
            <Image className="" src={my_potrait} alt="Potrait of Ragib" />
          </div>
          <div className="col-span-1 my-auto py-16 sm:px-16 lg:col-span-3 2xl:col-span-2 2xl:p-24">
            <p className="border-l-4 border-sky-400 pl-3 font-semibold text-slate-300">
              About Me
            </p>
            <h1 className="py-6 text-4xl font-semibold text-slate-300">
              Precision Design,
              <br /> Peak Efficiency
            </h1>
            <p className="mt-4 text-lg font-medium text-slate-400">
              Hi, I&apos;m{" "}
              <span className="font-semibold text-slate-300">Ragib Alasad</span>
              —your friendly neighborhood software developer with over{" "}
              <span className="font-semibold text-slate-300">4 years </span>
              of experience in making code work its magic. I build{" "}
              <span className="font-semibold text-slate-300">full-stack </span>
              solutions that are as{" "}
              <span className="font-semibold text-slate-300">reliable</span> as
              your morning coffee and as smooth as your favorite playlist. When
              I&apos;m not debugging or optimizing, I&apos;m probably sharing
              <span className="font-semibold text-slate-300"> tech tips </span>
              or debating why dark mode is superior to light mode. <br />
              <br /> I&apos;m always up for{" "}
              <span className="font-semibold text-slate-300">
                collaborations
              </span>
              , so let&apos;s connect and make some code magic together!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

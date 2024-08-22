import { MdLocationOn, MdPhone, MdMail } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";

const Contact = () => {
  return (
    <section className="contact container relative mx-auto my-24 sm:w-4/5">
      <div className="placeHolderComponent h-auto">
        <div className="overflow-hidden rounded-2xl">
          <div className="grid grid-cols-5">
            <div className="col-span-2 content-center justify-between bg-slate-800 p-12">
              <div className="flex flex-col">
                <p className="border-l-4 border-sky-400 pl-4 font-semibold text-slate-300">
                  Contact info
                </p>
                <h1 className="py-6 text-4xl font-semibold text-slate-300">
                  Let&apos;s get in touch
                </h1>
                <p className="text-lg font-medium text-slate-400">
                  I&apos;m open to new opportunities and collaborations —
                  let&apos;s connect.
                </p>
              </div>
              <div className="mt-16 flex flex-col gap-8 text-lg font-medium">
                <div className="flex gap-4">
                  <div className="">
                    <div className="rounded-full bg-slate-700 p-2">
                      <MdLocationOn />
                    </div>
                  </div>
                  <p className="my-auto text-slate-300">
                    Nilphamari, Rangpur, BD
                  </p>
                </div>
                <div className="flex gap-4">
                  <div className="">
                    <div className="rounded-full bg-slate-700 p-2">
                      <MdPhone />
                    </div>
                  </div>
                  <p className="my-auto text-slate-300">+880 1719 220115</p>
                </div>
                <div className="flex gap-4">
                  <div className="">
                    <div className="rounded-full bg-slate-700 p-2">
                      <MdMail />
                    </div>
                  </div>
                  <a
                    href="mailto:ragibalasad@pm.me"
                    className="my-auto flex cursor-pointer items-center justify-start gap-2 text-slate-300 transition-all hover:gap-4 hover:text-cyan-400"
                  >
                    ragibalasad@pm.me
                    <span>
                      <FaArrowRight />
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-span-3"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

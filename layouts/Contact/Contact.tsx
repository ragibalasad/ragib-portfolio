import { FaArrowRight } from "react-icons/fa6";
import { MdLocationOn, MdMail, MdPhone } from "react-icons/md";

const Contact = () => {
  return (
    <section
      id="contact"
      className="contact container relative mx-auto my-32 px-4 sm:w-[90%] md:w-4/5"
    >
      <div className="grid gap-12 lg:grid-cols-7">
        {/* Left Column: Contact Info Card */}
        <div className="relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/20 bg-white/40 p-10 shadow-xl backdrop-blur-md dark:border-slate-800/50 dark:bg-slate-900/40 lg:col-span-3">
          {/* Background decoration */}
          <div className="absolute -right-10 -top-10 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl dark:bg-cyan-900/20"></div>
          
          <div className="relative z-10">
            <div className="mb-8 flex flex-col items-start">
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-800 dark:text-slate-100 sm:text-4xl">
                Let&apos;s get in touch
              </h2>
              <div className="mt-4 h-1.5 w-24 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600"></div>
            </div>
            
            <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
              I&apos;m open to new opportunities and collaborations. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
            </p>
          </div>

          <div className="relative z-10 mt-12 flex flex-col gap-6">
            <div className="flex items-center gap-4 group">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 text-white shadow-lg transition-transform group-hover:scale-110">
                <MdLocationOn className="text-xl" />
              </div>
              <p className="font-medium text-slate-700 dark:text-slate-200">Nilphamari, Rangpur, BD</p>
            </div>
            
            <div className="flex items-center gap-4 group">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 text-white shadow-lg transition-transform group-hover:scale-110">
                <MdPhone className="text-xl" />
              </div>
              <p className="font-medium text-slate-700 dark:text-slate-200">+880 1719 220115</p>
            </div>
            
            <div className="flex items-center gap-4 group">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 text-white shadow-lg transition-transform group-hover:scale-110">
                <MdMail className="text-xl" />
              </div>
              <a
                href="mailto:ragibalasad@pm.me"
                className="flex items-center gap-2 font-medium text-slate-700 transition-colors hover:text-cyan-600 dark:text-slate-200 dark:hover:text-cyan-400"
              >
                ragibalasad@pm.me
                <span className="opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100">
                  <FaArrowRight />
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-white/40 p-10 shadow-xl backdrop-blur-md dark:border-slate-800/50 dark:bg-slate-900/40 lg:col-span-4">
           <div className="mb-8 flex flex-col items-start">
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-800 dark:text-slate-100 sm:text-4xl">
                 Send me a message
              </h2>
              <div className="mt-4 h-1.5 w-24 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600"></div>
              <p className="mt-4 text-base text-slate-600 dark:text-slate-400">
                I&apos;ll respond as soon as possible.
              </p>
            </div>

            <form className="flex flex-col gap-6" action="" method="post">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400" htmlFor="email">
                  Your Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  className="w-full rounded-xl border border-white/10 bg-white/50 p-4 font-medium text-slate-800 placeholder-slate-400 shadow-sm outline-none backdrop-blur-sm transition-all focus:bg-white focus:ring-2 focus:ring-cyan-400 dark:bg-slate-800/50 dark:text-slate-100 dark:focus:bg-slate-800"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400" htmlFor="subject">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  placeholder="How can I help you?"
                  className="w-full rounded-xl border border-white/10 bg-white/50 p-4 font-medium text-slate-800 placeholder-slate-400 shadow-sm outline-none backdrop-blur-sm transition-all focus:bg-white focus:ring-2 focus:ring-cyan-400 dark:bg-slate-800/50 dark:text-slate-100 dark:focus:bg-slate-800"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400" htmlFor="msg">
                  Message
                </label>
                <textarea
                  id="msg"
                  rows={5}
                  placeholder="Write your message here..."
                  className="w-full rounded-xl border border-white/10 bg-white/50 p-4 font-medium text-slate-800 placeholder-slate-400 shadow-sm outline-none backdrop-blur-sm transition-all focus:bg-white focus:ring-2 focus:ring-cyan-400 dark:bg-slate-800/50 dark:text-slate-100 dark:focus:bg-slate-800"
                ></textarea>
              </div>

              <button className="group mt-2 w-full rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 p-4 text-center font-bold text-white shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl active:scale-95">
                Send Message
              </button>
            </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import { FaArrowRight, FaBitcoin, FaEthereum, FaHeart } from "react-icons/fa6";
import { MdLocationOn, MdMail, MdPhone } from "react-icons/md";

const Contact = () => {
  return (
    <section
      id="contact"
      className="contact container relative mx-auto my-32 max-xl:px-6 max-w-7xl"
    >
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
        {/* Left Column: Info & Sponsor */}
        <div className="flex flex-col justify-between space-y-12 py-4">
          
          <div className="space-y-6">
            <div className="flex flex-col items-start">
              <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 sm:text-5xl">
                Let&apos;s build <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">together.</span>
              </h2>
              <div className="mt-4 h-1.5 w-24 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600"></div>
            </div>
            
            <p className="text-xl leading-relaxed text-slate-700 dark:text-slate-300 max-w-lg">
              I&apos;m currently open to new opportunities, freelance projects, and interesting collaborations. Feel free to reach out anytime!
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
               <ContactItem 
                 icon={<MdMail />} 
                 label="Email" 
                 value="ragibalasad@pm.me" 
                 href="mailto:ragibalasad@pm.me"
               />
               <ContactItem 
                 icon={<MdPhone />} 
                 label="Phone" 
                 value="+880 1719 220115" 
               />
               <ContactItem 
                 icon={<MdLocationOn />} 
                 label="Location" 
                 value="Rangpur, BD" 
               />
            </div>
          </div>

          {/* Sponsor Card */}
          <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-gradient-to-br from-white/40 to-white/10 p-8 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
            <div className="absolute -right-4 -top-4 text-8xl text-cyan-500/10 dark:text-cyan-400/5">
              <FaHeart />
            </div>
            <div className="relative z-10 flex flex-col gap-4">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Support My Work</h3>
              <p className="text-base text-slate-600 dark:text-slate-400">
                If you enjoy my work, consider supporting me. Every bit helps me dedicate more time to open source projects.
              </p>
              <div className="flex flex-wrap gap-4 mt-2">
                <button className="flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-bold text-white transition-all hover:scale-105 dark:bg-white dark:text-slate-950">
                  <FaBitcoin className="text-xl text-orange-400" />
                  Sponsor Crypto
                </button>
                <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                   <FaEthereum className="text-lg" />
                   <span className="text-xs font-mono">ETH: 0x...</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-white/40 p-8 sm:p-12 shadow-2xl backdrop-blur-2xl dark:border-white/10 dark:bg-white/5">
           <div className="mb-10 flex flex-col items-center space-y-4 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 text-white shadow-lg">
                <MdMail className="text-3xl" />
              </div>
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
                 Send me a message
              </h2>
              <p className="text-slate-600 dark:text-slate-400">
                Expect a response within 24 hours.
              </p>
            </div>

            <form className="flex flex-col gap-6" action="" method="post">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold uppercase tracking-wider text-slate-500" htmlFor="email">
                  Your Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  className="w-full rounded-2xl border border-slate-200 bg-white/50 p-4 font-semibold text-slate-900 placeholder-slate-400 shadow-sm outline-none transition-all focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/10 dark:border-white/10 dark:bg-slate-900/50 dark:text-white dark:focus:border-cyan-500"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold uppercase tracking-wider text-slate-500" htmlFor="subject">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  placeholder="Inquiry about..."
                  className="w-full rounded-2xl border border-slate-200 bg-white/50 p-4 font-semibold text-slate-900 placeholder-slate-400 shadow-sm outline-none transition-all focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/10 dark:border-white/10 dark:bg-slate-900/50 dark:text-white dark:focus:border-cyan-500"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold uppercase tracking-wider text-slate-500" htmlFor="msg">
                  Message
                </label>
                <textarea
                  id="msg"
                  rows={4}
                  placeholder="Hey, I have an idea..."
                  className="w-full rounded-2xl border border-slate-200 bg-white/50 p-4 font-semibold text-slate-900 placeholder-slate-400 shadow-sm outline-none transition-all focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/10 dark:border-white/10 dark:bg-slate-900/50 dark:text-white dark:focus:border-cyan-500"
                ></textarea>
              </div>

              <button className="group mt-4 flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 p-5 text-lg font-bold text-white shadow-[0_10px_30px_-10px_rgba(34,211,238,0.4)] transition-all hover:-translate-y-1 hover:shadow-[0_15px_40px_-10px_rgba(34,211,238,0.6)] active:scale-95">
                Send Message
                <FaArrowRight className="transition-transform group-hover:translate-x-1" />
              </button>
            </form>
        </div>
      </div>
    </section>
  );
};

const ContactItem = ({ icon, label, value, href }: { icon: React.ReactNode, label: string, value: string, href?: string }) => {
  const Content = (
    <div className="group flex flex-col gap-1 rounded-2xl border border-white/10 bg-white/30 p-4 transition-all hover:bg-white/60 dark:bg-white/5 dark:hover:bg-white/10">
      <div className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400">
        <span className="text-xl">{icon}</span>
        <span className="text-xs font-bold uppercase tracking-wider opacity-60">{label}</span>
      </div>
      <p className="font-semibold text-slate-900 dark:text-slate-100">{value}</p>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="block transition-transform hover:-translate-y-1">
        {Content}
      </a>
    );
  }

  return <div className="transition-transform hover:-translate-y-1">{Content}</div>;
}

export default Contact;

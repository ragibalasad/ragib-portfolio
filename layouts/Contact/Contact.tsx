import { FaArrowRight, FaBitcoin, FaEthereum, FaHeart } from "react-icons/fa6";
import { MdLocationOn, MdMail, MdPhone } from "react-icons/md";

const Contact = () => {
  return (
    <section
      id="contact"
      className="contact relative overflow-hidden py-32"
    >
      {/* Background Decorative Blobs - Matching Hero Style */}
      <div className="absolute top-1/4 left-1/4 -z-10 h-[500px] w-[500px] rounded-full bg-cyan-500/5 blur-[120px] dark:bg-cyan-900/10"></div>
      <div className="absolute bottom-1/4 right-1/4 -z-10 h-[500px] w-[500px] rounded-full bg-blue-500/5 blur-[120px] dark:bg-blue-900/10"></div>

      <div className="container relative mx-auto max-w-7xl max-xl:px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Info & Content */}
          <div className="flex flex-col gap-10">
            <div className="space-y-6 text-left">
              <div className="flex flex-col items-start gap-4">
                <h2 className="text-5xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 sm:text-6xl">
                  Let&apos;s build <br />
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent italic">something great.</span>
                </h2>
                <div className="h-1.5 w-24 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600"></div>
              </div>
              
              <p className="text-xl leading-relaxed text-slate-600 dark:text-slate-400 max-w-xl">
                I am currently open to new opportunities, freelance projects, and interesting collaborations. Bring your software ideas to life with high-performance code.
              </p>
            </div>

            {/* Info Grid */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
               <ContactItem 
                 icon={<MdMail />} 
                 label="Email" 
                 value="ragibalasad@gmail.com" 
                 href="mailto:ragibalasad@gmail.com"
               />
               <ContactItem 
                 icon={<MdPhone />} 
                 label="Phone" 
                 value="+880 1719 220115" 
               />
               <ContactItem 
                 icon={<MdLocationOn />} 
                 label="Location" 
                 value="Rangpur, Bangladesh" 
               />
               <div className="group relative flex flex-col gap-1 rounded-[2rem] border border-white/20 bg-white/20 p-5 backdrop-blur-md dark:border-white/5 dark:bg-white/5 transition-all hover:bg-white/40">
                  <div className="flex items-center gap-2 text-rose-500">
                    <FaHeart className="text-lg" />
                    <span className="text-[10px] font-black uppercase tracking-widest opacity-60">Sponsor</span>
                  </div>
                  <p className="text-sm font-bold text-slate-900 dark:text-slate-100">Enjoying my work?</p>
               </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/20 bg-white/60 p-8 sm:p-12 shadow-2xl backdrop-blur-3xl dark:border-white/10 dark:bg-slate-900/60">
              <div className="mb-10 space-y-2">
                <h3 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
                   Get in touch
                </h3>
                <p className="text-slate-500 font-medium italic">
                  I usually respond within 24 hours.
                </p>
              </div>

              <form className="flex flex-col gap-6" action="" method="post">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="e.g. john@doe.com"
                    className="w-full rounded-2xl border border-slate-200 bg-white/50 px-5 py-4 font-semibold text-slate-900 placeholder-slate-400 outline-none transition-all focus:border-cyan-400 focus:bg-white focus:ring-4 focus:ring-cyan-500/10 dark:border-white/5 dark:bg-black/20 dark:text-white dark:placeholder-slate-600 dark:focus:border-cyan-500 dark:focus:bg-black/40"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400" htmlFor="subject">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    placeholder="What's this about?"
                    className="w-full rounded-2xl border border-slate-200 bg-white/50 px-5 py-4 font-semibold text-slate-900 placeholder-slate-400 outline-none transition-all focus:border-cyan-400 focus:bg-white focus:ring-4 focus:ring-cyan-500/10 dark:border-white/5 dark:bg-black/20 dark:text-white dark:placeholder-slate-600 dark:focus:border-cyan-500 dark:focus:bg-black/40"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400" htmlFor="msg">
                    Message
                  </label>
                  <textarea
                    id="msg"
                    rows={4}
                    placeholder="Your message goes here..."
                    className="w-full resize-none rounded-2xl border border-slate-200 bg-white/50 px-5 py-4 font-semibold text-slate-900 placeholder-slate-400 outline-none transition-all focus:border-cyan-400 focus:bg-white focus:ring-4 focus:ring-cyan-500/10 dark:border-white/5 dark:bg-black/20 dark:text-white dark:placeholder-slate-600 dark:focus:border-cyan-500 dark:focus:bg-black/40"
                  ></textarea>
                </div>

                <button className="group relative mt-2 flex w-full items-center justify-center gap-3 overflow-hidden rounded-2xl bg-slate-900 py-5 text-sm font-black uppercase tracking-widest text-white transition-all hover:scale-[1.02] dark:bg-white dark:text-slate-950">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative flex items-center gap-3">
                    Send Message
                    <FaArrowRight className="transition-transform group-hover:translate-x-1" />
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactItem = ({ icon, label, value, href }: { icon: React.ReactNode, label: string, value: string, href?: string }) => {
  const Content = (
    <div className="group flex flex-col gap-1 rounded-[2rem] border border-white/20 bg-white/20 p-5 backdrop-blur-md dark:border-white/5 dark:bg-white/5 transition-all hover:bg-white/40">
      <div className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400">
        <span className="text-lg">{icon}</span>
        <span className="text-[9px] font-black uppercase tracking-widest opacity-60">{label}</span>
      </div>
      <p className="text-sm font-bold text-slate-900 dark:text-slate-100">{value}</p>
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

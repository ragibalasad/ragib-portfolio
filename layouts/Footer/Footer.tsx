import {
  FaXTwitter,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaDiscord,
  FaWhatsapp,
} from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="relative mt-32 overflow-hidden border-t border-white/10 bg-slate-950 px-6 py-16 dark:bg-black">
      {/* Decorative Blob */}
      <div className="absolute -bottom-24 -left-24 z-0 h-96 w-96 rounded-full bg-cyan-500/5 blur-[120px]"></div>

      <div className="container relative z-10 mx-auto max-w-7xl max-xl:px-6">
        <div className="grid gap-16 lg:grid-cols-12 items-start">
          
          {/* Brand & Info */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <span className="font-mono text-2xl font-bold tracking-tighter text-cyan-500">
                &lt;/&gt;
              </span>
              <span className="text-2xl font-bold tracking-tight text-white">
                ragib<span className="text-cyan-500">.</span>
              </span>
            </div>
            
            <p className="max-w-xs text-base font-medium text-slate-400">
              Building quality digital experiences with clean code and modern aesthetics. Based in Bangladesh.
            </p>

            <div className="flex flex-col gap-3 text-sm text-slate-500">
              <a href="mailto:ragibalasad@gmail.com" className="flex items-center gap-3 transition-colors hover:text-cyan-400">
                <IoMail className="text-xl" />
                <span>ragibalasad@gmail.com</span>
              </a>
              <div className="flex items-center gap-3">
                <FaWhatsapp className="text-xl" />
                <span>+880 1719 220115</span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-4 flex flex-col items-start gap-6 lg:items-center">
            <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-slate-600">Explore</h3>
            <ul className="grid grid-cols-2 gap-x-12 gap-y-4 text-sm font-bold text-slate-400">
              <li><a href="#hero" className="transition-colors hover:text-white">Home</a></li>
              <li><a href="#about" className="transition-colors hover:text-white">About</a></li>
              <li><a href="#projects" className="transition-colors hover:text-white">Projects</a></li>
              <li><a href="#skills" className="transition-colors hover:text-white">Skills</a></li>
              <li><a href="#services" className="transition-colors hover:text-white">Services</a></li>
              <li><a href="#contact" className="transition-colors hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Social Links & CTA */}
          <div className="lg:col-span-4 flex flex-col items-start gap-6 lg:items-end">
             <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-slate-600">Connect</h3>
             <div className="flex flex-wrap gap-3 lg:justify-end">
                <SocialLink href="https://github.com/ragibalasad" label="GitHub"><FaGithub /></SocialLink>
                <SocialLink href="https://linkedin.com/in/ragibalasad" label="LinkedIn"><FaLinkedin /></SocialLink>
                <SocialLink href="https://x.com/ragibalasad" label="Twitter"><FaXTwitter /></SocialLink>
                <SocialLink href="https://facebook.com/ragibalasad" label="Facebook"><FaFacebook /></SocialLink>
                <SocialLink href="https://discord.com/ragibalasad" label="Discord"><FaDiscord /></SocialLink>
             </div>
             
             <a 
                href="https://github.com/ragibalasad/ragib-portfolio"
                target="_blank"
                className="group mt-4 flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-2 text-[10px] font-bold uppercase tracking-widest text-slate-400 transition-all hover:bg-white/10 hover:text-white"
             >
                <FaGithub className="text-sm" />
                Get this website for <span className="text-green-500 text-sm group-hover:text-green-300">$45.99</span> only
             </a>
          </div>
        </div>
        
        {/* Copyright Bar */}
        <div className="mt-20 flex flex-col items-center justify-between gap-6 border-t border-white/5 pt-8 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-600 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} Ragib Al Asad.
          </p>
          <p className="flex items-center gap-2">
            Build with <span className="text-rose-500">♥</span> using Next.js & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
};

function SocialLink({ href, children, label }: { href: string; children: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      className="group relative flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-xl text-slate-400 transition-all hover:scale-110 hover:border-cyan-500/50 hover:bg-white hover:text-slate-900"
      aria-label={label}
    >
      {children}
    </a>
  );
}

export default Footer;

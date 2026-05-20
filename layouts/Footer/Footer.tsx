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
    <footer className="relative overflow-hidden bg-slate-950 dark:bg-black">
      {/* Subtle top gradient line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

      {/* Decorative blobs */}
      <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-cyan-500/5 blur-[120px]" />
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-blue-600/5 blur-[120px]" />

      <div className="container relative z-10 mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-12">

          {/* Brand & Info */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <span className="font-mono text-2xl font-medium bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                &lt;/&gt;
              </span>
              <span className="text-2xl font-bold tracking-tight text-white">
                ragib<span className="text-cyan-500">.</span>
              </span>
            </div>

            <p className="max-w-xs text-base leading-relaxed text-slate-400">
              Building quality digital experiences with clean code and modern aesthetics. Based in Bangladesh.
            </p>

            <div className="flex flex-col gap-3 text-sm text-slate-500">
              <a href="mailto:ragibalasad@gmail.com" className="flex items-center gap-3 transition-colors hover:text-cyan-400">
                <IoMail className="text-lg text-slate-400" />
                <span>ragibalasad@gmail.com</span>
              </a>
              <div className="flex items-center gap-3">
                <FaWhatsapp className="text-lg text-slate-400" />
                <span>+880 1719 220115</span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <h3 className="text-sm font-semibold text-slate-300">Navigation</h3>
            <ul className="grid grid-cols-2 gap-y-3 text-sm">
              {["Home", "About", "Projects", "Skills", "Services", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-slate-400 transition-colors hover:text-cyan-400"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links & CTA */}
          <div className="lg:col-span-4 flex flex-col items-start gap-6 lg:items-end">
            <h3 className="text-sm font-semibold text-slate-300">Follow me</h3>
            <div className="flex flex-wrap gap-2 lg:justify-end">
              <SocialLink href="https://github.com/ragibalasad" label="GitHub"><FaGithub /></SocialLink>
              <SocialLink href="https://linkedin.com/in/ragibalasad" label="LinkedIn"><FaLinkedin /></SocialLink>
              <SocialLink href="https://x.com/ragibalasad" label="Twitter"><FaXTwitter /></SocialLink>
              <SocialLink href="https://facebook.com/ragibalasad" label="Facebook"><FaFacebook /></SocialLink>
              <SocialLink href="https://discord.com/ragibalasad" label="Discord"><FaDiscord /></SocialLink>
            </div>

            <a
              href="https://github.com/ragibalasad/ragib-portfolio"
              target="_blank"
              className="group mt-2 flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-xs text-slate-400 transition-all hover:bg-white/10 hover:text-white"
            >
              <FaGithub className="text-sm" />
              Get this website for <span className="text-green-500 text-sm group-hover:text-green-300">$45.99</span> only
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 text-sm text-slate-500 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} Ragib Al Asad. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5">
            Built with <span className="text-rose-500">♥</span> using Next.js & Tailwind
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
      className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-lg text-slate-400 transition-all hover:scale-105 hover:border-cyan-500/40 hover:bg-cyan-500/10 hover:text-cyan-400"
      aria-label={label}
    >
      {children}
    </a>
  );
}

export default Footer;

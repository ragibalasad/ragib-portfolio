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
    <footer className="mt-32 border-t border-slate-800 bg-slate-950 text-slate-300">
      <div className="container mx-auto max-sm:px-6 py-12">
        <div className="grid gap-12 lg:grid-cols-3 lg:items-center">
          
          {/* Brand & Info */}
          <div className="flex flex-col items-start gap-4">
            <div className="flex flex-col">
              <h1 className="text-3xl font-bold tracking-tight text-white">
                ragibalasad<span className="text-cyan-400">.me</span>
              </h1>
              <p className="mt-2 text-base font-medium text-slate-400">
                Building quality software since 2020.
              </p>
            </div>
            
            <div className="flex flex-col gap-2 text-sm text-slate-400">
              <a href="mailto:ragibalasad@gmail.com" className="flex items-center gap-2 transition-colors hover:text-cyan-400">
                <IoMail className="text-lg" />
                <span>ragibalasad@gmail.com</span>
              </a>
              <div className="flex items-center gap-2">
                <FaWhatsapp className="text-lg" />
                <span>+880 1719 220115</span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col items-start gap-4 lg:items-center">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500">Navigation</h3>
            <ul className="flex flex-wrap gap-6 font-medium">
              <li>
                <a href="#about" className="transition-colors hover:text-cyan-400">About</a>
              </li>
              <li>
                <a href="#projects" className="transition-colors hover:text-cyan-400">Projects</a>
              </li>
              <li>
                <a href="#contact" className="transition-colors hover:text-cyan-400">Contact</a>
              </li>
              <li>
                <a
                  href="https://github.com/ragibalasad/ragib-portfolio"
                  target="_blank"
                  className="transition-colors hover:text-cyan-400"
                >
                  Source Code
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-start gap-4 lg:items-end">
             <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500">Socials</h3>
             <div className="flex gap-4">
                <SocialLink href="https://github.com/ragibalasad"><FaGithub /></SocialLink>
                <SocialLink href="https://linkedin.com/in/ragibalasad"><FaLinkedin /></SocialLink>
                <SocialLink href="https://x.com/ragibalasad"><FaXTwitter /></SocialLink>
                <SocialLink href="https://facebook.com/ragibalasad"><FaFacebook /></SocialLink>
                <SocialLink href="https://discord.com/ragibalasad"><FaDiscord /></SocialLink>
             </div>
          </div>
        </div>
        
        {/* Simple divider if needed, or just bottom copyright bar */}
        <div className="mt-12 border-t border-slate-900 pt-8 text-center text-sm text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} Ragib Al Asad. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

function SocialLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      className="text-2xl text-slate-400 transition-all hover:-translate-y-1 hover:text-cyan-400"
    >
      {children}
    </a>
  );
}
export default Footer;

import { config } from "../../constants/config";

const Footer = () => {
  return (
    <footer className="w-full bg-[#070b14] border-t border-slate-800/80 py-10 px-6 sm:px-16 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <p className="text-white font-bold text-sm tracking-wide">
            {config.hero.fullName} ({config.hero.name})
          </p>
          <p className="text-slate-400 text-xs mt-0.5">
            Cloud Engineer · Linux · Containers · DevOps
          </p>
          <p className="text-slate-400 text-[11px] mt-1 font-mono">
            Linux Systems Administration · Containers · Cloud Infrastructure
          </p>
        </div>

        {/* Social / Direct Links */}
        <div className="flex items-center gap-6 font-mono text-xs">
          <a
            href={config.profile.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={config.profile.socials.github}
            target="_blank"
            rel="noreferrer"
            className="text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            GitHub
          </a>
          <a
            href={config.profile.socials.website}
            target="_blank"
            rel="noreferrer"
            className="text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            Personal Site
          </a>
          <a
            href={config.hero.cta.resumeUrl}
            download="Ajay_Tandale_Resume.pdf"
            className="text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            Resume (PDF)
          </a>
        </div>

        {/* License & Attribution */}
        <div className="text-center md:text-right text-[11px] text-slate-400 max-w-xs">
          <p>© {new Date().getFullYear()} Ajay Tandale. All rights reserved.</p>
          <p className="mt-1">
            Built on foundational 3D architecture inspired by{" "}
            <a
              href="https://github.com/adrianhajdin"
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-slate-300 underline"
            >
              Adrian Hajdin
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

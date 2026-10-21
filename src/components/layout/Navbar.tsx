import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../../constants/styles";
import { navLinks } from "../../constants";
import { logo, menu, close } from "../../assets";
import { config } from "../../constants/config";

const Navbar = () => {
  const [active, setActive] = useState<string>("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    const navbarHighlighter = () => {
      const sections = document.querySelectorAll("section[id]");

      sections.forEach((current) => {
        const sectionId = current.getAttribute("id");
        const element = current as HTMLElement;
        const sectionHeight = element.offsetHeight;
        const sectionTop =
          element.getBoundingClientRect().top - sectionHeight * 0.2;

        if (sectionTop < 0 && sectionTop + sectionHeight > 0) {
          if (sectionId) setActive(sectionId);
        }
      });
    };

    window.addEventListener("scroll", navbarHighlighter);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", navbarHighlighter);
    };
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } fixed top-0 z-30 flex w-full items-center py-4 transition-all duration-300 ${
        scrolled
          ? "bg-[#0b1120]/90 backdrop-blur-md shadow-lg border-b border-slate-800/60"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-3 group"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            setActive("");
          }}
        >
          <img
            src={logo}
            alt="Ajay Tandale Logo"
            className="h-10 w-10 object-contain transition-transform group-hover:scale-105"
          />
          <div className="flex flex-col">
            <span className="text-[17px] font-bold text-white tracking-wide">
              {config.hero.name}
            </span>
            <span className="text-[12px] text-slate-400 font-mono tracking-tight">
              Cloud · Linux · DevOps
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          <ul className="list-none flex flex-row gap-6">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`${
                  active === nav.id
                    ? "text-cyan-400 font-semibold"
                    : "text-slate-300 hover:text-white"
                } text-[15px] transition-colors cursor-pointer`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href={config.hero.cta.resumeUrl}
              download="Ajay_Tandale_Resume.pdf"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-[13px] font-semibold text-cyan-300 bg-cyan-950/50 border border-cyan-500/40 hover:bg-cyan-900/60 transition-all hover:scale-105"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center px-3.5 py-1.5 rounded-lg text-[13px] font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 transition-all hover:scale-105 shadow-md shadow-blue-900/30"
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Mobile Nav Button */}
        <div className="flex lg:hidden items-center gap-3">
          <a
            href={config.hero.cta.resumeUrl}
            download="Ajay_Tandale_Resume.pdf"
            className="text-[12px] font-semibold text-cyan-300 bg-cyan-950/60 border border-cyan-600/40 rounded px-2.5 py-1"
          >
            Resume
          </a>

          <button
            type="button"
            aria-label="Toggle navigation menu"
            className="p-1 rounded-md text-slate-300 hover:text-white"
            onClick={() => setToggle(!toggle)}
          >
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="h-7 w-7 object-contain"
            />
          </button>

          {/* Mobile Drawer */}
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-[#0f172a]/95 backdrop-blur-xl border border-slate-700/60 absolute top-16 right-0 mx-4 my-2 min-w-[220px] rounded-2xl shadow-2xl flex-col gap-4 z-50`}
          >
            <ul className="flex flex-col gap-3.5">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`text-[16px] font-medium transition-colors ${
                    active === nav.id
                      ? "text-cyan-400 font-semibold"
                      : "text-slate-300 hover:text-white"
                  }`}
                  onClick={() => setToggle(false)}
                >
                  <a href={`#${nav.id}`} className="block w-full py-1">
                    {nav.title}
                  </a>
                </li>
              ))}
            </ul>

            <div className="pt-3 border-t border-slate-700/60 flex flex-col gap-2">
              <a
                href={config.hero.cta.resumeUrl}
                download="Ajay_Tandale_Resume.pdf"
                className="w-full text-center py-2 rounded-lg text-[13px] font-semibold text-cyan-300 bg-cyan-950/60 border border-cyan-500/40"
                onClick={() => setToggle(false)}
              >
                Download Resume (PDF)
              </a>
              <a
                href="#contact"
                className="w-full text-center py-2 rounded-lg text-[13px] font-semibold text-white bg-blue-600 hover:bg-blue-500"
                onClick={() => setToggle(false)}
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../../constants/styles";
import { ComputersCanvas } from "../canvas";
import { config } from "../../constants/config";

const Hero = () => {
  const [rotatingIndex, setRotatingIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotatingIndex(
        (prev) => (prev + 1) % config.hero.rotatingTitles.length
      );
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative mx-auto min-h-screen w-full flex flex-col justify-between pt-28 pb-10 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-tr from-cyan-600/10 to-indigo-600/10 blur-[120px] pointer-events-none rounded-full" />

      <div
        className={`relative z-10 mx-auto max-w-7xl ${styles.paddingX} flex flex-col lg:flex-row items-center justify-between gap-10 w-full`}
      >
        {/* Left Content */}
        <div className="flex flex-col items-start max-w-2xl">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-cyan-300 text-xs font-medium mb-4 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            {config.hero.status}
          </div>

          {/* Eyebrow */}
          <p className="text-xs sm:text-sm font-mono tracking-widest text-cyan-400 font-semibold uppercase mb-2">
            {config.hero.eyebrow}
          </p>

          {/* Name & Headline */}
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400 bg-clip-text text-transparent">
              {config.hero.name}
            </span>
          </h1>

          {/* Rotating Focus Subtitle */}
          <div className="h-10 sm:h-12 flex items-center mt-2">
            <span className="text-lg sm:text-2xl text-slate-400 font-medium mr-2">
              Focused on
            </span>
            <span className="text-lg sm:text-2xl font-bold text-cyan-300 border-b-2 border-cyan-500/80 pb-0.5 transition-all duration-300">
              {config.hero.rotatingTitles[rotatingIndex]}
            </span>
          </div>

          {/* Main Headline */}
          <p className="text-lg sm:text-xl font-semibold text-slate-200 mt-3">
            {config.hero.mainHeadline}
          </p>

          {/* Supporting Intro */}
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed mt-3 max-w-xl">
            {config.hero.p.join(" ")}
          </p>

          {/* Technical Focus Pills */}
          <div className="flex flex-wrap items-center gap-2.5 mt-5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-semibold bg-red-950/50 text-red-300 border border-red-800/60">
              <span className="w-1.5 h-1.5 rounded-full bg-red-400"></span>
              Enterprise Linux (RHEL 9)
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-semibold bg-purple-950/50 text-purple-300 border border-purple-800/60">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
              Containers & Podman
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-semibold bg-cyan-950/50 text-cyan-300 border border-cyan-800/60">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
              AWS & Terraform Labs
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-semibold bg-slate-800 text-slate-300 border border-slate-700">
              B.Tech CS · 3rd Year
            </span>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 mt-7">
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 transition-all hover:scale-105 shadow-lg shadow-blue-900/30"
            >
              {config.hero.cta.primary}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </a>

            <a
              href={config.hero.cta.resumeUrl}
              download="Ajay_Tandale_Resume.pdf"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-bold text-cyan-300 bg-[#0f172a] border border-cyan-500/40 hover:bg-cyan-950/40 transition-all hover:scale-105"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-2"
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
              {config.hero.cta.secondary}
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center px-5 py-3 rounded-xl text-sm font-semibold text-slate-300 hover:text-white transition-colors"
            >
              {config.hero.cta.tertiary}
            </a>
          </div>
        </div>

        {/* Right 3D Workstation Container */}
        <div className="w-full lg:w-[500px] xl:w-[580px] h-[340px] sm:h-[420px] lg:h-[480px] relative">
          <ComputersCanvas />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="relative z-10 flex w-full items-center justify-center mt-6">
        <a href="#about" aria-label="Scroll down to About section">
          <div className="flex h-[52px] w-[30px] items-start justify-center rounded-3xl border-2 border-slate-600/70 p-2 hover:border-cyan-400 transition-colors">
            <motion.div
              animate={{
                y: [0, 18, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="mb-1 h-2 w-2 rounded-full bg-cyan-400"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;

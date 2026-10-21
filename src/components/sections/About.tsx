import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { services } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { fadeIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";
import { profile } from "../../assets";
import { TService } from "../../types";

const ServiceCard: React.FC<{ index: number } & TService> = ({
  index,
  title,
  subtitle,
  icon,
  description,
}) => (
  <Tilt
    glareEnable
    tiltEnable
    tiltMaxAngleX={20}
    tiltMaxAngleY={20}
    glareColor="#00d2ff"
    className="w-full sm:w-[280px]"
  >
    <motion.div
      variants={fadeIn("right", "spring", index * 0.25, 0.75)}
      className="w-full p-[1px] rounded-[22px] bg-gradient-to-b from-cyan-500/40 via-slate-800 to-indigo-500/20 shadow-xl"
    >
      <div className="bg-[#0f172a] flex min-h-[300px] flex-col justify-between rounded-[21px] p-6 border border-slate-800/80">
        <div>
          <div className="h-14 w-14 rounded-xl bg-slate-800/80 border border-slate-700/60 p-2.5 flex items-center justify-center mb-4">
            <img
              src={icon}
              alt={title}
              className="h-full w-full object-contain"
            />
          </div>

          <h3 className="text-[18px] font-bold text-white leading-snug">
            {title}
          </h3>

          {subtitle && (
            <p className="text-cyan-400 font-mono text-[11px] font-medium mt-1">
              {subtitle}
            </p>
          )}

          {description && (
            <p className="text-slate-400 text-[13px] leading-relaxed mt-3">
              {description}
            </p>
          )}
        </div>

        <div className="pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-400">
          <span>Hands-on Lab</span>
          <span className="text-cyan-400">● Practical</span>
        </div>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <Header useMotion={true} {...config.sections.about} />

      {/* Main Narrative with Profile Card */}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Narrative Text */}
        <motion.div
          variants={fadeIn("up", "tween", 0.1, 0.8)}
          className="lg:col-span-8 space-y-4 text-slate-300 text-[16px] leading-[28px]"
        >
          <p className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 text-slate-200">
            {config.sections.about.content}
          </p>

          <p className="text-slate-400 text-[15px]">
            {config.sections.about.subContent}
          </p>

          {/* Education & Status Pill Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3">
            <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block mb-1">
                Academic Degree
              </span>
              <p className="text-white font-semibold text-sm">
                B.Tech in Computer Science & Engineering
              </p>
              <p className="text-slate-400 text-xs mt-0.5">
                Maharashtra Institute of Technology · In Progress (3rd Year)
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80">
              <span className="text-xs font-mono text-purple-400 uppercase tracking-wider block mb-1">
                Technical Diploma
              </span>
              <p className="text-white font-semibold text-sm">
                Diploma in Computer Engineering
              </p>
              <p className="text-slate-400 text-xs mt-0.5">
                Marathwada Institute of Technology · 1st Rank in Tech Quiz
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Authentic Profile Card */}
        <motion.div
          variants={fadeIn("left", "tween", 0.2, 0.8)}
          className="lg:col-span-4"
        >
          <div className="relative rounded-2xl p-[1px] bg-gradient-to-b from-cyan-500/30 to-indigo-500/20 overflow-hidden shadow-2xl">
            <div className="bg-[#0f172a] rounded-[23px] p-5">
              <div className="relative aspect-square w-full rounded-xl overflow-hidden mb-4 border border-slate-800">
                <img
                  src={profile}
                  alt="Ajay Tandale"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-cyan-300 bg-slate-950/80 px-2 py-0.5 rounded border border-cyan-800/50">
                    India (Chhatrapati Sambhaji Nagar)
                  </span>
                </div>
              </div>

              <h4 className="text-white font-bold text-lg">
                Ajay Raju Tandale
              </h4>
              <p className="text-cyan-400 font-mono text-xs mt-0.5">
                Cloud Engineer · Linux · Containers · DevOps
              </p>

              <div className="mt-4 pt-3 border-t border-slate-800/80 space-y-2 text-xs text-slate-400">
                <div className="flex justify-between">
                  <span>Primary Focus:</span>
                  <span className="font-mono text-cyan-300 font-medium">Cloud Infrastructure</span>
                </div>
                <div className="flex justify-between">
                  <span>Core Systems:</span>
                  <span className="font-mono text-slate-200">Linux & Containers</span>
                </div>
                <div className="flex justify-between">
                  <span>Methodology:</span>
                  <span className="font-mono text-slate-200">IaC & Automation</span>
                </div>
                <div className="flex justify-between">
                  <span>Location:</span>
                  <span className="font-mono text-slate-200">India (Maharashtra)</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* 4 Pillars Grid */}
      <div className="mt-16">
        <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-cyan-400"></span>
          Core Technical Focus Areas
        </h3>
        <p className="text-slate-400 text-sm mb-8">
          The four engineering domains anchoring my practical laboratory work and certifications.
        </p>

        <div className="flex flex-wrap gap-6 justify-center">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");

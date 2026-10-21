import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { github } from "../../assets";
import { SectionWrapper } from "../../hoc";
import { projects } from "../../constants";
import { fadeIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";
import { TProject } from "../../types";
import { ProjectModal } from "./ProjectModal";

const ProjectCard: React.FC<{
  index: number;
  onOpenModal: (project: TProject) => void;
} & TProject> = (props) => {
  const {
    index,
    name,
    categoryBadge,
    shortDescription,
    description,
    tags,
    image,
    sourceCodeLink,
    onOpenModal,
  } = props;

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.2, 0.75)}
      className="w-full md:w-[350px] lg:w-[360px]"
    >
      <Tilt
        glareEnable
        tiltEnable
        tiltMaxAngleX={15}
        tiltMaxAngleY={15}
        glareColor="#00d2ff"
        className="h-full"
      >
        <div className="bg-[#0f172a] h-full rounded-2xl p-5 border border-slate-800/80 hover:border-cyan-500/40 transition-all flex flex-col justify-between shadow-xl">
          <div>
            {/* Visual Header / Diagram */}
            <div className="relative h-[200px] w-full rounded-xl bg-slate-900 border border-slate-800/60 p-4 flex items-center justify-center overflow-hidden group">
              <img
                src={image}
                alt={name}
                className="h-full w-full object-contain transition-transform group-hover:scale-105"
              />

              {categoryBadge && (
                <div className="absolute top-3 left-3">
                  <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-slate-950/80 text-cyan-300 border border-cyan-800/60 backdrop-blur-md">
                    {categoryBadge}
                  </span>
                </div>
              )}

              {sourceCodeLink && (
                <div className="absolute top-3 right-3">
                  <a
                    href={sourceCodeLink}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`View ${name} source code on GitHub`}
                    className="h-9 w-9 rounded-full bg-slate-950/80 border border-slate-700/60 flex items-center justify-center text-slate-300 hover:text-white hover:border-cyan-400 transition-all shadow-md"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <img
                      src={github}
                      alt="github"
                      className="h-4 w-4 object-contain"
                    />
                  </a>
                </div>
              )}
            </div>

            {/* Title & Description */}
            <div className="mt-4">
              <h3 className="text-[19px] font-bold text-white leading-tight">
                {name}
              </h3>
              <p className="text-slate-400 mt-2 text-[13px] leading-relaxed line-clamp-3">
                {shortDescription || description}
              </p>
            </div>
          </div>

          <div>
            {/* Tags */}
            <div className="mt-4 flex flex-wrap gap-1.5">
              {tags.map((tag) => (
                <span
                  key={tag.name}
                  className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800/60 text-slate-300 border border-slate-700/40"
                >
                  #{tag.name}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center justify-between">
              <button
                type="button"
                onClick={() => onOpenModal(props)}
                className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 transition-colors"
              >
                Deep Dive Details
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3.5 w-3.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>

              {sourceCodeLink && (
                <a
                  href={sourceCodeLink}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[11px] font-mono text-slate-400 hover:text-slate-200"
                >
                  Repository ↗
                </a>
              )}
            </div>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  const [activeProject, setActiveProject] = useState<TProject | null>(null);

  return (
    <>
      <Header useMotion={true} {...config.sections.works} />

      <div className="flex w-full">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="text-slate-400 mt-3 max-w-3xl text-[15px] leading-[26px]"
        >
          {config.sections.works.content}
        </motion.p>
      </div>

      <div className="mt-12 flex flex-wrap gap-7 justify-center sm:justify-start">
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            {...project}
            onOpenModal={(p) => setActiveProject(p)}
          />
        ))}
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </>
  );
};

export default SectionWrapper(Works, "projects");

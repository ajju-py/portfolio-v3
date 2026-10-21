import React, { useEffect } from "react";
import { TProject } from "../../types";
import { github } from "../../assets";

interface ProjectModalProps {
  project: TProject | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl my-8 bg-[#0f172a] border border-cyan-500/30 rounded-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Visual Banner */}
        <div className="relative h-48 sm:h-64 w-full bg-slate-900 border-b border-slate-800 flex items-center justify-center p-6 overflow-hidden">
          <img
            src={project.image}
            alt={project.name}
            className="h-full w-full object-contain"
          />
          <button
            onClick={onClose}
            aria-label="Close project modal"
            className="absolute top-4 right-4 h-9 w-9 rounded-full bg-slate-900/90 border border-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
          >
            ✕
          </button>
          <div className="absolute bottom-4 left-6">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-cyan-950/80 text-cyan-300 border border-cyan-700/60 backdrop-blur-md">
              {project.categoryBadge || project.category}
            </span>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              {project.name}
            </h2>
            <p className="text-cyan-400 font-mono text-xs sm:text-sm mt-1">
              Category: {project.category}
            </p>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mt-3">
              {project.description}
            </p>
          </div>

          {/* Problem Statement */}
          {project.problem && (
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
              <h4 className="text-xs font-mono uppercase tracking-wider text-amber-400 font-bold mb-1.5 flex items-center gap-1.5">
                <span>⚠️</span> The Problem & Motivation
              </h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                {project.problem}
              </p>
            </div>
          )}

          {/* Ajay's Verified Contribution */}
          {project.contribution && (
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
              <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-1.5 flex items-center gap-1.5">
                <span>⚡</span> Ajay's Hands-On Contribution
              </h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                {project.contribution}
              </p>
            </div>
          )}

          {/* Key Implementation Details */}
          {project.implementationDetails && project.implementationDetails.length > 0 && (
            <div>
              <h4 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-cyan-400"></span>
                Key Implementation Details
              </h4>
              <ul className="space-y-2">
                {project.implementationDetails.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300"
                  >
                    <span className="text-cyan-400 mt-1">▹</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Limitations & Challenges */}
          {project.challenges && (
            <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80">
              <h4 className="text-xs font-mono uppercase tracking-wider text-purple-400 font-bold mb-1.5 flex items-center gap-1.5">
                <span>🔍</span> Documented Boundaries & Challenges
              </h4>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                {project.challenges}
              </p>
            </div>
          )}

          {/* Lessons Learned */}
          {project.lessonsLearned && (
            <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80">
              <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold mb-1.5 flex items-center gap-1.5">
                <span>💡</span> Engineering Insights & Takeaways
              </h4>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                {project.lessonsLearned}
              </p>
            </div>
          )}

          {/* Technologies Tag list */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
              Technologies & Standards
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies?.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-800/90 text-cyan-300 border border-slate-700/60"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 bg-slate-950 border-t border-slate-800/80 flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-2">
            {project.sourceCodeLink && (
              <a
                href={project.sourceCodeLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
              >
                <img src={github} alt="GitHub" className="h-4 w-4" />
                View Repository
              </a>
            )}
          </div>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-slate-900 border border-slate-800 transition-colors"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
};

import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { certifications } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { fadeIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";
import { TCertification } from "../../types";

const CertificationCard: React.FC<{ index: number } & TCertification> = ({
  index,
  title,
  subtitle,
  issuer,
  year,
  verifyUrl,
  type,
  highlight,
  icon,
  iconBg,
  status,
  description,
  skillsCovered,
}) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.2, 0.75)}
    className="w-full md:w-[48%] lg:w-[48%]"
  >
    <Tilt
      glareEnable
      tiltEnable
      tiltMaxAngleX={12}
      tiltMaxAngleY={12}
      glareColor="#00d2ff"
      className="h-full"
    >
      <div
        className={`h-full rounded-2xl p-6 bg-[#0f172a] border transition-all flex flex-col justify-between shadow-xl ${
          highlight
            ? "border-red-500/40 hover:border-red-400/80 shadow-red-950/20"
            : "border-slate-800/80 hover:border-cyan-500/40"
        }`}
      >
        <div>
          {/* Header Row */}
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div
                className="h-14 w-14 rounded-xl flex items-center justify-center p-2.5 border border-slate-700/60 shadow-md"
                style={{ backgroundColor: iconBg }}
              >
                <img
                  src={icon}
                  alt={issuer}
                  className="h-full w-full object-contain"
                />
              </div>
              <div>
                <span className="text-[11px] font-mono font-semibold text-cyan-400">
                  {issuer} {year && `· ${year}`}
                </span>
                <h3 className="text-[18px] font-bold text-white leading-snug">
                  {title}
                </h3>
                {subtitle && (
                  <p className="text-slate-400 font-mono text-xs mt-0.5">
                    {subtitle}
                  </p>
                )}
              </div>
            </div>

            <span
              className={`text-[10px] font-mono font-semibold px-2.5 py-0.5 rounded-full border whitespace-nowrap ${
                type === "certification"
                  ? "bg-red-950/60 text-red-300 border-red-800/60"
                  : "bg-blue-950/60 text-blue-300 border-blue-800/60"
              }`}
            >
              {status}
            </span>
          </div>

          {/* Description */}
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mt-4">
            {description}
          </p>

          {/* Key Competencies */}
          <div className="mt-4">
            <span className="text-[11px] font-mono uppercase text-slate-400 block mb-2">
              Key Competencies:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {skillsCovered.map((skill) => (
                <span
                  key={skill}
                  className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-800/70 text-slate-300 border border-slate-700/50"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Verification Link */}
        <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
          <span className="text-[11px] font-mono text-slate-400">
            {type === "certification"
              ? "Course Completion"
              : "Technical Curriculum"}
          </span>

          {verifyUrl ? (
            <a
              href={verifyUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              Verify Credential
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
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          ) : (
            <span className="text-xs font-mono text-slate-400">
              Verified on Record
            </span>
          )}
        </div>
      </div>
    </Tilt>
  </motion.div>
);

const Certifications = () => {
  return (
    <>
      <Header useMotion={true} {...config.sections.certifications} />

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="text-slate-400 mt-3 max-w-3xl text-[15px] leading-[26px]"
      >
        {config.sections.certifications.content}
      </motion.p>

      <div className="mt-12 flex flex-wrap gap-6 justify-between">
        {certifications.map((cert, index) => (
          <CertificationCard key={cert.id} index={index} {...cert} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Certifications, "certifications");

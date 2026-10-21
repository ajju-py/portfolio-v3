import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

import { experiences } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { Header } from "../atoms/Header";
import { TExperience } from "../../types";
import { config } from "../../constants/config";

const ExperienceCard: React.FC<TExperience> = (experience) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#0f172a",
        color: "#fff",
        border: "1px solid rgba(51, 65, 85, 0.6)",
        borderRadius: "16px",
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3)",
      }}
      contentArrowStyle={{ borderRight: "7px solid #1e293b" }}
      date={experience.date}
      iconStyle={{
        background: experience.iconBg,
        boxShadow: "0 0 0 4px #0b1120, inset 0 2px 0 rgba(0, 0, 0, 0.2)",
      }}
      icon={
        <div className="flex h-full w-full items-center justify-center p-1.5">
          <img
            src={experience.icon}
            alt={experience.companyName}
            className="h-[75%] w-[75%] object-contain"
          />
        </div>
      }
    >
      <div>
        <div className="flex items-center gap-2 mb-1">
          {experience.type === "certification" && (
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-red-950/70 text-red-300 border border-red-800/60 uppercase">
              Official Certification
            </span>
          )}
          {experience.type === "lab" && (
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-950/70 text-blue-300 border border-blue-800/60 uppercase">
              Engineering Lab
            </span>
          )}
          {experience.type === "education" && (
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-950/70 text-purple-300 border border-purple-800/60 uppercase">
              Academic Milestone
            </span>
          )}
          {experience.type === "milestone" && (
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950/70 text-cyan-300 border border-cyan-800/60 uppercase">
              Specialization
            </span>
          )}
        </div>

        <h3 className="text-[20px] font-bold text-white leading-snug">
          {experience.title}
        </h3>
        <p className="text-cyan-400 text-[14px] font-medium font-mono mt-1">
          {experience.companyName}
        </p>
      </div>

      <ul className="mt-4 list-disc space-y-2 ml-4">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-slate-300 pl-1 text-[13px] leading-relaxed"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <Header useMotion={true} {...config.sections.experience} />

      <p className="text-slate-400 text-sm max-w-3xl mt-4">
        {config.sections.experience.content}
      </p>

      <div className="mt-14 flex flex-col">
        <VerticalTimeline lineColor="#1e293b">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} {...experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "experience");

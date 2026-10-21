import { useState } from "react";
import { motion } from "framer-motion";

import { BallCanvas } from "../canvas";
import { SectionWrapper } from "../../hoc";
import { technologies, skillsCategorized } from "../../constants";
import { Header } from "../atoms/Header";
import { config } from "../../constants/config";

const Tech = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredCategories =
    selectedCategory === "all"
      ? skillsCategorized
      : skillsCategorized.filter((cat) => cat.category === selectedCategory);

  return (
    <>
      <Header useMotion={true} {...config.sections.skills} />

      {/* Category Filter Tabs */}
      <div className="mt-8 flex flex-wrap gap-2 pb-2">
        <button
          onClick={() => setSelectedCategory("all")}
          className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold font-mono transition-all ${
            selectedCategory === "all"
              ? "bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20"
              : "bg-slate-900/80 text-slate-300 border border-slate-800 hover:border-slate-700"
          }`}
        >
          All Domains ({skillsCategorized.length})
        </button>
        {skillsCategorized.map((cat) => (
          <button
            key={cat.category}
            onClick={() => setSelectedCategory(cat.category)}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold font-mono transition-all ${
              selectedCategory === cat.category
                ? "bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20"
                : "bg-slate-900/80 text-slate-300 border border-slate-800 hover:border-slate-700"
            }`}
          >
            {cat.category}
          </button>
        ))}
      </div>

      {/* Categorized Skills Grid */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCategories.map((category) => (
          <motion.div
            key={category.category}
            layout
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={`p-6 rounded-2xl bg-[#0f172a] border transition-all ${
              category.isLearningArea
                ? "border-amber-500/30 hover:border-amber-500/60"
                : "border-slate-800/80 hover:border-cyan-500/40"
            } shadow-lg flex flex-col justify-between`}
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span
                  className={`text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full border ${
                    category.isLearningArea
                      ? "bg-amber-950/50 text-amber-300 border-amber-800/60"
                      : "bg-cyan-950/50 text-cyan-300 border-cyan-800/60"
                  }`}
                >
                  {category.badge}
                </span>
                {category.isLearningArea && (
                  <span className="text-[10px] font-mono text-amber-400">
                    Active Lab Focus
                  </span>
                )}
              </div>

              <h3 className="text-lg font-bold text-white mb-2">
                {category.category}
              </h3>

              <p className="text-slate-400 text-xs leading-relaxed mb-4">
                {category.description}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded-md text-[12px] font-medium bg-slate-800/70 text-slate-200 border border-slate-700/50"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span>{category.skills.length} Technical Skills</span>
              <span className="text-slate-400">Verified Hands-on</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 3D Floating Technology Decals Section */}
      <div className="mt-16 pt-10 border-t border-slate-800/60">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-cyan-400"></span>
              3D Interactive Decals
            </h3>
            <p className="text-slate-400 text-sm mt-1">
              Drag or rotate floating 3D decals powered by Three.js & React Three Fiber.
            </p>
          </div>
          <span className="text-xs font-mono text-cyan-400 bg-cyan-950/60 border border-cyan-800 px-3 py-1 rounded-lg">
            WebGL 3D Icosahedrons
          </span>
        </div>

        <div className="flex flex-row flex-wrap justify-center gap-8 py-4">
          {technologies.map((technology) => (
            <div
              className="h-28 w-28 flex flex-col items-center group"
              key={technology.name}
            >
              <div className="h-24 w-24">
                <BallCanvas icon={technology.icon} />
              </div>
              <span className="text-[11px] font-mono text-slate-400 group-hover:text-cyan-300 transition-colors mt-1">
                {technology.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "skills");

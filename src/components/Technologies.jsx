import React from "react";
import skills from "../data/skills";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs } from "react-icons/fa";
import { AiFillStar, AiOutlineStar } from "react-icons/ai"; // Star icons

const skillIcons = {
  HTML: <FaHtml5 className="text-orange-500 text-2xl" />,
  CSS: <FaCss3Alt className="text-blue-500 text-2xl" />,
  JavaScript: <FaJsSquare className="text-yellow-400 text-2xl" />,
  React: <FaReact className="text-cyan-400 text-2xl" />,
  Node: <FaNodeJs className="text-green-500 text-2xl" />,
};

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24">
      <div className="section-card p-8 md:p-12">
        <h2 className="text-2xl md:text-3xl font-bold">Skills</h2>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {skills.map((s) => (
            <SkillCard key={s.name} skill={s} />
          ))}
        </div>

        {/* Learned Technologies Section */}
        <div className="mt-8 p-4 bg-neutral-900/40 rounded-xl border border-neutral-800">
          <h3 className="text-lg font-semibold mb-2">Technologies I’ve Learned:</h3>
          <p className="text-neutral-300">
            {skills.map((s) => s.name).join(", ")}
          </p>
        </div>
      </div>
    </section>
  );
}

function SkillCard({ skill }) {
  const totalStars = 5;
  const filledStars = Math.round((skill.level / 100) * totalStars);

  return (
    <div className="rounded-xl border border-neutral-800 p-4 bg-neutral-900/40 text-center">
      <div className="flex flex-col items-center gap-2">
        {skillIcons[skill.name] || <span className="text-gray-400 text-2xl">⚡</span>}
        <div className="text-lg font-semibold">{skill.name}</div>

        <div className="flex mt-2">
          {Array.from({ length: totalStars }, (_, i) =>
            i < filledStars ? (
              <AiFillStar key={i} className="text-yellow-400 text-xl" />
            ) : (
              <AiOutlineStar key={i} className="text-neutral-700 text-xl" />
            )
          )}
        </div>
      </div>
    </div>
  );
}

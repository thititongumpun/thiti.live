import React from "react";
import { motion } from "framer-motion";
import SkillCard from "./SkillCard";
import { Skill } from "../types/type";

type SkillsProps = {
  skills: Skill[];
};

export default function Skills({ skills }: SkillsProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="flex flex-col relative text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-wider text-gray-500 text-2xl">
        Skills
      </h3>

      <h3 className="absolute top-36 uppercase tracking-wide text-gray-500 text-sm">
        Hover over a skill
      </h3>

      <div className="grid grid-cols-4 gap-5">
        {skills?.slice(0, skills.length / 2).map((skill) => (
          <SkillCard key={skill._id} skill={skill} />
        ))}

        {skills?.slice(skills.length / 2, skills.length).map((skill) => (
          <SkillCard key={skill._id} skill={skill} directionLeft />
        ))}
      </div>
    </motion.div>
  );
}

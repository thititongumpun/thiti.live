import React from "react";
import { motion } from "framer-motion";
import { Skill } from "../types/type";
import { urlFor } from "../sanity";

type SkillCardProps = {
  skill: Skill;
  directionLeft?: boolean;
};

export default function SkillCard({ skill, directionLeft }: SkillCardProps) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src={urlFor(skill?.image).url()}
        alt=""
        className="rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
      />
    </div>
  );
}

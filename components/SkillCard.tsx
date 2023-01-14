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
          x: directionLeft ? -150 : 150,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src={urlFor(skill?.image).url()}
        alt=""
        className="rounded-full border border-gray-500 object-cover group-hover:bg-white w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0  ">
        <div className="flex items-center justify-center h-full">
          <p className="text-xl justify-center items-center font-bold text-black opacity-100">
              {skill?.skillType?.map(t => t.title)}
          </p>
        </div>
      </div>
    </div>
  );
}

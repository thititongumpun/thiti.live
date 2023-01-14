import React from "react";
import { motion } from "framer-motion";
import { Project } from "../types/type";
import { urlFor } from "../sanity";

type ProjectProps = {
  projects: Project[];
};

export default function Projects({ projects }: ProjectProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="flex flex-col h-screen relative overflow-hidden text-left md:flex-row justify-evenly items-center max-w-full mx-auto z-0 "
    >
      <h3 className="absolute top-24 uppercase tracking-wider text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#ff9988]/10 z-20">
        {/* projects */}
        {projects.map((project, idx) => (
          <div
            key={project._id}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
          >
            <img src={urlFor(project?.image).url()} alt="" />

            <div>
              <h4>
                Project {idx + 1} of {projects.length}: {project?.title}
              </h4>

              <div className="flex items-center space-x-2 justify-center">
                {project?.technologies.map((technology) => (
                  <img
                  key={technology._id}
                    className="h-5 w-5"
                    src={urlFor(technology.image).url()}
                    alt=""
                  />
                ))}
              </div>

              <div className="text-lg text-center md:text-left">
                {project?.summary}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#343484]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
}

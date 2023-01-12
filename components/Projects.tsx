import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function Projects({}: Props) {
  const projects = [1, 2, 3, 4, 5];
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
            key={idx}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSptuL6mTCgEvwh-Kx-U4NMiyZV9dCBN3dAkA&usqp=CAU"
              alt=""
            />

            <div>
              <h4>
                Project {idx + 1} of {projects.length}: Project
              </h4>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#343484]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
}

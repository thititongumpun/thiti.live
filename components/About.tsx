import React from "react";
import { motion } from "framer-motion";
import { PageInfo } from "../types/type";

type AboutProps = {
  pageInfo: PageInfo;
};

export default function About({pageInfo}: AboutProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="flex relative h-screen text-center md:text-left md:flex-row max-x-7xl justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-widest text-gray-500 text-2xl">
        About
      </h3>
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">Some about me.</h4>
        <p className="text-sm">
          {pageInfo?.backgroundInformation}
        </p>
      </div>
    </motion.div>
  );
}

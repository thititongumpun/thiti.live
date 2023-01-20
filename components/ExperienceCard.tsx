import React from "react";
import { motion } from "framer-motion";
import { urlFor } from "../sanity";
import { Experience } from "../types/type";
import Image from "next/image";

type Props = {
  experience: Experience;
};

export default function ExperienceCard({ experience }: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[300px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Image
          src={urlFor(experience?.companyImage).url()}
          alt="..."
          className="rounded-full object-cover object-center"
          width={200}
          height={200}
          priority
        />
      </motion.div>
      <div className="px-0 md:px-10">
        <h4 className="text-md md:text-4xl font-extralight mt-1">
          {experience.company}
        </h4>
        <p>{experience?.jobTitle}</p>
        <div className="flex space-x-2 my-2">
          {/* TECHNOLOGY!!! */}
          {experience?.technologies.map((technology) => (
            <img
              key={technology._id}
              src={urlFor(technology.image).url()}
              alt=""
              className="h-10 w-10 rounded-full"
            />
          ))}
        </div>
        <p className="uppercase text-gray-300 py-5">
          {new Date(experience?.dateStarted).toDateString()} -{" "}
          {experience.isCurrenyWorkingHere
            ? "Present"
            : new Date(experience?.dateEnded).toDateString()}
        </p>
        <ul className="list-disc space-y-4 text-sm">
          {experience?.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

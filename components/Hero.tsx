import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundSquare from "./BackgroundSquare";
import { motion } from "framer-motion";

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: ["Hi, I'm Not", "Software Engineer"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.5, 0.8, 0.1, 1],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{ duration: 3 }}
      className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden"
    >
      <BackgroundSquare />
      <img
        src="https://thiti.live/static/me-a02b48747aeda9c137b972a61e0c44ad.jpg"
        alt=""
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
      />
      <h1 className="text-4xl lg:text-6xl font-semibold scroll-px-1-0">
        <span className="pb-2 tracking-widest mr-3">{text}</span>
        <Cursor cursorColor="#fff" />
      </h1>
    </motion.div>
  );
}

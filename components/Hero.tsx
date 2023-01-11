import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundSquare from "./BackgroundSquare";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: ["Hi, I'm Not", "Software Engineer"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundSquare />
      <img
        src="https://thiti.live/static/me-a02b48747aeda9c137b972a61e0c44ad.jpg"
        alt=""
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
      />
      <h1 className="text-4xl lg:text-6xl font-semibold px-10">
        <span className="pb-2 tracking-widest mr-3">{text}</span>
        <Cursor cursorColor="#fff" />
      </h1>

      <div className="pt-5">
        <Link href="#about">
          <button className="heroButton">About</button>
        </Link>
        <Link href="#experience">
          <button className="heroButton">Experience</button>
        </Link>
        <Link href="#skills">
          <button className="heroButton">Skills</button>
        </Link>
        <Link href="#projects">
          <button className="heroButton">Projects</button>
        </Link>
      </div>
    </div>
  );
}

import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function BackgroundSquare({}: Props) {
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
      className="relative flex justify-center items-center"
    >
      <div className="absolute border border-[#333333] h-[200px] w-[200px] animate-ping mt-52" />
    </motion.div>
  );
}

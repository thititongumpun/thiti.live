import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { Socials } from "../types/type";
import Link from "next/link";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

type HeaderProps = {
  socials: Socials[];
};

export default function Header({ socials }: HeaderProps) {
  return (
    <header className="sticky top-0 flex p-5 items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      {/* social icons */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-row items-center"
      >
        {socials.map((social) => (
          <SocialIcon
            key={social._id}
            url={social.url}
            fgColor="gray"
            bgColor="transparent"
          />
        ))}
      </motion.div>

      <Link href="#contact">
        <motion.div
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <EnvelopeIcon className="w-8 h-8 bg-transparent mt-3" />
        </motion.div>
      </Link>
    </header>
  );
}

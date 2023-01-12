import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import About from "../components/About";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import WorkExperience from "../components/WorkExperience";
import { ArrowUpIcon } from "@heroicons/react/24/solid";

const Home: NextPage = () => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#ff9988]/10">
      <Head>
        <title>Thiti live</title>
      </Head>

      {/* Header */}
      <Header />

      {/* Hero */}
      <section id="hero" className="snap-start">
        <Hero />
      </section>

      {/* About */}
      <section id="about" className="snap-center">
        <About />
      </section>

      {/* Exp */}
      <section id="experience" className="snap-center">
        <WorkExperience />
      </section>

      {/* Skills */}
      <section id="skills" className="snap-center">
        <Skills />
      </section>

      {/* Proj */}
      <section id="projects" className="snap-start">
        <Projects />
      </section>

      {/* Contact */}

      <Link href="#hero">
        <footer className="sticky bottom-5 w-full">
          <div className="flex items-center justify-center">
            <ArrowUpIcon className="h-6 w-6 text-gray-100" />
          </div>
        </footer>
      </Link>
    </div>
  );
};

export default Home;

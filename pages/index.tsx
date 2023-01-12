import type { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import About from "../components/About";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import WorkExperience from "../components/WorkExperience";
import { ArrowUpIcon } from "@heroicons/react/24/solid";
import { PageInfo } from "../types/type";
import { fetchPageInfo } from "../utils/fetchPageInfo";

type Props = {
  pageInfo: PageInfo;
};

const Home = ({ pageInfo }: Props) => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#ff9988]/10">
      <Head>
        <title>{pageInfo.name}</title>
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
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <ArrowUpIcon className="h-6 w-6 text-gray-100" />
          </div>
        </footer>
      </Link>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();

  return {
    props: {
      pageInfo,
    },
  };
};

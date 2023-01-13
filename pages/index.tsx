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
import { Experience, PageInfo, Project, Skill, Socials } from "../types/type";
import { client } from "../sanity";

type Props = {
  pageInfo: PageInfo;
  socials: Socials[];
  skills: Skill[];
  projects: Project[];
  experiences: Experience[];
};

const Home = ({ pageInfo, socials, skills, projects, experiences }: Props) => {
  

  console.log(experiences);
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#ff9988]/10">
      <Head>
        <title>Thiti Tongumpun</title>
      </Head>

      {/* Header */}
      <Header socials={socials} />
      {/* Hero */}

      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo} />
      </section>

      {/* About */}
      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>

      {/* Exp */}
      <section id="experience" className="snap-center">
        <WorkExperience experiences={experiences} />
      </section>

      {/* Skills */}
      <section id="skills" className="snap-center">
        <Skills skills={skills} />
      </section>

      {/* Proj */}
      <section id="projects" className="snap-start">
        <Projects projects={projects} />
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
  const pageInfo: PageInfo = await client.fetch(`*[_type == "pageInfo"][0]`);
  const socials: Socials[] = await client.fetch(`*[_type == "social"]`);
  const skills: Skill[] = await client.fetch(`*[_type == "skill"]`);
  const projects: Project[] = await client.fetch(`*[_type == "project"]`);
  const experiences: Experience[] = await client.fetch(
    `*[_type == "experience"]`
  );

  return {
    props: {
      pageInfo,
      socials,
      skills,
      projects,
      experiences
    },

    revalidate: 10,
  };
};

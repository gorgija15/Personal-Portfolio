import React from "react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "./SlideUp";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

const projects = [
  {
    name: "Brainster Labs",
    description:
      "BrainsterLabs is a website that represents the main courses of the Brainster Academy.",
    description2: "Main skill used: CSS + Bootstrap",
    image: "/brainsterlabs.png",
    github: "https://github.com/gorgija15/Brainster-Labs.git",
    link: "https://brainsterlabs01.netlify.app/",
  },
  {
    name: "StreetARTists",
    description:
      "StreetARTists is a web app that represents various artists and the arts created by them.",
    description2: "Main skill used: JavaScript",
    image: "/streetartists.png",
    github: "https://github.com/gorgija15/StreetARTists.git",
    link: "https://streetartists02.netlify.app/",
  },
  {
    name: "SIA Boutique",
    description: "SIA Boutique is an eccomerce website for female clothing.",
    description2: "Main skill used: WordPress + Woocommerce",

    image: "/siabutique.png",
    github: "https://siabutique.com/",
    link: "https://siabutique.com/",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="mb-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-10 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description2}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;

"use client";
import React, { useRef } from "react";
import ProjectItem from "./ProjectItem";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Pokemon Finder",
    description: "ReactJS with Fetch API and Chakra UI",
    image: "/Images/poke-api.png",
    gitUrl: "https://github.com/FarahHaniB/pokemon-fetch-api",
    previewUrl: "https://pokemon-fetch-updated.vercel.app",
  },
    {
    id: 2,
    title: "Pokemon Finder v2",
    description: "ReactJS with Fetch API, React Query and Chakra UI",
    image: "/Images/pokemon-RQ.png",
    // gitUrl: "/property",
    gitUrl: "https://github.com/FarahHaniB/pokemon-react-query",
    previewUrl: "https://pokemon-react-query-seven.vercel.app",
  },
  {
    id: 3,
    title: "Netflix",
    description: "Netflix clone with ReactJS, TailwindCSS and Firebase",
    image: "/Images/netflix-clone.png",
    gitUrl: "https://github.com/FarahHaniB/Netflix-clone",
    previewUrl: "https://netflix-react-js-vercel.vercel.app",
  },
  {
    id: 4,
    title: "Amazon",
    description: "This page is under maintenance. Sorry for inconvenience.",
    image: "/Images/amazon-clone.png",
    gitUrl: "https://github.com/FarahHaniB/amazon-clone-nextjs",
    previewUrl: "https://amazon-clone-nextjs-iota.vercel.app",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-black mt-12 py-10">
        My Projects
      </h2>
      <ul ref={ref} className="grid md:grid-cols-2 gap-8 md:gap-12">
        {projectsData.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectItem
              key={project.id}
              title={project.title}
              desc={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;

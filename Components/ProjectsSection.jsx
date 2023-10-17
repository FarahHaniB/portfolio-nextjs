"use client";
import React, { useState, useRef } from "react";
import ProjectItem from "./ProjectItem";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "Project 1 description",
    image: "/Images/poke-api.png",
    // tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Potography Portfolio Website",
    description: "Project 2 description",
    image: "/Images/poke-api.png",
    // tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "E-commerce Application",
    description: "Project 3 description",
    image: "/Images/poke-api.png",
    // tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Food Ordering Application",
    description: "Project 4 description",
    image: "/Images/poke-api.png",
    // tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  //   {
  //     id: 5,
  //     title: "React Firebase Template",
  //     description: "Authentication and CRUD operations",
  //     image: "/Images/coding-home.jpg",
  //     // tag: ["All", "Web"],
  //     gitUrl: "/",
  //     previewUrl: "/",
  //   },
  //   {
  //     id: 6,
  //     title: "Full-stack Roadmap",
  //     description: "Project 5 description",
  //     image: "/Images/coding-home.jpg",
  //     // tag: ["All", "Web"],
  //     gitUrl: "/",
  //     previewUrl: "/",
  //   },
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
      <h2 className="text-center text-4xl font-bold text-black mt-4 py-8">
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

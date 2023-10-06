import React from "react";
import ProjectItem from "./ProjectItem";

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
  return (
    <>
      <h2 className="text-center text-4xl font-bold text-black mt-4 py-8">My Projects</h2>
      <div className="grid md:grid-cols-2 gap-8 md:gap-12">
        {projectsData.map((project) => (
          <ProjectItem
            key={project.id}
            title={project.title}
            desc={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectsSection;

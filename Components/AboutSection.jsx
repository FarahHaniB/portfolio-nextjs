"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import pic from "../public/Images/coding-home.jpg";
import TabButton from "./TabButton";
import { motion } from "framer-motion";

const TAB_DATA = [
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li className="font-bold">Utsunomiya University, Japan</li>
        <p className="italic">
          Degree in Electrical and Electronic Engineering
        </p>
      </ul>
    ),
  },
  {
    title: "Certification",
    id: "certification",
    content: (
      <ul className="list-disc pl-2">
        <li>Japanese Language Proficiency Test (JLPT) : N2</li>
        <li>TOEIC : Marks 900</li>
        <li>TOEFL : Marks 85</li>
      </ul>
    ),
  },
  {
    title: "Udemy",
    id: "udemy",
    content: (
      <ul className="list-disc pl-2">
        <li>The Complete Web Developer in 2023: Zero to Mastery</li>
        <li>The Linux Command Line Bootcamp: Beginner To Power User</li>
        <li>React - The Complete Guide (Academind)</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("education");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section id="about" className="text-black py-30">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16"
      >
        <Image
          src={pic}
          alt="about-me"
          width={500}
          height={500}
          className="mx-auto"
          priority={true}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-black mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I started my journey to become a web developer during an internship
            at a startup company, where I embarked on a journey of learning web
            development from scratch. I gained proficiency in modern JavaScript
            frameworks like ReactJS and Next.js. Through hands-on experience,
            I&apos;ve successfully delivered multiple web projects, showcasing my
            expertise in data fetching using methods such as Fetch API, React
            Query, and GraphQL. I&apos;m excited to bring this blend of technical
            proficiency and problem-solving skills to create seamless and
            user-friendly web experiences.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certification")}
              active={tab === "certification"}
            >
              {" "}
              Certification{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("udemy")}
              active={tab === "udemy"}
            >
              {" "}
              Udemy{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;

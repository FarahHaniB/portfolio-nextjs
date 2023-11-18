import React, { useRef } from "react";
import Image from "next/image";
import SkillItem from "./SkillItem";
import { motion, useInView } from "framer-motion";

const skillsData = [
  {
    id: 1,
    title: "HTML",
    image: "/Images/SkillsIcon/html-icon.png",
  },
  {
    id: 2,
    title: "CSS",
    image: "/Images/SkillsIcon/css-icon.png",
  },
  {
    id: 3,
    title: "JavaScript",
    image: "/Images/SkillsIcon/js-icon.png",
  },
  {
    id: 4,
    title: "React",
    image: "/Images/SkillsIcon/react-icon.png",
  },
  {
    id: 5,
    title: "Chakra UI",
    image: "/Images/SkillsIcon/chakraui-icon.png",
  },
  {
    id: 6,
    title: "Firebase",
    image: "/Images/SkillsIcon/firebase-icon.png",
  },
  {
    id: 7,
    title: "Tailwind CSS",
    image: "/Images/SkillsIcon/tailwind-css-icon.png",
  },
  {
    id: 8,
    title: "VS Code",
    image: "/Images/SkillsIcon/vscode-icon.png",
  },
  {
    id: 9,
    title: "Next.js",
    image: "/Images/SkillsIcon/nextjs-icon.png",
  },
  {
    id: 10,
    title: "Typescript",
    image: "/Images/SkillsIcon/ts-icon.png",
  },
];
const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { x: 50, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { type: "spring", stiffness: 120 },
  };

  return (
    <section id="skills" className="text-black w-full p-2">
      <h2 className="text-center text-4xl font-bold mt-4 py-8">Skills</h2>
      {/* <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
          <div className="grid grid-rows-2 gap-4 items-center justify-center">
            <div className="m-auto">
              <Image
                src="/Images/SkillsIcon/html-icon.png"
                width={50}
                height={50}
                // className="h-12 w-auto"
                alt="/"
              />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3 className="font-bold">HTML</h3>
            </div>
          </div>
        </div>

        <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
          <div className="grid grid-rows-2 gap-2 items-center justify-center">
            <div className="m-auto">
              <Image
                src="/Images/SkillsIcon/css-icon.png"
                width={50}
                height={50}
                // className="h-12 w-auto"
                alt="/"
              />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3 className="font-bold">CSS</h3>
            </div>
          </div>
        </div>

        <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
          <div className="grid grid-rows-2 gap-4 items-center justify-center">
            <div className="m-auto">
              <Image
                src="/Images/SkillsIcon/js-icon.png"
                width={50}
                height={50}
                // className="h-12 w-auto"
                alt="/"
              />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3 className="font-bold">JavaScript</h3>
            </div>
          </div>
        </div>

        <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
          <div className="grid grid-rows-2 gap-5 items-center justify-center">
            <div className="m-auto">
              <Image
                src="/Images/SkillsIcon/react-icon.png"
                width={50}
                height={50}
                // className="h-12 w-auto"
                alt="/"
              />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3 className="font-bold">React</h3>
            </div>
          </div>
        </div>

        <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
          <div className="grid grid-rows-2 gap-4 items-center justify-center">
            <div className="m-auto">
              <Image
                src="/Images/SkillsIcon/chakraui-icon.png"
                width={50}
                height={50}
                // className="h-12 w-auto"
                alt="/"
              />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3 className="font-bold">Chakra UI</h3>
            </div>
          </div>
        </div>

        <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
          <div className="grid grid-rows-2 gap-4 items-center justify-center">
            <div className="m-auto">
              <Image
                src="/Images/SkillsIcon/firebase-icon.png"
                width={50}
                height={50}
                // className="h-12 w-auto"
                alt="/"
              />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3 className="font-bold">Firebase</h3>
            </div>
          </div>
        </div>

        <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
          <div className="grid grid-rows-2 gap-4 items-center justify-center">
            <div className="m-auto">
              <Image
                src="/Images/SkillsIcon/tailwind-css-icon.png"
                width={50}
                height={50}
                // className="h-12 w-auto"
                alt="/"
              />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3 className="font-bold">Tailwind CSS</h3>
            </div>
          </div>
        </div>

        <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
          <div className="grid grid-rows-2 gap-4 items-center justify-center">
            <div className="m-auto">
              <Image
                src="/Images/SkillsIcon/vscode-icon.png"
                width={50}
                height={50}
                // className="h-12 w-auto"
                alt="/"
              />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3 className="font-bold">VS Code</h3>
            </div>
          </div>
        </div>

        <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
          <div className="grid grid-rows-2 gap-4 items-center justify-center">
            <div className="m-auto">
              <Image
                src="/Images/SkillsIcon/nextjs-icon.png"
                width={50}
                height={50}
                // className="h-12 w-auto"
                alt="/"
              />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3 className="font-bold">Next.js</h3>
            </div>
          </div>
        </div>

        <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
          <div className="grid grid-rows-2 gap-4 items-center justify-center">
            <div className="m-auto">
              <Image
                src="/Images/SkillsIcon/ts-icon.png"
                width={50}
                height={50}
                // className="h-12 w-auto"
                alt="/"
              />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3 className="font-bold">Typescript</h3>
            </div>
          </div>
        </div>
      </div> */}

      <ul
        ref={ref}
        className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
      >
        {skillsData.map((skill, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.2, delay: index * 0.4 }}
          >
            <SkillItem key={index} title={skill.title} image={skill.image} />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;

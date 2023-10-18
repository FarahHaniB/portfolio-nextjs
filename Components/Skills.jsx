import React from "react";

const Skills = () => {
  return (
    <section id="skills" className="text-black w-full p-2">
      <h2 className="text-center text-4xl font-bold mt-4 py-8">Skills</h2>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
        <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
          <div className="grid grid-rows-2 gap-4 items-center justify-center">
            <div className="m-auto">
              <img
                src="/Images/SkillsIcon/html-icon.png"
                className="h-12 w-auto"
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
              <img
                src="/Images/SkillsIcon/css-icon.png"
                className="h-12 w-auto"
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
              <img
                src="/Images/SkillsIcon/js-icon.png"
                className="h-12 w-auto"
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
              <img
                src="/Images/SkillsIcon/react-icon.png"
                className="h-12 w-auto"
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
              <img
                src="/Images/SkillsIcon/chakraui-icon.png"
                className="h-12 w-auto"
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
              <img
                src="/Images/SkillsIcon/firebase-icon.png"
                className="h-12 w-auto"
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
              <img
                src="/Images/SkillsIcon/tailwind-css-icon.png"
                className="h-12 w-auto"
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
              <img
                src="/Images/SkillsIcon/vscode-icon.png"
                className="h-12 w-auto"
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
              <img
                src="/Images/SkillsIcon/nextjs-icon.png"
                className="h-12 w-auto"
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
              <img
                src="/Images/SkillsIcon/ts-icon.png"
                className="h-12 w-auto"
                alt="/"
              />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3 className="font-bold">Typescript</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

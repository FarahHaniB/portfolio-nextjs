import React from "react";
import Image from "next/image";
// import {} from '../../../public/Images/SkillsIcon/html.png'

const Skills = () => {
  return (
    <section className="text-black w-full lg:h-screen p-2">
      <h2 className="text-center text-4xl font-bold mt-4 py-8">Skills</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
          <div className="grid grid-rows-2 gap-4">
            <div className="m-auto">
                <Image src='/../../../public/Images/SkillsIcon/html.png' width={100} height={100} alt='/'/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

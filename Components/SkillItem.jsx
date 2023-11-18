import Image from "next/image";
import React from "react";

const SkillItem = ({ image, title }) => {
  return (
    <div className="p-6 h-40 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
      <div className="grid grid-rows-2 gap-4">
        <div className="flex items-center justify-center m-auto h-12">
          <Image src={image} width={50} height={50} alt="/" />
        </div>
        <div className="flex flex-col items-center justify-center">
          <h3 className="font-bold">{title}</h3>
        </div>
      </div>
    </div>
  );
};

export default SkillItem;

"use client";
import React from "react";
import Image from "next/image";
import images from "../public/Images/dev-home.jpg";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const HeroSection = () => {
  return (
    <section className="lg:py-10">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-black h-[130px] mb-6 text-4xl sm:text-5xl lg:text-7xl lg:h-[250px] lg:leading-tight font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#070f4e] via-[#2772db] to-[#3ab1c8]">
              Hello, I'm
            </span>{" "}
            <br />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Farah",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "an Aspiring Web Developer",
                1000,
                "a Japanese Speaker",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#646668] text-base sm:text-lg mb-6 lg:text-xl sm:pr-7">
            I'm an aspiring web developer fluent in Malay, English and Japanese.
            Equiped with strong foundation in HTML, CSS, JavaScript, React, and
            more, I'm dedicated to crafting dynamic and user-friendly websites.
            Explore my portfolio to see my recent projects. Let's build
            something amazing!
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-[#070f4e] via-[#2772db] to-[#3ab1c8] text-white hover:bg-slate-800">
              Hire Me
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-[#070f4e] via-[#2772db] to-[#3ab1c8] hover:bg-slate-200  text-black mt-3"
            >
              <span className="block bg-white hover:bg-slate-200 rounded-full px-5 py-2">
                Contact Me
              </span>
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src={images}
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={350}
              height={350}
            ></Image>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

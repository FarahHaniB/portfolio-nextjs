import React from "react";
import { FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import Link from "next/link";

const EmailSection = () => {
  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
      <div >
        <h5 className="text-xl font-bold my-2 text-black">Let's Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          nesciunt, est explicabo possimus saepe qui consectetur unde blanditiis
          harum eveniet labore architecto hic cum aliquam voluptates nobis
          necessitatibus odio aliquid!
        </p>
        <div className="socials flex flex-row gap-2 text-black">
          <Link
            href="github.com"
            className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover-scale-110 ease-in duration-300"
          >
            <FaGithub />
          </Link>
          <Link
            href="/"
            className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover-scale-110 ease-in duration-300"
          >
            <AiOutlineMail />
          </Link>
        </div>
      </div>
      <div>
        <form className="flex flex-col">
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-black block mb-2 text-sm font-medium"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              required
              placeholder="email"
              className="border-2 rounded-lg p-2 flex border-gray-300 w-full"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-black block mb-2 text-sm font-medium"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              required
              placeholder="Message subject"
              className="border-2 rounded-lg p-2 flex border-gray-300 w-full"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-black block mb-2 text-sm font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="border-2 rounded-lg p-2 flex border-gray-300 w-full"
              placeholder="Let's talk about..."
            />
          </div>
          <button className="bg-[#070f4e] hover:bg-slate-400 text-white font-medium py-2.5 px-5 rounded-lg w-full">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;

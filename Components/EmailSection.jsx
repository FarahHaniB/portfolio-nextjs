"use client";

import React from "react";
import { FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import Link from "next/link";
import { useForm } from "react-hook-form";

const EmailSection = () => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div>
        <h5 className="text-xl font-bold my-2 text-black">Let's Connect</h5>
        <p className="text-[#868c91] mb-4 max-w-md">
          I am open to new opportunities in web development and eager to explore
          potential ventures. Contact me and let's talk!
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
        <form
          target="_blank"
          onSubmit={onSubmit}
          action="https://formsubmit.co/35fbaa058101b3c447abb56ca8f991b7"
          method="POST"
          className="flex flex-col"
        >
          <div className="mb-6">
            <label
              htmlFor="name"
              className="text-black block mb-2 text-sm font-medium"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              required
              placeholder="Name"
              className="border-2 rounded-lg p-2 flex border-gray-300 w-full text-black"
              {...register("name", {
                required: true,
                maxLength: 100,
              })}
            />
            {errors.name && (
              <p className="text-red">
                {errors.name.type === "required" && "This field is required."}
                {errors.name.type === "maxLength" &&
                  "Max length is 100 characters."}
              </p>
            )}
          </div>

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
              placeholder="Email"
              className="border-2 rounded-lg p-2 flex border-gray-300 w-full text-black"
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
            />
            {errors.email && (
              <p className="text-red">
                {errors.name.type === "required" && "This field is required."}
                {errors.name.type === "pattern" && "Invalid email address."}
              </p>
            )}
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
              className="border-2 rounded-lg p-2 flex border-gray-300 w-full text-black"
              placeholder="Message"
              {...register("message", {
                required: true,
                maxLength: 2000,
              })}
            />
            {errors.message && (
              <p className="text-red">
                {errors.name.type === "required" && "This field is required."}
                {errors.name.type === "maxLength" &&
                  "Max length is 2000 characters."}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="bg-[#070f4e] hover:bg-slate-400 text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;

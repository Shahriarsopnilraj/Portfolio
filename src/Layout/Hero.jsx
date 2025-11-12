import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import Profile from "../assets/Img.png"; // replace with your image

const HeroSection = () => {
  return (
    <section id="Home" className="bg-gray-900 py-9 text-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-10">
        {/* Left Content */}
        <div className="text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Hi, I'm <span className="text-indigo-600">Shahriar Sopnil Raj</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-400 font-medium">
            Front-End Developer & UI Designer
          </h2>
          <p className="text-gray-400 max-w-md">
            I build modern, responsive, and interactive web experiences.
            Passionate about clean code, creative design, and solving problems.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <a
              href="#projects"
              className="bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition-all"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-full hover:bg-indigo-600 hover:text-white transition-all"
            >
              Contact Me
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-5 text-2xl mt-6 text-gray-300">
            <a href="https://github.com/Shahriarsopnilraj" target="_blank" rel="noreferrer">
              <FaGithub className="hover:text-indigo-600 transition-all" />
            </a>
            <a href="linkedin.com/in/shahriar-sopnil-raj-037100387" target="_blank" rel="noreferrer">
              <FaLinkedin className="hover:text-indigo-600 transition-all" />
            </a>
            <a href="https://www.instagram.com/shahriar__sopnil?igsh=MWVxOTV1bHI5a20zdg==" target="_blank" rel="noreferrer">
              <FaInstagram className="hover:text-indigo-600 transition-all" />
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="mt-10 md:mt-0">
          <img
            src={Profile}
            alt="Profile"
            className="w-72 md:w-[400px] rounded-full shadow-lg border-4 border-indigo-100"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

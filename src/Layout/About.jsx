import React from "react";

import Profile from "../assets/Img.png";
const About = () => {
  return (
    <section id="about" className="bg-white py-20">
      <div className="container mx-auto px-10 flex flex-col md:flex-row items-center gap-10">
        {/* Left Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={Profile}
            alt="About me"
            className="rounded-2xl shadow-lg w-80 md:w-[400px] object-cover border-4 border-indigo-100"
          />
        </div>

        {/* Right Content */}
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <h2 className="text-4xl font-bold text-gray-800">
            About <span className="text-indigo-600">Me</span>
          </h2>
          <p className="text-gray-500 leading-relaxed">
            I'm a passionate <span className="font-medium text-indigo-600">Front-End Developer</span> 
            with a focus on crafting clean, modern, and responsive web interfaces.  
            I love turning design ideas into reality through code and improving user experience 
            with smooth interactions.
          </p>
          <p className="text-gray-500 leading-relaxed">
            I’ve worked with technologies like <b>React.js</b>, <b>Tailwind CSS</b>, and <b>JavaScript</b>.  
            My goal is to constantly grow as a developer while helping businesses bring their ideas to life.
          </p>

          {/* Info Grid */}
          <div className="grid grid-cols-2 gap-15 text-gray-600">
            <div>
              <p><span className="font-semibold">Name:</span> Shahriar Sopnil Raj</p>
              <p><span className="font-semibold">Email:</span>shahriarsopnilraj@gmail.com</p>
            </div>
            <div>
              <p><span className="font-semibold">From:</span> Bangladesh</p>
              <p><span className="font-semibold">Freelance:</span> Available</p>
            </div>
          </div>

          {/* Button */}
          <a
            href="https://i.ibb.co.com/gFhBh6Xh/Md-Shahriar-Sopnil-Raj.png"
            download
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-full mt-5 hover:bg-indigo-700 transition-all"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;


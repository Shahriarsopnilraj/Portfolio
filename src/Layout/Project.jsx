import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "Movie Site Clone",
    desc: "A full-featured online store built with React, Context API, and Tailwind CSS. Includes product filters, cart, and checkout system.",
    tech: ["React", "Tailwind", "Context API"],
    img: "https://i.ibb.co.com/r2hTSpxf/banner.jpg",
    demo: "https://movie-site-clone-nine.vercel.app/",
    code: "https://github.com/Shahriarsopnilraj/Movie_site_clone",
  },
  {
    id: 2,
    title: "Grocery Website",
    desc: "A personal portfolio website showcasing projects, skills, and contact info with a smooth scroll and responsive design.",
    tech: ["React", "Framer Motion", "Tailwind"],
    img: "https://i.ibb.co.com/JjxdTZ8G/basket-full-vegetables.png",
    demo: "https://grocery-w-react.vercel.app/",
    code: "https://github.com/Shahriarsopnilraj/Grocery_w_React",
  },
  {
    id: 3,
    title: "ToDo APP",
    desc: "Todo app with create/read/update/delete functionality, priority & due-date tagging, filtering/search",
    tech: ["React", "API", "CSS Grid"],
    img: "https://i.ibb.co.com/JRb0hjg7/To-Do.png",
    demo: "https://2nd-to-do.vercel.app/",
    code: "https://github.com/Shahriarsopnilraj/2nd_To_Do",
  },
];

const Project = () => {
  return (
    <section id="projects" className="py-4">
      <div className="container mx-auto px-10">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">
            My <span className="text-indigo-600">Projects</span>
          </h2>
          <p className="text-gray-500 mt-2">Some of my recent works</p>
        </div>

        {/* Project Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-50 rounded-2xl shadow-md overflow-hidden hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-48 object-cover"
              />

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  {project.title}
                </h3>
                <p className="text-gray-500 text-sm">{project.desc}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-indigo-100 text-indigo-600 text-xs font-medium px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-4 mt-4">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm text-white bg-indigo-600 px-4 py-2 rounded-md hover:bg-indigo-700 transition-all"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm text-indigo-600 border border-indigo-600 px-4 py-2 rounded-md hover:bg-indigo-600 hover:text-white transition-all"
                  >
                    <FaGithub /> Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;

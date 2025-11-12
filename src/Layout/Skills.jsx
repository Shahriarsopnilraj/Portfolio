import React from "react";
import { FaHtml5, FaCss3Alt, FaReact, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiGithub, SiVite, SiFigma, SiRedux } from "react-icons/si";

const Skills = () => {
  const skills = [
    {
      title: "Frontend",
      items: [
        { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
        { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
        { name: "React.js", icon: <FaReact className="text-sky-400" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
        { name: "Redux", icon: <SiRedux className="text-purple-500" /> },
      ],
    },
    {
      title: "Tools",
      items: [
        { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
        { name: "GitHub", icon: <SiGithub className="text-gray-700 dark:text-white" /> },
        { name: "Vite", icon: <SiVite className="text-purple-500" /> },
        { name: "Figma", icon: <SiFigma className="text-pink-500" /> },
      ],
    },
    {
      title: "Other Skills",
      items: [
        { name: "Responsive Design", icon: "💻" },
        { name: "UI/UX Thinking", icon: "🎨" },
        { name: "API Integration", icon: "🔗" },
        { name: "Problem Solving", icon: "⚡" },
      ],
    },
  ];

  return (
    <section id="skills" className="bg-gray-900 py-20">
      <div className="container mx-auto px-10 text-center">
        <h2 className="text-4xl font-bold text-gray-300 mb-10">
          My <span className="text-indigo-600">Skills</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {skills.map((category, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-2xl p-8 hover:-translate-y-2 transition-all duration-300 border border-gray-100"
            >
              <h3 className="text-2xl font-semibold mb-6 text-indigo-600">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 gap-6 justify-items-center">
                {category.items.map((skill, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center text-gray-600 hover:text-indigo-600 transition-all"
                  >
                    <div className="text-4xl mb-2">{skill.icon}</div>
                    <p className="text-sm font-medium">{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

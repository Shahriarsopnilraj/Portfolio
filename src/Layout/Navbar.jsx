import React from "react";
import Container from "../Components/Container.jsx";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white shadow-md sticky top-0 z-50">
      <Container>
        <div className="flex justify-between items-center py-4 px-5">
          {/* Logo */}
          <h1 className="text-2xl font-bold tracking-wide cursor-pointer">
            <span className="text-indigo-500"></span> Portfolio
          </h1>

          {/* Nav Links */}
          <ul className="hidden md:flex gap-8 text-sm uppercase font-semibold">
            <li className="relative group">
              <a href="#Home" className="hover:text-indigo-400 transition-all">Home</a>
              <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-indigo-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="relative group">
              <a href="#about" className="hover:text-indigo-400 transition-all">About</a>
              <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-indigo-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="relative group">
              <a href="#skills" className="hover:text-indigo-400 transition-all">Skills</a>
              <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-indigo-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="relative group">
              <a href="#projects" className="hover:text-indigo-400 transition-all">Projects</a>
              <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-indigo-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="relative group">
              <a href="#contact" className="hover:text-indigo-400 transition-all">Contact</a>
              <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-indigo-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
          </ul>

          {/* Mobile Menu Icon */}
          <button className="md:hidden text-2xl focus:outline-none">
            ☰
          </button>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;

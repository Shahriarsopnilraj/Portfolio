import React from 'react';
import Navbar from './Layout/Navbar';
import Hero from './Layout/Hero';
import About from './Layout/About';
import Skills from "./Layout/Skills";
import Project from "./Layout/Project";
import Contact from "./Layout/Contact"

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Project/>
      <Contact/>
    </div>
  );
}

export default App;

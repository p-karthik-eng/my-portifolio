import React from "react";
import Navbar from "../components/Navbar";

import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import CustomCursor from "../components/Customcursor";
import ToolkitSection from "../components/ToolkitSection";
import SkillsImages from "../components/SkillsImages";
import Skillsdiv from "../components/Skillsdiv";

const Home = () => {
  return (
    <div className="bg-[#0f0b1d]">
      <CustomCursor />
      <Navbar />
      <Hero />
      
      <Skillsdiv/>
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;

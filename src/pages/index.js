import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import { homeObjOne, homeObjTwo} from "../components/InfoSection/Data";
import ProjectSection from "../components/ProjectsSection";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar isOpen={isOpen} toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <ProjectSection />
      <InfoSection {...homeObjTwo} />
    </>
  );
};

export default Home;

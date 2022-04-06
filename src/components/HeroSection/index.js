import React from "react";
import {
  HeroBg,
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroP,
  ImgBg,
} from "./HeroElements";
import Img from "../../images/background.jpg";

const HeroSection = () => {
  return (
    <HeroContainer id="home">
      <HeroBg>
        <ImgBg src={Img} />
      </HeroBg>
      <HeroContent>
        <HeroP>WELCOME IN MY WORLD</HeroP>
        <HeroH1>Hi, I’m Piotr Mikołajczuk</HeroH1>
        <HeroH1>Frontend Developer.</HeroH1>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;

import React from "react";
import {
  HeroBg,
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroP,
  VideoBg,
} from "./HeroElements";
import Video from "../../videos/video.mp4";

const HeroSection = () => {
  return (
    <HeroContainer id="home">
      <HeroBg>
        {/*<VideoBg autoPlay loop muted src={Video} type="video/mp4" />*/}
      </HeroBg>
      <HeroContent>
        <HeroH1>Hi There! 👋🏻</HeroH1>
        <HeroP>I'm junior frontend developer</HeroP>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;

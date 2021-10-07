import React from "react";
import { projects } from "./Data.js";
import {
  ProjectBtnLink,
  ProjectCard,
  ProjectDescription,
  ProjectFlex,
  ProjectImage,
  ProjectRow,
  ProjectScale,
  ProjectSubtitle,
  ProjectText,
  ProjectTitle,
  SectionProjects,
} from "./ProjectsElements";
import { Heading, InfoWrapper, Subtitle, TopLine } from "../AllComponentsStyle";

export default function ProjectSection() {
  return (
    <SectionProjects id="projects">
      <InfoWrapper>
        <ProjectRow>
          <TopLine>PROJEKTY</TopLine>
          <Heading>Moje Projekty</Heading>
          <Subtitle lightText="true">
            Moje projekty które stworzyłem, niektóre są dosyć proste. Ale
            znaczące dla mnie
          </Subtitle>
        </ProjectRow>
        <ProjectFlex>
          {projects.map((project) => (
            <ProjectScale key={project.image}>
              <ProjectCard>
                <ProjectImage alt="gallery" src={project.image} />
                <ProjectText>
                  <ProjectSubtitle>{project.subtitle}</ProjectSubtitle>
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <ProjectDescription>{project.description}</ProjectDescription>
                  <ProjectBtnLink href={project.link}>ZOBACZ</ProjectBtnLink>
                </ProjectText>
              </ProjectCard>
            </ProjectScale>
          ))}
        </ProjectFlex>
      </InfoWrapper>
    </SectionProjects>
  );
}

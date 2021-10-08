import React from "react";
import { projects } from "./Data.js";
import {
  ProjectBtnLink,
  ProjectCard,
  ProjectDescription,
  ProjectFlex,
  ProjectImage,
  ProjectScale,
  ProjectSubtitle,
  ProjectText,
  ProjectTitle,
  ProjectWrapper,
  SectionProjects,
} from "./ProjectsElements";
import { Heading, ProjectRow, Subtitle, TopLine } from "../AllComponentsStyle";
import { Button } from "@mui/material";

const ProjectSection = () => {
  return (
    <SectionProjects id="projects">
      <ProjectWrapper>
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
                  <Button variant="contained" href={project.link}>
                    Zobacz
                  </Button>
                </ProjectText>
              </ProjectCard>
            </ProjectScale>
          ))}
        </ProjectFlex>
      </ProjectWrapper>
    </SectionProjects>
  );
};
export default ProjectSection;

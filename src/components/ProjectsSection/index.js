import React from "react";
import { projects } from "./Data.js";
import {
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
          <TopLine>PROJECTS</TopLine>
          <Heading>My projects</Heading>
          <Subtitle lightText="true">
            My first independent projects. More projects can be seen on my
            github
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
                    CHECK
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

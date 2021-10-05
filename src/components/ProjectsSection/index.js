import React from "react";
import {projects} from "./data.js";
import {
    ProjectCard, ProjectFlex,
    ProjectImage,
    ProjectScale, ProjectSubtitle,
    ProjectText, ProjectTitle,
    ProjectWrapper,
    SectionProjects
} from "./ProjectsElements";

export default function ProjectSection() {
  return (
      <SectionProjects id="projects">
          <ProjectWrapper>
              {/*<div className="flex flex-col w-full mb-20">*/}
              {/*    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">*/}
              {/*        Apps I've Built*/}
              {/*    </h1>*/}
              {/*    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">*/}
              {/*        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo*/}
              {/*        facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam*/}
              {/*        fuga dolore.*/}
              {/*    </p>*/}
              {/*</div>*/}
              <ProjectFlex>
                  {projects.map((project) => (
                      <ProjectScale
                          href={project.link}
                          key={project.image}>
                          <ProjectCard>
                              <ProjectImage
                                  alt="gallery"
                                  src={project.image}
                              />
                              <ProjectText>
                                  <ProjectSubtitle>
                                      {project.subtitle}
                                  </ProjectSubtitle>
                                  <ProjectTitle>
                                      {project.title}
                                  </ProjectTitle>
                                  <p className="leading-relaxed">{project.description}</p>
                              </ProjectText>
                          </ProjectCard>
                      </ProjectScale>
                  ))}
              </ProjectFlex>
          </ProjectWrapper>
      </SectionProjects>
  );
};

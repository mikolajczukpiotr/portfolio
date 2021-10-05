import styled from "styled-components";

export const SectionProjects= styled.div`
  background-color: gray(90);
  text-decoration: none;
`;
export const ProjectWrapper = styled.div`
  display: grid;
  z-index: 1;
  ${() => `height: calc(100vh - 80px);`}
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;
export const ProjectCard = styled.div`
  display: flex;
  position: relative;
`;
export const ProjectImage = styled.img`
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;
export const ProjectText = styled.div`
  padding: 2rem;
  position: relative;
  z-index: 10;
  width: 100%;
  border-width: 4px;
  --tw-border-opacity: 1;
  border-color: rgba(31, 41, 55, var(--tw-border-opacity));
  --tw-bg-opacity: 1;
  background-color: rgba(17, 24, 39, var(--tw-bg-opacity));
  opacity: 0%;
  &:hover{
    opacity: 100%;
  }
`;
export const ProjectFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 1rem;
`;
export const ProjectScale = styled.a`
  text-decoration: none;
  width: 25rem;
  padding: 1rem;
  @media screen and (max-width: 768px) {
    width: 0.125rem
    
  } ;
`;
export const ProjectSubtitle = styled.h2`
  letter-spacing: 0.1em;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
  --tw-text-opacity: 1;
  color: rgba(135, 194, 233, var(--tw-text-opacity));
  margin: 0.25rem;
  
`;
export const ProjectTitle = styled.h1`
  font-size: 1.125rem;
  line-height: 1.75rem;
  font-weight: 500;
  --tw-text-opacity: 1;
  color: rgba(255, 255, 255, var(--tw-text-opacity));
  margin-bottom: 0.75rem;
`;
export const ProjectDescription = styled.div`
`;
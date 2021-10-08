import styled from "styled-components";

export const ProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 1;
  min-height: 100vh;
  width: 80%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  justify-content: center;
`;

export const SectionProjects = styled.div`
  background-color: gray(90);
  text-decoration: none;
`;
export const ProjectCard = styled.div`
  display: flex;
  position: relative;
  height: 20vh;
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
  box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px,
    rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
    rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
`;
export const ProjectText = styled.div`
  padding: 1.5rem;
  position: relative;
  width: 100%;
  border-width: 4px;
  --tw-border-opacity: 1;
  border-color: rgba(31, 41, 55, var(--tw-border-opacity));
  --tw-bg-opacity: 1;
  background-color: rgba(17, 24, 39, var(--tw-bg-opacity));
  opacity: 0%;
  &:hover,
  active {
    opacity: 100%;
  }
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
export const ProjectFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const ProjectScale = styled.a`
  text-decoration: none;
  width: 25rem;
  padding: 1rem;
  @media screen and (max-width: 768px) {
    width: 25rem;
  } ;
`;
export const ProjectSubtitle = styled.h2`
  letter-spacing: 0.1em;
  font-size: 1.1vh;
  //line-height: 1.25rem;
  font-weight: 500;
  --tw-text-opacity: 1;
  color: rgba(135, 194, 233, var(--tw-text-opacity));
  margin: 0.25rem;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const ProjectTitle = styled.p`
  font-size: 2vh;
  line-height: 1.75rem;
  font-weight: 500;
  --tw-text-opacity: 1;
  color: rgba(255, 255, 255, var(--tw-text-opacity));
  margin-bottom: 0.6rem;
  @media screen and (max-width: 768px) {
    font-size: 3vh;
    align-items: center;
  }
`;
export const ProjectDescription = styled.p`
  text-decoration: none;
  font-size: 1.5vh;
  margin-bottom: 2rem;
  --tw-text-opacity: 1;
  color: rgba(255, 255, 255, var(--tw-text-opacity));
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const ProjectBtnLink = styled.span`
  border-radius: 40px;
  background: #87c2e9;
  white-space: nowrap;
  padding: 8px 20px;
  color: #010606;
  font-size: 0.9rem;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

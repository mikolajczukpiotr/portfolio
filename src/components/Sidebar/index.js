import React from "react";
import {
  CloseIcon,
  Icon,
  NonStyledAnchor,
  SidebarContainer,
  SidebarLink,
  SidebarMenu,
  SidebarWrapper,
  SideBtnWrap,
} from "./SiedebarElements";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/all";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink
            to="about"
            offset={-80}
            smooth={true}
            duration={500}
            onClick={toggle}
          >
            O mnie
          </SidebarLink>
          <SidebarLink
            to="projects"
            offset={-80}
            smooth={true}
            duration={500}
            onClick={toggle}
          >
            Projekty
          </SidebarLink>
          <SidebarLink
            to="contact"
            smooth={true}
            duration={500}
            onClick={toggle}
          >
            Kontakt
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <NonStyledAnchor
            href="https://github.com/mikolajczukpiotr"
            target="_blank"
          >
            <AiFillGithub color="white" />
          </NonStyledAnchor>
          <NonStyledAnchor href="https://twitter.com/divensek" target="_blank">
            <AiFillTwitterCircle color="white" />
          </NonStyledAnchor>
          <NonStyledAnchor
            href="https://www.linkedin.com/in/mikolajczukpiotr"
            target="_blank"
          >
            <AiFillLinkedin color="white" />
          </NonStyledAnchor>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;

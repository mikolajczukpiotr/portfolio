import React from "react";
import { FaBars } from "react-icons/fa";
import {
  MobileIcon,
  Nav,
  NavbarContainer,
  NavBtn,
  NavBtnLink,
  NavItem,
  NavLinks,
  NavLogo,
  NavMenu,
} from "./NavbarElements";
import {AiFillGithub, AiFillLinkedin, AiFillTwitterCircle} from "react-icons/all";

const Navbar = ({ isOpen, toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">Piotr Mikołajczuk</NavLogo>
          <MobileIcon onClick={toggle}>
            {!isOpen ? <FaBars /> : null}
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="projects">Projects</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="contact">Contact</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink href="https://github.com/mikolajczukpiotr">
              <AiFillGithub></AiFillGithub>
            </NavBtnLink>
            <NavBtnLink href="https://twitter.com/divensek">
              <AiFillTwitterCircle></AiFillTwitterCircle>
            </NavBtnLink>
            <NavBtnLink href="https://www.linkedin.com/in/piotr-miko%C5%82ajczuk-38b1b0195/">
              <AiFillLinkedin></AiFillLinkedin>
            </NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;

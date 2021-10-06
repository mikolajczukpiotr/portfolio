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
              <NavLinks
                  to="about"
                  spy
                  smooth={true}
                  duration={500}
              >
                About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                  to="projects"
                  spy
                  smooth={true}
                  duration={500}
              >
                Projects</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                  to="contact"
                  spy
                  smooth={true}
                  duration={500}
              >
                Contact</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink href="https://github.com/mikolajczukpiotr">
              <AiFillGithub></AiFillGithub>
            </NavBtnLink>
            <NavBtnLink href="https://twitter.com/divensek">
              <AiFillTwitterCircle></AiFillTwitterCircle>
            </NavBtnLink>
            <NavBtnLink href="https://www.linkedin.com/in/mikolajczukpiotr">
              <AiFillLinkedin></AiFillLinkedin>
            </NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;

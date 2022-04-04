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
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/all";

const Navbar = ({ isOpen, toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="home" offset={-80} smooth={true} duration={500}>
            Piotr Mikołajczuk
          </NavLogo>
          <MobileIcon onClick={toggle}>
            {!isOpen ? <FaBars /> : null}
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about" spy smooth={true} duration={500}>
                O mnie
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="projects" spy smooth={true} duration={500}>
                Projekty
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="contact" spy smooth={true} duration={500}>
                Kontakt
              </NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink
              href="https://github.com/mikolajczukpiotr"
              target="_blank"
            >
              <AiFillGithub></AiFillGithub>
            </NavBtnLink>
            <NavBtnLink href="https://twitter.com/divensek" target="_blank">
              <AiFillTwitterCircle></AiFillTwitterCircle>
            </NavBtnLink>
            <NavBtnLink
              href="https://www.linkedin.com/in/mikolajczukpiotr"
              target="_blank"
            >
              <AiFillLinkedin></AiFillLinkedin>
            </NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;

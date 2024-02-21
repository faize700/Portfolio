import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/gm-logo.png";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

import { useTheme } from "../ThemeContext";
import { CgFileDocument } from "react-icons/cg";
import { NavItem } from "react-bootstrap";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const { isDarkMode, toggleDarkMode } = useTheme();

  const handleToggle = () => {
    toggleDarkMode();
  };

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <div className={isDarkMode ? "dark-mode" : "light-mode"}>
      <Navbar
        expanded={expand}
        fixed="top"
        expand="md"
        // className={`custom-navbar ${isDarkMode ? "dark-mode" : "light-mode"}`}
        className={navColour ? "sticky" : "navbar"}
      >
        <Container>
          <Navbar.Brand href="/" className="d-flex">
            <img src={logo} className="img-fluid logo" alt="brand" />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={() => {
              updateExpanded(expand ? false : "expanded");
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto" defaultActiveKey="#home">
              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="/"
                  onClick={() => updateExpanded(false)}
                  // style={{ color: "black" }} // Set Home text color to black
                >
                  <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="/about"
                  onClick={() => updateExpanded(false)}
                >
                  <AiOutlineUser style={{ marginBottom: "2px" }} /> About
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="/project"
                  onClick={() => updateExpanded(false)}
                >
                  <AiOutlineFundProjectionScreen
                    style={{ marginBottom: "2px" }}
                  />{" "}
                  Projects
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="/resume"
                  onClick={() => updateExpanded(false)}
                >
                  <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
                </Nav.Link>
              </Nav.Item>

              <Nav.Item className="fork-btn">
                <Button
                  href="https://github.com/faize700"
                  target="_blank"
                  className="fork-btn-inner"
                >
                  <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
                  <AiFillStar style={{ fontSize: "1.1em" }} />
                </Button>
              </Nav.Item>

              <NavItem className="fork-btn">
                <Button
                  variant={isDarkMode ? "light" : "dark"}
                  onClick={handleToggle}
                  className="fork-btn-inner"
                  style={{ borderStyle: "none"}}
                >
                  {isDarkMode ? (
                    <MdOutlineLightMode color="white" style={{ fontSize: "1.5em" }}/>
                  ) : (
                    <MdOutlineDarkMode style={{ fontSize: "1.5em" }}/>
                  )}
                </Button>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;


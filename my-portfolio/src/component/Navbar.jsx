// src/components/NavbarComponent.jsx
import React, { useContext, useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import ThemeToggleButton from "./ThemeToggleButton.jsx";
import { ThemeContext } from "../context/ThemeContext.jsx";

const NavbarComponent = () => {
  const { theme } = useContext(ThemeContext);
  const [expanded, setExpanded] = useState(false); // ✅ Added expanded state

  const navLinks = [
    { id: 1, text: "Home", to: "home" },
    { id: 2, text: "About", to: "about" },
    { id: 3, text: "Projects", to: "projects" },
    { id: 4, text: "Contact", to: "contact" },
  ];

  return (
    <>
      <Navbar
        expand="lg"
        fixed="top"
        expanded={expanded} // ✅ Connect state
        className={`py-3 ${theme === "dark" ? "bg-dark navbar-dark" : "bg-light navbar-light"}`}
      >
        <Container>
          {/* Brand */}
          <Navbar.Brand href="#" style={{ fontWeight: "bold" }}>
            Anshuman Singh
          </Navbar.Brand>

          {/* Toggle button */}
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={() => setExpanded(!expanded)} // ✅ Toggle on click
          />

          {/* Nav links */}
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center">
              {navLinks.map((link) => (
                <Link
                  key={link.id}
                  activeClass="active-link"
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="nav-link custom-nav-link"
                  onClick={() => setExpanded(false)} // ✅ Collapse menu on click
                >
                  {link.text}
                </Link>
              ))}

              {/* Resume */}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link"
                style={{ cursor: "pointer" }}
                onClick={() => setExpanded(false)} // ✅ Collapse menu
              >
                Resume
              </a>

              {/* Social icons */}
              <Nav.Link
                href="https://github.com/Anshuman-singh05"
                target="_blank"
                rel="noopener noreferrer"
                className="d-flex align-items-center"
              >
                <FaGithub size={30} />
              </Nav.Link>
              <Nav.Link
                href="https://www.linkedin.com/in/anshumansingh2005/"
                target="_blank"
                rel="noopener noreferrer"
                className="d-flex align-items-center"
              >
                <FaLinkedin size={30} />
              </Nav.Link>

              {/* Theme toggle */}
              <ThemeToggleButton />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Spacer for fixed navbar */}
      <div style={{ height: "80px" }} /> {/* Adjust if navbar height changes */}

      {/* Custom CSS */}
      <style jsx>{`
        .custom-nav-link {
          cursor: pointer;
          transition: color 0.3s ease;
        }
        .custom-nav-link:hover {
          color: blue !important;
        }
        .active-link {
          color: blue !important;
          font-weight: bold;
        }
      `}</style>
    </>
  );
};

export default NavbarComponent;

import React, { useContext, useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import ThemeToggleButton from "./ThemeToggleButton.jsx";
import { ThemeContext } from "../context/ThemeContext.jsx";

const NavbarComponent = () => {
  const { theme } = useContext(ThemeContext);
  const [expanded, setExpanded] = useState(false); // navbar expand state

  const navLinks = [
    { id: 1, text: "Home", to: "home" },
    { id: 2, text: "About", to: "about" },
    { id: 3, text: "Projects", to: "projects" },
    { id: 4, text: "Contact", to: "contact" },
  ];

  return (
    <Navbar
      expand="lg"
      fixed="top"
      expanded={expanded}
      className={`py-3 ${theme === "dark" ? "bg-dark navbar-dark" : "bg-light navbar-light"}`}
    >
      <Container>
        {/* Brand */}
        <Navbar.Brand href="#" style={{ fontWeight: "bold" }}>
          Anshuman Singh
        </Navbar.Brand>

        {/* Toggle for mobile */}
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(expanded ? false : true)}
        />

        {/* Nav Links */}
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
                onClick={() => setExpanded(false)}
              >
                {link.text}
              </Link>
            ))}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
              style={{ cursor: "pointer" }}
              onClick={() => setExpanded(false)}
            >
              Resume
            </a>

            {/* Social Icons */}
            <Nav.Link
              href="https://github.com/Anshuman-singh05"
              target="_blank"
              rel="noopener noreferrer"
              className="d-flex align-items-center"
              onClick={() => setExpanded(false)}
            >
              <FaGithub size={30} />
            </Nav.Link>
            <Nav.Link
              href="https://www.linkedin.com/in/anshumansingh2005/"
              target="_blank"
              rel="noopener noreferrer"
              className="d-flex align-items-center"
              onClick={() => setExpanded(false)}
            >
              <FaLinkedin size={30} />
            </Nav.Link>

            {/* Theme Toggle */}
            <ThemeToggleButton />
          </Nav>
        </Navbar.Collapse>
      </Container>

      {/* Styles */}
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
    </Navbar>
  );
};

export default NavbarComponent;

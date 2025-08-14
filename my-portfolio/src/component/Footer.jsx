import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#0d1117",
        color: "#fff",
        padding: "40px 0",
        marginTop: "50px",
      }}
    >
      <Container>
        <Row className="gy-4">
          {/* About Section */}
          <Col md={4} sm={12}>
            <h5>About Me</h5>
            <p style={{ fontSize: "14px", lineHeight: "1.6" }}>
              I’m a passionate web developer specializing in MERN Stack, always
              eager to learn and build creative solutions for real-world
              problems.
            </p>
          </Col>

          {/* Quick Links */}
          <Col md={4} sm={12}>
            <h5>Quick Links</h5>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li>
                <a
                  href="#home"
                  style={{ color: "#fff", textDecoration: "none" }}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  style={{ color: "#fff", textDecoration: "none" }}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  style={{ color: "#fff", textDecoration: "none" }}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  style={{ color: "#fff", textDecoration: "none" }}
                >
                  Contact
                </a>
              </li>
            </ul>
          </Col>

          {/* Contact & Resume */}
          <Col md={4} sm={12}>
            <h5>Let's Connect</h5>
            <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#fff", fontSize: "1.5rem" }}
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#fff", fontSize: "1.5rem" }}
              >
                <FaLinkedin />
              </a>
            </div>

            {/* Resume Button */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                background: "#007bff",
                color: "#fff",
                padding: "8px 16px",
                borderRadius: "5px",
                textDecoration: "none",
                fontSize: "14px",
              }}
            >
              View Resume
            </a>
          </Col>
        </Row>

        {/* Copyright */}
        <hr style={{ borderColor: "#444" }} />
        <p className="text-center" style={{ fontSize: "13px", margin: 0 }}>
          &copy; {new Date().getFullYear()} Anshuman Singh. All rights reserved.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;

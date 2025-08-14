import React from 'react';
import { Link } from 'react-scroll';
import { TypeAnimation } from 'react-type-animation';
import { Container, Row, Col } from 'react-bootstrap';
import Lottie from "lottie-react";
import { FaGithub, FaLinkedin, FaChevronDown, FaCode, FaLaptopCode, FaServer } from 'react-icons/fa'; 
import codingAnimation from "../assets/software-engineer.json";

const Home = () => {
  return (
    <section 
      id="home" 
      className="d-flex align-items-center position-relative" 
      style={{ 
        minHeight: '100vh', 
        paddingTop: '70px'
      }}
    >
      <Container>
        <Row className="align-items-center">
          <Col lg={7} className="text-center text-md-start">
            {/* --- Text color will be controlled by CSS --- */}
            <h1 className="display-3 fw-bolder home-title">
              Hi, I'm <span className="text-primary">Anshuman Singh</span>
            </h1>
            
            <TypeAnimation
              sequence={[
                'MERN Stack Developer', 2000,
                'Problem Solver', 2000,
                'Tech Enthusiast', 2000,
              ]}
              wrapper="p"
              speed={50}
              className="lead fs-4 fw-medium home-subtitle"
              repeat={Infinity}
            />

            <div className="mt-4">
              <Link to="projects" smooth={true} duration={500} offset={-70} className="btn btn-primary btn-lg me-3">
                View My Work
              </Link>
              <Link to="contact" smooth={true} duration={500} offset={-70} className="btn btn-outline-dark btn-lg">
                Contact Me
              </Link>
            </div>
            
            <div className="mt-5">
              <Row>
                <Col xs={4} className="text-center">
                  <FaCode size={32} className="text-primary mb-2" />
                  <h6 className="fw-bold">Web Development</h6>
                  <p className="small text-muted">Crafting responsive and dynamic websites.</p>
                </Col>
                <Col xs={4} className="text-center">
                  <FaLaptopCode size={32} className="text-primary mb-2" />
                  <h6 className="fw-bold">DSA</h6>
                  <p className="small text-muted">Solving complex problems efficiently.</p>
                </Col>
                <Col xs={4} className="text-center">
                  <FaServer size={32} className="text-primary mb-2" />
                  <h6 className="fw-bold">Backend APIs</h6>
                  <p className="small text-muted">Building robust and scalable server-side logic.</p>
                </Col>
              </Row>
            </div>

            <div className="mt-4 text-center text-md-start">
              <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer" className="social-icon me-4" title="GitHub">
                <FaGithub size={32} />
              </a>
              <a href="https://linkedin.com/in/your-username" target="_blank" rel="noopener noreferrer" className="social-icon" title="LinkedIn">
                <FaLinkedin size={32} />
              </a>
            </div>
          </Col>

          <Col lg={5} className="mt-5 mt-lg-0">
            <Lottie animationData={codingAnimation} loop={true} />
          </Col>
        </Row>
      </Container>
      
      <div className="position-absolute bottom-0 start-50 translate-middle-x mb-4 d-none d-lg-block">
        <Link to="about" smooth={true} duration={500} offset={-70} style={{ cursor: 'pointer' }} title="Scroll Down">
          <FaChevronDown size={28} className="text-muted" />
        </Link>
      </div>
    </section>
  );
};

export default Home;

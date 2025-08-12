import React from 'react';
import { Link } from 'react-scroll';
import { TypeAnimation } from 'react-type-animation';
import { Container, Row, Col } from 'react-bootstrap';
import Lottie from "lottie-react";
import codingAnimation from "../assets/software-engineer.json";

const Home = () => {
  return (
    // bg-light class hata di hai taaki background color poore page jaisa ho
    <section id="home" className="d-flex align-items-center" style={{ minHeight: '100vh', background: '#FFFFFF' }}>
      <Container>
        <Row className="align-items-center">
          {/* Left Column: Text Content */}
          <Col md={7} className="text-center text-md-start">
            <h1 className="display-3 fw-bold">
              Hi, I'm <span className="text-primary">Anshuman Singh</span>
            </h1>
            
            {/* Typing Animation */}
            <TypeAnimation
              sequence={[
                'MERN Stack Developer', 2000,
                'Problem Solver', 2000,
                'Tech Enthusiast', 2000,
              ]}
              wrapper="p"
              speed={50}
              className="lead text-muted fs-4"
              repeat={Infinity}
            />

            {/* Buttons */}
            <div className="mt-4">
              <Link
                to="projects"
                smooth={true}
                duration={500}
                offset={-70}
                className="btn btn-primary btn-lg me-3"
              >
                View My Work
              </Link>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                offset={-70}
                className="btn btn-outline-dark btn-lg"
              >
                Contact Me
              </Link>
            </div>
          </Col>

          {/* Right Column: Animation */}
          <Col md={5} className="mt-4 mt-md-0 d-none d-md-block">
            <Lottie animationData={codingAnimation} loop={true} />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Home;

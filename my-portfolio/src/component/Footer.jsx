import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-white p-4 text-center">
      <Container>
        <Row>
          <Col>
            <div className="mb-3">
              <a href="https://github.com/Anshuman-Singh05" target="_blank" rel="noopener noreferrer" className="text-white me-4">
                <FaGithub size={28} />
              </a>
              <a href="https://www.linkedin.com/in/anshumansingh2005/" target="_blank" rel="noopener noreferrer" className="text-white">
                <FaLinkedin size={28} />
              </a>
            </div>
            <p className="mb-0">&copy; {new Date().getFullYear()} Anshuman Singh. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

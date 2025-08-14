import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { FaGraduationCap, FaCalendarAlt, FaLightbulb, FaCode, FaBookReader } from 'react-icons/fa';

const About = () => {
  const skills = {
    Frontend: [
      { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "Bootstrap", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
      { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    ],
    Backend: [
      { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Express.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    ],
    Database: [
      { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    ],
    Tools: [
      { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
      { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      { name: "Postman", logo: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
      { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    ],
  };

  return (
    <section
      id="about"
      className="about-section py-5 position-relative"
      style={{
        paddingTop: '100px', 
        paddingBottom: '100px',
        marginTop: '-1px'
      }}
    >
      <div className="container" data-aos="fade-up">
        <div className="text-center">
          <h1 className="fw-bolder mb-4">About Me</h1>
        </div>
        
        <Row className="align-items-center justify-content-center mb-5">
          <Col lg={7} data-aos="fade-right">
            <p className="lead fw-normal" style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
              Hello! I'm Anshuman, a dedicated BCA (DS & AI) student at BBD University (Batch of 2026) with a deep passion for MERN Stack Development. My journey is driven by a desire to solve complex problems with elegant solutions. I thrive on turning ideas into reality and am committed to writing clean, scalable code.
            </p>
          </Col>
          <Col lg={4} className="mt-4 mt-lg-0" data-aos="fade-left">
            <Card className="border-light shadow">
              <Card.Body>
                <Card.Title className="text-primary fw-bold">My Education</Card.Title>
                <hr style={{ borderColor: 'rgba(255, 255, 255, 0.2)' }}/>
                <div className="d-flex align-items-center mb-3">
                  <FaGraduationCap size={24} className="me-3 text-primary" />
                  <div>
                    <h6 className="mb-0 fw-bold">BCA</h6>
                    <p className="mb-0 text-light small">BBD University, Lucknow</p>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <FaCalendarAlt size={24} className="me-3 text-primary" />
                  <div>
                    <h6 className="mb-0 fw-bold">Passout Year</h6>
                    <p className="mb-0 text-light small">2026</p>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        
        <div className="text-center my-5" data-aos="fade-up">
          <h2 className="fw-bolder mb-5">My Development Philosophy</h2>
          <Row>
            <Col md={4} className="mb-4" data-aos="fade-up" data-aos-delay="100">
              <Card className="h-100 p-3 approach-card" style={{ border: '1px solid transparent', transition: 'all 0.3s ease' }} onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-10px)'; e.currentTarget.style.borderColor = 'rgba(0, 123, 255, 0.5)'; }} onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'transparent'; }}>
                <Card.Body>
                  <div className="p-3 mb-3 d-inline-block rounded-circle" style={{ background: 'rgba(0, 123, 255, 0.1)' }}>
                    {/* --- Icon color fix --- */}
                    <FaLightbulb size={32} className="text-primary" />
                  </div>
                  <h5 className="fw-bold text-white">Problem Solving</h5>
                  {/* --- Text color fix --- */}
                  <p className="text-white-50">I break down complex problems to find the most effective and scalable solutions.</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4" data-aos="fade-up" data-aos-delay="200">
              <Card className="h-100 p-3 approach-card" style={{ border: '1px solid transparent', transition: 'all 0.3s ease' }} onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-10px)'; e.currentTarget.style.borderColor = 'rgba(0, 123, 255, 0.5)'; }} onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'transparent'; }}>
                <Card.Body>
                  <div className="p-3 mb-3 d-inline-block rounded-circle" style={{ background: 'rgba(0, 123, 255, 0.1)' }}>
                    {/* --- Icon color fix --- */}
                    <FaCode size={32} className="text-primary" />
                  </div>
                  <h5 className="fw-bold text-white">Clean Code</h5>
                  {/* --- Text color fix --- */}
                  <p className="text-white-50">I believe in writing clean, readable, and maintainable code that follows best practices.</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4" data-aos="fade-up" data-aos-delay="300">
              <Card className="h-100 p-3 approach-card" style={{ border: '1px solid transparent', transition: 'all 0.3s ease' }} onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-10px)'; e.currentTarget.style.borderColor = 'rgba(0, 123, 255, 0.5)'; }} onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'transparent'; }}>
                <Card.Body>
                  <div className="p-3 mb-3 d-inline-block rounded-circle" style={{ background: 'rgba(0, 123, 255, 0.1)' }}>
                    {/* --- Icon color fix --- */}
                    <FaBookReader size={32} className="text-primary" />
                  </div>
                  <h5 className="fw-bold text-white">Continuous Learning</h5>
                  {/* --- Text color fix --- */}
                  <p className="text-white-50">Always exploring new technologies to stay updated with the latest industry trends.</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>

        <hr className="my-5" style={{ borderColor: 'rgba(255, 255, 255, 0.2)' }} />

        <div className="text-center" data-aos="fade-up">
          <h2 className="fw-bolder mb-5">My Technical Skills</h2>
        </div>

        <Row className="justify-content-center">
          {Object.entries(skills).map(([category, items], index) => (
            <Col key={category} md={6} lg={5} className="mb-4" data-aos="fade-up" data-aos-delay={`${index * 100}`}>
              <Card className="h-100">
                <Card.Body className="text-center">
                  <Card.Title className="text-primary fw-bold mb-4">{category}</Card.Title>
                  <div className="d-flex justify-content-center flex-wrap" style={{ gap: '1.5rem' }}>
                    {items.map((skill) => (
                      <div key={skill.name} className="text-center" style={{ width: "90px", transition: 'transform 0.2s ease-in-out', cursor: 'pointer' }} title={skill.name} onMouseOver={(e) => { e.currentTarget.style.transform = 'scale(1.15)'; }} onMouseOut={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}>
                        <img src={skill.logo} alt={skill.name} style={{ height: "45px", objectFit: "contain" }} />
                        <p className="mt-2 mb-0 small">{skill.name}</p>
                      </div>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      <div className="position-absolute bottom-0 start-0 w-100" style={{ transform: "translateY(99%) rotate(180deg)", zIndex: 1 }}>
        <svg viewBox="0 0 1440 320">
          <path d="M0,160L48,160C96,160,192,160,288,144C384,128,480,96,576,106.7C672,117,768,171,864,186.7C960,203,1056,181,1152,160C1248,139,1344,117,1392,106.7L1440,96V320H0Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default About;

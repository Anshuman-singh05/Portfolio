import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card, Button, Badge, Spinner, Alert } from 'react-bootstrap';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setError('');
        setLoading(true);
        const res = await axios.get('http://localhost:5000/api/projects');
        setProjects(res.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching projects:', err);
        setError('Failed to load projects. Please try again later.');
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  // Show a loading spinner while fetching data
  if (loading) {
    return (
      <section id="projects" className="py-5 bg-light text-center">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </section>
    );
  }

  // Show an error message if fetching fails
  if (error) {
    return (
      <section id="projects" className="py-5 bg-light">
        <Container>
          <Alert variant="danger">{error}</Alert>
        </Container>
      </section>
    );
  }

  return (
    <section id="projects" className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
      <Container>
        <h1 className="text-center fw-bold mb-5">My Work</h1>
        <Row xs={1} md={2} lg={3} className="g-4">
          {projects.map((project) => (
            <Col key={project._id}>
              <Card className="h-100 shadow-sm border-0 project-card">
                <Card.Img variant="top" src={project.imageUrl} onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x400/212529/FFF?text=Image+Not+Found' }} />
                <Card.Body className="d-flex flex-column p-4">
                  <Card.Title className="fw-bold">{project.title}</Card.Title>
                  <div className="mb-3">
                    {project.tags && project.tags.map((tag, index) => (
                      <Badge pill bg="primary" key={index} className="me-2 mb-2">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Card.Text>{project.description}</Card.Text>
                  <div className="mt-auto pt-3">
                    {project.liveLink && (
                      <Button variant="dark" href={project.liveLink} target="_blank" className="me-2">
                        Live Demo
                      </Button>
                    )}
                    {project.githubLink && (
                      <Button variant="outline-dark" href={project.githubLink} target="_blank">
                        GitHub
                      </Button>
                    )}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;

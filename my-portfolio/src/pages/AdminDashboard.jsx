import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  Container,
  Button,
  Navbar,
  Form,
  Card,
  Row,
  Col,
  ListGroup,
  Alert,
} from 'react-bootstrap';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    imageUrl: '',
    tags: '',
    liveLink: '',
    githubLink: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Function to get the auth token from localStorage
  const getToken = () => localStorage.getItem('token');

  // Fetch all projects when the component loads
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/projects');
        setProjects(res.data);
      } catch (err) {
        console.error('Error fetching projects:', err);
        setError('Could not fetch projects.');
      }
    };
    fetchProjects();
  }, []);

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  // Handle Add Project form submission
  const onSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    const config = {
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': getToken(),
      },
    };

    // Convert comma-separated tags string to an array
    const projectData = {
      ...formData,
      tags: formData.tags.split(',').map(tag => tag.trim()),
    };

    try {
      const res = await axios.post('http://localhost:5000/api/projects', projectData, config);
      setProjects([res.data, ...projects]); // Add new project to the top of the list
      setSuccess('Project added successfully!');
      // Clear form
      setFormData({
        title: '', description: '', imageUrl: '', tags: '', liveLink: '', githubLink: '',
      });
    } catch (err) {
      setError('Failed to add project.');
      console.error(err.response ? err.response.data : err.message);
    }
  };

  // Handle Delete Project
  const deleteProject = async (id) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      const config = { headers: { 'x-auth-token': getToken() } };
      try {
        await axios.delete(`http://localhost:5000/api/projects/${id}`, config);
        setProjects(projects.filter((project) => project._id !== id));
        setSuccess('Project deleted successfully!');
      } catch (err) {
        setError('Failed to delete project.');
        console.error(err.response ? err.response.data : err.message);
      }
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" className="mb-5">
        <Container>
          <Navbar.Brand>Admin Dashboard</Navbar.Brand>
          <Button variant="outline-light" onClick={handleLogout}>Logout</Button>
        </Container>
      </Navbar>

      <Container>
        <Row>
          {/* Add Project Form */}
          <Col md={5}>
            <Card>
              <Card.Header as="h4">Add New Project</Card.Header>
              <Card.Body>
                {error && <Alert variant="danger">{error}</Alert>}
                {success && <Alert variant="success">{success}</Alert>}
                <Form onSubmit={onSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" name="title" value={formData.title} onChange={onChange} required />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" rows={3} name="description" value={formData.description} onChange={onChange} required />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Image URL</Form.Label>
                    <Form.Control type="text" name="imageUrl" value={formData.imageUrl} onChange={onChange} required />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Tags (comma separated)</Form.Label>
                    <Form.Control type="text" name="tags" value={formData.tags} onChange={onChange} />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Live Link</Form.Label>
                    <Form.Control type="text" name="liveLink" value={formData.liveLink} onChange={onChange} />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>GitHub Link</Form.Label>
                    <Form.Control type="text" name="githubLink" value={formData.githubLink} onChange={onChange} />
                  </Form.Group>
                  <Button variant="primary" type="submit" className="w-100">Add Project</Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>

          {/* Projects List */}
          <Col md={7}>
            <Card>
              <Card.Header as="h4">Existing Projects</Card.Header>
              <ListGroup variant="flush">
                {projects.length > 0 ? (
                  projects.map((project) => (
                    <ListGroup.Item key={project._id} className="d-flex justify-content-between align-items-center">
                      {project.title}
                      <Button variant="danger" size="sm" onClick={() => deleteProject(project._id)}>Delete</Button>
                    </ListGroup.Item>
                  ))
                ) : (
                  <ListGroup.Item>No projects found.</ListGroup.Item>
                )}
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AdminDashboard;

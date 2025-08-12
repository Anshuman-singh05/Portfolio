import React, { useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState({ success: false, error: false, message: '' });

  const { name, email, message } = formData;

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/contact', formData);
      setStatus({ success: true, error: false, message: 'Thank you! Your message has been sent.' });
      setFormData({ name: '', email: '', message: '' }); // Clear form
    } catch (err) {
      setStatus({ success: false, error: true, message: 'Something went wrong. Please try again.' });
    }
  };

  return (
    <section id="contact" className="py-5 bg-light">
      <Container>
        <h1 className="text-center fw-bold mb-5">Get In Touch</h1>
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <Form onSubmit={onSubmit}>
              {status.message && (
                <Alert variant={status.success ? 'success' : 'danger'}>
                  {status.message}
                </Alert>
              )}
              <Form.Group className="mb-3">
                <Form.Label>Your Name</Form.Label>
                <Form.Control type="text" name="name" value={name} onChange={onChange} required />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" name="email" value={email} onChange={onChange} required />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={5} name="message" value={message} onChange={onChange} required />
              </Form.Group>
              <Button variant="dark" type="submit" className="w-100">
                Send Message
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;

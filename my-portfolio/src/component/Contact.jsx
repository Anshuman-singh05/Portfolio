import React, { useState, useContext } from "react";
import axios from "axios";
import { Container, Row, Col, Form, Button, Alert, Spinner } from "react-bootstrap";
import { ThemeContext } from "../context/ThemeContext.jsx";
import { motion } from "framer-motion"; // animation import
import Lottie from "lottie-react"; 
import contactAnimation from "../assets/contact-animation.json"; // apna lottie file yaha rakho

const Contact = () => {
  const { theme } = useContext(ThemeContext);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    inquiryType: "General",
    message: "",
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: false,
    message: "",
  });

  const { name, email, inquiryType, message } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: false, message: "" });

    try {
      const apiUrl = `${import.meta.env.VITE_API_URL}/api/contact`;
      await axios.post(apiUrl, formData);

      setStatus({
        loading: false,
        success: true,
        error: false,
        message: "✅ Thank you! Your message has been sent successfully.",
      });

      setFormData({
        name: "",
        email: "",
        inquiryType: "General",
        message: "",
      });
    } catch (err) {
      setStatus({
        loading: false,
        success: false,
        error: true,
        message: "❌ Something went wrong. Please try again later.",
      });
    }
  };

  const cardBg = theme === "dark" ? "#1e1e1e" : "#ffffff";

  return (
    <section
      id="contact"
      className={`py-10 px-4 ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      {/* Divider */}
      <hr
        style={{
          border: "none",
          height: "2px",
          backgroundColor: theme === "dark" ? "#444" : "#222",
          margin: "40px 0",
          width: "100%",
        }}
      />

      <Container data-aos="fade-up">
        <Row className="align-items-center">
          {/* Left side Lottie animation */}
          <Col md={6} className="text-center mb-4 mb-md-0">
            <Lottie animationData={contactAnimation} loop className="w-75 mx-auto" />
          </Col>

          {/* Right side form */}
          <Col md={6}>
            {/* Animated header */}
            <motion.div
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-center mb-4"
            >
              <h1 className="fw-bold">Get In Touch</h1>
              <p
                className={`lead ${
                  theme === "dark" ? "text-muted" : "text-secondary"
                }`}
              >
                I’m always open to discussing new projects, creative ideas, or
                opportunities to be part of your visions.
                Have a project in mind or just want to say hi? I’d love to hear
                from you!
              </p>
            </motion.div>

            {/* Status Alert */}
            {status.message && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                <Alert
                  variant={status.success ? "success" : "danger"}
                  className="text-center fw-bold"
                >
                  {status.message}
                </Alert>
              </motion.div>
            )}

            {/* Contact Form with fade animation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Form
                onSubmit={onSubmit}
                className="shadow-lg p-4 rounded"
                style={{ backgroundColor: cardBg }}
              >
                <Form.Group className="mb-3">
                  <Form.Label className="fw-semibold">Your Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={name}
                    onChange={onChange}
                    placeholder="Enter Your Name"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label className="fw-semibold">Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={email}
                    onChange={onChange}
                    placeholder="example@email.com"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label className="fw-semibold">I am a...</Form.Label>
                  <Form.Select
                    name="inquiryType"
                    value={inquiryType}
                    onChange={onChange}
                  >
                    <option value="General">General Inquiry</option>
                    <option value="Recruiter">Recruiter</option>
                    <option value="Collaborator">Potential Collaborator</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label className="fw-semibold">Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    name="message"
                    value={message}
                    onChange={onChange}
                    placeholder="Write your message here..."
                    required
                  />
                </Form.Group>

                <Button
                  variant="primary"
                  type="submit"
                  className="w-100 fw-bold py-2"
                  disabled={status.loading}
                >
                  {status.loading ? (
                    <>
                      <Spinner animation="border" size="sm" className="me-2" />{" "}
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </Form>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;

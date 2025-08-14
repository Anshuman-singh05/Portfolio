import React from 'react';
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card, Button, Badge, Spinner, Alert, Carousel } from 'react-bootstrap'; 
import { motion } from 'framer-motion';
import { ThemeContext } from '../context/ThemeContext.jsx';
import { FaFilePdf } from 'react-icons/fa';

// --- Project Card Component (Slider ke liye) ---
// Note: Is component ko ab hum seedha Carousel ke andar use karenge
const ProjectCard = ({ project }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const { theme } = useContext(ThemeContext);

    const descriptionExists = project.description && project.description.length > 0;
    const isLongDescription = descriptionExists && project.description.split(' ').length > 20;
    const truncatedDescription = isLongDescription ? project.description.split(' ').slice(0, 20).join(' ') + '...' : project.description;

    const cardClass = theme === 'dark' ? 'bg-dark text-white' : 'bg-white text-dark';
    const btnVariant = theme === 'dark' ? 'outline-light' : 'outline-dark';
    const btnText = theme === 'dark' ? 'light' : 'dark';

    return (
        <Card className={`h-100 shadow-lg border-0 ${cardClass} mx-auto`} style={{ maxWidth: '500px' }}>
            <Card.Img 
                variant="top" 
                src={project.imageUrl || 'https://placehold.co/600x400/343a40/ffffff?text=Project'} 
                onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x400/2c3e50/FFF?text=Image+Not+Found' }} 
                style={{ height: '250px', objectFit: 'cover' }}
            />
            <Card.Body className="d-flex flex-column p-4">
                <Card.Title className="fw-bold">{project.title}</Card.Title>
                <div className="mb-3">
                    {project.tags && project.tags.map((tag, i) => (
                        <Badge pill bg="primary" key={i} className="me-2 mb-2 fw-normal">{tag}</Badge>
                    ))}
                </div>
                <Card.Text className={theme === 'dark' ? 'text-light' : 'text-muted'}>
                     {isExpanded ? project.description : truncatedDescription}
                </Card.Text>
                
                {isLongDescription && (
                     <Button 
                        variant="link" 
                        onClick={() => setIsExpanded(!isExpanded)}
                        className={`p-0 text-decoration-none mt-auto align-self-start text-${btnText}`}
                    >
                        {isExpanded ? 'View Less' : 'View More'}
                    </Button>
                )}

                <div className="mt-auto pt-3">
                    {project.liveLink && (
                        <Button variant={btnText} href={project.liveLink} target="_blank" className="me-2">Live Demo</Button>
                    )}
                    {project.githubLink && (
                        <Button variant={btnVariant} href={project.githubLink} target="_blank" className="me-2">GitHub</Button>
                    )}
                    {project.documentationLink && (
                        <Button variant={btnVariant} href={project.documentationLink} target="_blank">
                            <FaFilePdf className="me-2" /> Docs
                        </Button>
                    )}
                </div>
            </Card.Body>
        </Card>
    );
};


// --- Main Projects Component ---
const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const { theme } = useContext(ThemeContext);

    const sectionClass = theme === 'dark' ? 'bg-dark text-white' : 'bg-light text-dark';
    const textMutedClass = theme === 'dark' ? 'text-light' : 'text-muted';
    const hrColor = theme === 'dark' ? '#444' : '#ccc';

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                setError('');
                setLoading(true);
                const apiUrl = `${import.meta.env.VITE_API_URL}/api/projects`;
                const res = await axios.get(apiUrl);
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

    return (
        <section id="projects" className={`py-5 ${sectionClass}`}>
            <Container>
                <hr style={{ borderTop: `2px solid ${hrColor}`, margin: '2rem 0' }} />
                <div className="text-center">
                    <h2 className="fw-bold mb-5">My Projects</h2>
                </div>

                {loading && (
                    <div className="text-center"><Spinner animation="border" variant={theme === 'dark' ? 'light' : 'dark'} /></div>
                )}
                {error && <Alert variant="danger">{error}</Alert>}

                {!loading && !error && (
                    <>
                        {projects.length > 0 ? (
                            // --- Grid ki jagah Carousel ---
                            <Carousel interval={null} indicators={false} variant={theme === 'dark' ? 'light' : 'dark'}>
                                {projects.map((project) => (
                                    <Carousel.Item key={project._id} className="p-4">
                                        <ProjectCard project={project} />
                                    </Carousel.Item>
                                ))}
                            </Carousel>
                        ) : (
                            <div className="text-center">
                                <p className={`lead ${textMutedClass}`}>New projects are on the way. Please check back soon!</p>
                            </div>
                        )}
                    </>
                )}
            </Container>
        </section>
    );
};

export default Projects;

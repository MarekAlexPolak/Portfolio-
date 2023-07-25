import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap'; // Assuming you are using Bootstrap for styling

const projects = [
  {
    id: 1,
    title: 'Project 1',
    description: 'A brief description of project 1.',
    imageUrl: 'https://example.com/project1.jpg',
    liveDemoUrl: 'https://example.com/project1-demo',
    sourceCodeUrl: 'https://github.com/your-username/project1',
  },
  // Add more projects as needed
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <Container>
        <h2>Portfolio</h2>
        <Row>
          {projects.map((project) => (
            <Col key={project.id} md={4}>
              <Card className="mb-4">
                <Card.Img variant="top" src={project.imageUrl} />
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <Button variant="primary" href={project.liveDemoUrl} target="_blank">
                    Live Demo
                  </Button>
                  <Button variant="secondary" href={project.sourceCodeUrl} target="_blank">
                    Source Code
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Portfolio;
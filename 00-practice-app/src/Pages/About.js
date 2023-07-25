import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'; // Assuming you are using Bootstrap for styling

const About = () => {
  return (
    <section id="about">
      <Container>
        <Row>
          <Col md={6}>
            <h2>About Me</h2>
            <p>
              Hello! I'm [Your Name], a passionate web developer with a keen interest in creating
              delightful user experiences. I have a strong foundation in front-end technologies
              like HTML, CSS, and JavaScript, and I enjoy building modern and responsive web
              applications.
            </p>
            <p>
              My journey into web development started [briefly describe your background or journey
              into programming]. Over the years, I've gained experience working with various
              frameworks and libraries, and I always strive to learn and stay up-to-date with the
              latest trends in the industry.
            </p>
          </Col>
          <Col md={6}>
            {/* You can add an image of yourself here if you want */}
            {/* <img src="your-image-url" alt="Your Name" className="img-fluid" /> */}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'; 
import photo from "../assets/images/me.PNG";

const About = () => {
  return (
    <section id="about">
      <Container>
        <Row>
          <Col md={6}>
            <h2>About Me</h2>
            <p>
              Hello! I'm Marek Polak, a passionate web developer with a keen interest in creating
              delightful user experiences. I have a strong foundation in front-end technologies
              like HTML, CSS, and JavaScript, as well as backend technologies including but not limited to, node.js, express.js, mongoDB and SQL!
            </p>
            <p>
              My journey into web development started in January when I realized I really enjoyed coding. I've gained experience working with various
              frameworks and libraries, and I always strive to learn and stay up-to-date with the
              latest trends in the industry.
            </p>
          </Col>
          <Col md={6}>
            {<img src={photo} alt="Marek Polak" className="img-fluid" />}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
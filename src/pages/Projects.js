import React from 'react';
import ProjectCard from '../components/cards/ProjectCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import projects from '../data/ProjectData';

function Projects() {

  return (
    <Container>
      <Row>
        <Col>
          <h1>Projects</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>Here are some of my projects:</p>
        </Col>
      </Row>
      <Row>
        <Col>
          {projects.map(project => (
            <ProjectCard project={project} key={project.title}/>
          ))}
        </Col>
      </Row>
    </Container>
  )
}

export default Projects;
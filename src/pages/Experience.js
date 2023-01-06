import React from 'react';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css"
import ExperienceCard from '../components/cards/ExperienceCard';
import  experiences from '../data/ExperiencesData';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Experience() {
  return (
    <Container>
      <Row>
        <Col className="mb-3">
          <h1>Experiences</h1>
        </Col>
      </Row>
      <Row>
        <Col>
      <VerticalTimeline 
        lineColor="black"
        >
        {experiences.map(experience =>
            <ExperienceCard experience={experience}/>
            )}
      </VerticalTimeline>
        </Col> 
      </Row>
    </Container>
    
  )
}

export default Experience;
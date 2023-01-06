import React from 'react';
import ProfileCard from '../components/cards/ProfileCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SkillCard from '../components/cards/SkillCard';
import skills from '../data/SkillData';

function Home() {
  return (
      <Container>

        <Row>
          <Col xs={9} sm={5} className='mx-auto'>
            <ProfileCard key="profileCard"></ProfileCard>
          </Col>
        </Row>
        <Row className='m-4'>
          <Col>
            {/* <h1>Skills:</h1> */}
          </Col>
        </Row>

        {skillSection()}
        
      </Container>
  )
}


function skillSection(){
  return (
    skills.map(skill =>
    <Row className='m-3'>
      <Col className='mx-auto m-1'>
        <SkillCard skill={skill} key={"card"+skill.title}>
        </SkillCard>
      </Col>
    </Row>
  )
  )
}
export default Home
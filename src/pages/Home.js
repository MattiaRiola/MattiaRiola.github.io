import React from 'react';
import ProfileCard from '../components/cards/ProfileCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SkillCard from '../components/cards/SkillCard';
import skills from '../data/SkillData';
import Card from 'react-bootstrap/Card';

function Home() {
  return (
      <Container>

        <Row>
          <Col xs={9} sm={7} className='mx-auto'>
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
  //A section with a list of SkillCards at full width of the screen 2 cards must appear in the same row
  // for smaller width screens the cards must be stacked
  // the cards must be centered
  return (
    <Card className="shadow-lg p-3 mb-3 bg-primary rounded" key="SkillSection">
      <Card.Header style={{ marginBottom: '20px' }}>
        <h1>What I can do</h1>
      </Card.Header>
      <Row>
        {skills.map((skill) => (
          <Col xs={12} sm={12} md={6} lg={6} xl={4} className='mx-auto d-flex align-items-stretch'>
            <SkillCard key={skill.id} skill={skill}></SkillCard>
          </Col>
        ))}
      </Row>
    </Card>
  )
}
export default Home
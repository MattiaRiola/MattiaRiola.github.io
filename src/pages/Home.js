import React from 'react';
import ProfileCard from '../components/ProfileCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SkillCard from '../components/SkillCard';

const skills = [
  {
    title: "GameDeveloper",
    description: "I have experience in developing Games as Game Designer, Level Designer and Game programmer using Unity (C#)"
  },
  {
    title: "WebDeveloper (BE)",
    description: "I have experience in developing monolithic server and microservices using Java/Kotlin + Spring Framework and Golang"
  },
  {
    title: "WebDeveloper (FE)",
    description: "I have experience in developing web applications using React and Node.js; I also have experience in developing android mobile applciation using kotlin and firebase"
  },
  {
    title: "DevOps",
    description: "I have experience in developing CI/CD pipelines using Gitlab CI, docker and docker-compose"
  }
];


function Home() {
  return (
    <div className="home">
      <Container>

        <Row>
          <Col />
          <Col xs={9} sm={5}>
            <ProfileCard></ProfileCard>
          </Col>
          <Col />
        </Row>
        <Row className='m-4'><Col><h1>Skills:</h1></Col></Row>

        {skills.map(skill =>
          <Row className='m-3'>
            <Col />
            <Col xs={9}>
              <SkillCard title={skill.title} description={skill.description}>
              </SkillCard>
            </Col>
            <Col />
          </Row>
        )}
      </Container>

    </div>
  )
}

export default Home
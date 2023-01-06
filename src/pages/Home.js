import React from 'react';
import ProfileCard from '../components/cards/ProfileCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SkillCard from '../components/cards/SkillCard';

const skills = [
  {
    title: "Game Developer",
    description: "I have experience in developing Games as Game Designer, Level Designer and Game programmer using Unity (C#)",
    icon: "arcade.gif",
    languages: ["C#", "Unity", "GameDesign principles", "LevelDesign principles", "Gameplay programming"],
    projects: [
      {title: "But They Are Cats",url:"https://thefellowshipofthebox.itch.io/but-they-are-cats"},
      //{title: "Space Shooter",url:"https://github.com/MattiaRiola/Space-Shooter-Pro"},
    ],
  },
  {
    title: "Web Developer (BE)",
    description: "I have experience in developing monolithic server and microservices using Java/Kotlin + Spring Framework and Golang",
    icon: "server.gif",
    languages: ["Java", "Kotlin", "Spring", "Golang","C++","js express","SQL","MongoDB","maven","gradle"],
    projects: [
      {title: "Public transportation manager",url:"https://github.com/A-short-name/Public-Transportation-Manager"},
      {title: "SPG",url:"https://github.com/SE2-GROUP-P12/SPG"},
      {title: "Office queue manager",url: "https://github.com/SE2-GROUP-P12/office-queue-management"},
      {title: "ezgas",url:"https://github.com/MattiaRiola/ezgas"},
      {title: "Remote backup system",url:"https://github.com/MattiaRiola/PDS-M1-Project"},
    ]
  },
  {
    title: "Web Developer (FE)",
    description: "I have experience in developing web applications using React and Node.js; I also have experience in developing android mobile applciation using kotlin and firebase",
    icon: "web-page.gif",
    languages: ["React", "js", "react-bootstrap","express"],
    projects: [
      {title: "Todo manager",url:"https://github.com/MattiaRiola/wa1_todo_dynamic"},
      {title:"exam survey",url:"https://github.com/MattiaRiola/WA1_exam_survey"},
    ]
  },
  {
    title: "Mobile Developer",
    description: "I have experience in developing android mobile applications using kotlin and firebase",
    icon: "smartphone.gif",
    languages: ["Kotlin", "Firebase","jetpack compose","android studio"],
    projects: [
      {title: "Piggy timebank",url:"https://github.com/A-short-name/G01-Timebanking"},
    ]
  },
  {
    title: "DevOps",
    description: "I have experience in developing CI/CD pipelines using Gitlab CI, docker and docker-compose",
    languages: ["Gitlab CI", "docker", "docker-compose"],
    icon: "loop.gif",
    projects: [

    ]
  }
];


function Home() {
  return (
    <div className="home">
      <Container>

        <Row>
          <Col xs={9} sm={5} className='mx-auto'>
            <ProfileCard></ProfileCard>
          </Col>
        </Row>
        <Row className='m-4'>
          <Col>
            {/* <h1>Skills:</h1> */}
          </Col>
        </Row>

        {skillSection()}
        
      </Container>

    </div>
  )
}


function skillSection(){
  return (
    skills.map(skill =>
    <Row className='m-3'>
      <Col className='mx-auto m-1'>
        <SkillCard skill={skill}>
        </SkillCard>
      </Col>
    </Row>
  )
  )
}
export default Home
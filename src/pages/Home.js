import React from 'react';
import ProfileCard from '../components/cards/ProfileCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SkillCard from '../components/cards/SkillCard';
import skills from '../data/SkillData';
import rawHTMLFromMyGithubPageSmall from '../data/ToolsFromGithubPageSmall';
import Card from 'react-bootstrap/Card';

function Home() {
  return (
      <Container>

        <Row style={{ marginBottom: '20px' }}>
          <Card className="shadow-lg p-3 mb-3 bg-primary rounded d-none d-lg-block" key="ProfileSection">
            <Row>
              <Col xs={12} sm={12} lg={3} className='mx-auto'>
                <ProfileCard key="profileCard"></ProfileCard>
              </Col>
              <Col xs={12} sm={12} lg={9} className='mx-auto my-auto stretch-content d-none d-lg-block'>
                {toolSection()}
              </Col>
            </Row>
          </Card>
          <Col xs={12} sm={12} lg={3} className='mx-auto d-block d-lg-none'>
            <ProfileCard key="profileCard"></ProfileCard>
          </Col>
        </Row>
        <Row className='stretch-columns'>
          {skillSection()}
        </Row>
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
          <Col key={"ColSkill"+skill.id} xs={12} sm={12} md={6} lg={6} xl={4} className='mx-auto d-flex align-items-stretch'>
            <SkillCard key={skill.id} skill={skill}></SkillCard>
          </Col>
        ))}
      </Row>
    </Card>
  )
}


function toolSection(){

  return (
    <Card className="shadow bg-secondary p-3 rounded" key="SkillSection">
      <Card.Header style={{ marginBottom: '20px' }}>
        <h1>Technologies I know</h1>
      </Card.Header>
        <div dangerouslySetInnerHTML={{ __html: rawHTMLFromMyGithubPageSmall }} />
    </Card>
  )
}
export default Home
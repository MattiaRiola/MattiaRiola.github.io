import React from 'react'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Chip } from '@material-ui/core';

function SkillCard(props) {

  const skill = props.skill;
  const languages = props.skill.languages;
  return (
    <Card className="shadow-lg p-3 mb-3 bg-secondary rounded">
      <Card.Header>
        <h2>{skill.title}</h2>
      </Card.Header>
      <Container>
        <Row>
          <Col>
            <Card.Img sm={4} md={2} className="my-auto d-none d-sm-block"
              variant="top"
              src={process.env.PUBLIC_URL + '/resources/icons/' + skill.icon}
            />
          </Col>
          <Col sm={8} md={10} className="my-auto">
            <Card.Text>
              {skill.description}
            </Card.Text>
            <LanguageChips languages={languages}/>
          </Col>
        </Row>
      </Container>
      <Card.Body >
        <h3 className="my-auto d-none d-sm-block"></h3>
      </Card.Body>
    </Card>
  )
}

function LanguageChips(props){
  const languages = props.languages;
  return(
    <div>
      {languages.map((language) => (
        <Chip label={language}  
          style={{margin: "5px"}}
        />
      ))}
    </div>
  )
}

export default SkillCard
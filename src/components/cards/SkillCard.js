import React from 'react'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Chip } from '@material-ui/core';
import colors from '../../styles/Colors';

function SkillCard(props) {

  const skill = props.skill;
  const languages = props.skill.languages;
  return (
    <Card className="shadow-lg p-3 mb-3 bg-secondary rounded" key={skill.title} sm={8} md={3}>
      <Card.Header>
        <h3>{skill.title}</h3>
      </Card.Header>
      <Container>
        <Row>
          <Col>
            <Card.Img sm={4} md={2} className="my-auto"
              variant="top"
              src={process.env.PUBLIC_URL + '/resources/icons/' + skill.icon}
            />
          </Col>
        </Row>
        <Row>
          {/* in line languages chips */}
          <LanguageChips languages={languages}></LanguageChips>
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
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {languages.map((language) => (
        <Chip label={language} key={language}  
          style={{margin: "2px", backgroundColor: colors.secondaryLight}}
        />
      ))}
    </div>
  )
}

export default SkillCard
import React from 'react'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Chip } from '@material-ui/core';
import colors from '../../styles/Colors';


function ProjectCard(props) {
    const project = props.project;
    const languages = props.project.languages;
  
    return (
      <Card className="shadow-lg p-3 mb-3 bg-secondary rounded" key={project.title}>
          <Card.Header>
              <h2>{project.title}</h2>
          </Card.Header>
          <Card.Body>
              <Container>
                  <Row xs={1} className="mx-auto">
                      <Col className="my-auto mx-auto d-block d-lg-none">
                          <Card.Img 
                              variant="top"
                              src={process.env.PUBLIC_URL + '/resources/projects/' + project.img}
                          />
                      </Col>
                  </Row>
                  <Row className="my-2">
                      <Col sm={3} md={3} className="my-auto d-none d-lg-block">
                          <Card.Img 
                              variant="top"
                              src={process.env.PUBLIC_URL + '/resources/projects/' + project.img}
                          />
                      </Col>
                      <Col sm={9} md={9} className="my-auto">
                          <div>
                              <br />
                              <p>📄 {project.description}</p>
                              <p>🎯 {project.objectives}</p>
                              <br />
                          </div>
                          {project.url ? 
                              <a style={{ color: colors.grey }} href={project.url} title={project.title}>
                                  more information
                              </a> : <></>
                          }
                          <br />
                          <br />
                          <LanguageChips languages={languages} />
                      </Col>
                  </Row>
              </Container>
          </Card.Body>
          <Card.Footer className="d-flex justify-content-between">
              <span>{getPurposeEmoji(project.purpose) + " " + project.purpose}</span>
              <span>{"team size: "+"👤".repeat(project.teamSize)}</span>
          </Card.Footer>
      </Card>
    )
}

function getPurposeEmoji(purpose) {
    switch (purpose) {
      case 'academic':
        return '🎓';
      case 'personal':
        return '❤️';
      case 'hobby':
        return '🎳';
      case 'job':
        return '💼';
      default:
        return '';
    }
  }

function LanguageChips(props) {
    const languages = props.languages;
    return (
        <div style={{display: "flex", flexWrap: "wrap"}}>
            {languages.map((language) => (
                <Chip label={language} key={language}
                    style={{ margin: "5px", color: colors.grey, backgroundColor: colors.secondaryLight }}
                    color={colors.secondary}
                />
            ))}
        </div>
    )
}

export default ProjectCard
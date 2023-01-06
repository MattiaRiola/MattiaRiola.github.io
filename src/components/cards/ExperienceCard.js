import React from 'react'
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import colors from "../../styles/Colors"
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';
import CodeIcon from '@material-ui/icons/Code';
import { Container, Row, Col } from 'react-bootstrap';
import { Image } from 'react-bootstrap';

function ExperienceCard(props) {
  var experience = props.experience;
  return (
    <VerticalTimelineElement
      key={experience.title}
      contentStyle={{ background: colors.secondary, color: 'black' }}
      contentArrowStyle={{ borderRight: '7px solid' + colors.secondary }}
      date={experience.date}
      dateClassName="vertical-timeline-element-date"
      iconStyle={{ background: colors.secondaryDark, color: '#EEE' }}
      icon={icon(experience.iconType)}
    >
      <div>
        <Container fluid>
          <Row>
            <Col xs={4} className="my-auto">
              <Image fluid={true} 
                src={process.env.PUBLIC_URL + '/resources/icons/'+experience.experienceImg}
              />
            </Col>
            <Col xs={8} className="my-auto">
              <h3 className="vertical-timeline-element-title">{experience.title}</h3>
              <h5 className="vertical-timeline-element-subtitle" style={{ color: 'grey' }}>{experience.company} </h5>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className="vertical-timeline-element-description">{experience.description}</p>
            </Col>
          </Row>
        </Container>
      </div>

    </VerticalTimelineElement>
  )
}

function icon(iconType) {
  switch (iconType) {
    case "school":
      return <SchoolIcon />
    case "coding":
      return <CodeIcon />
    case "work":
      return <WorkIcon />
    default:
      return <SchoolIcon />
  }
}

export default ExperienceCard
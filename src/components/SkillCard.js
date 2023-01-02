import React from 'react'
import Card from 'react-bootstrap/Card';
function SkillCard(props) {
  return (
    <Card  className="shadow-lg p-3 mb-3 bg-secondary rounded">
    <Card.Body>
      <Card.Title>{props.title}</Card.Title>
      <Card.Text>
        {props.description}
      </Card.Text>
    </Card.Body>
  </Card>
  )
}

export default SkillCard
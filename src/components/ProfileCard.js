import React from 'react'
import { GitHub,Email,LinkedIn } from '@material-ui/icons';
import Card from 'react-bootstrap/Card';

function ProfileCard() {
  return (
    <Card className="shadow bg-secondary p-3 rounded">
    <Card.Img variant="left"src="https://avatars.githubusercontent.com/u/62254235?v=4" />
    <Card.Body>
      <Card.Title>Hi, I'm Mattia Riola</Card.Title>
      <Card.Text>
        A software engineer with passion in learning and creating
      </Card.Text>
      <LinkedIn/>
      <Email/>
      <GitHub/>
    </Card.Body>
  </Card>
  )
}

export default ProfileCard
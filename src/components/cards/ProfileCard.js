import React from 'react'
import { GitHub,Email,LinkedIn } from '@material-ui/icons';
import Card from 'react-bootstrap/Card';

function ProfileCard() {
  return (
    <Card className="shadow bg-secondary p-3 rounded" key="innerProfileCard">
    <Card.Img 
      variant="top"
      src="https://avatars.githubusercontent.com/u/62254235?v=4"  
    />
    <Card.Body>
      <Card.Title>Hi, I'm Mattia Riola</Card.Title>
      <Card.Text>
        A software engineer with passion in learning and creating
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <LinkedIn/>
      <Email/>
      <GitHub/>
    </Card.Footer>
  </Card>
  )
}

export default ProfileCard
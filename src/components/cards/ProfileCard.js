import React from 'react'
import { GitHub, Email, LinkedIn } from '@material-ui/icons';
import Card from 'react-bootstrap/Card';
import links from '../../data/PersonalData';



function ProfileCard() {
  return (
    <Card className="shadow bg-secondary p-3 rounded" key="innerProfileCard">
      <Card.Img
        variant="top"
        src={process.env.PUBLIC_URL + '/resources/icons/Mattia-laptop.png'}
      />
      <Card.Body>
        <Card.Title>Hi, I'm Mattia Riola</Card.Title>
        <Card.Text>
          A software engineer with passion in learning and creating
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <Card.Link style={{color: 'black'}} href={links.linkedin}>
          <LinkedIn />
        </Card.Link>
        <Card.Link style={{color: 'black'}} href={links.email}>
          <Email />
        </Card.Link>
        <Card.Link style={{color: 'black'}} href={links.github}>
          <GitHub />
        </Card.Link>
      </Card.Footer>
    </Card>
  )
}

export default ProfileCard
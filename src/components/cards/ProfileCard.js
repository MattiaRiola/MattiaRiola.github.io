import React from 'react'
import { GitHub, Email, LinkedIn } from '@material-ui/icons';
import Card from 'react-bootstrap/Card';
import links from '../../data/LinksData';
import rawHTMLFromMyGithubPageSmall from '../../data/ToolsFromGithubPageSmall';


function ProfileCard() {
  return (
    <Card className="shadow bg-secondary p-3 rounded align-items-stretch" key="innerProfileCard">
      
      <Card.Body>
        <Card.Title>Hi, I'm <span style={{fontSize: '24px'}}>Mattia Riola</span></Card.Title>
        <Card.Text>
          A <b>software engineer</b> with a passion in learning and creating
        </Card.Text>
      <Card.Img
        variant="top"
        src={process.env.PUBLIC_URL + '/resources/icons/Mattia-laptop.png'}
        />
        <Card.Text className="d-block d-lg-none">
          <div dangerouslySetInnerHTML={{ __html: rawHTMLFromMyGithubPageSmall }} />
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
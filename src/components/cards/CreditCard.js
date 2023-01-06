import React from 'react'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function CreditCard(props) {

  const credit = props.credit;
  return (
    <Card className="shadow-lg p-3 mb-3 rounded" key={credit.icon}>
      <Container>
        <Row>
          <Col>
            <Card.Img sm={4} md={2} className="my-auto d-none d-sm-block"
              variant="top"
              src={process.env.PUBLIC_URL + '/resources/icons/' + credit.icon}
            />
          </Col>
          <Col sm={8} md={10} className="my-auto">
            <a href={credit.website} title={credit.description}>{credit.description}</a>
          </Col>
        </Row>
      </Container>
    </Card>
  )
}

export default CreditCard
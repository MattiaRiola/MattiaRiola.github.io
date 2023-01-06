import React from 'react'
import CreditCard from '../components/cards/CreditCard';
import credits from '../data/CreditList'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

function Credits() {
  return (
    <Container>
      {
        credits.map(credit =>
          <Row className='m-3'>
            <Col className='mx-auto m-1'>
              <CreditCard credit={credit} key={"card" + credit.icon}>
              </CreditCard>
            </Col>
          </Row>
        )
      }
    </Container>
  )
}

export default Credits
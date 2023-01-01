import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link }from 'react-router-dom';

function PortfolioNavbar() {
  return (
    <>
        <Navbar bg="secondary" variant="dark">
          <Container mx-auto>
            <Navbar.Brand href="home">Navbar</Navbar.Brand>
            <Nav className="m-auto">
              <Nav.Link as={Link} to="/home">Home</Nav.Link>
              <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
              <Nav.Link as={Link} to="/experience">Experience</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <br />
    </>
  );
}

export default PortfolioNavbar
import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link }from 'react-router-dom';

function PortfolioNavbar() {
  return (
    <>
        <Navbar bg="primary" variant="primary">
          
            <Navbar.Brand className="ms-2" href="home">Navbar</Navbar.Brand>
            <Nav className="ms-2">
              <Nav.Link as={Link} to="/home">Home</Nav.Link>
              <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
              <Nav.Link as={Link} to="/experience">Experience</Nav.Link>
            </Nav>
          </Navbar>
        <br />
    </>
  );
}

export default PortfolioNavbar
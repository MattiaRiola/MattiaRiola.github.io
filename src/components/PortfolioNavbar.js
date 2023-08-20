import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link }from 'react-router-dom';

function PortfolioNavbar() {
  return (
    <>
        <Navbar bg="primary" variant="primary" className="justify-content-center">
            <Nav className="ms-2">
              <Nav.Link as={Link} style={{fontSize: 20}} to="/home">Home</Nav.Link>
              <Nav.Link as={Link} style={{fontSize: 20}} to="/projects">Projects</Nav.Link>
              <Nav.Link as={Link} style={{fontSize: 20}} to="/experience">Experience</Nav.Link>
            </Nav>
          </Navbar>
        <br />
    </>
  );
}

export default PortfolioNavbar
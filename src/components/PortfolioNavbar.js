import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link }from 'react-router-dom';
import Home from '@material-ui/icons/Home';
function PortfolioNavbar() {
  return (
    <>
        <Navbar bg="primary" variant="primary">
          
            <Navbar.Brand className="ms-2" href="home">
            <Home/>
            </Navbar.Brand>
            <Nav className="ms-2">
              <Nav.Link as={Link} style={{fontSize: 15}} to="/home">Home</Nav.Link>
              <Nav.Link as={Link} style={{fontSize: 15}} to="/projects">Projects</Nav.Link>
              <Nav.Link as={Link} style={{fontSize: 15}} to="/experience">Experience</Nav.Link>
            </Nav>
          </Navbar>
        <br />
    </>
  );
}

export default PortfolioNavbar
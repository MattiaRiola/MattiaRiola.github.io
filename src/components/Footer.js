import React from 'react'
import { LinkedIn, Email, GitHub } from '@material-ui/icons'
import { Nav, Navbar, NavItem } from 'react-bootstrap'
import Container from 'react-bootstrap/Container';


function Footer() {
    return (
        <Navbar  bg="secondary" variant="dark" sticky="bottom">
            <Container>
                <Nav className="m-auto">
                    <NavItem>
                        <div className="footer">
                            <div>
                                <LinkedIn />
                                <Email />
                                <GitHub />
                            </div>
                            <p> &copy; 2022 mattiariola.github.com</p>
                        </div>
                    </NavItem>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Footer
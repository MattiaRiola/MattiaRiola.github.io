import React from 'react'
import { LinkedIn, Email, GitHub } from '@material-ui/icons'
import { Nav, Navbar, NavItem } from 'react-bootstrap'
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
function Footer() {
    return (
        <Navbar bg="secondary" variant="dark" fixed="bottom">
            <Container>
                <Nav className="m-auto">
                    <NavItem>
                        <div className="footer">
                            <div>
                                <LinkedIn />
                                <Email />
                                <GitHub />
                            </div>
                        </div>
                    </NavItem>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Footer
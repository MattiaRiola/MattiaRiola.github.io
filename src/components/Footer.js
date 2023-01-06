import React from 'react'
import { LinkedIn, Email, GitHub } from '@material-ui/icons'
import { Nav, Navbar, NavItem } from 'react-bootstrap'
import { Link } from 'react-router-dom';


function Footer() {
    return (
        <Navbar bg="dark" variant="dark" sticky="bottom">
            <Nav className="m-auto">
                <NavItem>
                    <LinkedIn />
                    <Email />
                    <GitHub />
                </NavItem>
                <NavItem className='ms-3'>
                    <Link  style={{ color: 'black' }} to={"/credits"} >  credits</Link>
                </NavItem>
                <NavItem className='ms-3'>
                    <small> &copy; 2022 mattiariola.github.com</small>
                </NavItem>
            </Nav>
        </Navbar>
    )
}

export default Footer
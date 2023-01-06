import React from 'react'
import { LinkedIn, Email, GitHub } from '@material-ui/icons'
import { Nav, Navbar, NavItem } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import  links  from '../data/PersonalData'


// const links = {
//     linkedin: 'https://www.linkedin.com/in/mattia-riola-97b89712b/',
//     github: 'https://github.com/MattiaRiola',
//     email: 'mailto: riola.mattia@gmail.com'
// }

function Footer() {
    return (
        <Navbar bg="dark" variant="dark">
            <Nav className="m-auto">
                <Navbar.Brand href={links.linkedin}>
                        <LinkedIn/>
                </Navbar.Brand>
                
                <Navbar.Brand href={links.email}>
                        <Email/>
                </Navbar.Brand>
                
                <Navbar.Brand href={links.github}>
                        <GitHub/>
                </Navbar.Brand>
                <NavItem className='ms-3 my-auto'>
                    <small> &copy; 2022 mattiariola.github.com</small>
                </NavItem>
                <NavItem className='ms-3 my-auto'>
                    <Link style={{ color: 'black' }} to={"/credits"} >  credits</Link>
                </NavItem>
            </Nav>
        </Navbar>
    )
}

export default Footer
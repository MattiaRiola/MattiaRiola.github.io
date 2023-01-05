import React from 'react'
import { LinkedIn, Email, GitHub } from '@material-ui/icons'
import { Nav, Navbar, NavItem} from 'react-bootstrap'
import {Link }from 'react-router-dom';

function Footer() {
    return (
        <Navbar  bg="dark"variant="dark" sticky="bottom">
                <Nav className="m-auto">
                    <NavItem>
                        <div className="footer">
                            <div>
                                <LinkedIn />
                                <Email />
                                <GitHub />
                                <text>   </text>
                                <Link  style={{color: 'black'}} to={"/credits"} >  credits</Link>
                                <text> &copy; 2022 mattiariola.github.com</text>
                            </div>
                        </div>
                    </NavItem>
                </Nav>
        </Navbar>
    )
}

export default Footer
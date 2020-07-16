import React from 'react';
import { Navbar, Nav} from 'react-bootstrap';
import logo from './logo.png';
import './Navigation.css';

const Navigation = () => {
    return (
        <Navbar collapseOnSelect expand="lg" variant="dark">
            <Navbar.Brand href="#home">
                <img
                    src={logo}
                    width="70"
                    height="30"
                    className="d-inline-block align-top"
                    alt="Rise logo"
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto"></Nav>
                <Nav>
                    <Nav.Link href="#deets">Home</Nav.Link>
                    <Nav.Link href="#deets">Vendors</Nav.Link>
                    <Nav.Link href="#deets">Categories</Nav.Link>
                    <Nav.Link href="#deets">FAQs</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation;
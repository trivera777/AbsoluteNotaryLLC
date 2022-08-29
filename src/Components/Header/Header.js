import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from '../../logo.png'
import './header.css'

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" className="navbar">
        <Navbar.Brand href="#home"><img src={logo} alt="logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav >
            <Nav.Link href="#deets">Credentials</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;

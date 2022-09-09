import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo from "./logo2.png";
import "./header.css";

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" sticky="top" className="navbar">
      <Navbar.Brand href="#about">
        <img src={logo} alt="logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto"></Nav>
        <Nav>
          <Nav.Link href="#credentials">Credentials</Nav.Link>
          <Nav.Link eventKey={2} href="#contact">
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;

import React from "react";
import { Navbar, Nav } from "react-bootstrap";

export default function NavBar() {
  return (
    <>
      <Navbar bg="light" expand="lg" className="mx-2">
        <Navbar.Brand href="#home">HELIX</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#">Go Live</Nav.Link>
            <Nav.Link href="#">Recorded videos</Nav.Link>
            <Nav.Link href="#">Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

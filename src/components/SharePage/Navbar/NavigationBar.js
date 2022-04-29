import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand as={Link} to="/">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link as={Link}  to='/home'>Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
    </div>
  );
};

export default NavigationBar;

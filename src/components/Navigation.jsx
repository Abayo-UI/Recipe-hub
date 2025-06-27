
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <Navbar expand="lg" className="navbar-custom" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold fs-3">
          🍳 RecipeHub
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="fw-semibold">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/recipes" className="fw-semibold">
              All Recipes
            </Nav.Link>
            <Nav.Link as={Link} to="/categories" className="fw-semibold">
              Categories
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;

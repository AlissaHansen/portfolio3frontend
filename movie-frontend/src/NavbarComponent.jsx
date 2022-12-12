import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavLink from 'react-bootstrap/NavLink';

import { Link } from 'react-router-dom';

function NavbarComponent() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">

          {/*Venstre side nav*/}
          <Nav className="me-auto">
            <NavLink as = {Link} className="NavLink" to="/">Home</NavLink>
            <NavLink as = {Link} to="/movies">Movies</NavLink>
            <NavLink as = {Link} to="/actors">Actors</NavLink>
          </Nav>

          {/*Højre side nav*/}
          <Nav>
            <NavLink as = {Link} to="/login">Log In</NavLink>
            <NavLink as = {Link} to="/signup">Sign Up</NavLink>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
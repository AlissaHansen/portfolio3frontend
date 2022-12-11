import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavLink from 'react-bootstrap/NavLink';
import logo from '../images/brandlogo.png';

//Laver en responsive navbar der kollapser når vinduet bliver småt. Benytter routing til links
function NavbarComponent() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt="Billede af MovieBD logo "
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          {' '}
          MovieDB
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">

          {/*Venstre side nav*/}
          <Nav className="me-auto">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/movies">Movies</NavLink>
            <NavLink to="/actors">Actors</NavLink>
          </Nav>

          {/*Højre side nav*/}
          <Nav>
            <NavLink to="/login">Log In</NavLink>
            <NavLink to="/signup">Sign Up</NavLink>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
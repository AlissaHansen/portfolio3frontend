import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../images/brandlogo.png';

function NavbarComponent() { //Laver en responsive navbar der kollapser når vinduet bliver småt. Benytter routing til links
    return (
        <Navbar collapseOnSelect expand= "lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">
            <img 
            alt=" "
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

            <Nav className="me-auto">
              <Nav.Link href="#home">Movies</Nav.Link>
              <Nav.Link href="#features">Actors</Nav.Link>
            </Nav>

            <Nav>
              <Nav.Link href="#login">Login</Nav.Link>
              <Nav.Link href="#sign up"> Sign up</Nav.Link>
            </Nav>

            </Navbar.Collapse>
          </Container>
        </Navbar>
    );
};

export default NavbarComponent;
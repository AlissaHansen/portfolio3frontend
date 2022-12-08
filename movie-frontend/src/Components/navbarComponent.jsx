import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../images/brandlogo.png';

function NavbarComponent() {
    return (
        <Navbar bg="dark" variant="dark">
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
            <Nav className="me-auto">
              <Nav.Link href="#home">Movies</Nav.Link>
              <Nav.Link href="#features">Actors</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        
    );
};

export default NavbarComponent;
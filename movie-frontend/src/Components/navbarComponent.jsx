import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarComponent() {
    return (
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Movie DB</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Nemme</Nav.Link>
              <Nav.Link href="#pricing">Sager</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        
    );
};

export default NavbarComponent;
import '../style.css';
import logo from '../images/brandlogo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavLink from 'react-bootstrap/NavLink';
import { Link } from 'react-router-dom';


//Laver en responsive navbar der kollapser når vinduet bliver småt. Benytter routing til links
function NavbarComponent() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
      <Container>

        <NavLink as={Link} className="NavLink" to="/">
          <Navbar.Brand>
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
        </NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">

          {/*Venstre side nav*/}
          <Nav className="me-auto">
            <NavLink as={Link} className="NavLink" to="/">Home</NavLink>
            <NavLink as={Link} to="/movies">Movies</NavLink>
            <NavLink as={Link} to="/actors">Actors</NavLink>
          </Nav>

          {/*Højre side nav*/}
          <Nav>
            <NavLink as={Link} to="/login">Log In</NavLink>
            <NavLink as={Link} to="/signup">Sign Up</NavLink>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import "../style/header.css";
import logo from "../images/logo.png";
const Header = () => {
  return (
    <Navbar expand="lg" className="sticky-top">
      <Container fluid className="ms-1 me-1">
        <Navbar.Brand href="#home">
          <img src={logo} alt="logo" />
          TheHomless.org
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="nav">
            <Nav.Link className="navlink" href="#link">Manage Rentals</Nav.Link>
            <Nav.Link className="navlink" href="#link">Sign In</Nav.Link>
            <Nav.Link className="navlink" href="#link">Register</Nav.Link>
            <Nav.Link className="navlink" href="aboutus.js">About Us</Nav.Link>
            <Button variant="dark">Add Property</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

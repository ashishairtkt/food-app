import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useState } from "react";
import Logo from "../Assets/Images/logo.png";
import { ReactComponent as Helplogo } from "../Assets/Images/helplogo.svg";
import { ReactComponent as Offerlogo } from "../Assets/Images/offer.svg";
import { ReactComponent as Userlogo } from "../Assets/Images/user.svg";
import { ReactComponent as Cart } from "../Assets/Images/cart.svg";
import Badge from "react-bootstrap/Badge";
import ReusableOffcanvas from "../Utils/Offcanvas";

function Header() {
  let expand = "lg";
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Navbar key={expand} expand={expand} className="HeaderSection">
        <Container>
          <Navbar.Brand href="#">
            <img src={Logo} alt="logo" className="main-logo" />
          </Navbar.Brand>
          <Navbar.Brand>
            <ReusableOffcanvas
              id="1"
              buttonText="Launch 1"
              offcanvasTitle="Offcanvas 1"
              offcanvasText="Some text as a placeholder..."
            />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls={`offcanvasNavbar-expand-${expand}-head`}
            onClick={handleShow}
          />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}-head`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
            show={show}
            onHide={handleClose}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#action1">
                  <i className="fa-solid fa-magnifying-glass search-icon"></i>
                  &nbsp;Search
                </Nav.Link>
                <Nav.Link href="#action2">
                  {" "}
                  <Offerlogo className="headerlinksIcon" /> &nbsp;Offers
                </Nav.Link>
                <Nav.Link href="#action2">
                  {" "}
                  <Helplogo className="headerlinksIcon" />
                  &nbsp;Help
                </Nav.Link>
                <Nav.Link href="#action2">
                  {" "}
                  <Userlogo className="headerlinksIcon" />
                  &nbsp;Sign In
                </Nav.Link>
                <Nav.Link href="#action2">
                  {" "}
                  <Cart className="headerlinksIcon" />
                  &nbsp;Cart <Badge bg="secondary">9</Badge>
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import Logo from "../Assets/Images/logo.svg";
import Helplogo from "../Assets/Images/helplogo.svg";
import { ReactComponent as Offerlogo } from "../Assets/Images/offer.svg";
import Userlogo from "../Assets/Images/user.svg";
import Cart from "../Assets/Images/cart.svg";
import Badge from "react-bootstrap/Badge";

function Header() {
  let expand = "md";
  const logoStyles = {
    fill: "blue",
    width: "100px",
    height: "100px",
  };
  return (
    <>
      <Navbar key={expand} expand={expand} className="mb-3 HeaderSection">
        <Container>
          <Navbar.Brand href="#">
            <img src={Logo} alt="logo" className="main-logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
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
                  {/* <Helplogo className="headerlinksIcon" /> */}
                  &nbsp;Help
                </Nav.Link>
                <Nav.Link href="#action2">
                  {" "}
                  {/* <Userlogo className="headerlinksIcon" /> */}
                  &nbsp;Sign In
                </Nav.Link>
                <Nav.Link href="#action2">
                  {" "}
                  {/* <Cart className="headerlinksIcon" /> */}
                  &nbsp;Cart <Badge bg="secondary">9</Badge>
                </Nav.Link>
              </Nav>
              {/* <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form> */}
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;

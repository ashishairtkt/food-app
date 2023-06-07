import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

function ReusableOffcanvas({ id, buttonText, offcanvasTitle, offcanvasText }) {
  const [getinput, setinput] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const buttonId = `button-${id}`;
  const offcanvasId = `offcanvas-${id}`;

  return (
    <>
      {/* <Button
        variant="primary"
        onClick={handleShow}
        responsive="lg"
        id={buttonId}
      >
        {buttonText}
      </Button> */}

      <div className="navigation-location" onClick={handleShow}>
        <span className="main-loc">Vasant Kunj</span>
        <span className="main-sum">New Delhi, Delhi, India</span>
        <i class="fa-solid fa-chevron-down"></i>
      </div>

      <Offcanvas show={show} onHide={handleClose} id={offcanvasId}>
        <Offcanvas.Header closeButton>
          {/* <Offcanvas.Title>{offcanvasTitle}</Offcanvas.Title> */}
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="input-container">
            <input
              type="text"
              placeholder="Search area for street name.."
              className="inputField"
              value={getinput}
              onChange={(e) => setinput(e.target.value)}
            />

            {getinput !== undefined && getinput.trim().length > 0 ? (
              <span onClick={() => setinput("")}>Cancel</span>
            ) : (
              ""
            )}
          </div>
          <div className="location-container">
            <span>
              <i class="fa-solid fa-location-crosshairs location-icon"></i>
            </span>
            <span>
              <h5>Get current location</h5>
              <p>Using GPS</p>
            </span>
          </div>

          <div className="recentsearch-container">
            <div className="recentsearchBlock">
              <p className="search-heading">RECENT SEARCHES</p>

              <div className="address-para">
                <i class="fa-solid fa-clock-rotate-left"></i>
                <span>
                  <h5>Vansant Kunj</h5>
                  <p>New Delhi, Delhi, India</p>
                </span>
              </div>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default ReusableOffcanvas;

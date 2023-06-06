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
      <Button
        variant="primary"
        onClick={handleShow}
        responsive="lg"
        id={buttonId}
      >
        {buttonText}
      </Button>

      <Offcanvas show={show} onHide={handleClose} id={offcanvasId}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{offcanvasTitle}</Offcanvas.Title>
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
          div
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default ReusableOffcanvas;

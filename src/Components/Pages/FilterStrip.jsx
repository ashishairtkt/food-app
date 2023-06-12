import React from "react";
import { Container } from "react-bootstrap";

const FilterStrip = () => {
  return (
    <Container>
      <div className="filterStripContainer">
        <div className="leftsideBlock"></div>
        <div className="rightsideBlock">
          <ul>
            {" "}
            <li>Search</li>
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default FilterStrip;

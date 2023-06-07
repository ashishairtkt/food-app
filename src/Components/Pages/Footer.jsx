import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import data from "./footermock";

const Footer = () => {
  return (
    <div className="footer-container">
      <Container>
        <Row>
          {Object.entries(data).map(([key, values]) => (
            <Col key={key} className="footer-links">
              <p>{key}</p>
              <ul>
                {values.map((value) => (
                  <li key={value}>
                    {" "}
                    <a href="">{value}</a>
                  </li>
                ))}
              </ul>
            </Col>
          ))}
          <Col>
            <div className="footer-logo-links">
              <img
                src={
                  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-AppStore_lg30tv"
                }
                alt="logo"
              />
              <img
                src={
                  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-GooglePlay_1_zixjxl"
                }
                alt="logo"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;

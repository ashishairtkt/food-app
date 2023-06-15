import React, { Fragment, useEffect, useState } from "react";

import RestroCards from "./RestroCards";
import { Container } from "react-bootstrap";

const handleViewDetails = () => {};

const ShowRestrorentList = ({ data }) => {
  return (
    <Container>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "auto auto auto auto",
          margin: " 20px auto",
          gridRowGap: "10px",
        }}
      >
        {data.length !== 0 &&
          data.map((item) => (
            <Fragment key={Math.random()}>
              <RestroCards
                imageUrl="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/0dca660dbdf2e04f9b861c4426ffd41e"
                name="Third Wave Coffe"
                cuisine="Beverages.Bakery,Continental"
                rating="4.6"
                deliveryTime="39 MINS"
                priceForTwo="400"
                onViewDetails={handleViewDetails}
                itemData={item.restaurant}
              />
            </Fragment>
          ))}
      </div>
    </Container>
  );
};

export default ShowRestrorentList;

import React from "react";

import RestroCards from "./RestroCards";

const handleViewDetails = () => {};

const ShowRestrorentList = () => {
  return (
    <div>
      <RestroCards
        imageUrl="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/0dca660dbdf2e04f9b861c4426ffd41e"
        name="Third Wave Coffe"
        cuisine="Beverages.Bakery,Continental"
        rating="4.6"
        deliveryTime="39 MINS"
        priceForTwo="400"
        onViewDetails={handleViewDetails}
      />
    </div>
  );
};

export default ShowRestrorentList;

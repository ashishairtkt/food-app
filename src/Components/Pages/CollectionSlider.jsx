import React, { Fragment } from "react";
import SliderComponent from "../Utils/SliderComponent";
import { Container } from "react-bootstrap";

const imgUrl = [
  {
    id: 0,
    url: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/pneknawbadtvceqzwiep",
  },
  {
    id: 1,
    url: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/ehchczipeejs7qrk82u6",
  },
  {
    id: 2,
    url: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/zpkkdkmvlj5cuvqbc50t",
  },
  {
    id: 3,
    url: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/ifi2lbzxeu1hvsqrsip3",
  },
  {
    id: 4,
    url: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/pneknawbadtvceqzwiep",
  },
];

const CollectionSlider = () => {
  return (
    <div className="collectionSliderbg">
      <Container>
        <SliderComponent slides={imgUrl} />
      </Container>
    </div>
  );
};

export default CollectionSlider;

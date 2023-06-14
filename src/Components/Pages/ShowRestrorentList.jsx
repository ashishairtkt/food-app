import React, { useEffect, useState } from "react";
import axios from "axios";

import RestroCards from "./RestroCards";
import { Container } from "react-bootstrap";
import useAxiosGet from "../Hooks/useAxiosGet";
import mockData from "./mockData";
import MockAdapter from "axios-mock-adapter";
const handleViewDetails = () => {};

const ShowRestrorentList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const mock = new MockAdapter(axios);
    mock.onGet("/posts").reply(200, mockData);

    const fetchData = async () => {
      try {
        const response = await axios.get("/posts");
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // console.log(
  //   "data",
  //   data.length !== 0 &&
  //     data[0].restaurants.map((item) => console.log(item.restaurant))
  // );
  if (loading) {
    return <div>Loading...</div>;
  }
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
          data[0].restaurants.map((item) => (
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
          ))}
      </div>
    </Container>
  );
};

export default ShowRestrorentList;

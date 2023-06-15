import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";
import CollectionSlider from "./CollectionSlider";
import FilterStrip from "./FilterStrip";
import ShowRestrorentList from "./ShowRestrorentList";
import mockData from "./mockData";
import MockAdapter from "axios-mock-adapter";
import {
  sortPricesLowToHigh,
  sortPricesHighToLow,
  sortByRatings,
} from "../Utils/shorting";
const LandingPage = () => {
  const [data, setData] = useState([]);
  const [modifieddata, setmodifiedData] = useState([]);
  const [getRefresh, setRefresh] = useState(false);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("Relevance");
  useEffect(() => {
    const mock = new MockAdapter(axios);
    mock.onGet("/posts").reply(200, mockData);

    const fetchData = async () => {
      try {
        const response = await axios.get("/posts");
        setData(response.data);
        setmodifiedData(response.data[0].restaurants);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleDataChange = useCallback(
    (data, activeTab) => {
      if (data.length !== 0 && activeTab === "Relevance") {
        setmodifiedData(data[0].restaurants);

        setRefresh(!getRefresh);
      } else if (data.length !== 0 && activeTab === "LTOH") {
        const sortedData = sortPricesLowToHigh(modifieddata);
        setmodifiedData(sortedData);

        setRefresh(!getRefresh);
      } else if (data.length !== 0 && activeTab === "HTOL") {
        const sortedData = sortPricesHighToLow(modifieddata);
        setmodifiedData(sortedData);

        setRefresh(!getRefresh);
      } else if (data.length !== 0 && activeTab === "Rating") {
        const sortedData = sortByRatings(modifieddata);
        setmodifiedData(sortedData);

        setRefresh(!getRefresh);
      }
    },
    [modifieddata]
  );

  useEffect(() => {
    handleDataChange(data, activeTab);
  }, [activeTab, data, handleDataChange]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      <CollectionSlider />
      <FilterStrip setActiveTab={setActiveTab} activeTab={activeTab} />
      <ShowRestrorentList data={modifieddata} />
      <Footer />
    </>
  );
};

export default LandingPage;

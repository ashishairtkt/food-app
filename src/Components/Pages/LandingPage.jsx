import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import CollectionSlider from "./CollectionSlider";
import FilterStrip from "./FilterStrip";
import ShowRestrorentList from "./ShowRestrorentList";

const LandingPage = () => {
  return (
    <>
      <Header />
      <CollectionSlider />
      <FilterStrip />
      <ShowRestrorentList />
      <Footer />
    </>
  );
};

export default LandingPage;

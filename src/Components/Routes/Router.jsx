import React from "react";

import { Routes, Route } from "react-router-dom";
import Landing from "../Pages/LandingPage";
import PrivateRoute from "./PrivateRoute";
import OpenRoutes from "./PublicRoute";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import Header from "../Pages/Header";
import Footer from "../Pages/Footer";
import CollectionSlider from "../Pages/CollectionSlider";
import FilterStrip from "../Pages/FilterStrip";
import RestroCards from "../Pages/RestroCards";
import ShowRestrorentList from "../Pages/ShowRestrorentList";
import MenuSearchHeader from "../Utils/MenuSearchHeader";

const Routing = () => {
  return (
    <>
      {/* <Header /> */}
      <Routes>
        <Route
          path="/Login"
          element={
            <OpenRoutes>
              <Login />
            </OpenRoutes>
          }
        ></Route>
        <Route
          path="/"
          element={
            <OpenRoutes>
              <Landing />
            </OpenRoutes>
          }
        ></Route>

        {/* <Route
          path="/food-app"
          element={
            <OpenRoutes>
              <SignUp />
            </OpenRoutes>
          }
        ></Route> */}

        <Route
          path="/Header"
          element={
            <OpenRoutes>
              <Header />
            </OpenRoutes>
          }
        ></Route>

        <Route
          path="/Footer"
          element={
            <OpenRoutes>
              <Footer />
            </OpenRoutes>
          }
        ></Route>
        <Route
          path="/CollectionSlider"
          element={
            <OpenRoutes>
              <CollectionSlider />
            </OpenRoutes>
          }
        ></Route>
        <Route
          path="/FilterStrip"
          element={
            <OpenRoutes>
              <FilterStrip />
            </OpenRoutes>
          }
        ></Route>

        <Route
          path="/ShowRestrorentList"
          element={
            <OpenRoutes>
              <ShowRestrorentList />
            </OpenRoutes>
          }
        ></Route>
        <Route
          path="/MenuSearchHeader"
          element={
            <OpenRoutes>
              <MenuSearchHeader />
            </OpenRoutes>
          }
        ></Route>
      </Routes>
    </>
  );
};

export default Routing;

import React from "react";

import { Routes, Route } from "react-router-dom";
import Landing from "../Pages/LandingPage";
import PrivateRoute from "./PrivateRoute";
import OpenRoutes from "./PublicRoute";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <OpenRoutes>
              <Login />
            </OpenRoutes>
          }
        ></Route>
        <Route
          path="/Landing"
          element={
            <PrivateRoute>
              <Landing />
            </PrivateRoute>
          }
        ></Route>

        <Route
          path="/SignUp"
          element={
            <OpenRoutes>
              <SignUp />
            </OpenRoutes>
          }
        ></Route>
      </Routes>
    </>
  );
};

export default Routing;

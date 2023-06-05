import React from "react";
import { Navigate } from "react-router-dom";

const userAuth = () => {
  const user = localStorage.getItem("user");
  if (user) {
    return true;
  } else {
    return false;
  }
};

const PrivateRoute = ({ children }) => {
  const auth = userAuth();
  if (auth) {
    return children;
  }

  return <Navigate to="/" />;
};

export default PrivateRoute;

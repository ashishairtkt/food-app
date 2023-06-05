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
const PublicRoute = ({ children }) => {
  const auth = userAuth();
  if (auth) {
    return <Navigate to="/" />;
  }
  return children;
};

export default PublicRoute;

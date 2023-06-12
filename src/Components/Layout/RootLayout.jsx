import React from "react";
import Header from "../Pages/Header";
import Footer from "../Pages/Footer";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default RootLayout;

import React from "react";
import { Route, Routes } from "react-router-dom";
import Product from "../Pages/home/Product";
import Navbar from "../Pages/layout/Navbar";
import Footer from "../Pages/layout/Footer";

function Product_route() {
  return (
    <Routes>
      <Route
        path="/product/:id"
        element={
          <>
            <Navbar />
            <Product />
            <Footer />
          </>
        }
      />
    </Routes>
  );
}

export default Product_route;

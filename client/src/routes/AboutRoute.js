import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "../Pages/about";

const AboutRoute = () => {
  return (
    <Routes>
      <Route
        path="/about"
        element={
          <>
            <About />
          </>
        }
      ></Route>
    </Routes>
  );
};

export default AboutRoute;

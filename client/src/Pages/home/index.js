import React from "react";
import "../../assets/css/web.css";
import Nave from "../layout/Navbar";
import Slider from "./Slider";
import Footer from "../layout/Footer";

const index = () => {
  return (
    <>
      <Nave />
      <Slider />
      <Footer />
    </>
  );
};

export default index;

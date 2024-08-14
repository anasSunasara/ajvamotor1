import React from "react";
import HomeRoute from "./routes/admin/HomeRoute";
import Categoriesrout from "./routes/admin/catgriesroute/Categoriesrout";
import Customerrout from "./routes/admin/Customerrout";
import Alertrout from "./routes/admin/Alertrout";
import EditRouter from "./routes/admin/catgriesroute/EditRouter";
import Manroute from "./routes/HomeRoute";
import SliderRoute from "./routes/admin/slider/SliderRoute";
import Autoslider_Rout from "./routes/admin/auto_slider/Autoslider_Rout";
import AboutRoute from "./routes/AboutRoute";
import Product_route from "./routes/Product_route";

function App() {
  return (
    <>
      <HomeRoute />
      <AboutRoute />
      <Categoriesrout />
      <Customerrout />
      <Alertrout />
      <EditRouter />
      <Manroute />
      <SliderRoute />
      <Autoslider_Rout />
      <Product_route/>
    </>
  );
}

export default App;

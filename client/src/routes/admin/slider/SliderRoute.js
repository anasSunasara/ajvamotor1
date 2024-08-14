import React from "react";
import Slider from "../../../Pages/admin/Slider/slider";
import Sidebar from "../../../Pages/admin/layout/Sidebar";
import { Routes, Route } from "react-router-dom";

function SliderRoute() {
  return (
    <>
      <Routes>
        <Route
          path="/slider"
          element={
            <div className="homeroute mainbackground">
                <Sidebar/>
              <Slider />
            </div>
          }
        ></Route>
         <Route
          path="/slider:id"
          element={
            <div className="homeroute mainbackground">
                <Sidebar/>
              <Slider />
            </div>
          }
        ></Route>
      </Routes>
    </>
  );
}

export default SliderRoute;

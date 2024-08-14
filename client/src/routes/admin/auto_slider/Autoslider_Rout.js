import React from "react";
import Autoslider from '../../../Pages/admin/auto_slider/Autoslider'
import Sidebar from "../../../Pages/admin/layout/Sidebar";
import { Routes, Route } from "react-router-dom";
function Autoslider_Rout() {
  return (
    <>
       <Routes>
        <Route
          path="/autoslider"
          element={
            <div className="homeroute mainbackground">
                <Sidebar/>
              <Autoslider />
             </div>
          }
        ></Route>
      </Routes>
    </>
  )
}

export default Autoslider_Rout

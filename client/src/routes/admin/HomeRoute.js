import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "../../Pages/admin/layout/Sidebar";
import Header from "../../Pages/admin/layout/Header"
import Home from "../../Pages/admin/Home";
import '../../assets/css/Admin.css'

const HomeRoute = () => {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };
  return (
    <>
      <Routes>
        <Route
          path="/dashboard"
          element={
            <div className="homeroute mainbackground">
              <Sidebar
                openSidebarToggle={openSidebarToggle}
                OpenSidebar={OpenSidebar}
              />
              <div className="grid-container">
                <Header OpenSidebar={OpenSidebar}></Header>
                <Home />
              </div>
            </div>
          }
        />
      </Routes>
    </>
  );
};

export default HomeRoute;

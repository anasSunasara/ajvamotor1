import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/home";

export default function HomeRoute() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Home />
          </>
        }
      ></Route>
    </Routes>
  );
}

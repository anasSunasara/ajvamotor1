import React from 'react'
import { Routes, Route } from "react-router-dom";
import Sidebar from '../../Pages/admin/layout/Sidebar';
import Customer from '../../Pages/admin/Customer';
import '../../assets/css/Admin.css'


function Customerrout() {
  return (
    <Routes>
      <Route path='/Customer' element={
        <div className="homeroute mainbackground">
        <Sidebar/>
        <Customer/>
      
     
      </div>
      }>
        
      </Route>
    </Routes>
  )
}

export default Customerrout

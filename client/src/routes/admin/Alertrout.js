import React from 'react'
import { Routes, Route } from "react-router-dom";
import Sidebar from '../../Pages/admin/layout/Sidebar';
import Alert from '../../Pages/admin/Alert';

function Alertrout() {
  return (
    <Routes>
      <Route path='/Product' element={
        <div className="homeroute mainbackground">
        <Sidebar/>
        <Alert/>
      </div>
      }>
        
      </Route>
    </Routes>
  )
}

export default Alertrout

import React from 'react'
import { Routes, Route } from "react-router-dom";
import Categories from '../../../Pages/admin/Categries/Categories';
import Sidebar from '../../../Pages/admin/layout/Sidebar';


const Categoriesrout = () => {
  return (
    
    <Routes>
      <Route path='/categories' element={
        <div className="homeroute mainbackground">
        <Sidebar/>
        <Categories/>
      </div>
      }>
        
      </Route>
    </Routes>
      
    
  )
}

export default Categoriesrout

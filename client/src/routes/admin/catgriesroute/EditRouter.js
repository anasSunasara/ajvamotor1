import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Sidebar from '../../../Pages/admin/layout/Sidebar'
import Edit from '../../../Pages/admin/Categries/Edit';



const EditRouter = () => {
  return (
    <div>
      <Routes >
        <Route path='/edit/:id' element={<>
          <div className='d-flex mainbackground'>

          
        <Sidebar/>
        
        <Edit/>

        
        </div>
         </>}/>
      </Routes>
    </div>
  )
}

export default EditRouter

import React, { useState } from 'react';
import { FaTh, FaBars, FaUserAlt, FaRegChartBar, FaCommentAlt,
    FaShoppingBag,
    FaThList
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';
// import '../../assets/css/Admin.css'


const sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(true);

    const toggle = () => setIsOpen (!isOpen);
    
    const menuItem=[
        {
            path:"/dashboard",
            name:"dashboard",
            icon:<FaRegChartBar/>

          
        },
        {
            path:"/categories",
            name:"Categories",
            icon:<FaTh/>
        },
        {
            path:"/Product",
            name:"Product List",
            icon:<FaThList/>
        },
        {
            path:"/slider",
            name:"Slider",
            icon:<FaUserAlt/>
        },
       
        {
            path:"/autoslider",
            name:"Auto Slider",
            icon:<FaCommentAlt/>
        },
        {
            path:"/ProductList",
            name:"Logout ",
            icon:<FaShoppingBag/>
           
        }
        
    ]
    return (
        <> 
        <div className=" p-0">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">anas</h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeClassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           {/* <main>{children}</main> */}
        </div>

      
        </>

    );
};

export default  sidebar 
;
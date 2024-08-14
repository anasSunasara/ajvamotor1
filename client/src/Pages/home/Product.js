import React, { useEffect, useState } from "react";
import "../../assets/css/web.css";
import { useParams } from "react-router-dom";
import axios from "axios"

function Product() {
  const {id} = useParams('')
  console.log(id)
  const [data,setdata] = useState([])

  useEffect(()=>{
    fetchdata();
  },[]) ;

  const fetchdata = () =>{
    axios.get (`http://localhost:5000/gerproduct/${id}`)
    .then((Response)=>{
      console.log(Response.data)
      setdata(Response.data)
      // console.log("data",data)
    })
    .catch((error)=>{
      console.log("get data error:", error)
    }) 
} 


return (
    <>
    <div></div>
      <div className="product_container">
     
      {data.map((parth) => (

        <div className="product" key={parth.id}>
        <img src={`/uploads/${parth.image}`} alt={`Product ${parth.id}`} />          
        <p style={{textAlign:"center",marginBottom:"0",padding:"10px 0"}}>{parth.description}</p>
        </div>
        ))}

      </div>
    </>
  );
}

export default Product;

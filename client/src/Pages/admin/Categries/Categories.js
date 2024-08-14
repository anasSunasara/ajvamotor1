import React, { useState, useEffect } from "react";
import Addproduct from "./Addproduct";
import axios from "axios";
import { Link } from "react-router-dom";
import Edit from "./Edit";
// import Test from "./Test";

function Categories() {
  const [data, setData] = useState([]);


  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = () => {
    fetch("http://localhost:5000/category")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  };
  
  // DELETE DATA
  
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this record?")) {
      axios
        .delete(`http://localhost:5000/category_delete/${id}`)
        .then(() => {
          setData(data.filter((category) => category.id !== id));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

// status
const updatestatus = async (Id, newStatus) => {
  try {
    await axios.put(`http://localhost:5000/status/${Id}`, {
      status: newStatus,
    });

    fetchdata(); 
  } catch (error) {
    console.log(error);
  }
};


  return (
    <>
      {/* table code start */}
      <div>

        <div className="container ps-5" style={{ margin: "0 auto" }}>
          <table className="rwd-table " width={"100"}>
            <tbody>
              <tr>
                <th>id</th>
                <th>Title</th>
                <th>Image</th>
                <th className="text-center">update</th>
                <th>status</th>               
              </tr>
              {data.map((category) => (
                <tr key={category}>
                  <td>{category.id}</td>
                  <td>{category.category_title}</td>
                  <td>
                    <img
                      src={`./uploads/${category.category_image}`}
                      alt=""
                      width={"40px"}
                    />
                  </td>

                  <td className="text-center">
                    <button
                      className="btndilet p-0"
                      type="button"
                      onClick={() => handleDelete(category.id)}
                    >
                      {" "}
                      <i class="fa-solid fa-trash"></i>
                    </button>{" "}
                    <Link
                      to={`/edit/ ${category.id}`}
                      className="btn btn-success "
                    >
                      {" "}
                      <i class="fa-solid fa-user-pen"></i>
                    </Link>
                  </td>
                  <td>
                  <div className="form-check form-switch">
                      <input
                        className="form-check-input mt-2"
                        type="checkbox"
                        checked={category.status === 1}
                        onChange={() =>
                          updatestatus(
                            category.id,
                            category.status === 1 ? 0 : 1
                          )
                        }
                      style={{height:"20px", width:'40px'}}/>
                    </div>
                    

                  </td>
                  
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Addproduct />
      {/* table code end */}

      
    </>
  );
}

export default Categories;

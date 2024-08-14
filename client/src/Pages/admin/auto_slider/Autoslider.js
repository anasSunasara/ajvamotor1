import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Add_autoslider from "../auto_slider/Add_autoslider"

function Autoslider() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchdata();
  }, []);

  // get data
  const fetchdata = () => {
    fetch("http://localhost:5000/getproduct")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  };
   console.log(data)

  // DELETE DATA

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this record?")) {
      axios
        .delete(`http://localhost:5000/delete_product/${id}`)
        .then(() => {
          fetchdata();
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <>
      {/* table code start */}
      <div>

        <div className="container ps-5" style={{ margin: "0 auto",width:"90%" }}>
          <table className="rwd-table">
            <tbody>
              <tr>
                <th>id</th>
                <th>Image</th>
                <th className="text-center">update</th>
              </tr>
              {data.map((autoslider) => (
                <tr key={autoslider}>
                  <td>{autoslider.id}</td>
                  <td>
                    <img
                      src={`./uploads/${autoslider.image}`}
                      alt=""
                      width={"35px"}
                    />
                  </td>

                  <td className="text-center">
                    <button
                      className="btndilet "
                      type="button"
                      onClick={() => handleDelete(autoslider.id)}
                    >
                      {" "}
                      <i class="fa-solid fa-trash"></i>
                    </button>{" "}
                    <Link
                      to={`/edit/ ${autoslider.id}`}
                      className="btn btn-success "
                    >
                      {" "}
                      <i class="fa-solid fa-user-pen"></i>
                    </Link>
                  </td>

                </tr>
              ))}
            </tbody>
          </table>

        </div>

      </div>
      <Add_autoslider />

    </>
  );
}

export default Autoslider;

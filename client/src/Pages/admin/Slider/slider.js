import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Addslider from "./Addslider";

function slider() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = () => {
    fetch("http://localhost:5000/getslider")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  };

  // DELETE DATA

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this record?")) {
      axios
        .delete(`http://localhost:5000/delete_slider_mage/${id}`)
        .then(() => {
          fetchdata();
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  // slider javascript
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  return (
    <>
      {/* table code start */}
      <div>
      <h1 className="text-center py-3">slider image</h1>
        <div className="container ps-5" style={{ margin: "0 auto" }}>
          <table className="rwd-table">
            <tbody>
              <tr>
                <th>id</th>
                <th>Image</th>
                <th className="text-center">update</th>
              </tr>
              {data.map((slider) => (
                <tr key={slider}>
                  <td>{slider.id}</td>
                  <td>
                    <img
                      src={`./uploads/${slider.image}`}
                      alt=""
                      width={"100px"}
                    />
                  </td>

                  <td className="text-center">
                    <button
                      className="btndilet "
                      type="button"
                      onClick={() => handleDelete(slider.id)}
                    >
                      {" "}
                      <i class="fa-solid fa-trash"></i>                    </button>{" "}
                    <Link
                      to={`/edit-slider/ ${slider.id}`}
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
      <Addslider />
      {/* table code end */}
    </>
  );
}

export default slider;

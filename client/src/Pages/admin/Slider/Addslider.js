import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Addslider() {
  const [filterData, setFilterData] = useState([]);
  const [products, setProducts] = useState({
    id: "",
    image: null,
  });

  // GAT DATA

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = () => {
    axios
      .get("http://localhost:5000/slider")
      .then((response) => {
        setFilterData(response.data);
      })
      .catch((error) => {
        console.log("get data", error);
      });
  };
  const navigate = useNavigate();

  // ADD DATA

  const saveProduct = () => {
    const formData = new FormData();
    formData.append("id", products.id);
    formData.append("image",products.image);

    axios
      .post("http://localhost:5000/addsliderimage", formData)
      .then((response) => {
        if (response.status === 200) {
          fetchdata();
          setProducts({image: null });
          navigate("/slider");
        } else {
          console.log("error:", response.data);
        }
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  return (
    <>
      <div>
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >
          Add+
        </button>
        <div
          className="modal fade"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog ">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel">
                  Add Slider
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div>
                  <label htmlFor="title" style={{ paddingBottom: "5px" }}>
                    Slider id
                  </label>
                  <input
                    type="text"
                    id="title"
                    placeholder="prodect id"
                    className="form-control text-center"
                    value={products.id}
                    onChange={(e) =>
                      setProducts({ ...products, id: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label
                    htmlFor="image"
                    style={{ paddingRight: "5px" }}
                    className="form-label"
                  >
                    {" "}
                    Slider Image:
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    placeholder="Enter Product Image..."
                    onChange={(e) => {
                      setProducts({
                        ...products,
                        image: e.target.files[0],
                      });
                    }}
                  />
                </div>
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={saveProduct}
                >
                  save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Addslider;

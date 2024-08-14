import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AddProduct() {
  const [filterData, setFilterData] = useState([]);
  const [products, setProducts] = useState({
    category_title: "",
    category_image: null,
  });

  // GAT DATA

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = () => {
    axios
      .get("http://localhost:5000/category")
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
    formData.append("category_title", products.category_title);
    formData.append("category_image", products.category_image);

    axios
      .post("http://localhost:5000/addcategory", formData)
      .then((response) => {
        if (response.status === 200) {
          fetchdata();
          setProducts({ category_title: "", category_image: null });
          navigate("/categories");
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
                Add data
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
                  prodect id
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
                <label htmlFor="title" style={{ paddingBottom: "5px" }}>
                  prodect name
                </label>
                <input
                  type="text"
                  id="title"
                  placeholder="prodect name"
                  className="form-control text-center"
                  value={products.category_title}
                  onChange={(e) =>
                    setProducts({ ...products, category_title: e.target.value })
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
                  Product Image:
                </label>
                <input
                  type="file"
                  className="form-control"
                  placeholder="Enter Product Image..."
                  onChange={(e) => {
                    setProducts({
                      ...products,
                      category_image: e.target.files[0],
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

export default AddProduct;
import React, { useEffect, useState } from "react";
import axios from "axios";

function Alert() {
  const [category, setcategory] = useState([]);
  const [data, setdata] = useState([]);
  const [product, setproduct] = useState({
    id: "",
    cate_id: "",
    description: "",
    image: "",
  });

  const [newImage, setNewImage] = useState(null);
  const [Values, setValues] = useState({
    id: "",
    cate_id: "",
    description: "",
    image: "",
  });

  useEffect(() => {
    fetchdata();
    fetchcategory();
  }, []);

  // GET PRODUCT
  const fetchdata = () => {
    fetch("http://localhost:5000/parth")
      .then((res) => res.json())
      .then((data) => setdata(data))
      .catch((error) => console.log(error));
  };

  // GET CATEGORY
  const fetchcategory = () => {
    fetch("http://localhost:5000/category")
      .then((res) => res.json())
      .then((data) => setcategory(data))
      .catch((error) => console.log(error));
  };

  // ADD PRODUCT
  const saveproduct = () => {
    console.log("In fuctin");
    const formData = new FormData();
    formData.append("cate_id", product.cate_id);
    formData.append("description", product.description);
    formData.append("image", product.image);

    axios
      .post("http://localhost:5000/addproduct", formData)
      .then(() => {
        fetchdata();
        setproduct({
          cate_id: "",
          description: "",
          image: "",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setproduct({
      ...product,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setproduct({
      ...product,
      image: file,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    saveproduct();
  };

  // DELETE PRODUCT
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this record?")) {
      axios
        .delete(`http://localhost:5000/delete_productdd/${id}`)
        .then((response) => {
          if (response.status === 200) {
            console.log("Data deleted successfully");
            fetchdata(); // Refresh data after deletion
          } else {
            console.log("Error:", response.data);
          }
        })
        .catch((error) => {
          console.log("Error:", error);
        });
    }
  };

  // GET DATA FOR EDIT
  const handleEditClick = (pro_id) => {
    console.log(pro_id);
    axios
      .get(`http://localhost:5000/getforedit/${pro_id}`)
      .then((res) => {
        setValues(res.data[0]);
        console.log(res.data[0]);
      })
      .catch((err) => console.error("Error fetching data:", err));
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setValues((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handelEditimagechange = (e) => {
    const file = e.target.files[0];
    setValues((prevData) => ({
      ...prevData,
      [e.target.name]: file,
    }));
    if (e.target.name === "image") {
      setNewImage(file);
    }
  };

  // SAVE EDIT
  const saveEditedProduct = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("cate_id", Values.cate_id);
    formData.append("description", Values.description);
    formData.append("image", Values.image);
    console.log("up axios");
    axios
      .put(`http://localhost:5000/saveproductedit/${Values.id}`, formData)
      .then(() => {
        fetchdata();
        console.log("Product edited successfully");
      })
      .catch((error) => {
        console.log("Error editing product:", error);
      });
    console.log("down axios");
  };

  return (
    <div className="admin_side">
      {/* ADD BUTTON */}
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        ADD
      </button>

      {/* DATA TABLE */}
      <div className="container ps-5" style={{ margin: "0 auto" }}>
        <table className="rwd-table " width={"100"}>
          <tbody>
            <tr>
              <th>id</th>
              <th>Category</th>
              <th>description</th>
              <th>Image</th>
              <th className="text-center">update</th>
            </tr>
            {data.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.cate_id}</td>
                <td>{product.description}</td>
                <td>
                  <img
                    src={`./uploads/${product.image}`}
                    alt=""
                    width={"40px"}
                  />
                </td>

                <td className="text-center">
                  <button
                    className="btndilet p-0 "
                    type="button"
                    onClick={() => handleDelete(product.id)}
                  >
                    {" "}
                    <i class="fa-solid fa-trash"></i>
                  </button>{" "}
                  <button
                    type="button"
                    className="btn btn-primary p-0 "
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                    onClick={() => handleEditClick(product.id)}
                  >
                    <i class="fa-solid fa-user-pen"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ADD MODAL */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
              <div className="modal-body">
                <div className="input-field">
                  <label>Category</label>
                  <select
                    type="text"
                    name="cate_id"
                    className="form-control text-center"
                    value={product.cate_id}
                    onChange={handleInputChange}
                  >
                    <option value="">Open this select menu</option>
                    {category.map((categorydata) => (
                      <option key={categorydata.id} value={categorydata.id}>
                        {categorydata.category_title}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="title" style={{ paddingBottom: "5px" }}>
                    description
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="description"
                    placeholder="description "
                    className="form-control text-center"
                    value={product.description}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label htmlFor="title" style={{ paddingBottom: "5px" }}>
                    image
                  </label>
                  <input
                    type="file"
                    id="title"
                    name="image"
                    placeholder=""
                    className="form-control text-center"
                    onChange={handleImageChange}
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="submit"
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                  onSubmit={handleSubmit}
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* EDIT MODAL */}
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Modal title
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <form onSubmit={saveEditedProduct} encType="multipart/form-data">
              <div className="modal-body">
                <div className="input-field">
                  <label>Category</label>
                  <select
                    type="text"
                    name="cate_id"
                    className="form-control text-center"
                    value={Values.cate_id}
                    onChange={handleEditChange}
                  >
                    <option value="">Select a category</option>
                    {category.map((categorydata) => (
                      <option key={categorydata.id} value={categorydata.id}>
                        {categorydata.category_title}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="title" style={{ paddingBottom: "5px" }}>
                    description
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="description"
                    placeholder="description "
                    className="form-control text-center"
                    value={Values.description}
                    onChange={handleEditChange}
                  />
                </div>
                <div>
                  <label htmlFor="title" style={{ paddingBottom: "5px" }}>
                    image
                  </label>
                  <input
                    type="file"
                    id="title"
                    name="image"
                    placeholder=""
                    className="form-control text-center"
                    onChange={handelEditimagechange}
                  />
                  {newImage ? (
                    <img src={URL.createObjectURL(newImage)} width="50px" />
                  ) : (
                    <img src={`/uploads/${Values.image}`} width="50px" />
                  )}
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
                  type="submit"
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                  onClick={saveEditedProduct}
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Alert;

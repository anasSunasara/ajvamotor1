import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [values, setValues] = useState({
    id: "",
    category_title: "",
    category_image: "",
  });

  useEffect(() => {
    axios
      .get(`http://localhost:5000/getdatawithid/${id}`)
      .then((res) => {
        if (res.data && res.data.length > 0) {
          setValues({
            ...values,
            id: res.data[0].id,
            category_title: res.data[0].category_title,
            category_image: res.data[0].category_image,
          });
        } else {
          console.error(
            "Data is empty or doesn't contain the expected structure."
          );
        }
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  }, [id]);

 
  const saveEdit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("id", values.id);
    formData.append("category_title", values.category_title);

    if (values.category_image instanceof File) {
      formData.append("category_image", values.category_image);
    }

    axios
      .put(`http://localhost:5000/saveEdit/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res);
        navigate("/categories");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <form method="post" className="m-auto" action="#">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5 text-dark" id="exampleModalLabel">
                Edit PRODUCT
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  {" "}
                  Product Id:
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Product id..."
                  value={values.id}
                  onChange={(e) => setValues({ ...values, id: e.target.value })}
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  {" "}
                  Product Name:
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Product Name..."
                  value={values.category_title}
                  onChange={(e) =>
                    setValues({ ...values, category_title: e.target.value })
                  }
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
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
                    setValues({
                      ...values,
                      category_image: e.target.files[0],
                    });
                  }}
                />
                <img
                  src={
                    typeof values.category_image === "string"
                      ? `/uploads/${values.category_image}`
                      : URL.createObjectURL(values.category_image)
                  }
                  style={{ width: "100px", height: "100px" }}
                  alt="Brand"
                />{" "}
              </div>
            </div>
            <div className="modal-footer">
              <Link
                to={"/categories"}
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Close
              </Link>
              <button
                type="button"
                className="btn btn-primary"
                onClick={saveEdit}
              >
                Save{" "}
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Edit;


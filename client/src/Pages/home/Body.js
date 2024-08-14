import React, { useState, useEffect } from "react";
import {NavLink} from "react-router-dom"

function Body() {
  const [data, setData] = useState([]);
  const [autoslider, setautoslider] = useState([]);

  useEffect(() => {
    fetchdata();
    fetchautoslider();
  }, []);

  const fetchdata = () => {
    fetch("http://localhost:5000/category")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  };

  const fetchautoslider = () => {
    fetch("http://localhost:5000/getproduct")
      .then((res) => res.json())
      .then((autoslider) => setautoslider(autoslider))
      .catch((error) => console.log(error));
  };
  console.log(data);

  // FOOTER SLIDER CODE

  useEffect(() => {
    const swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 10,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
      },
    });

    return () => {
      swiper.destroy();
    };
  }, []);

  return (
    <>
      <div
        className="container-fluid footer_font"
        style={{ backgroundColor: "#A2C589", padding: "1%" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-9 m-auto">
              <h2
                style={{
                  color: "black",
                  fontFamily: "algerian",
                  fontSize: "28px",
                }}
              >
                WE MAKE PARTS AT YOUR OWN REQUIREMENTS.
              </h2>
            </div>
            <div className="col-3">
              <button
                type="submit"
                style={{ fontSize: "20px" }}
                className="py-3 px-3 bg-transparent border border-white border-3 rounded"
              >
                Inquiry Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* WELCOME TO AJVA MOTOR */}

      <div className="container px-3 mb-5 pb-5">
        <div className="row">
          <div className="col-7">
            <h1
              className="my-5 pt-5 mb-3"
              style={{
                fontFamily: "sans-serif",
                fontWeight: "700",
                letterSpacing: "3px",
              }}
            >
              WELCOME TO AJVA MOTOR
            </h1>
            <p className="border1"></p>
            <p className=" wellcom_content" style={{ fontWeight: "500" }}>
              Ajva Motors takes pride in providing the best quality products to
              exceed the expectations of its customers and enables its valuable
              employees to take up new opportunities.We started with an
              objective to provide durable products and reliable services. Our
              commitment has not changed and we are slowly moving towards
              achieving our goal of being a world class manufacturer..
            </p>
            <div className="row">
              <div className="icon_containt col-6">
                <div className="thumbh_containt pt-3">
                  <div className="thumbh_icon">
                    <i
                      className="fa-solid fa-thumbs-up "
                      style={{ color: " #A2C589", fontSize: "25px" }}
                    ></i>
                  </div>
                  <div className="ps-4">
                    <p className="fw-bold mb-1 ">TRUSTED BY THOUSANDS</p>
                    <p>
                      Do in laughter securing smallest sensible no mr hastened.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="thumbh_containt pt-3">
                  <div className="thumbh_icon">
                    <i
                      className="fa-solid fa-thumbs-up "
                      style={{ color: " #A2C589", fontSize: "25px" }}
                    ></i>
                  </div>
                  <div className="ps-4">
                    <p className="fw-bold mb-1 ">TRUSTED BY THOUSANDS</p>
                    <p>
                      As perhaps proceed in in brandon of limited unknown
                      greatly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="icon_containt col-6">
                <div className="thumbh_containt pt-3">
                  <div className="thumbh_icon">
                    <i
                      className="fa-solid fa-thumbs-up "
                      style={{ color: " #A2C589", fontSize: "25px" }}
                    ></i>
                  </div>
                  <div className="ps-4">
                    <p className="fw-bold mb-1 ">TRUSTED BY THOUSANDS</p>
                    <p>
                      As perhaps proceed in in brandon of limited unknown
                      greatly.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="thumbh_containt pt-3">
                  <div className="thumbh_icon">
                    <i
                      className="fa-solid fa-thumbs-up "
                      style={{ color: " #A2C589", fontSize: "25px" }}
                    ></i>
                  </div>
                  <div className="ps-4">
                    <p className="fw-bold mb-1 ">TRUSTED BY THOUSANDS</p>
                    <p>
                      No landlord of peculiar ladyship attended if contempt
                      ecstatic.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-5 m-auto">
            <img
              src={require("../../assets/image/tractor.png")}
              alt=""
              style={{ width: "100%" }}
            />
          </div>
        </div>
      </div>

      {/* OUR PRODUCTS containt */}

      <div
        className="container-fluid py-5"
        style={{ backgroundColor: "#F3F3F3" }}
      >
        <div className="container text-center">
          <h2 className="PRODUCTS_title">OUR PRODUCTS </h2>
          <p className="border1 m-auto"></p>
          <p className="w-75 m-auto mt-3 PRODUCTS_pare">
            Products, we offer, includes Engine Parts, Suspension Parts,
            Steering Parts, Brake & Clutch Parts, Auto Electrical Parts, Auto
            Lights, Hydraulic Parts, Master Cylinders, Crank Shafts, Bolts &
            Nuts, Gears, Rotary Tiller, Off-Set Disc Harrow, Sprinklers, Spacer
            Reels. We also develop products as per customersamples or drawing..
          </p>
          <div className="row justify-content-center my-5">
            {data.map((item) => (
              item.status === 1 && (
              <div className="col-lg-3 col-md-6 mb-4 col-12 mb-4" key={item.id}>
                <div
                  className="box bg-white h-100"
                  style={{ border: "2px solid #A2C589" }}
                >
                  <img
                    src={`/uploads/${item.category_image}`}
                    alt="vvfd"
                    className="img-fluid"
                  />

                  <h6 className="fw-bold my-3">{item.category_title}</h6>

                  <p
                    className="py-2 mb-0"
                    style={{ backgroundColor: "#A2C589" }}
                  >
                    {" "}
                    <NavLink to={`/product/${item.id}`}  style={{
                        textDecoration: "none",
                        color: "black",
                        fontWeight: "500",
                      }}>
                    <span>                   
                      {" "}
                      VIEW PARTS{" "}
                    </span>
                    </NavLink>


                  </p>
                </div>
              </div>
              )
            ))}
          </div>
        </div>
      </div>

      {/* product slider start */}
      <div className="footer__slider py-4">
        <div className="swiper mySwiper ">
          <div className="swiper-wrapper">
            {autoslider.map((part) => (
              <div className="swiper-slide" key={part.id}>
                <img src={`/uploads/${part.image}`} alt="" style={{height:"200px"}}/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Body;

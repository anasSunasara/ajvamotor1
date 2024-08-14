import React from "react";

function Footer() {
  return (
    <>
      <div className="container-fluid p-0 bg-dark text-white pt-5 mt-5">
        <div className="container py-3">
          <div className="row">
            <div className="col-3">
              <h2>
                <span style={{ color: "#A2C589" }}> Ajva</span>Motor
              </h2>
              <p className="pt-4 adrees">
                Ajva Motors is Exporter, <br />
                Manufacturer and Supplier of Tractor<br/>
                Body Parts like Bonnet, Fender,<br/> Battery box, etc and Ajva Motors
                also <br/> provides OEM Services. read more
              </p>
            </div>
            <div className="col-3 adrees">
              <h5 className="menuborder"> QUICK MENU</h5>
              <p className="pt-4">
                <span></span>About Us
              </p>
              <p>
                <span></span>Gallery
              </p>
              <p>
                <span></span>Contact
              </p>
              <p>
                <span></span>Our Products
              </p>
              <p>
                <span></span>Logistic
              </p>
            </div>
            <div className="col-3 adrees">
              <h5 className="menuborder">OUR PRODUCTS </h5>
              <p className="pt-4 product_border ">Swaraj Tractor</p>
              <p className="product_border " >Massey Furgusan</p>
              <p className="product_border ">Mahindra</p>
              <p className="product_border ">Eicher</p>
              <p className="product_border ">HMT</p>
              <p className="product_border "> Ford</p>
            </div>
            <div className="col-3">
              <h5 className="menuborder">ADDRESS</h5>
              <p className="pt-4 col">
                State Highway, Nr. Teniwada Bridge, Behind Sirtaj Namkeen At:
                Kotadi, Post : Chhapi , Ta : Vadgam Dist : Banaskantha , Gujarat
                - 385210 India
              </p>
              <p className="color-white">+91 992-548-9951 / +91 701-605-2536</p>
              <p>ajvamotors@yahoo.in</p>
            </div>
          </div>
          
        </div>
        <div className="container-fluid mt-4 footer_end py-4"> 
        <div className="container d-flex my-auto"> 
          <p className=" my-auto">© Copyright 2021 Ajva Motors</p>
          <p className="ms-auto my-auto">Developed By VALUDAS TECH PARK
</p>
          </div>
          </div>
      </div>
    </>
  );
}

export default Footer;

import React from "react";

function nave() {
  return (
    <>
      <div >
        <nav className="navbar navbar-expand-lg navbar-light ">
          <div className="container-fluid ">

          
            <img src={require("../../assets/image/logo_new.png")} alt="" style={{width:"10%"}}/>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav  mb-2 mb-lg-0 mx-auto me-5 ">
                <li className="nav-item ps-5 ">
                  <a className="nav-link fw-5px " aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item ps-5">
                  <a className="nav-link" href="#">
                    about
                  </a>
                </li>
                <li>
                  <div className="dropdown    ps-5">
                    <p className="dropbtn nav-link item">Tractor part</p>
                    <div className="dropdown-content">
                      <a href="#">Link 1</a>
                      <a href="#">Link 2</a>
                      <a href="#">Link 3</a>
                    </div>
                  </div>
                </li>
                <li>
                  <li className="nav-item ps-5 ">
                    <a className="nav-link " href="#">
                      Geleery
                    </a>
                  </li>
                </li>
                <li>
                  <div className="dropdown pt-2 ps-5">
                    <p className="dropbtn">Truc part</p>
                    <div className="dropdown-content">
                      <a href="#">Link 1</a>
                      <a href="#">Link 2</a>
                      <a href="#">Link 3</a>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="dropdown pt-2 ps-5">
                    <p className="dropbtn">Export part</p>
                    <div className="dropdown-content">
                      <a href="#">Link 1</a>
                      <a href="#">Link 2</a>
                      <a href="#">Link 3</a>
                    </div>
                  </div>
                </li>
                
                <li className="nav-item ps-5">
                  <a className="nav-link" href="#">
                    contact
                  </a>
                </li>
                <li>
                  <div className="dropdown pt-2 ps-5">
                    <p className="dropbtn">PDF Catalog</p>
                    <div className="dropdown-content">
                      <a href="#">Link 1</a>
                      <a href="#">Link 2</a>
                      <a href="#">Link 3</a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default nave;

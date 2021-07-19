import React from "react";

const Navbar = (props) => {
  const handleAbout = (e) => {
    e.preventDefault();
    document.querySelector("#about").style.display = "flex";
    document.querySelector("#body").style.overflow = "hidden";
  };

  const handleWorkshop = (e) => {
    e.preventDefault();
    document.querySelector("#workshop").style.display = "flex";
    document.querySelector("#body").style.overflow = "hidden";
  };

  return (
    <nav className="navbar navbar-expand-lg" id="nav">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img
            src={require("../img/KSIV-Logo.png").default}
            alt=""
            onClick={() => props.returnHome(false)}
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
          <span className="navbar-toggler-icon" />
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          s
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={handleAbout}>
                About us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={handleWorkshop}>
                Workshop
              </a>
            </li>
          </ul>
          <a href="#pay">
            <button
              className="btn btn-outline-success"
              type="submit"
              id="courses"
            >
              Enroll Now
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import { getByPlaceholderText } from "@testing-library/react";
import React, { useState } from "react";
// import CourseHeader from './course-header';
import CourseInfo from "./course-info";
import data from "./data";

const Courses = (props) => {
  const [Coupon, setCoupon] = useState("");

  const handleCoupon = (e) => {
    setCoupon(e.target.value);
  };

  /**
   *
   * @param none
   *
   * @todo change console log statements to links and popup/validation error where required
   *
   * Function For handling and submiting form data
   */
  const handleSubmit = () => {
    if (Coupon === "" || null) {
      const link = "https://paystack.com/pay/Kickstartintovoiceover";
      window.open(link);
    } else {
      data.filter((each) => {
        const { coupon, link } = each;
        coupon === Coupon ? window.open(link) : console.log("coupon wrong"); // should pop a notifaction screaming coupon is invalid, instead of a console.log here.
      });
    }
  };

  return (
    <div className="container">
      {/* <CourseHeader /> */}
      <div className="course-header">
        <div className="navigation">
          <h1>Courses</h1>
          <h1
            className="disabled"
            onClick={() => {
              props.handleCourses(false);
              props.handleFacilitators(true);
            }}
          >
            Facilitators
          </h1>
        </div>
      </div>
      <div className="row course">
        <div className="col-lg-5 col-md-4">
          <img src={require("../img/Class Fier.PNG").default} alt="" />
        </div>
        <div className="col-lg-7 col-md-8">
          <CourseInfo />
        </div>
      </div>
      <div className="course-facilitators">
        <div className="container">
          <div className="section-header">
            <h1>Meet our Facilitators</h1>
          </div>
          <div className="group group-extended course-group">
            <div className="row">
              {data.map((each) => {
                const { id, name, description, bio, image } = each;
                return (
                  <div
                    className="col-xl-6 col-lg-6 col-md-12 col-12 facilitator"
                    id={id}
                  >
                    <div className="card mb-3" style={{ maxWidth: "540px" }}>
                      <div className="row g-0">
                        <div className="col-md-4 col-sm-4">
                          <img
                            src={image}
                            alt=""
                            className="img-fluid rounded-start mx-auto d-block"
                          />
                        </div>
                        <div className="col-md-8 col-sm-8">
                          <div className="card-body">
                            <h1>{name}</h1>
                            <h3>{description}</h3>
                            <p>{bio.substring(0, 360)}...</p>
                            <a href="">Read more</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="register" id="pay">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <img src={require("../img/Class Fier.PNG").default} alt="" />
            <h3>Download Course Calendar</h3>
          </div>
          <div className="col-lg-6 col-md-6 form-container">
            <form>
              <div className="form-head">
                <div className="row">
                  <div className="col-lg-8">
                    <h1>Enroll For</h1>
                    <p>Journey to Voiceover & Voice Acting</p>
                  </div>
                  <div className="col-lg-4">
                    <button>N200,000</button>
                  </div>
                </div>
              </div>
              <div className="form-body">
                <label htmlFor="coupon">Discount Coupon (Optional)</label>
                <input
                  type="tel"
                  id="coupon"
                  placeholder=""
                  onChange={handleCoupon}
                />
                <button onClick={handleSubmit}>Enroll Now</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="foot">
        <hr />
        <p>Copyright © 2021 Kickstarintovos</p>
      </div>
    </div>
  );
};

export default Courses;

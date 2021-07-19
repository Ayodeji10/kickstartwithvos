import React from "react";
// import FacilitatorHeader from './facilitator-header';
import Facilitatorlist from "./facilitator-list";

const Finfo = (props) => {
  return (
    <div className="container">
      {/* <FacilitatorHeader /> */}
      <div className="course-header">
        <div className="navigation">
          <h1
            className="disabled"
            onClick={() => {
              props.handleFacilitators(false);
              props.handleCourses(true);
            }}
          >
            Courses
          </h1>
          <h1>Facilitators</h1>
        </div>
      </div>
      <Facilitatorlist />
      <div className="foot">
        <hr />
        <p>Copyright © 2021 Kickstarintovos</p>
      </div>
      <a href="#nav" className="back-to-top">
        <i class="fas fa-long-arrow-alt-up"></i>
      </a>
    </div>
  );
};

export default Finfo;

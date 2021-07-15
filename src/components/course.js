import React from 'react';
// import CourseHeader from './course-header';
import CourseInfo from './course-info';
import data from './data';

const Courses = (props) => {

    return (
        <div className="container">
            {/* <CourseHeader /> */}
            <div className="course-header">
                <div className="navigation">
                    <h1>Courses</h1>
                    <h1 className="disabled" onClick={() => {
                        props.handleCourses(false)
                        props.handleFacilitators(true)
                    }}>Facilitators</h1>
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
                                const { id, name, description, bio, image } = each
                                return (
                                    <div className="col-xl-6 col-lg-6 col-md-12 col-12 facilitator" id={id}>
                                        <div className="card mb-3" style={{ maxWidth: '540px' }}>
                                            <div className="row g-0">
                                                <div className="col-md-4 col-sm-4">
                                                    <img src={image} alt="" className="img-fluid rounded-start mx-auto d-block" />
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
                                )
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
                        <form action="submit">
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
                                <label htmlFor="firstName">First Name</label>
                                <input type="text" id="firstName" placeholder="First Name" />
                                <label htmlFor="lastName">Last Name</label>
                                <input type="text" id="lastName" placeholder="Last Name" />
                                <label htmlFor="email">Email Address</label>
                                <input type="text" id="email" placeholder="Email Address" />
                                <label htmlFor="number">Phone Number</label>
                                <input type="tel" id="demo" placeholder="" id="telephone" />
                                <label htmlFor="coupon">Discount Coupon (Optional)</label>
                                <input type="tel" id="coupon" placeholder="" />
                                <button>Enroll Now</button>
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

import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


const Banner = (props) => {
    return (
        <div className="banner">
            <div className="container">
                <div className="details">
                    <OwlCarousel
                        className='owl-theme'
                        items='1'
                        autoplay
                        loop
                        dots={false}
                        autoplayTimeout='4000'
                        responsiveRefreshRate='300'
                        animateOut={true}
                        animateIn="true"
                        animateOut="true"
                    >
                        <div className="item">
                            <h1>Kickstart your Journey<br />into <span className="emphases">Voiceover</span> and <span className="emphases">Acting</span></h1>
                            <div className="bars">
                                <span className="bar1" />
                                <span className="bar2" />
                                <span className="bar2" />
                                <span className="bar2" />
                            </div>
                        </div>
                        <div className="item">
                            <h1><span className="emphases">Transform</span> your<br />Voiceover Career to <span className="emphases">the Next Level</span></h1>
                            <div className="bars">
                                <span className="bar2" />
                                <span className="bar1" />
                                <span className="bar2" />
                                <span className="bar2" />
                            </div>
                        </div>
                        <div className="item">
                            <h1><span className="emphases">Get Resources</span> to move<br />upward in your voiceover Journey</h1>
                            <div className="bars">
                                <span className="bar2" />
                                <span className="bar2" />
                                <span className="bar1" />
                                <span className="bar2" />
                            </div>
                        </div>
                        <div className="item">
                            <h1><span className="emphases">New to Voiceovers?</span><br />get started here!</h1>
                            <div className="bars">
                                <span className="bar2" />
                                <span className="bar2" />
                                <span className="bar2" />
                                <span className="bar1" />
                            </div>
                        </div>
                    </OwlCarousel>
                    {/* <p>See all Courses</p> */}
                </div>
                <div className="wrapper" id="pay">
                    <div>
                        <div className="hero-image" />
                        <div className="course-information">
                            <p className="title">Elocution and Voiceovers</p>
                            <h3>Journey to Voiceover &amp; Voice Acting</h3>
                            <p className="course-range">This course will cover a range of subjects from Voicing in
                                Animations, Planning and
                                Target setting for Voice Actors,
                                Branding, Marketing and Promotion</p>
                            <button id="enroll" onClick={() => props.handleCourses(true)}>Enroll Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;

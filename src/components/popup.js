import React from 'react';

const Popup = () => {
    const closeAbout = (e) => {
        e.preventDefault();
        document.querySelector('#about').style.display = 'none';
        document.querySelector('#body').style.overflow = 'visible';
    }

    const closeWorkshop = (e) => {
        e.preventDefault();
        document.querySelector('#workshop').style.display = 'none';
        document.querySelector('#body').style.overflow = 'visible';
    }

    return (
        <>
            <div>
                <div id="about">
                    <div className="pop-content">
                        <div className="row">
                            <div className="col-sm-5 col-12">
                                <img src={require("../img/Class Fier.PNG").default} alt="" className="img-fluid" />
                            </div>
                            <div className="col-sm-7 col-12">
                                <div id="vision">
                                    <h1>Our Vision</h1>
                                    <p>To be the friend every Voice actor confides in.</p>
                                    <p>To be a positive influence to voice actors across the world</p>
                                    <p>To produce more sound and professional talents who will shine in the global stage</p>
                                </div>
                                <div id="mission">
                                    <h1>Our Mission Statement</h1>
                                    <p>Make Voice acting a delight for everyone</p>
                                    <p>Connect Voice actors from various continents of the world</p>
                                    <p>To be the voice actors Information guide and resource.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a href><i className="fas fa-times" id="close" onClick={closeAbout} /></a>
                </div>
                <div id="workshop">
                    <div className=" pop-content">
                        <p>Our Monthly workshops combine a variety of topics related to the Global Voiceover Industry and are
                            majorly for Advanced
                            level Voiceover Talents. However, Voiceover Talents who are just starting out or practicing are free
                            to attend.</p>
                        <h1>Our workshops start soon!</h1>
                        <h3>Click <span className="emphases">Here</span> to save a seat and we would let you know once the workshops are in session.</h3>
                    </div>
                    <a href><i className="fas fa-times" id="close" onClick={closeWorkshop} /></a>
                </div>
            </div>
        </>
    );
};

export default Popup;

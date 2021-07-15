import React, { useState } from 'react';

const CourseInformation = () => {
    const [curriculum, setCurriculum] = useState(false)
    const [requirement, setRequirement] = useState(false)
    const [instructor, setInstructor] = useState(false)

    if (curriculum) {
        return (
            <>
                <div>
                    <ol>
                        <li>Voice in Animations</li>
                        <li>Script Interpretation And Character Analysis</li>
                        <li>Voicing in Video Games</li>
                        <li>Elocution andVoiceovers</li>
                        <li>Vocal care and Vocal Health</li>
                        <li>Projects, Exercises and Tasks</li>
                        <li>Range, Vocal variety &amp; Rhythm</li>
                        <li>Voicing in Commercials</li>
                        <li>The Voiceover Business (Branding, Marketing and Promoting your Voice)</li>
                        <li>The Voiceover Business (Planning and Target setting as a Voice Actor)</li>
                    </ol>
                    <div className="enroll">
                        <div className="container">
                            <div className="row">
                                <div className="col-4">
                                    <button id="enroll-now">
                                        <h1>N200,000</h1>
                                        <h2>Enroll Now</h2>
                                    </button>
                                </div>
                                <div className="col-4">
                                    <button id="close-info">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    if (requirement) {
        return (
            <>
                <div>
                    <ol>
                        <li>Internet connection</li>
                        <li>The Zoom Application (As majority of classes hold there)</li>
                        <li>A computer or a Mobile Smart Phone</li>
                        <li>Earphones/headphones/speakers</li>
                    </ol>
                    <div className="enroll">
                        <div className="container">
                            <div className="row">
                                <div className="col-4">
                                    <button id="enroll-now">
                                        <h1>N200,000</h1>
                                        <h2>Enroll Now</h2>
                                    </button>
                                </div>
                                <div className="col-4">
                                    <button id="close-info">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    if (instructor) {
        return (
            <>
                <div>
                    <div className="group">
                        <div className="col-lg-9 facilitator">
                            <div className="card mb-3" style={{ maxWidth: '540px' }}>
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src="../img/Blessing-Kure.PNG" className="img-fluid rounded-start" alt="..." />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h1>Blessyn Kure</h1>
                                            <h3>Voice Over Expert</h3>
                                            <p>She offers a wide range of voicing services like Audiobooks, Commercials,
                                                Corporate Video, Documentaries, Dubbing,
                                                E-Learning, Live announcing on camera, Movie trailers, Online
                                                promotions/commercials, Phone IVR systems, Podcasts,
                                                Showreel, TV or radio Commercials, TV Shows and movies, Video and computer
                                                games and much more.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-9 facilitator">
                            <div className="card mb-3" style={{ maxWidth: '540px' }}>
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src="/img/Onyinyechi.PNG" className="img-fluid rounded-start" alt="..." />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h1>Onyinyechi Ekumankama</h1>
                                            <h3>Voice Over Expert</h3>
                                            <p>Onyinyechi Ekumankama is a radio and television show host, voice over artiste
                                                and audio producer. She currently works
                                                with Nigeria Info FM, a sister station to Cool FM and Wazobia FM which are
                                                the leading radio stations in Nigeria. On
                                                Nigeria Info FM, she hosts the midday show called the Midday Dialogue on
                                                weekdays and the Saturday morning show called
                                                The Saturday Morning Café.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-9 facilitator">
                        <div className="card mb-3" style={{ maxWidth: '540px' }}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src="/img/Untitled-1.jpg" className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h1>Deanna Cooney</h1>
                                        <h3>Voice Over Expert</h3>
                                        <p>An in-demand commercial and narrative voice talent, she is represented in
                                            Australia by Moore Creative Artists and
                                            internationally by Big Mouth Voices. As a coach, she is an industry leader
                                            delivering world class voice over training to
                                            students across the globe with a strong basis in the development of acting
                                            skills for voice over. Deanna is a passion...</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    return (
        <>
            <h1>About this Course</h1>
            <h2>Journey to Voiceover &amp; Voice Acting (Online Course)<br />Duration - 3 Months</h2>
            <h6>For Beginner and Intermediate Level Voice Actors</h6>
            <h3>Elocution and Voiceovers</h3>
            <p>Do you start a Career in Voiceovers? Improve on your Voice acting skills? Learn about the Voiceover
                business? Here’s a
                course for you!<br /><br />This course will cover a range of subjects from Voicing in Animations,
                Planning
                and
                Target setting for
                Voice Actors, Branding, Marketing and Promoting your Voice, Voicing in Commercials, Range, Vocal
                Variety and Rhythm,
                Vocal care and Vocal Health, Voicing in Video Games, Elocution and Voiceovers, Script Interpretation
                and Character
                Analysis amongst Projects, Exercises and Tasks.<br /><br />Our skilled set of Voiceover professionals
                who are
                experienced coaches
                of Global repute will guide you on this Journey for 3 Months.<br /><br />Get started Here and Sign Up
                Now!
            </p>
            <div className="enroll">
                <div className="container">
                    <div className="row">
                        <div className="col-4">
                            <button id="enroll-now">
                                <h1>N200,000</h1>
                                <h2>Enroll Now</h2>
                            </button>
                        </div>
                        <div className="col-4">
                            <button id="close-info">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CourseInformation;

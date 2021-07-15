import React, { useState } from 'react';
import Button from './information-btn';

const CourseInfo = () => {
    const [overview, setOverview] = useState(true)
    const [curriculum, setCurriculum] = useState(false)
    const [requirement, setRequirement] = useState(false)

    const handleOverview = (e) => {
        e.target.className = ('active');
        document.getElementById('info2').classList.remove('active')
        document.getElementById('info3').classList.remove('active')
        // document.getElementById('info4').classList.remove('active')
        setOverview(true)
        setCurriculum(false)
        setRequirement(false)
    }

    const handleCurriculum = (e) => {
        e.target.className = ('active');
        document.getElementById('info1').classList.remove('active')
        document.getElementById('info3').classList.remove('active')
        // document.getElementById('info4').classList.remove('active')
        setOverview(false)
        setCurriculum(true)
        setRequirement(false)
    }

    const handleRequirement = (e) => {
        e.target.className = ('active');
        document.getElementById('info1').classList.remove('active')
        document.getElementById('info2').classList.remove('active')
        // document.getElementById('info4').classList.remove('active')
        setOverview(false)
        setCurriculum(false)
        setRequirement(true)
    }

    return (
        <div className="full-information" id="full-info">
            <div className="buttons">
                <button id="info1" className="active" onClick={handleOverview}>Overview</button>
                <button id="info2" onClick={handleCurriculum}>Curriculum</button>
                <button id="info3" className="information-button" onClick={handleRequirement}>Requirement</button>
            </div>
            <div className="information">
                {overview ?
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
                        <Button />
                    </>
                    : ''}

                {curriculum ?
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
                            <Button />
                        </div>
                    </>
                    : ''}

                {requirement ?
                    <>
                        <div>
                            <ol>
                                <li>Internet connection</li>
                                <li>The Zoom Application (As majority of classes hold there)</li>
                                <li>A computer or a Mobile Smart Phone</li>
                                <li>Earphones/headphones/speakers</li>
                            </ol>
                            <Button />
                        </div>
                    </>
                    : ''}
            </div>
        </div>
    );
};

export default CourseInfo;

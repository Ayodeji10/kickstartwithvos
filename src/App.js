import React, { useState } from 'react';
import './App.css';
import Navbar from './components/nav'
import Banner from './components/banner'
import Facilitators from './components/facilitators'
import FacilitatorInformation from './components/facilitator-info';
import Testimonails from './components/testimonials';
import Course from './components/course';
import Popup from './components/popup';
import data from './components/data';

function App() {
  const [course, setCourse] = useState(false)
  const [facilitators, setFacilitators] = useState(false)
  const [people, setPeople] = useState(data)

  if (facilitators) {
    return (
      <div class="container-fluid" id="blur">
        <Navbar
          returnHome={state => setFacilitators(state)}
        />
        <FacilitatorInformation
          handleFacilitators={state => setFacilitators(state)}
          handleCourses={state => setCourse(state)}
        />
        <Popup />
      </div>
    )
  }

  if (course) {
    return (
      <div class="container-fluid" id="blur">
        <Navbar
          returnHome={state => setCourse(state)}
        />
        <Course
          people={people}
          handleCourses={state => setCourse(state)}
          handleFacilitators={state => setFacilitators(state)}
        />
        <Popup />
      </div>
    )
  }

  return (
    <div class="container-fluid" id="blur">
      <Navbar />
      <Banner
        handleCourses={state => setCourse(state)}
      />
      <Facilitators
        people={people}
        handleFacilitators={state => setFacilitators(state)}
      />
      <Testimonails />
      <Popup />
    </div>
  );
}

export default App;

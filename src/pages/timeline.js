import React from "react"
import Layout from "../components/layout"
import "../styles/timeline.css"
import atglogo from "../images/logos/atg-logo.png"
import qlirologo from "../images/logos/qliro-logo.png"
import reginlogo from "../images/logos/regin-logo.png"
import softhouselogo from "../images/logos/softhouse-logo.png"

const TimeLine = () => (
  <Layout>
    <div class="container">
      <h1>Work Experience</h1>
      <div class="row">
        <div class="col-md-12">
          <div class="main-timeline">
            <div class="timeline">
              <img src={atglogo} alt="company" class="timeline-icon" />
              <div class="timeline-content">
                <h3 class="title">Web Developer, ATG</h3>
                <h6 class="date"> May 2018 - present</h6>
                <p class="description">
                  Working as a frontend developer, where the main stack includes
                  React, Redux, Redux-saga, Emotion,Flow, StoryBook, Typescript.
                  Involved in building micro-services for the frontend.
                </p>
              </div>
            </div>
            <div class="timeline">
              <img src={softhouselogo} alt="company" class="timeline-icon" />
              <div class="timeline-content">
                <h3 class="title">Scrum Master, ATG</h3>
                <h6 class="date"> Sept 2020 - present</h6>
                <p class="description">
                  Served as a scrum master to the Trainee Team. Lead daily
                  stand-ups and scrum ceremonies. Work with product owners to
                  groom the backlog and plan sprints. Track, escalate and remove
                  impediments.
                </p>
              </div>
            </div>
            <div class="timeline">
              <img src={qlirologo} alt="company" class="timeline-icon" />
              <div class="timeline-content">
                <h3 class="title">Software Developer, Qliro</h3>
                <h6 class="date"> Jan 2017 - May 2018</h6>
                <p class="description">
                  Worked as software developer to build sales management web
                  application using JavaScript6 (ECMA Script 6), React JS,
                  Redux, Prototyping the UI/UX interface for the website and
                  writing tests
                </p>
              </div>
            </div>
            <div href="/#" class="timeline">
              <img src={softhouselogo} alt="company" class="timeline-icon" />
              <div class="timeline-content">
                <h3 class="title">Industrial Trainee, Softhouse Consulting</h3>
                <h6 class="date"> Oct 2016 - Dec 2016</h6>
                <p class="description">
                  Developed an Online Examination portal using JavaScript,
                  Bootstrap, AngularJs. Worked with Agile methodolgies liek
                  Scrum.
                </p>
              </div>
            </div>
            <div class="timeline">
              <img src={reginlogo} alt="company" class="timeline-icon" />
              <div class="timeline-content">
                <h3 class="title">Intern, Reign AB</h3>
                <h6 class="date"> Feb 2016 - May 2016</h6>
                <p class="description">
                  Worked as test intern to create Automated Regression tests for
                  “Embedded views in EXOscada” with Ranorex tool. Explored EXO
                  system and Ranorex tool.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default TimeLine

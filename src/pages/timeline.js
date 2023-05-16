import React from "react"
import Layout from "../components/layout"
import "../styles/timeline.css"
import atglogo from "../images/logos/atg-logo.png"
import qlirologo from "../images/logos/qliro-logo.png"
import hmlogo from "../images/logos/hm-logo.png"
import softhouselogo from "../images/logos/softhouse-logo.png"

const experiences = [
  {
    title: "Frontend Lead Developer",
    company: "H&M Group Business Tech",
    logo: hmlogo,
    date: "May 2021 - Present",
    description:
      "Responsible in building a customized and intuitive web experience for the store administration in H&M. I partly play the role of aScrum Master, lead the frontend tech, and support team in all aspects like providing inputs for design.",
    skills:
      "React · Typescript · Mobx.js · Nodejs · Azure Cloud services · Git · Jira · Optimizely · E2E Automation (Playwright) · ESlint",
  },
  {
    title: "System Developer (Frontend) & Scrum Master",
    company: "AB Trav och Galopp (ATG)",
    logo: atglogo,
    date: "May 2018 - May 2021",
    description:
      "I have built and maintained web application of atg.se from developing new features to upgrading legacy code. Working on moving from mono repo to micro frontend architecture, Optimize application for maximum speed and scalability. Ensure the technical feasibility of UI/UX designs.",
    skills:
      "Git · Jira · Redux.js · TypeScript · React.js · Node.js · Micro frontend · A/B Testing",
  },
  {
    title: "Software Engineer",
    company: "Qliro AB",
    logo: qlirologo,
    date: "January 2017 - May 2018",
    description: `Worked as software developer to build sales management web
      application using JavaScript6 (ECMA Script 6), React JS,
      Redux, Prototyping the UI/UX interface for the website and
      writing tests`,
    skills: "JavaScript6 (ECMA Script 6) · React JS · Redux · C#",
  },

  {
    title: "Trainee, ",
    company: "Softhouse ConsultingB",
    logo: softhouselogo,
    date: "Oct 2016 - Dec 2016",
    description: ` Developed an Online Examination portal using JavaScript,
    Bootstrap, AngularJs. Worked with Agile methodolgies liek
    Scrum.`,
    skills: "JavaScript · Bootstrap · Angular · Scrum",
  },
]

const TimeLine = () => {
  return (
    <Layout>
      <div class="container">
        <h1>Work Experience</h1>
        <div class="row">
          <div class="col-md-12">
            <div class="main-timeline">
              {experiences.map((experience, index) => (
                <div class="timeline">
                  <img
                    src={experience.logo}
                    alt="company"
                    class="timeline-icon"
                  />
                  <div class="timeline-content">
                    <h3 class="title">{experience.title}</h3>
                    <h6 class="date">{experience.date}</h6>
                    <p class="description">{experience.description}</p>
                    <p class="skills">{experience.skills}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default TimeLine

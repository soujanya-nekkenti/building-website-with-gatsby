import React from "react"
import "../styles/stepper.css"
import grad from "../data/Education"
import lang from "../data/Language"
import hobby from "../data/Interests"
import {
  ExperienceWrapper,
  WorkWrapper,
  EdWrapper,
  EdContent,
} from "../styles/workStyle.js"
import Layout from "../components/layout"
import ProgressBar from "./progressBar"

const Education = () => (
  <Layout>
    <ExperienceWrapper>
      <WorkWrapper>
        <h1>Education</h1>
        <EdContent>
          {grad.map(item => (
            <div key={item.id}>
              <p>
                Graduated with a {item.degree}'s Degree majored in {item.major}{" "}
                from {item.name} with {item.grade} <br />
                {item.dated}
              </p>
            </div>
          ))}
        </EdContent>

        <h1>Skills</h1>
        <EdContent>
          <ProgressBar />
        </EdContent>
      </WorkWrapper>

      <EdWrapper>
        <h1>Interests</h1>
        <EdContent>
          {hobby.map(item => (
            <div key={item.id}>
              <p>{item.name}</p>
            </div>
          ))}
        </EdContent>
        <h1>Language</h1>
        <EdContent>
          {lang.map(item => (
            <div key={item.id}>
              <p>
                {item.name}-{item.level}
              </p>
            </div>
          ))}
        </EdContent>
      </EdWrapper>
    </ExperienceWrapper>
  </Layout>
)

export default Education

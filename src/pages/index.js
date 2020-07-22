import React from "react"
import Layout from "../components/layout.js"
import "bootstrap/dist/css/bootstrap.min.css"
import image from "../images/image.jpg"

export default function Home() {
  return (
    <div>
      <Layout>
        <div style={{ margin: "100px", textAlign: "center" }}>
          <h2>Hey! This is Lakshmi Sowjanya Nekkanti</h2>
          <img src={image} alt="coverimage" width="300" height="400"></img>
          <br />
          <p>Frontend Developer</p>
          <p>Masters in Software Engineering</p>
          <p>Indian currently living in Stockholm, Sweden</p>
        </div>
      </Layout>
    </div>
  )
}

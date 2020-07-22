import React from "react"
import Layout from "./components/layout.js"
import "bootstrap/dist/css/bootstrap.min.css"
export default function Home() {
  return (
    <div>
      <Layout>
        <div style={{ margin: "100px", textAlign: "center" }}>
          <h2>This is my home page</h2>
        </div>
      </Layout>
    </div>
  )
}

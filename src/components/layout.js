import React from "react"
import HeaderBar from "./header.js"
import Footer from "./footer.js"
import styled from "styled-components"


const Wrapper = styled.div`
  background: #6a6465;
  width: 100%;
  min-height: 100vh;
  @media (max-width: 700px) {
    min-height: 100vh;
    height: auto;
  }
`

function Layout({ children }) {
  return (
    <Wrapper>
      <HeaderBar />
      {children}
      <Footer />
    </Wrapper>
  )
}
export default Layout

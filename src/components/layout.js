import React from "react"
import Header from "./header.js"
import Footer from "./footer.js"
import styled from "styled-components"

const Wrapper = styled.div`
  background: #27496d;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
  height: auto;
  background-position: bottom;
  position: relative;
  @media (max-width: 700px) {
    min-height: 100vh;
    height: auto;
  }
`
function Layout({ children }) {
  return (
    <Wrapper>
      <Header />
      {children}
      <Footer />
    </Wrapper>
  )
}
export default Layout

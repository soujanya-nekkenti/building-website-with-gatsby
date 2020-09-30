import React from "react"
import Header from "./header.js"
import Footer from "./footer.js"
import styled from "styled-components"
import pinkBg from "../images/pink-bg.png"

const Wrapper = styled.div`
  background-image: url(${pinkBg});
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
    <div>
      <Wrapper>
        <Header />
        {children}
        <Footer />
      </Wrapper>
    </div>
  )
}
export default Layout

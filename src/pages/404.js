import React from "react"
import styled from "styled-components"

export const Wrapper = styled.div`
  display: flex;
  position: absolute;
  flex: 1;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  h1 {
    font-size: 150px;
    color: black;
    padding: 0;
    margin: 20px;
  }
  p {
    color: black;
    font-weight: 500;
    font-style: italic;
    font-size: 20px;
  }
`

const NotFoundPage = () => (
  <Wrapper>
    <h1>404</h1>
    <p>
      Sorry, something might went wrong. It might be because the site is still
      under construction.
    </p>
    <br />
    <p>Please try again later.</p>
  </Wrapper>
)

export default NotFoundPage

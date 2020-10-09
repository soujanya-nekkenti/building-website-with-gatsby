import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"

export const ContactWrapper = styled.div`
  margin: 10% auto;
  @media (max-width: 700px) {
    margin: 15% auto;
  }
`
export const ContactHeader = styled.h1`
  text-align: CENTER;
  color: #8a0040;
  margin-bottom: 5%;
  font-weight: 300;
`
export const ContactDetails = styled.div`
  display: block;
  margin: auto;
  border: 3px solid #8a0040;
  padding: 10px;
  width: 500px;
  height: 350px;
  background: #ffff;

  h3 {
    font-size: 30px;
    color: #8a0040;
    font-weight: 300;
  }
  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
  }
`
export const ContactBox = styled.div`
  padding-top: 50px;
  display: flex;
  align-items: center;
  flex-direction: column;
  font-weight: bold;
  @media (max-width: 700px) {
    flex-direction: column;
  }
  span,
  div {
    color: #fe81bb;
  }
`
export const OnlineBox = styled.div`
  padding-top: 50px;
  display: flex;
  align-items: center;
  flex-direction: column;
  font-weight: bold;
  @media (max-width: 700px) {
    flex-direction: column;
  }
  span {
    color: #fe81bb;
  }
  div {
    flex-direction: row;
    justify-content: space-around;
  }
  a {
    padding: 10px;
  }
`

const Contact = () => (
  <Layout>
    <ContactWrapper>
      <ContactHeader>Get in touch</ContactHeader>
      <ContactDetails>
        <ContactBox>
          <h3>Email me at:</h3>
          <div>soujanya.nekkenti@gmail.com</div>
        </ContactBox>
        <OnlineBox>
          <h3>Connect with me online:</h3>
          <div>
            {" "}
            <a
              href="https://github.com/soujanya-nekkenti"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>GitHub</span>
            </a>
            <a
              href="https://twitter.com/soujanya1604"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Twitter</span>
            </a>
            <a
              href="https://www.linkedin.com/in/lakshmisowjanyanekkanti1604/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>LinkedIn</span>
            </a>
          </div>
        </OnlineBox>
      </ContactDetails>
    </ContactWrapper>
  </Layout>
)

export default Contact

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
  color: #fbfffe;
  margin-bottom: 1%;
  font-weight: 300;
`
export const ContactDetails = styled.div`
  display: block;
  margin: auto;
  padding: 10px;
  width: 500px;
  height: 350px;

  h3 {
    font-size: 30px;
    color: #272343;
    font-weight: 300;
  }
  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
  }
`
export const ContactBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  @media (max-width: 700px) {
    flex-direction: column;
  }
  span {
    color: #27496d;
  }
`

const Text = styled.div`
  color: #fbfffe;

  a {
    color: #fcd1d1;
  }
`

const Button = styled.a`
  color: #272343;
  text-decoration: none;
  padding: 0.9rem 1.4rem;
  background: #fcd1d1;
  border-radius: 0.3rem;
  transition: 0.5s;
  margin-top: 24px;
  font-weight: bold;
  @media (max-width: 380px) {
    width: 80%;
    margin: 0 auto;
    text-align: center;
  }

  &:hover {
    color: #272343;
    background: #fbfffe;
    text-decoration: none;
  }
`

const Contact = () => (
  <Layout>
    <ContactWrapper>
      <ContactHeader>Get in touch</ContactHeader>
      <ContactDetails>
        <ContactBox>
          <Text>
            Although I'm not currently looking for any new opportunities, my
            inbox is always open. Whether you have a question or just want to
            say hi, I'll try my best to get back to you!
          </Text>
          <Button
            href="mailto: soujanya.nekkenti@gmail.com"
            title="Say Hello!!"
          >
            Say Hello!!
          </Button>
        </ContactBox>
        {/* <OnlineBox>
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
        </OnlineBox> */}
      </ContactDetails>
    </ContactWrapper>
  </Layout>
)

export default Contact

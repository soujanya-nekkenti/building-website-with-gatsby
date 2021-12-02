import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout.js"
import "bootstrap/dist/css/bootstrap.min.css"
import styled from "styled-components"
import codeImage from "../images/codeImage.jpg"

const Button = styled.a`
  color: #272343;
  text-decoration: none;
  padding: 0.9rem 1.4rem;
  background: #fcd1d1;
  border-radius: 0.3rem;
  transition: 0.5s;
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
  &:first-child {
    margin-right: 1rem;
    background: #fbfffe;
    color: #272343;
    &:hover {
      color: #272343;
      background: #fcd1d1;
      text-decoration: none;
    }
    @media (max-width: 380px) {
      margin: 0 auto 1.5rem auto;
    }
  }
`

const StyledFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
  @media (max-width: 380px) {
    flex-direction: column;
  }
`


export const UserTitle = styled.div`
  font-size: 4.2em;
  font-weight: bold;
  text-align: center;
  color: #ffffff !important;
  padding-top: 124px;
  span {
    color: #fcd1d1;
  }

  @media only screen and (min-width: 600px) and (max-width: 992px) {
    font-size: 3.5em;
  }

  @media only screen and (max-width: 600px) {
    font-size: 2em;
  }
`

export const StyledImage = styled.div`
  background: linear-gradient(rgba(255,255,255,.4), rgba(255,255,255,.1)), url(${codeImage});
  height: 84vh;
`;


export const UserDescription = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 24px;
  
  h4 {
    color: #ffffff;
    font-weight: bold;
    font-size: 26px;
    text-align: center;
  }
  p {
    color: #ffffff;
    max-width: 90%;
    font-weight: 300;
    font-size: 24px;
    line-height: 1.3;
    
  }

  @media only screen and (max-width: 600px) {
    p {
      max-width: 100%;
      font-size: 16px;
    }
  }

  @media only screen and (min-width: 600px) and (max-width: 992px) {
    img {
      width: 300px;
      height: 300px;
      margin-top: 0px;
      margin-bottom: -50px;
    }
    p {
      max-width: 100%;
      font-size: 19px;
    }
  }
`

export default function Home() {
  return (
    <Layout>
      <StyledImage>
        <UserTitle>
          Hey! I'm Soujanya <span>Nekkanti</span>
        </UserTitle>
        <UserDescription>
          <h4>
            I love to design and build user interfaces. 
          </h4>
          <StyledFlex>
              <Button
                href="https://github.com/soujanya-nekkenti/building-website-with-gatsby/blob/master/RESUME.pdf"
                download
                title="Resume"
              >
                Download Resume
              </Button>
              <Button as={Link} to="/contact">
                Get In Touch
              </Button>
          </StyledFlex>
        </UserDescription> 
        </StyledImage>
    </Layout>
  )
}

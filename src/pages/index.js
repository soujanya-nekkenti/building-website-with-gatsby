import React from "react"
import { Link } from "gatsby"
import MySelfIcon from "../images/icon.png"
import Layout from "../components/layout.js"
import "bootstrap/dist/css/bootstrap.min.css"
import styled from "styled-components"

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
  @media (max-width: 380px) {
    flex-direction: column;
  }
`

export const UserWrapper = styled.div`
  margin-top: 6%;
  margin-bottom: 0;
  padding: 0 8%;
`

export const UserTitle = styled.h1`
  font-size: 4.2em;
  font-weight: bold;
  color: #fbfffe;
  span {
    color: #fcd1d1;
  }
  @media (max-width: 700px) {
    font-size: 2em;
  }
`

export const UserDescription = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
  margin-top: 4%;
  h4 {
    color: #fbfffe;
    font-weight: bold;
    font-size: 26px;
  }
  p {
    color: #fbfffe;
    max-width: 90%;
    font-weight: 300;
    font-size: 24px;
    line-height: 1.3;
    margin-bottom: 15%;
  }
  img {
    width: 500px;
    height: 500px;
    margin-top: -40px;
  }
  @media (max-width: 700px) {
    flex-direction: column-reverse;
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
      <UserWrapper>
        <UserTitle>
          Hey! I'm Soujanya <span>Nekkanti</span>
        </UserTitle>
        <UserDescription>
          <div>
            <h4>Welcome to my portfolio!</h4>
            <p>
              I am a front end developer, scrum master, digital artist and a
              food lover. An Indian based in Stockholm.
            </p>

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
          </div>
          <img src={MySelfIcon} alt="my self" />
        </UserDescription>
      </UserWrapper>
    </Layout>
  )
}

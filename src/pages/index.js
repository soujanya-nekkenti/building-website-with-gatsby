import React from "react"
import { Link } from "gatsby"
import MySelfIcon from "../images/girled.png"
import Layout from "../components/layout.js"
import "bootstrap/dist/css/bootstrap.min.css"
import styled from "styled-components"

const Button = styled.a`
  color: #fff;
  text-decoration: none;
  padding: 0.9rem 1.4rem;
  background: #fe81bb;
  border-radius: 0.3rem;
  box-shadow: rgba(168, 178, 209) 0px 13px 19px -6px;
  transition: 0.5s;
  @media (max-width: 380px) {
    width: 80%;
    margin: 0 auto;
    text-align: center;
  }
  &:hover {
    box-shadow: 0px 0px 17px 0px rgba(0, 196, 255, 0.36);
    transition: 0.5s;
  }
  &:first-child {
    margin-right: 1rem;
    background: #f9f9f9;
    color: #fe81bb;
    box-shadow: rgb(185, 185, 185) 0px 13px 19px -6px;
    &:hover {
      box-shadow: 0px 0px 17px 0px rgba(0, 196, 255, 0.36);
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
  margin: 8% auto;
  padding: 0 8%;
`

export const UserTitle = styled.h1`
  font-size: 4.2em;
  font-weight: bold;
  color: #8a0040;
  span {
    color: #fe81bb;
  }
  @media (max-width: 700px) {
    font-size: 2em;
  }
`

export const UserDescription = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
  margin-bottom: 10%;
  margin-top: 4%;
  h4 {
    color: #8a0040;
    font-weight: bold;
    font-size: 26px;
  }
  p {
    color: #fe81bb;
    max-width: 90%;
    font-weight: 300;
    font-size: 24px;
    line-height: 1.3;
    margin-bottom: 15%;
  }
  img {
    max-width: 50%;
  }
  @media (max-width: 700px) {
    flex-direction: column-reverse;
    img {
      max-width: 100%;
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
                href="https://github.com/soujanya-nekkenti/building-website-gatsby/raw/master/RESUME.pdf"
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

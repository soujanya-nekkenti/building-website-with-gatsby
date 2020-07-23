import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout.js"
import "bootstrap/dist/css/bootstrap.min.css"
import styled from "styled-components"

const Button = styled.a`
  color: #fff;
  text-decoration: none;
  padding: 0.9rem 1.4rem;
  background: #a8b2d1;
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
    color: #a8b2d1;
    box-shadow: rgb(185, 185, 185) 0px 13px 19px -6px;
    &:hover {
      box-shadow: 0px 0px 17px 0px rgba(185, 185, 185, 0.4);
    }
    @media (max-width: 380px) {
      margin: 0 auto 1.5rem auto;
    }
  }
`

const StyledContainer = styled.div`
  padding: 4rem 1rem;
  p {
    color: gray;
    margin-bottom: 2rem;
  }
  color: black;
`

const StyledFlex = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 380px) {
    flex-direction: column;
  }
`
const SmallerContainer = styled.div`
  max-width: 850px;
  margin: 0 auto;
  @media (max-width: 992px) {
    width: 95%;
  }
`

export default function Home() {
  return (
    <Layout>
      <StyledContainer>
        <SmallerContainer>
          <h2>Hey! I'm Soujanya Nekkanti</h2>

          <p>
            My Full name is Lakshmi Sowjanya Nekkanti, also know as Soujanya or
            Lakshmi
            <br />
            A Software Engineer and a Web Developer. An Indian residing in
            Stockholm currently.
            <br /> I love to add value to society by crafting software using
            JavaScript tools, I started building this website out of my interest
            to start my open source journey..
          </p>

          <StyledFlex>
            <Button href="/" rel="noopener noreferrer" target="_blank">
              View resume
            </Button>
            <Button as={Link} to="/contact">
              Get In Touch
            </Button>
          </StyledFlex>
        </SmallerContainer>
      </StyledContainer>
      <SmallerContainer>
        <h3>The website is still under construction</h3>
      </SmallerContainer>
    </Layout>
  )
}

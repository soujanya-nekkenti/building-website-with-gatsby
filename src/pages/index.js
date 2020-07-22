import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout.js"
import "bootstrap/dist/css/bootstrap.min.css"
import {
  Button,
  StyledContainer,
  StyledFlex,
  SmallerContainer,
} from "./indexStyles"

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

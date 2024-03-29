import React from "react"
import Layout from "../components/layout.js"
import image from "../images/myimage.png"
import "bootstrap/dist/css/bootstrap.min.css"
import styled from "styled-components"

const Wrapper = styled.div`
  margin-left: 24px;
  @media (max-width: 960px) {
    max-width: 100%;
    margin-bottom: 1rem;
    margin-left: 0;
    margin-top: 24px;
  }
`

const Image = styled.img`
  display: block;
  margin: 0 auto;
  @media only screen and (max-width: 600px) {
    width: 200px;
    height: 180px;
  }
`

const Text = styled.p`
  color: #000000;

  a {
    color: #fcd1d1;
  }
`

const Flex = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`
const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  width: 90%;
`

const PageTitle = styled.h1`
  margin-top: 4rem;
  padding: 24px;
  text-align: center;

  @media (max-width: 960px) {
    text-align: center;
  }
  color: #000000;
`

const Details = () => {
  return (
    <Wrapper width="100%" maxWidth="48%">
      <Text>
        I’m Lakshmi Sowjanya Nekkanti, a Senior Software Engineer with focus on
        frontend. I'm really interested in Technology & solving technical
        problems. You can know more about me by reading my articles.
      </Text>
      <Text>
        Highly motivated, passionate and creative software professional with
        experience on end-to-end software development and web application
        designing, possessing a set of frontend programming skills and knowledge
        of various tools and frameworks with a fierce passion of user experience
        and software integration.
      </Text>
      <Text>
        Around 6 years of professional experience working with tech stack like
        React, Typescript, Nodejs, Nextjs, Styled Components, Storybook, Redux,
        Mobx, React Hooks, Jest+React Testing Library, E2E(Playwright).
        Experience working cloud services like Azure. A certified Scrum Master
        with good experience working with agile processes.
      </Text>
      <Text>
        As a person, I strive to be the best at whatever I do. Commited to
        quality and customer satisfaction with outstanding verbal/written skills
        and attention to detail.
      </Text>
    </Wrapper>
  )
}

export default () => {
  return (
    <div>
      <Layout>
        <Container>
          <PageTitle>About me</PageTitle>
          <Flex
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Image
              src={image}
              alt="just me chilling"
              width="400px"
              height="350px"
            />

            <Details />
          </Flex>
          {/* <Socials /> */}
        </Container>
      </Layout>
    </div>
  )
}

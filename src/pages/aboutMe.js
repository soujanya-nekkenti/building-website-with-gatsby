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
`

const Text = styled.p`
  color: #fbfffe;

  a {
    color: #fcd1d1;
  }
`

const Flex = styled.div`
  display: flex;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`

const Portrait = styled.div``
const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 601px) {
    width: 90%;
  }
  @media (min-width: 993px) {
  }
`

const PageTitle = styled.h1`
  margin-top: 2rem;
  text-align: center;
  margin-bottom: 2rem;
  @media (max-width: 960px) {
    text-align: center;
  }
  color: #fbfffe;
`

const Details = () => {
  return (
    <Wrapper width="100%" maxWidth="48%">
      <Text>
        I’m Soujanya Nekkanti, a Software Enginer and Web Developer. I'm really
        interested in Technology & solving technical problems. You can know more
        about me by reading my articles.
      </Text>
      <Text>
        Highly motivated, passionate and creative software professional with
        experience on end-to-end software development and web application
        designing, possessing a set of frontend programming skills and knowledge
        of various tools and frameworks with a fierce passion of user experience
        and software integration.
      </Text>
      <Text>
        Around 4 years of professional experience working with programming
        languages like Javascript, HTML, CSS, and frameworks like React JS,
        React Native as a front-end developer. A certified Scrum Master with
        good experience working with agile processes.
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
            alignItems="flex-start"
          >
            <Portrait width="100%" maxWidth="48%">
              <Image
                src={image}
                alt="just me chilling"
                width="400px"
                height="350px"
              />
            </Portrait>
            <Details />
          </Flex>
          {/* <Socials /> */}
        </Container>
      </Layout>
    </div>
  )
}

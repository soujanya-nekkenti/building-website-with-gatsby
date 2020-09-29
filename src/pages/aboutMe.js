import React from "react"
import Layout from "../components/layout.js"
import image from "../images/image.png"
import "bootstrap/dist/css/bootstrap.min.css"
import styled from "styled-components"

const Wrapper = styled.div`
  @media (max-width: 960px) {
    max-width: 100%;
    margin-bottom: 1rem;
  }
`

const Image = styled.img`
  margin-right: 0.6rem;
`

const Text = styled.p`
  color: ##000000;
  lineheight: 1;
`

const Flex = styled.div`
  display: flex;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`

const Portrait = styled.div`
  float: left;
  @media (max-width: 960px) {
    max-width: 100%;
  }
`

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 601px) {
    width: 90%;
  }
  @media (min-width: 993px) {
    width: 80%;
  }
`

const PageTitle = styled.h1`
  margin-top: 2rem;
  text-align: center;
  margin-bottom: 2rem;
  @media (max-width: 960px) {
    text-align: center;
  }
  color: black;
`

const Details = () => {
  return (
    <Wrapper as={Container} width="100%" maxWidth="48%">
      <Text lineHeight={1.6} color={"dark"}>
        <div>
          I’m Soujanya Nekkanti, a Software Enginer and Web Developer. I'm
          really interested in Technology & solving technical problems. You can
          know more about me by reading my articles.
        </div>
      </Text>
      <Text
        lineHeight={1.6}
        color={"dark"}
        dangerouslySetInnerHTML={{
          __html:
            "Currently working as Frontend Developer and Scrum Master at ATG",
        }}
      />

      <Text lineHeight={1.6} color={"dark"}>
        <div>
          Highly motivated, passionate and creative software professional with
          experience on end-to-end software development and web application
          designing, possessing a set of frontend programming skills and
          knowledge of various tools and frameworks with a fierce passion of
          user experience and software integration.
        </div>
      </Text>
      <Text lineHeight={1.6} color={"dark"}>
        <div>
          Around 2.5 years of professional experience working with programming
          languages like Javascript, HTML, CSS, and frameworks like React JS,
          React Native as a front-end developer. Education: Master of Science in
          Software Engineering Bachelor of Technology in Computer Science
          Engineering.
        </div>
      </Text>
      <Text lineHeight={1.6} color={"dark"}>
        <div>
          A certified Scrum Master with good experience working with agile
          processes. As a person, I strive to be the best at whatever I do.
          Commited to quality and customer satisfaction with outstanding
          verbal/written skills and attention to detail.
        </div>
      </Text>
      <Text lineHeight={1.6} color={"dark"}>
        For business inquiries feel free to get in touch with:
        <a href="mailto: soujanya.nekkenti@gmail.com"> Send an e-mail</a>
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
                width="200px"
                height="207px"
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

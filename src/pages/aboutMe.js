import React from "react"
import Layout from "../components/layout.js"
import image from "../images/image.jpg"
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
  display: inline-block;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`

const Portrait = styled.div`
  float: right;
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
        dangerouslySetInnerHTML={{ __html: "Frontend Developer at ATG" }}
      />
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
                height="267px"
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

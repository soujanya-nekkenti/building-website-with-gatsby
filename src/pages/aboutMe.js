import React from "react"
import Layout from "../components/layout.js"
import {
  Wrapper,
  Img as Image,
  Text,
  Flex,
  Portrait,
  Container,
  PageTitle,
} from "./aboutMeStyles"
import image from "../images/image.jpg"

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

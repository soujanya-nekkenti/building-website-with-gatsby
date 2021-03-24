import React from "react"
import styled from "styled-components"
import SocialIcons from "../icons/socialIcons"
import { StaticQuery, graphql } from "gatsby"

const DummyFooter = styled.div`
  display: block;
  padding: 20px;
  height: 60px;
  width: 100%;
`

const StyledContainer = styled.footer`
  background-color: #27496d;
  text-align: center;
  position: fixed;
  padding-top: 20px;
  left: 0;
  bottom: 0;
  width: 100%;
`

const StyledSocial = styled.div`
  color: #272343;
  width: 100%;
  max-width: 500px;
  margin: 0 auto 10px;
`

const StyledSocialLink = styled.a`
  padding: 20px;
  svg {
    width: 20px;
    height: 20px;
  }
`

const Author = styled.div`
  color: #272343;
  font-style: italic;
  line-height: 2;
`

function Footer() {
  return (
    <StaticQuery
      query={graphql`
        {
          allSite {
            edges {
              node {
                siteMetadata {
                  linkedin
                  twitter
                  github
                  author
                }
              }
            }
          }
        }
      `}
      render={data => (
        <div>
          <DummyFooter />
          <StyledContainer>
            {data.allSite.edges.map(({ node }) => (
              <StyledSocial>
                <StyledSocialLink
                  href={node.siteMetadata.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SocialIcons name="GitHub" />
                </StyledSocialLink>
                <StyledSocialLink
                  href={node.siteMetadata.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SocialIcons name="Twitter" />
                </StyledSocialLink>
                <StyledSocialLink
                  href={node.siteMetadata.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SocialIcons name="Linkedin" />
                </StyledSocialLink>
                <Author>
                  Designed & developed by {node.siteMetadata.author}
                </Author>
              </StyledSocial>
            ))}
          </StyledContainer>
        </div>
      )}
    />
  )
}
export default Footer

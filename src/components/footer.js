import React from "react"
import styled from "styled-components"
import SocialIcons from "../icons/socialIcons"
import { StaticQuery, graphql } from "gatsby"

const StyledContainer = styled.footer`
  flex-direction: column;
  padding: 15px;
  text-align: center;
  height: auto;
  min-height: 70px;
`

const StyledSocial = styled.div`
  color: #a8b2d1;
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
  color: #a8b2d1;
  font-style: italic;
  line-height: 2;
`

function Header() {
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
        <StyledContainer>
          {data.allSite.edges.map(({ node }) => (
            <StyledSocial>
              <hr />
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
      )}
    />
  )
}
export default Header

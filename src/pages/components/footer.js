import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"

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
        <div>
          {data.allSite.edges.map(({ node }) => (
            <div>
              <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">
                  {" "}
                  Designed by {node.siteMetadata.author}
                </Navbar.Brand>
                <Nav>
                  <Nav.Link href="/pagetwo"> Second Page </Nav.Link>
                </Nav>
              </Navbar>
            </div>
          ))}
        </div>
      )}
    />
  )
}
export default Header

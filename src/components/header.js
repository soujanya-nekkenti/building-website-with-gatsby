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
                  title
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
              <Navbar bg="dark" expand="lg" variant="dark" sticky="top">
                <Navbar.Brand href="/">{node.siteMetadata.title}</Navbar.Brand>
                <Nav>
                  <Nav.Link href="/aboutMe"> About Me </Nav.Link>
                </Nav>
                <Nav>
                  <Nav.Link href="/experience"> Experience </Nav.Link>
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

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Row from "react-bootstrap/Row"
import Dropdown from "react-bootstrap/Dropdown"
import DropdownButton from "react-bootstrap/DropdownButton"
import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/header.css"
import { FiMenu } from "react-icons/fi"

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
            <Row className="padding">
              <Navbar
                className="navbar-laptop border-bottom"
                id="laptop"
                fixed="top"
              >
                <Navbar.Brand id="navbar-brand-laptop" href="/">
                  Soujanya Nekkanti
                </Navbar.Brand>
                <Nav>
                  <Nav.Link id="nav-links-laptop" href="/aboutMe">
                    About Me
                  </Nav.Link>
                  <Nav.Link id="nav-links-laptop" href="/timeline">
                    Experience
                  </Nav.Link>
                  <Nav.Link id="nav-links-laptop" href="/education">
                    Education & Skills
                  </Nav.Link>
                  <Nav.Link id="nav-links-laptop" href="/contact">
                    Contact
                  </Nav.Link>
                </Nav>
              </Navbar>

              <Navbar
                className="navbar-tablet border-bottom"
                id="tablet"
                fixed="top"
              >
                <Navbar.Brand id="navbar-brand-tablet" href="/">
                  Soujanya Nekkanti
                </Navbar.Brand>
                <DropdownButton
                  alignRight
                  variant="light"
                  title={<FiMenu size={30} />}
                  className="header-dropdown-tablet"
                >
                  <Dropdown.Item href="/aboutMe">About Me</Dropdown.Item>
                  <Dropdown.Item href="/timeline">Experience</Dropdown.Item>
                  <Dropdown.Item href="/education">
                    Education & Skills
                  </Dropdown.Item>
                  <Dropdown.Item href="/contact">Contact</Dropdown.Item>
                </DropdownButton>
              </Navbar>

              <Navbar
                className="navbar-mobile border-bottom"
                id="mobile"
                fixed="top"
              >
                <Navbar.Brand id="navbar-brand-mobile" href="/">
                  Soujanya Nekkanti
                </Navbar.Brand>
                <DropdownButton
                  alignRight
                  variant="light"
                  title={<FiMenu size={30} />}
                >
                  <Dropdown.Item href="/aboutMe">About Me</Dropdown.Item>
                  <Dropdown.Item href="/timeline">Experience</Dropdown.Item>
                  <Dropdown.Item href="/education">
                    {" "}
                    Education & Skills
                  </Dropdown.Item>

                  <Dropdown.Item href="/contact">Contact</Dropdown.Item>
                </DropdownButton>
              </Navbar>
            </Row>
          ))}
        </div>
      )}
    />
  )
}
export default Header

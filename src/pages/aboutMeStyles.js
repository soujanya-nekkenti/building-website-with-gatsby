import styled from "styled-components"

export const Wrapper = styled.div`
  @media (max-width: 960px) {
    max-width: 100%;
    margin-bottom: 1rem;
  }
`

export const Img = styled.img`
  margin-right: 0.6rem;
`

export const DetailsContainer = styled.div`
  padding-left: 1.5rem;
`

export const P = styled.p`
  display: flex;
  align-items: center;
  color: ##000000;
`

export const Text = styled.p`
  color: ##000000;
  lineheight: 1;
`

export const Flex = styled.div`
  display: inline-block;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`

export const Portrait = styled.div`
  float: right;
  @media (max-width: 960px) {
    max-width: 100%;
  }
`

export const Container = styled.div`
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

export const PageTitle = styled.h1`
  margin-bottom: 2rem;
  @media (max-width: 960px) {
    text-align: center;
  }
  ${({ theme }) =>
    theme === "dark" &&
    `
			color: #fff;
	`};
`

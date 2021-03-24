import styled from "styled-components"

export const ExperienceWrapper = styled.div`
  align-items: flex-start;
  color: #fbfffe;
  display: flex;
  padding: 0 5% 0 5%;
  margin-left: 30px;
  @media (max-width: 700px) {
    flex-direction: column;
  }
`
export const WorkWrapper = styled.div`
  flex: 2;
  margin-right: 8%;
  h1 {
    font-weight: 300;
    padding-bottom: 10px;
    margin-bottom: 20px;
    border-bottom: solid 1px #fcd1d1;
  }
  @media (max-width: 700px) {
    margin-right: 0;
  }
`
export const EdWrapper = styled.div`
  flex: 1;
  h1 {
    font-weight: 300;
    padding-bottom: 10px;
    margin-bottom: 20px;
    border-bottom: solid 1px #fcd1d1;
  }
  @media (max-width: 700px) {
    margin: 40px 0;
  }
`
export const EdContent = styled.div`
  font-weight: 300;
  margin-bottom: 100px;
  @media (max-width: 700px) {
    margin: 0 0 40px 0;
  }
`
export const Stepper = styled.div`
  padding-left: 50px;
  width: 100%;
  @media (max-width: 700px) {
    padding: 10px;
  }
`
export const StepperHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  h3 {
    margin: 2px;
    font-weight: 300;
  }
  a {
    font-size: 23px;
    font-weight: 300;
    color: #fcd1d1;
    text-decoration: none;
  }
  @media (max-width: 700px) {
    flex-direction: column;
    align-items: flex-start;
  }
`
export const LogoLink = styled.a`
  display: block;
  img {
    width: 64px;
    height: 64px;
    display: flex;
  }
`
export const StepperDesc = styled.div`
  max-width: 80%;
  p {
    font-size: 16px;
    font-weight: 300;
    margin: 5px;
  }
  li {
    font-size: 16px;
    font-weight: 300;
    margin: 5px;
  }
  @media (max-width: 700px) {
    max-width: 100%;
  }
`

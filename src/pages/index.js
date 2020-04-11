import React from "react"
import styled from "styled-components"

import Layout from "../layout/Layout"
import Heading from "../components/Heading/Heading"
import About from "../components/About/About"
import CookieConsent from "react-cookie-consent"

import GridComponent from "../components/GridComponent/GridComponent"

import SEO from "../components/seo"

const StyledWrapper = styled.div`
  max-width: ${({ theme }) => theme.breakpoints.lg};
  margin: 0 auto;
  padding: 35px;
  display: flex;
  flex-direction: column;
`

const IndexPage = () => (
  <Layout hero>
    <StyledWrapper>
      <SEO title="2LB - renowacja, mycie, impregnacja" />
      <Heading big>O nas</Heading>
      <About />
      <Heading big>Dlaczego my?</Heading>
      <GridComponent />
    </StyledWrapper>
    <CookieConsent
      location="bottom"
      buttonText="Akceptuję"
      cookieName="myAwesomeCookieName2"
      style={{ fontSize: "14px", textAlign: "center", background: "#212121" }}
      buttonStyle={{
        color: "#000",
        textAlign: "left",
        fontSize: "12px",
        padding: "8px 15px",
        borderRadius: "25px",
        background: "#fff",
      }}
      expires={150}
    >
      Ta strona wykorzystuje pliki cookies.
    </CookieConsent>
  </Layout>
)

export default IndexPage

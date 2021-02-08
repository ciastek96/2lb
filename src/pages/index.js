import React from "react"
import styled from "styled-components"
import CookieConsent from "react-cookie-consent"

import Layout from "../layout/Layout"
import Heading from "../components/Heading/Heading"
import About from "../components/About/About"
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
      style={{
        fontSize: "14px",
        textAlign: "center",
        background: "#212121",
        width: "100%",
      }}
      buttonStyle={{
        color: "#000",
        margin: "5px 15px",
        fontSize: "12px",
        padding: "8px 25px",
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

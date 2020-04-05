import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"

import Layout from "../layout/Layout"
import Heading from "../components/Heading/Heading"
import About from "../components/About/About"
import GridComponent from "../components/GridComponent/GridComponent"
import Img from "gatsby-image"

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
      <Heading big>O nas</Heading>
      <About />
      <Heading big>Dlaczego my?</Heading>
      <GridComponent />
    </StyledWrapper>
  </Layout>
)

export default IndexPage

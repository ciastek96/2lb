import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import StyledBlockContent from "../../components/StyledBlockContent/StyledBlockContent"

const StyledInnerWrapper = styled.div`
  max-width: ${({ theme }) => theme.breakpoints.md};
  margin: 0 auto;
  display: grid;
  grid-template-columns: 45% 55%;
  justify-content: center;

  @media all and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`
const StyledImageWrapper = styled.div`
  width: 100%;
  max-width: 500px;
  padding: 25px;
  display: block;
`

const StyledContent = styled.div`
  margin-left: 65px;

  @media all and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-left: 35px;
  }

  @media all and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin-left: 0;
  }
`

const About = () => {
  const query = useStaticQuery(graphql`
    {
      sanityAbout {
        _rawText
        photo {
          asset {
            fluid(maxWidth: 400) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  `)
  return (
    <StyledInnerWrapper>
      <StyledImageWrapper>
        <Img fluid={query.sanityAbout.photo.asset.fluid} />
      </StyledImageWrapper>
      <StyledContent>
        <StyledBlockContent blocks={query.sanityAbout._rawText} index />
      </StyledContent>
    </StyledInnerWrapper>
  )
}

export default About

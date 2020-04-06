import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import Overlay from "../Overlay/Overlay"
import HeroHeading from "./HeroHeading/HeroHeading"

const Container = styled.div`
  .HeroStyledWrapper {
    height: 100vh;
    width: 100%;
    margin: 0;
  }
`

const Hero = () => {
  const query = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "hero/hero2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2560) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Container>
      <BackgroundImage
        Tag="div"
        fluid={query.file.childImageSharp.fluid}
        alt="Hero Background"
        className="HeroStyledWrapper"
      >
        <Overlay />
        <HeroHeading />
      </BackgroundImage>
    </Container>
  )
}

export default Hero

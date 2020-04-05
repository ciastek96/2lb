import React, { Component } from "react"
import styled, { keyframes, css } from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import Overlay from "../Overlay/Overlay"
import HeroBg from "../../assets/hero/hero2.jpg"
import HeroHeading from "./HeroHeading/HeroHeading"

// const StyledWrapper = styled.div`
//   height: 100vh;
//   width: 100%;
//   margin: 0;
//   /* background: url(${HeroBg}); */
//   background-position: 50% 50%;
//   background-size: cover;
//   background-repeat: no-repeat;
//   overflow: hidden;
//   position: relative;
//   z-index: 1;
// `

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
    // <StyledWrapper>
    //   <BackgroundImage
    //     Tag="div"
    //     fluid={query.file.childImageSharp.fluid}
    //     alt="Hero Background"
    //   />
    //   <Overlay />
    //   <HeroHeading />
    // </StyledWrapper>
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

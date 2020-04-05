import React, { useState, useCallback } from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import StyledBlockContent from "../../components/StyledBlockContent/StyledBlockContent"
import Lightbox from "../../components/Lightbox/Lightbox"

import Photo from "../../assets/box3.jpg"
import Photo2 from "../../assets/box2.jpg"
import Photo3 from "../../assets/box1.jpg"

import { IoMdCheckmark } from "react-icons/io"

const StyledInnerWrapper = styled.div`
  max-width: ${({ theme }) => theme.breakpoints.md};
  margin: 35px auto;
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
  max-width: 100%;
  padding: 25px;
  display: block;
  max-height: 600px;
`

const StyledIoMdCheckmark = styled(IoMdCheckmark)`
  color: ${({ theme }) => theme.primary};
  margin-right: 10px;
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

const StyledImg = styled.div`
  /* position: absolute;
  max-width: 400px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 1;
  margin-right: 65px; */
  height: 100%;
  width: 100%;
  background: url(${({ src }) => src});
  background-position: center;
  background-size: cover;
`

const Paragraph = styled.p`
  color: ${({ theme }) => theme.white};
  text-align: justify;
  line-height: 1.8;
  overflow: hidden;
  z-index: 2;

  span {
    padding: 0;
    margin: 8px 25px;
    display: block;
  }
`
const StyledImgix = styled(Img)`
  width: 100%;
  height: 100%;
`

const About = () => {
  const query = useStaticQuery(graphql`
    {
      sanityAbout {
        _rawText
        photo {
          asset {
            fluid {
              src
            }
          }
        }
      }
    }
  `)
  return (
    <StyledInnerWrapper>
      <StyledImageWrapper>
        <StyledImg src={query.sanityAbout.photo.asset.fluid.src} />
      </StyledImageWrapper>
      <StyledContent>
        <StyledBlockContent blocks={query.sanityAbout._rawText} index />
      </StyledContent>
    </StyledInnerWrapper>
  )
}

export default About

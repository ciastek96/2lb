import React, { useState, useEffect, useRef } from "react"
import styled, { keyframes, css } from "styled-components"

const slideIn = keyframes`
    from {
        top: -15%;
        opacity: 0;
    }
    15% {
        top: 0;
        opacity: 1;
    }
    85% {
        opacity: 1;
    }

    to {
        opacity: 0;
    }
`

const StyledWrapper = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 50% 50%;
  grid-template-rows: 1fr;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 3;

  @media all and (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    grid-template-columns: 1fr;
    grid-template-rows: 50% 50%;
  }
`

const Title = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-size: 7rem;
  font-size: clamp(3rem, 5.5vw, 7rem);
  font-weight: 400;
  color: ${({ theme }) => theme.primary};
  opacity: 1;
  text-align: left;
  position: relative;
  top: 0;
  margin: 0 10px;

  ${({ animate }) =>
    animate &&
    css`
      font-weight: 600;
      text-align: right;
      color: white;
      animation: ${slideIn} 5s ease-in-out both;
    `};

  /* @media all and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 5rem;
  }

  @media all and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 4rem;
    text-align: center;
    margin: 0;
  }
*/

  @media all and (max-width: ${({ theme }) => theme.breakpoints.xs}) {
   //  font-size: 2.5rem;
   text-align: center;
   margin: 0;
  }
`

const HeroHeading = () => {
  const headings = ["Układanie", "Mycie", "Renowacja"]
  const [currentHeading, setCurrentHeading] = useState(0)
  const items = headings.length - 1

  const changeHeading = () => {
    setCurrentHeading(currentHeading => {
      const newCurrent = currentHeading < items ? currentHeading + 1 : 0
      return newCurrent
    })
  }

  return (
    <StyledWrapper>
      <Title
        animate
        key={headings[currentHeading]}
        onAnimationEnd={changeHeading}
      >
        {headings[currentHeading]}
      </Title>
      <Title>kostki brukowej</Title>
    </StyledWrapper>
  )
}

export default HeroHeading

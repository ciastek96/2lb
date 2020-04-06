import React from "react"
import styled from "styled-components"

import Overlay from "../Overlay/Overlay"
import Heading from "../Heading/Heading"

const StyledWrapper = styled.div`
  width: 100%;
  height: 400px;
  background: ${({ theme }) => theme.dark2};
  position: relative;
  z-index: 1;

  .FluidboxWrapper {
    width: 100%;
    height: 400px;
    background: ${({ theme }) => theme.dark2};
  }
`

const StyledInnerWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -40%);
  z-index: 10;

  ${Heading} {
    margin: 0;
    font-weight: 300;
    font-size: ${({ theme }) => theme.fontSize.xxl};
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);

    @media all and (max-width: ${({ theme }) => theme.breakpoints.md}) {
      font-size: ${({ theme }) => theme.fontSize.xl};
    }
    @media all and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      font-size: 2em;
    }
  }
`

const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.grey100};
  font-weight: 500;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
  text-align: center;
`

const Fluidbox = ({ children, title, date }) => (
  <StyledWrapper>
    {children}
    <Overlay />
    <StyledInnerWrapper>
      <Heading big>{title}</Heading>
      {date && <Paragraph>{date}</Paragraph>}
    </StyledInnerWrapper>
  </StyledWrapper>
)

export default Fluidbox

import React from "react"
import { Link } from "gatsby"
import styled, { css } from "styled-components"
import { IoIosSearch } from "react-icons/io"

import Button from "../Button/Button"

const StyledWrapper = styled.div`
  width: 100%;
  padding-top: 100%;
  background: ${({ theme }) => theme.dark2};
  background-image: url(${({ bg }) => bg});
  background-position: 50% 50%;
  background-size: cover;
  position: relative;
  border-radius: 15px;
  overflow: hidden;

  ::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.primary};
    transition: all 0.25s ease-in-out;
    opacity: 0;
  }

  &:hover::after {
    opacity: 0.7;
  }

  &:hover ${Button} {
    opacity: 1;
  }

  ${({ article }) =>
    article &&
    css`
      border-radius: 0;
      padding-top: 60%;

      &:hover ${Button} {
        display: none;
      }

      ${StyledTitle} {
        top: 50%;
      }
      &:hover ${StyledIoIosSearch} {
        opacity: 1;
      }
    `}
`

const StyledTitle = styled.span`
  width: 100%;
  padding: 10px;
  position: absolute;
  top: 55%;
  left: 0;
  transform: translateY(-55%);
  text-align: center;
  z-index: 5;

  h1 {
    color: white;
    font-size: ${({ theme }) => theme.fontSize.l};
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    margin: 20px 0;
    text-shadow: 0px 1px 2px #000;

    @media all and (max-width: ${({ theme }) => theme.breakpoints.xs}) {
      font-size: ${({ theme }) => theme.fontSize.m};
    }
  }
`

const StyledButton = styled(Button)`
  opacity: 0;
`

const StyledIoIosSearch = styled(IoIosSearch)`
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.white};
  opacity: 0;
  transition: all 0.35s ease-in;
`

const Box = ({ bgImg, title, slug, article }) => (
  <StyledWrapper bg={bgImg} as={Link} to={slug} article={article}>
    <StyledTitle>
      {article ? (
        <StyledIoIosSearch />
      ) : (
        <>
          <h1>{title}</h1>
          <StyledButton>Czytaj</StyledButton>
        </>
      )}
    </StyledTitle>
  </StyledWrapper>
)

export default Box

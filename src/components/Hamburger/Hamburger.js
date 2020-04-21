import React, { Component, useState } from "react"
import styled from "styled-components"

import MobileMenu from "../MobileMenu/MobileMenu"

const StyledWrapper = styled.button`
  cursor: pointer;
  padding: 5px 10px;
  background: transparent;
  border: none;
  border-radius: 15%;
  margin: 0;
  z-index: 999;
`

const HamburgerBox = styled.span`
  width: 24px;
  height: 24px;
  display: inline-block;
  position: relative;
`
const HamburgerInner = styled.span`
  width: 100%;
  height: 2px;
  background-color: ${({ isOpen }) => (isOpen ? "transparent" : "white")};
  position: absolute;
  transition: all 0.15s ease-in;
  top: 50%;
  left: 0;
  transform: ${({ isOpen }) => (isOpen ? "rotate(0)" : "translateY(-50%)")};

  &.open {
    background-color: transparent;
  }

  ::after,
  ::before {
    content: "";
    width: 100%;
    height: 2px;
    position: absolute;
    background: white;
    left: 0;
    transition: transform 0.25s linear;
  }

  ::after {
    top: 5px;
    transform: ${({ isOpen }) =>
      isOpen ? "translateY(-5px) rotate(-45deg)" : "rotate(0)"};
  }

  ::before {
    top: -5px;
    transform: ${({ isOpen }) =>
      isOpen ? "translateY(5px) rotate(45deg)" : "rotate(0)"};
  }
`

const Hamburger = () => {
  const [isOpen, toggleOpen] = useState(false)

  return (
    <>
      <StyledWrapper onClick={() => toggleOpen(!isOpen)}>
        <HamburgerBox>
          <HamburgerInner isOpen={isOpen} />
        </HamburgerBox>
      </StyledWrapper>
      <MobileMenu isOpen={isOpen} />
    </>
  )
}

export default Hamburger

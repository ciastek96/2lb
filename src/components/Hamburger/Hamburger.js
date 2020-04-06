import React, { Component } from "react"
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
  background-color: white;
  position: absolute;
  transition: all 0.15s ease-in;
  top: 50%;
  left: 0;
  transform: translateY(-50%);

  &.open {
    transform: rotate(0);
    background-color: transparent;
  }

  ::after,
  ::before {
    content: "";
    width: 100%;
    height: 2px;
    position: absolute;
    background: white;
    transform: rotate(0);
    left: 0;
    transition: transform 0.25s linear;
  }

  ::after {
    top: 5px;
  }

  &.open::after {
    transform: translateY(-5px) rotate(-45deg);
  }
  ::before {
    top: -5px;
  }
  &.open::before {
    transform: translateY(5px) rotate(45deg);
  }
`

class Hamburger extends Component {
  constructor(props) {
    super(props)
    this.hamburgerRef = React.createRef()
  }
  state = {
    isOpen: false,
  }

  handleClick = () => {
    const { isOpen } = this.state
    const hamburgerNode = this.hamburgerRef.current

    this.setState(
      prevState => ({
        isOpen: !prevState.isOpen,
      }),
      () => {
        isOpen
          ? hamburgerNode.classList.remove("open")
          : hamburgerNode.classList.add("open")
      }
    )
  }

  render() {
    const { isOpen } = this.state
    return (
      <>
        <StyledWrapper onClick={this.handleClick}>
          <HamburgerBox>
            <HamburgerInner ref={this.hamburgerRef} />
          </HamburgerBox>
        </StyledWrapper>
        <MobileMenu isOpen={isOpen} />
      </>
    )
  }
}

export default Hamburger

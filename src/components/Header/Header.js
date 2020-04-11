import React, { Component } from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import Logo from "../../assets/logo_3a_xl.svg"
import Navigation from "../Navigation/Navigation"
import Hamburger from "../Hamburger/Hamburger"

const StyledWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background: transparent;
  width: 100%;
  height: 125px;

  padding: 0 35px;
  z-index: 999;
  transition: all 0.5s ease-in-out;

  &.scrolled {
    height: 100px;
    background: ${({ theme }) => theme.dark2};
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.25);
  }
`

const StyledInnerWrapper = styled.div`
  height: 100%;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.breakpoints.xl};
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.white};
  display: block;

  img {
    max-width: 150px;
    height: 80px;
  }
`

const Logotype = styled.div`
  margin: 0;
`

class Header extends Component {
  constructor(props) {
    super(props)
    this.headerRef = React.createRef()
  }

  state = {
    isHamburgerVisible: false,
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
    this.handleResize()
    window.addEventListener("resize", this.handleResize)
  }

  handleScroll = () => {
    const headerNode = this.headerRef.current
    if (headerNode) {
      window.scrollY > 30
        ? headerNode.classList.add("scrolled")
        : headerNode.classList.remove("scrolled")
    }
  }

  handleResize = () => {
    window.innerWidth > 768
      ? this.setState({
          isHamburgerVisible: false,
        })
      : this.setState({
          isHamburgerVisible: true,
        })
  }

  scrollFn = () => {}

  render() {
    const { isHamburgerVisible } = this.state
    return (
      <StyledWrapper ref={this.headerRef} classList="scrolled">
        <StyledInnerWrapper>
          <Logotype>
            <StyledLink to="/">
              <img src={Logo} alt="2LB Second Life Bruk logotyp" />
            </StyledLink>
          </Logotype>
          {isHamburgerVisible ? <Hamburger /> : <Navigation />}
        </StyledInnerWrapper>
      </StyledWrapper>
    )
  }
}

export default Header

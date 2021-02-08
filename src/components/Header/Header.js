import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import Logo from "../../assets/logo_3a_xl.svg"
import Navigation from "../Navigation/Navigation"
import Hamburger from "../Hamburger/Hamburger"

const StyledWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background: ${({ isScrolled, theme }) =>
    isScrolled ? theme.dark2 : "transparent"};
  width: 100%;
  height: ${({ isScrolled }) => (isScrolled ? "100px" : "125px")};
  padding: 0 35px;
  box-shadow: ${({ isScrolled }) =>
    isScrolled ? "0 0 10px 0 rgba(0, 0, 0, 0.25)" : "0"};
  z-index: 999;
  transition: all 0.5s ease-in-out;
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

const Header = () => {
  const [isHamburgerVisible, setIsHamburgerVisible] = useState(true)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    handleResize()
    window.addEventListener("resize", handleResize)
  })

  const handleScroll = () => {
    window.scrollY > 30 ? setIsScrolled(true) : setIsScrolled(false)
  }

  const handleResize = () => {
    window.innerWidth > 768
      ? setIsHamburgerVisible(false)
      : setIsHamburgerVisible(true)
  }

  return (
    <StyledWrapper isScrolled={isScrolled}>
      <StyledInnerWrapper>
        <Logotype>
          <StyledLink to="/">
            <img loading="lazy" src={Logo} alt="2LB Second Life Bruk logotyp" />
          </StyledLink>
        </Logotype>
        {isHamburgerVisible ? <Hamburger /> : <Navigation />}
      </StyledInnerWrapper>
    </StyledWrapper>
  )
}

export default Header

import React from "react"
import styled from "styled-components"

import Navigation from "../../components/Navigation/Navigation"

const StyledWrapper = styled.div`
  height: 100vh;
  width: 100%;
  background-color: ${({ theme }) => theme.dark2};
  overflow: hidden;
  position: fixed;
  top: 0;
  left: ${({ isOpen }) => (isOpen ? 0 : "100%")};
  animation-duration: 0.3s;
  animation-name: ${({ isOpen }) => (isOpen ? "slidein" : "slideout")};
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  transition: all 0.15s linear;

  @keyframes slidein {
    from {
      left: 100%;
    }

    to {
      left: 0;
    }
  }

  @keyframes slideout {
    from {
      left: 0;
    }

    to {
      left: 100%;
    }
  }
`

const MobileMenu = ({ isOpen }) => (
  <StyledWrapper isOpen={isOpen}>
    <Navigation mobile />
  </StyledWrapper>
)

export default MobileMenu

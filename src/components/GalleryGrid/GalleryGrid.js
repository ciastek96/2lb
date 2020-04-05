import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const StyledWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(3, 1fr);
`
const StyledLink = styled(Link)`
  display: block;
  height: 100%;
  background: rgba(255, 255, 255, 0.5);
  z-index: 10;
`
const Item = styled.div`
  display: block;
  height: 100%;
  background-size: cover;
`

const GalleryGrid = () => (
  <StyledWrapper>
    <StyledLink to="/">
      <Item />
    </StyledLink>
    <StyledLink to="/">
      <Item />
    </StyledLink>
    <StyledLink to="/">
      <Item />
    </StyledLink>
    <StyledLink to="/">
      <Item />
    </StyledLink>
    <StyledLink to="/">
      <Item />
    </StyledLink>
    <StyledLink to="/">
      <Item />
    </StyledLink>
    <StyledLink to="/">
      <Item />
    </StyledLink>
    <StyledLink to="/">
      <Item />
    </StyledLink>
    <StyledLink to="/">
      <Item />
    </StyledLink>
  </StyledWrapper>
)

export default GalleryGrid

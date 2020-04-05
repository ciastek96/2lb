import React, { Component } from "react"
import styled, { css } from "styled-components"
import { element } from "prop-types"

const StyledWrapper = styled.ul`
  display: flex;
`
const StyledItem = styled.li`
  list-style: none;
  padding: 8px 10px;
  width: 30px;
  text-align: center;

  ${({ active }) =>
    active &&
    css`
      border-radius: 50%;
      color: ${({ theme }) => theme.dark2};
      background-color: ${({ theme }) => theme.primary};
    `};
`

class Pagination extends Component {
  state = {
    activeItem: false,
  }

  changeActiveItem = e => {
    this.setState({
      activeItem: true,
    })
  }

  render() {
    return (
      <StyledWrapper>
        <StyledItem
          activeClass={this.state.activeItem}
          onClick={this.changeActiveItem}
        >
          1
        </StyledItem>
        <StyledItem
          activeClass={this.state.activeItem}
          onClick={this.changeActiveItem}
        >
          2
        </StyledItem>
        <StyledItem
          activeClass={this.state.activeItem}
          onClick={this.changeActiveItem}
          active
        >
          3
        </StyledItem>
        <StyledItem
          activeClass={this.state.activeItem}
          onClick={this.changeActiveItem}
        >
          4
        </StyledItem>
        <StyledItem
          activeClass={this.state.activeItem}
          onClick={this.changeActiveItem}
        >
          5
        </StyledItem>
      </StyledWrapper>
    )
  }
}

export default Pagination

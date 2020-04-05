import React from "react"
import styled from "styled-components"
import Heading from "../Heading/Heading"

const StyledWrapper = styled.div`
  position: fixed;
  background: rgba(0, 0, 0, 0.7);
  z-index: 999;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  display: flex;
  flex-direction: column;
  width: 450px;
  background: ${({ theme }) => theme.white};
  box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.1);
`
const StyledHeading = styled(Heading)`
  background: ${({ theme }) => theme.primary};
  font-size: ${({ theme }) => theme.fontSize.m};
  margin: 0;
  text-align: center;
  padding: 20px 5px;
`

const StyledInnerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  color: ${({ theme }) => theme.dark};
`
const StyledInnerWrapperItem = styled.div`
  width: 100%;
  text-align: center;
  padding: 25px 5px;
  transition: background 0.25s ease-in-out;

  :hover {
    cursor: pointer;
    background: ${({ theme }) => theme.grey200};
  }
`

const Modal = ({ sendMessage, toggleModal }) => (
  <StyledWrapper>
    <StyledHeading>Wysłać wiadomość?</StyledHeading>
    <StyledInnerWrapper>
      <StyledInnerWrapperItem onClick={sendMessage}>Tak</StyledInnerWrapperItem>
      <StyledInnerWrapperItem onClick={toggleModal}>Nie</StyledInnerWrapperItem>
    </StyledInnerWrapper>
  </StyledWrapper>
)

export default Modal

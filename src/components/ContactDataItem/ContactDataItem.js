import React from "react"
import styled, { css } from "styled-components"

import Heading from "../Heading/Heading"

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 15px 20px;
  align-items: center;
  ${({ footer }) =>
    footer &&
    css`
      margin: 5px 0;
    `}
`

const StyledIcon = styled.img`
  margin: 0 20px 0 0;
  width: 26px;
  height: 26px;
  color: white;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 40%;

  ${({ footer }) =>
    footer &&
    css`
      margin: 0 15px 0 0;
      width: 22px;
      height: 22px;
    `}
`

const StyledHeading = styled(Heading)`
  color: ${({ theme }) => theme.primary};
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: 600;
  margin-bottom: 10px;
`

const StyledInnerWrapper = styled.div``

const Paragraph = styled.p`
  letter-spacing: 1.1px;
  font-weight: 0;
  color: ${({ theme }) => theme.white};
  text-align: left;

  ${({ footer }) =>
    footer &&
    css`
      font-size: ${({ theme }) => theme.fontSize.xs};
    `}
`

const ContactDataItem = ({ title, icon, content, footer }) => (
  <StyledWrapper footer={footer}>
    {icon && <StyledIcon footer={footer} src={icon} />}
    <StyledInnerWrapper footer={footer}>
      <StyledHeading footer>{title}</StyledHeading>
      <Paragraph footer>{content}</Paragraph>
    </StyledInnerWrapper>
  </StyledWrapper>
)

export default ContactDataItem

import React from "react"
import styled from "styled-components"

import { IoMdDoneAll, IoMdStar, IoIosBulb } from "react-icons/io"

const StyledWrapper = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 35px;
  margin: 35px auto;
  position: relative;
`
const StyledItem = styled.div`
  top: 0;
  padding: 35px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 5rem;
  color: ${({ theme }) => theme.primary};
  border-radius: 15px;
  background: ${({ theme }) => theme.dark2};
  transition: all 0.35s ease-in-out;
`

const Heading = styled.h3`
  color: ${({ theme }) => theme.white};
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: 600;
  margin: 20px 0;
  text-align: center;
`

const Content = styled.p`
  color: ${({ theme }) => theme.grey300};
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: 400;
  text-align: center;
  margin: 0;
`

const GridComponent = () => (
  <StyledWrapper>
    <StyledItem>
      <IoIosBulb />
      <Heading>Niepowtarzalne projekty</Heading>
      <Content>
        Dbamy o to, aby każdy nasz projekt był wyjątkowy i niepowtarzalny
      </Content>
    </StyledItem>
    <StyledItem>
      <IoMdStar />
      <Heading>Atestowane materiały</Heading>
      <Content>Korzystamy tylko z najwyższej jakości produktów</Content>
    </StyledItem>
    <StyledItem>
      <IoMdDoneAll />
      <Heading>Kompleksowa obsługa</Heading>
      <Content>Wszystkie nasze prace przeprowadzamy kompleksowo</Content>
    </StyledItem>
  </StyledWrapper>
)

export default GridComponent

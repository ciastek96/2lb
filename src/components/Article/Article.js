import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import Heading from "../Heading/Heading"
import Button from "../Button/Button"
import Box from "../Box/Box"

const StyledWrapper = styled.div`
  width: 100%;
  border-radius: 15px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  overflow: hidden;
  background: ${({ theme }) => theme.dark2};

  @media all and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: flex;
    flex-direction: column;
  }
`

const Image = styled.div`
  max-width: 100%;
  height: 100%;
  background: url(${({ media }) => media});
  background-position: 50% 50%;
  background-size: cover;
`

const Content = styled.div`
  margin: 35px 45px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  letter-spacing: 0.4px;

  @media all and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin: 35px;
    display: flex;
    flex-direction: column;
  }
`
const StyledHeading = styled(Heading)`
  text-align: left;
  color: ${({ theme }) => theme.primary};
  margin: 15px 0 25px;
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSize.l};

  @media all and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin: 0;
    font-size: ${({ theme }) => theme.fontSize.l};
  }
`

const DateInfo = styled.p`
  margin: 0;
  text-align: right;
  color: ${({ theme }) => theme.grey300};
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSize.xs};
  margin-bottom: 10px;
`

const Paragraph = styled.p`
  line-height: 1.7;
  margin-bottom: 45px;
  color: ${({ theme }) => theme.grey100};
`

const StyledLink = styled(Link)`
  text-decoration: none;
`

const Article = ({ title, content, data, media, author, slug }) => (
  <StyledLink to={`/aktualnosci/${slug}`}>
    <StyledWrapper>
      <Box article bgImg={media} slug={`/aktualnosci/${slug}`} />
      <Content>
        <DateInfo>{data}</DateInfo>
        <StyledHeading big>{title}</StyledHeading>
        <Paragraph>{content}</Paragraph>
        <Button>Więcej</Button>
      </Content>
    </StyledWrapper>
  </StyledLink>
)

export default Article

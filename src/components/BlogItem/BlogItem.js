import React, { Component } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Heading from "../Heading/Heading"
import Button from "../Button/Button"

const StyledWrapper = styled.div`
  background-color: ${({ theme }) => theme.dark2};
  border-radius: 15px;
  margin: 0 auto;
  width: 100%;
  overflow: hidden;
`
const StyledImage = styled.div``

const StyledImageItem = styled.img`
  border-radius: 10px;
  max-width: 100%;
`

const StyledHeading = styled.div`
  display: flex;
  align-items: center;
`

const DateInfo = styled.p`
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: ${({ theme }) => theme.grey100};
  font-weight: 300;
  margin: 0 15px;
`
const Content = styled.p`
  line-height: 1.7;
  margin: 10px 15px;
  color: ${({ theme }) => theme.grey300};
`
const StyledInnerWrapper = styled.div``

const StyledButton = styled(Button)`
  margin: 20px 0;
`

class BlogItem extends Component {
  render() {
    const { title, data, content, media, slug } = this.props

    return (
      <StyledWrapper>
        <StyledImage>
          {media[0] && <StyledImageItem src={media[0].url} alt="Picture" />}
        </StyledImage>
        <StyledHeading>
          <Heading>{title}</Heading>
          <DateInfo>{data}</DateInfo>
        </StyledHeading>
        <StyledInnerWrapper>
          <Content>{content}</Content>
        </StyledInnerWrapper>
        <Link to={`/blog/${slug}`}>
          <StyledButton primary>Więcej</StyledButton>
        </Link>
      </StyledWrapper>
    )
  }
}

export default BlogItem

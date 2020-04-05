import React from "react"
import styled from "styled-components"

const StyledWrapper = styled.div`
  width: 100%;
  text-align: center;
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
`
const StyledIFrame = styled.iframe`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`

const Video = ({ url, title }) => (
  <StyledWrapper>
    <StyledIFrame
      src={url}
      title={title}
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
    />
  </StyledWrapper>
)

export default Video

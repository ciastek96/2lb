import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../layout/Layout"
import Button from "../components/Button/Button"

// import Layout from "../components/layout"
// import SEO from "../components/seo"

// const NotFoundPage = () => (
//   <Layout>
//     <SEO title="404: Not found" />
//     <h1>NOT FOUND</h1>
//     <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
//   </Layout>
// )

const StyledWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
`
const StyledInnerWrapper = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  text-align: center;
`

const Heading = styled.h1`
  font-size: 18rem;
  /* position: absolute;
  top: 40%;
  transform: translateY(-50%);
  opacity: 0.04; */
  color: ${({ theme }) => theme.primary};
  z-index: 0;
`

const Paragraph = styled.p`
  color: ${({ theme }) => theme.primary};
  font-size: ${({ theme }) => theme.fontSize.l};
  margin: 0;
`

const StyledButton = styled(Button)`
  margin-top: 20px;
`

const NotFoundPage = ({ ...props }) => (
  <Layout>
    <SEO title="Strona o podanym adresie nie istnieje" />
    <StyledWrapper>
      <StyledInnerWrapper>
        <Paragraph>Strona o podanym adresie nie istnieje</Paragraph>
        <Link to="../">
          <StyledButton
            onClick={() => {
              window.history.go(-1)
            }}
          >
            Powrót
          </StyledButton>
        </Link>
      </StyledInnerWrapper>
    </StyledWrapper>
  </Layout>
)

export default NotFoundPage

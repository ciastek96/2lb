import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import SEO from "../components/seo"
import Layout from "../layout/Layout"
import Button from "../components/Button/Button"

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

const Paragraph = styled.p`
  color: ${({ theme }) => theme.primary};
  font-size: ${({ theme }) => theme.fontSize.l};
  margin: 0;
`

const StyledButton = styled(Button)`
  margin-top: 20px;
`

const Success = () => (
  <Layout>
    <SEO title="Wiadomość wysłana" />
    <StyledWrapper>
      <StyledInnerWrapper>
        <Paragraph>
          Twoja wiadomość została wysłana. Skontaktujemy się z Tobą wkrótce na
          adres email podany w formularzu
        </Paragraph>
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

export default Success

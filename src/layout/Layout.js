import React from "react"
import styled, { createGlobalStyle, ThemeProvider } from "styled-components"
import { theme } from "../themes/theme"
import { Helmet } from "react-helmet"

import Hero from "../components/Hero/Hero"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import ContactWrapper from "../components/ContactWrapper/ContactWrapper"

const GlobalStyle = createGlobalStyle`

    body {
      padding: 0;
      margin: 0;
      color: ${({ theme }) => theme.white};
      background-color: ${({ theme }) => theme.dark};
      font-family: 'Montserrat', sans-serif;
      font-size: 1.6rem;
    }

    *, *::after, *::before {
      box-sizing: border-box;
      -webkit-font-smoothing: antialiased;
       -moz-osx-font-smoothing: grayscale;
    }

    html {
      font-size: 62.5%; /* 1rem = 10px; */
    }

    p,
    blockquote {
      line-height: 1.75;
      text-align: justify;
      font-size: ${({ theme }) => theme.fontSize.s};
      color: ${({ theme }) => theme.grey100};
      word-wrap: break-word;
  }

`

const StyledWrapper = styled.div`
  background-color: ${theme.dark};
`

const Layout = ({ hero, children, data }) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Helmet>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&display=swap"
            rel="stylesheet"
          />
        </Helmet>
        <Header />
        {hero && <Hero />}
        <StyledWrapper>{children}</StyledWrapper>
        <ContactWrapper />
        <Footer />
      </>
    </ThemeProvider>
  )
}

export default Layout

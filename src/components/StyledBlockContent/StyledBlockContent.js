import BlockContent from "@sanity/block-content-to-react"
import styled, { css } from "styled-components"

const StyledBlockContent = styled(BlockContent)`
  h1,
  h2 {
    font-size: ${({ theme }) => theme.fontSize.xl};
    font-weight: 400;
  }

  h3,
  h4 {
    font-size: ${({ theme }) => theme.fontSize.l};
    font-weight: 600;
  }

  h5,
  h6 {
    font-size: ${({ theme }) => theme.fontSize.s};
    font-weight: 600;
  }

  h1,
  h3,
  h5 {
    color: ${({ theme }) => theme.primary};
  }

  h2,
  h4,
  h6 {
    color: ${({ theme }) => theme.white};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 35px 0;

    &:first-child {
      margin-top: 0;
    }
  }

  p,
  blockquote {
    margin: 15px;
    line-height: 1.75;
    text-align: justify;
    font-size: ${({ theme }) => theme.fontSize.s};
    color: ${({ theme }) => theme.grey100};
  }

  blockquote {
    font-style: italic;
    position: relative;
    border-left: 3px solid ${({ theme }) => theme.primary};
    padding-left: 15px;
    quotes: "“" "”";

    &::before,
    &::after {
      content: open-quote;
      color: ${({ theme }) => theme.primary};
    }

    &::before {
      margin-right: 6px;
    }

    &::after {
      margin-left: 6px;
    }
  }

  ul,
  ol {
    margin: 25px;
    padding: 0;
  }

  ol li {
    margin: 10px 0;
    list-style-position: inside;

    &::first-child {
      margin-top: 0;
    }
  }

  ul li {
    margin: 10px 0;
    list-style: none;

    ::before {
      content: "-";
      color: ${({ theme }) => theme.primary};
      margin-right: 12px;
    }

    &::first-child {
      margin-top: 0;
    }
  }

  img {
    max-width: 100%;
  }

  ${({ index }) =>
    index &&
    css`
      ul li {
        ::before {
          content: "✓";
        }
      }
    `}
`
export default StyledBlockContent

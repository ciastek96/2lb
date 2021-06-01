import styled, { css } from "styled-components"

const Heading = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.l};
  font-size: clamp(
    ${({ theme }) => theme.fontSize.m},
    5vw,
    ${({ theme }) => theme.fontSize.l}
  );
  font-weight: 600;

  ${({ big }) =>
    big &&
    css`
      margin: 30px auto;
      text-align: center;
      font-size: ${({ theme }) => theme.fontSize.xl};
      font-size: clamp(
        ${({ theme }) => theme.fontSize.l},
        5vw,
        ${({ theme }) => theme.fontSize.xl}
      );
    `}

  ${({ primary }) =>
    primary &&
    css`
      color: ${({ theme }) => theme.primary};
      font-weight: 500;
      font-size: ${({ theme }) => theme.fontSize.xs};
      text-transform: uppercase;
      letter-spacing: 1.1px;
    `}
`

export default Heading

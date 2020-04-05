import styled from "styled-components"

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: inherit;
  width: 100%;
  background-color: ${({ theme }) => theme.dark};
  background-image: linear-gradient(
    to bottom,
    #000000,
    #0a0a0a,
    #121212,
    #181818,
    #1d1d1d,
    #202020,
    #222222,
    #252525,
    #252525,
    #252525,
    #252525,
    #252525
  );
  z-index: 2;
  opacity: 0.5;
`

export default Overlay

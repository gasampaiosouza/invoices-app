import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    /* color-scheme: light dark; */

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: 'League Spartan', system-ui, Avenir, Helvetica, Arial, sans-serif;
  }

  body {
    min-width: 320px;
    min-height: 100vh;

    background: ${({ theme }) => theme.color.background};
  }

  @media (prefers-color-scheme: light) {}
`;

export default GlobalStyle;

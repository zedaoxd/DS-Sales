import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  :root {
    --primary-color: #283142;
    --secondary-color: #1b2531;
    --light-color: #e9e9e9;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    background-color: var(--secondary-color);
    color: var(--light-color);
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  } 
`;

export default GlobalStyle;

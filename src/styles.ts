import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: Roboto, sans-serif;
    box-sizing: border-box;
    list-style: none;
    scroll-behavior: smooth;
  }

  .container {
    max-width: 1280px;
    width: 100%;
    height: 100vh;
    margin: 0 auto;
    background-color: #000;
    color: white;
  }

`;

import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font: 400 1rem "Nunito", sans-serif;
    line-height: 160%;

    :focus {
      outline: 0;
      box-shadow: 0;
    }
  }

  body {
    background-color: ${props => props.theme['base-background']};
    color: ${props => props.theme["base-text"]};
    -webkit-font-smoothing: antialiased;
  }

  button {
    border: none;
    cursor: pointer;
  }
`;
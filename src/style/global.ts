import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #E9EBEE;
    --text-color:  #1C1C1C;
    --red: #DA4B4F;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-size: 16px;
    line-height: 24px;
    font-size: 1.6rem;
    color: var(--text-color);
    font-family: 'Inter', sans-serif;
    font-weight: 400;
  }

  button {
    transition: all .2s;
    display: block;
    text-transform: uppercase;
    color: #FFFFFF;
    font-weight: bold;
    background: #40B25C;
    width: 115px;
    border-radius: .5rem;
    padding: 1.2rem;
    border: none;
    outline: none;
    cursor: pointer;
  }
`


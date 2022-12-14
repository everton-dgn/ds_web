import { createGlobalStyle } from 'styled-components'
import T from 'ui/theme'

export const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    text-decoration: none;
    -webkit-font-smoothing: antialiased !important;
    -moz-osx-font-smoothing: grayscale !important;
    list-style: none !important;
    outline: none;
    font-family: ${T.fonts.family};
    line-height: calc(1em + 0.5rem);

    @media (prefers-reduced-motion) {
      transition: none!important;
      animation-duration: 0ms!important;
    }
  }

  html {
    font-size: 62.5%;
  }

  body,
  html,
  #root {
    background-color: ${T.colors.white};
    color: ${T.colors.black};
  }

  p, h1, h2, h3, h4, h5, h6 {
    word-break: break-word;
  }

  #root,
  body,
  input,
  select,
  textarea,
  button {
    font: ${T.fonts.weights.medium} ${T.fonts.sizes.paragraph} Montserrat, sans-serif;
  }

  button {
    cursor: pointer;
    border: none;
    border-radius: ${T.borderRadius.m};
  }

  #root {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    min-height: 100vh;
    isolation: isolate;
  }

  a,
  a:active {
    color: inherit;
    text-decoration: none;
  }

  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  ::-webkit-scrollbar,
  scrollbar-width {
    width: 1.6rem !important;
    background-color: ${T.colors.white};
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${T.colors.grey};
    border-radius: 20px;
  }

  :root {
    scrollbar-color: ${T.colors.grey} ${T.colors.white} !important;
    scrollbar-width: 1.6rem !important;
  }
`

import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Yanone+Kaffeesatz&display=swap');

  html, body {
  font-family: 'Yanone Kaffeesatz', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: white;
  color: #000000;
  font-weight: 600;
  font-size: 16px;
}`;
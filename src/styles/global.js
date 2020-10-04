import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600;700;800&family=Poppins:wght@600;700;800&display=swap');

  html, body{
    font-family: ${({ theme }) => theme.font.family.body};
    background-color: ${({ theme }) => theme.color.bg};
    transition: all .55s ease-in-out;
    margin: 0;
  }

  a{
    color: ${({ theme }) => theme.color.primary};
    text-decoration: none;
  }

  h1,h2,h3,h4,h5,h6{
    font-family: ${({ theme }) => theme.font.family.main};
    color: ${({ theme }) => theme.color.primary};
    text-transform: uppercase;
    margin: 0;
  }

  h1,h2,h3{
    font-weight: 800;
  }

  h4,h5,h6{
    font-weight: 700;
  }

  h1{
    font-size: 1.5em;
    @media screen and (min-width: 768px) {
      font-size: 2em;
      }
  }

  h2{
    font-size: 1.25em;
    @media screen and (min-width: 768px) {
      font-size: 2em;
    }
  }

  h4{
    font-size: 1em;
    color: ${({ theme }) => theme.color.secondary};
    @media screen and (min-width: 768px) {
      font-size: 1.125em;
    }
  }

  p{
    font-size: 0.875em;
    max-width: 600px;
    line-height: 2em;
    color: ${({ theme }) => theme.color.secondary};
  }

  button{
    font-size: 0.875em;
    outline: none;
    border: none;


    
  }
`

export default GlobalStyle

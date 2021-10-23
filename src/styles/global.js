import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

@font-face {
  font-family: "Poppins, Open Sans";
}

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
    font-size: 1.5rem;
    @media screen and (min-width: 768px) {
      font-size: 2.5rem;
      }
  }

  h2{
    font-size: 1.125rem;
    @media screen and (min-width: 768px) {
      font-size: 1.875rem;
    }
  }

  h3{
    font-size: 1.125rem;
    @media screen and (min-width: 768px) {
      font-size: 1.35rem;
    }
  }

  h4{
    font-size: 1rem;
    color: ${({ theme }) => theme.color.secondary};
    margin: 0;
    @media screen and (min-width: 768px) {
      font-size: 1.125rem;
    }
  }

  p{
    font-size: 0.875rem;
    max-width: 800px;
    line-height: 2rem;
    color: ${({ theme }) => theme.color.secondary};
    margin-block-start:0px;
    margin-block-end:0px;
  }

  button{
    font-size: 0.875rem;
    outline: none;
    border: none;


    
  }
`

export default GlobalStyle

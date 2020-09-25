import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600;700;800&family=Poppins:wght@700;800&display=swap');

  html, body{
    font-family: ${({ theme }) => theme.font.family.body};
    background-color: ${({ theme }) => theme.color.bg};
    transition: all .55s ease-in-out;
    margin: 0;
  }

  a{
    color: ${({ theme }) => theme.color.primary};
  }

  h1,h2,h3,h4,h5,h6{
    font-family: ${({ theme }) => theme.font.family.main};
    color: ${({ theme }) => theme.color.primary};
    text-transform: uppercase;
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
    padding: 8px 16px;
    border-radius: 6px;
    transition: all .55s ease-in-out;
    box-shadow: 0 1px 3px ${({ theme }) => theme.color.boxShadow}, 0 1px 2px ${({ theme }) => theme.color.boxShadow};
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    &:hover{
      box-shadow: 0 10px 28px ${({ theme }) => theme.color.boxShadow}, 0 6px 10px ${({ theme }) => theme.color.boxShadow};
    }
  }
`

export default GlobalStyle

import React from 'react'
import styled from 'styled-components'

export default () => (
  <Footer>
    <span>
      © Copyright {new Date().getFullYear()} Doug McNish. All rights reserved.
    </span>
  </Footer>
)

const Footer = styled.footer`
  padding: ${({ theme }) => theme.pagePadding};
  background: ${({ theme }) => theme.color.goldGradient};
  display: grid;

  @media screen and (min-width: 768px) {
    justify-content: end;
    padding: ${({ theme }) => theme.pagePaddingH};
  }
  span {
    font-size: 0.65rem;
    color: white;
  }
`

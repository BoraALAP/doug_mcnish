import React from 'react'
import styled from 'styled-components'
import { Instagram, Twitter, Linkedin } from 'react-feather'

export default () => (
  <Footer>
    <Icons>
      <a href="https://www.instagram.com/dougmcnish/?hl=en" rel="nofollow">
        <Instagram color="white" size="16" />
      </a>
      <a href="https://mobile.twitter.com/dougmcnish?lang=en" rel="nofollow">
        <Twitter color="white" size="16" />
      </a>
      <a
        href="https://www.linkedin.com/mwlite/in/douglas-mcnish-80002518 "
        rel="nofollow"
      >
        <Linkedin color="white" size="16" />
      </a>
    </Icons>
    <span>
      © Copyright {new Date().getFullYear()} Doug McNish. All rights reserved.
    </span>
  </Footer>
)

const Footer = styled.footer`
  padding: ${({ theme }) => theme.pagePadding};
  background: ${({ theme }) => theme.color.goldGradient};
  display: grid;
  grid-auto-flow: row;

  @media screen and (min-width: 768px) {
    grid-auto-flow: column;
    justify-content: space-between;
    padding: ${({ theme }) => theme.pagePaddingH};
  }
  span {
    font-size: 0.65rem;
    color: white;
  }
`

const Icons = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 1rem;
`

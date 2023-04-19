import React from 'react'
import styled from 'styled-components'
import { Instagram, Twitter, Linkedin } from 'react-feather'

const Footer = () => (
  <FooterS>
    <Top>
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
    </Top>
    <Bottom>
      Contact Doug Mcnish:{' '}
      <a href="mailto: chef@dougmcnish.com">chef@dougmcnish.com</a>
    </Bottom>
  </FooterS>
)

export default Footer

const FooterS = styled.footer`
  padding: ${({ theme }) => theme.pagePadding};
  background: ${({ theme }) => theme.color.goldGradient};
  display: grid;
  grid-auto-flow: row;
  gap: 1rem;

  @media screen and (min-width: 768px) {
    padding: ${({ theme }) => theme.pagePaddingH};
  }
`
const Top = styled.div`
  display: grid;
  grid-auto-flow: row;

  @media screen and (min-width: 768px) {
    grid-auto-flow: column;
    justify-content: space-between;
  }
  span {
    font-size: 0.65rem;
    color: white;
  }
`

const Bottom = styled.span`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.color.bg};
  a {
    color: ${({ theme }) => theme.color.bg};
    text-decoration: underline;
  }
`

const Icons = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 1rem;
`

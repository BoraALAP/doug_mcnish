import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Location } from '@reach/router'
// import { Link } from 'gatsby'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { Menu, X } from 'react-feather'
import Logo from '../../assets/Logo'

const Navigation = props => {
  const [pageState, setPageState] = useState({
    active: false,
    activeSubNav: false,
    currentPath: false
  })

  useEffect(() => {
    setPageState({ ...pageState, currentPath: props.location.pathname })
    // eslint-disable-next-line
  }, [])

  const handleMenuToggle = () =>
    setPageState({ ...pageState, active: !pageState.active })

  // Only close nav if it is open
  const handleLinkClick = () => pageState.active && handleMenuToggle()

  // const toggleSubNav = subNav =>
  //   setPageState({
  //     ...pageState,
  //     activeSubNav: pageState.activeSubNav === subNav ? false : subNav
  //   })

  const { active } = pageState

  // const NavLink = ({ to, className, children, ...props }) => (
  //   <LinkS to={to} cover direction="down" bg="linear-gradient(139deg, rgba(158,55,1,1) 25%, rgba(148,16,0,1) 100%)" onClick={handleLinkClick} {...props}>
  //     {children}
  //   </LinkS>
  // )

  return (
    <Header active={active}>
      <Top>
        <AniLink
          cover
          direction="down"
          bg="linear-gradient(139deg, rgba(158,55,1,1) 25%, rgba(148,16,0,1) 100%)"
          to="/"
          onClick={handleLinkClick}
        >
          <LogoS />
        </AniLink>

        <Mobile onClick={handleMenuToggle} to="/home">
          {active ? <X /> : <Menu />}
        </Mobile>
      </Top>

      <Nav active={active}>
        <LinkS
          to="/aboutme/"
          cover
          direction="down"
          bg="linear-gradient(139deg, rgba(158,55,1,1) 25%, rgba(148,16,0,1) 100%)"
          onClick={handleLinkClick}
        >
          About Me
        </LinkS>
        {/* <LinkS to="/partnerships/">Partnerships</LinkS> */}
        <LinkS
          to="/service/"
          cover
          direction="down"
          bg="linear-gradient(139deg, rgba(158,55,1,1) 25%, rgba(148,16,0,1) 100%)"
          onClick={handleLinkClick}
        >
          Services
        </LinkS>
        {/* <Alinks href="https://youtube.com" target="_blank">Youtube</Alinks>
         
        <LinkS to="/onlinecourses/">Online Courses</LinkS> */}
        <LinkS
          to="/products/"
          cover
          direction="down"
          bg="linear-gradient(139deg, rgba(158,55,1,1) 25%, rgba(148,16,0,1) 100%)"
          onClick={handleLinkClick}
        >
          Shop
        </LinkS>
        <Alinks
          href="https://open.spotify.com/show/2JOBycFphNZf8ROBqEfr3X?si=hSMDnhCDTeWSorPzV6cpgA"
          target="_blank"
        >
          Podcast
        </Alinks>
        <LinkS
          to="/contact/"
          cover
          direction="down"
          bg="linear-gradient(139deg, rgba(158,55,1,1) 25%, rgba(148,16,0,1) 100%)"
          onClick={handleLinkClick}
        >
          Contact
        </LinkS>
        <LinkS
          to="/cart/"
          cover
          direction="down"
          bg="linear-gradient(139deg, rgba(158,55,1,1) 25%, rgba(148,16,0,1) 100%)"
          onClick={handleLinkClick}
        >
          Cart
        </LinkS>
      </Nav>
    </Header>
  )
}

const Header = styled.header`
  display: grid;
  grid-auto-flow: row;
  align-items: center;
  justify-content: stretch;
  background-color: ${({ theme }) => theme.color.bg};
  padding: ${({ theme }) => theme.pagePadding};
  position: fixed;
  height: ${props => (props.active ? '100%' : 'auto')};
  align-content: start;
  transition: all 0.7s cubic-bezier(0.25, 0.8, 0.25, 1);
  left: 0px;
  top: 0;
  width: 100%;
  box-sizing: border-box;
  z-index: 1000;

  @media screen and (min-width: 768px) {
    grid-auto-flow: column;
    height: auto;
    justify-content: space-between;
    padding: ${({ theme }) => theme.pagePaddingH};
  }
`

const Top = styled.div`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  justify-content: space-between;
`

const LogoS = styled(Logo)`
  display: grid;
`

const Nav = styled.nav`
  display: grid;
  grid-auto-flow: row;
  position: ${props => (props.active ? 'initial' : 'absolute')};
  transform: ${props =>
    props.active ? 'translateX(0vh)' : 'translateX(-100vh)'};
  opacity: ${props => (props.active ? '1' : '0')};
  height: ${props => (props.active ? 'auto' : '0')};
  transition: all 0.7s cubic-bezier(0.25, 0.8, 0.25, 1),
    position 0.3s ease-in 0.6s;
  padding: 1.5em 0;

  @media screen and (min-width: 768px) {
    transform: translateX(0vh);
    position: initial;
    padding: 0;
    grid-gap: 1rem;
    grid-auto-flow: column;
    height: auto;
    opacity: 1;
  }
`

const LinkS = styled(AniLink)`
  display: grid;
  text-decoration: none;
  font-size: 0.875rem;
  font-family: ${({ theme }) => theme.font.body};
  font-weight: 600;
  padding: 1em 8px;
  border-bottom: 1px solid ${({ theme }) => theme.color.lightGrey};
  &[aria-current='page'] {
    text-decoration: underline;
  }
  @media screen and (min-width: 768px) {
    border-bottom: none;
  }
`

const Alinks = styled.a`
  display: grid;
  text-decoration: none;
  font-size: 0.875rem;
  font-family: ${({ theme }) => theme.font.body};
  font-weight: 600;
  padding: 1em 8px;
  border-bottom: 1px solid ${({ theme }) => theme.color.lightGrey};
  @media screen and (min-width: 768px) {
    border-bottom: none;
  }
`

const Mobile = styled.button`
  display: grid;

  background-color: transparent;
  padding: 8px 1rem;
  justify-content: end;
  box-shadow: none;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export default ({ subNav }) => (
  <Location>{route => <Navigation subNav={subNav} {...route} />}</Location>
)

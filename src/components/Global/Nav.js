import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Location } from '@reach/router'
import { Link } from 'gatsby'
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

  const NavLink = ({ to, className, children, ...props }) => (
    <LinkS to={to} onClick={handleLinkClick} {...props}>
      {children}
    </LinkS>
  )

  return (
    <Header active={active}>
      <Top>
        <Link to="/" onClick={handleLinkClick}>
          <LogoS />
        </Link>

        <Mobile onClick={handleMenuToggle} to="/home">
          {active ? <X /> : <Menu />}
        </Mobile>
      </Top>
      
        <Nav active={active}>
          <NavLink to="/aboutme/">About Me</NavLink>
          {/* <NavLink to="/partnerships/">Partnerships</NavLink> */}
          <NavLink to="/services/">Services</NavLink>
          <NavLink to="/youtube/">Youtube</NavLink>
          <NavLink to="/podcast/">Podcast</NavLink>
          <NavLink to="/onlinecourses/">Online Courses</NavLink>
          <NavLink to="/products/">Shop</NavLink>
          <NavLink to="/contact/">Contact</NavLink>
          <NavLink to="/cart/">Cart</NavLink>
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
  transition: all 0.7s cubic-bezier(0.25, 0.8, 0.25, 1), position 0.3s ease-in 0.6s;
  padding: 1.5em 0;

  @media screen and (min-width: 768px) {
    transform: translateX(0vh);
    position: initial;
    padding: 0;
    grid-gap: 1em;
    grid-auto-flow: column;
    height: auto;
    opacity: 1;
  }
`

const LinkS = styled(Link)`
  display: grid;
  text-decoration: none;
  font-size: 0.875em;
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
  padding: 8px 1em;
  justify-content: end;
  box-shadow: none;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export default ({ subNav }) => (
  <Location>{route => <Navigation subNav={subNav} {...route} />}</Location>
)

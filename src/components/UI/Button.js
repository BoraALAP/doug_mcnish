import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Button = ({ children, secondary, onClick }) => {
  return (
    <Container secondary={secondary} onClick={onClick}>
      {children}
    </Container>
  )
}

export const Ternary = ({ children, onClick }) => {
  return (
    <TernaryContainer onClick={onClick}>
      {children}
    </TernaryContainer>
  )
}

const Container = styled.button`
  padding: 12px 1.5rem;
  background-color: ${props =>
    props.secondary ? props.theme.color.positive : props.theme.color.negative};
  color: ${props =>
    props.secondary ? props.theme.color.negative : props.theme.color.positive};
  font-size: 0.875rem;
  border: ${props =>
    props.secondary ? `1px solid ${props.theme.color.negative}` : "none"};
  box-shadow: none;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
    box-shadow: ${({ theme }) => theme.boxShadow};
  }
  @media screen and (min-width: 768px) {
    /* max-width: 25rem; */
  }
`

const TernaryContainer = styled.button`
  padding: 12px 1.5rem;
  background-color: transparent;
  color: ${props =>
    props.secondary ? props.theme.color.negative : props.theme.color.primary};
  font-size: 0.875rem;
  box-shadow: none;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
    box-shadow: ${({ theme }) => theme.boxShadow};
  }
  @media screen and (min-width: 768px) {
    /* max-width: 25rem; */
  }
`

Button.protoTypes = {
  secondary: PropTypes.bool
}

export default Button

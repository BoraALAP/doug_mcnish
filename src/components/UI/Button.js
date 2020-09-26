import React from 'react'
import styled from 'styled-components'

const Button = ({ children, primary, secondary }) => {
  return (
    <Container primary={primary} secondary={secondary}>
      {children}
    </Container>
  )
}

const Container = styled.button`
  padding: 12px 24px;
  background-color: ${props =>
    props.secondary ? props.theme.color.positive : props.theme.color.negative};
  color: ${props =>
    props.secondary ? props.theme.color.negative : props.theme.color.positive};
  font-size: 0.875em;
  box-shadow: none;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
    box-shadow: ${({ theme }) => theme.boxShadow};
  }
  @media screen and (min-width: 768px) {
    /* max-width: 400px; */
  }
`

export default Button

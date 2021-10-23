import React from 'react'
import styled from 'styled-components'

const CenterBigText = ({ children }) => {
  return <Container>{children}</Container>
}

const Container = styled.div`
  display: grid;
  justify-items: center;
  text-align: center;
  padding: 4rem 2rem;
  background-color: ${({ theme }) => theme.color.lightbg};
`

export default CenterBigText

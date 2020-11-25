import React from 'react'
import styled from 'styled-components'
import Paragraph, { Title } from '../UI/Paragraph'

const FourColumn = ({ children, title }) => {
  return (
    <Container>
      {title && <Title>{title}</Title>}
      <Content>{children}</Content>
    </Container>
  )
}

const Container = styled.div`
  display: grid;
`

const Content = styled.div`
  display: grid;
  grid-auto-flow: row;
  align-items: start;
  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`

export default FourColumn

import React from 'react'
import styled from 'styled-components'

const CenterBigText = ({ children }) => {
  return (
    <Container>
      <H4>{children}</H4>
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  justify-items: center;
  text-align: center;
`

const H4 = styled.h4`
  display: grid;
  width: 75%;
`

export default CenterBigText

import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { Title } from '../UI/Paragraph'

const LeftImage = ({ featuredImage, children, title }) => {
  return (
    <Container>
      <Left>
        <Img
          fluid={featuredImage}
          objectFit="cover"
          objectPosition="50% 50%"
          alt=""
        />
      </Left>
      <Right>
        {title && <Title>{title}</Title>}
        <Content>{children}</Content>
      </Right>
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-auto-flow: row;
  @media screen and (min-width: 768px) {
    grid-auto-flow: column;
    grid-template-columns: 1fr 1fr;
  }
`

const Left = styled.div`
  display: grid;
`

const Right = styled.div`
  display: grid;
  align-self: flex-end;
`

const Content = styled.div`
  display: grid;
  grid-auto-flow: row;
  align-items: start;
  @media screen and (min-width: 768px) {
    grid-auto-flow: row;
    grid-template-rows: 1fr 1fr;
  }
`

export default LeftImage

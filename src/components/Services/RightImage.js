import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { Title } from '../UI/Paragraph'

const RightImage = ({ featuredImage, children, title }) => {
  return (
    <Container>
      <Left>
        {title && <Title>{title}</Title>}
        <Content>{children}</Content>
      </Left>
      <Right>
        <Img
          fluid={featuredImage}
          objectFit="cover"
          objectPosition="50% 50%"
          alt=""
        />
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
  align-self: end;
`

const Right = styled.div`
  display: grid;
`

const Content = styled.div`
  display: grid;
  grid-auto-flow: row;
  align-items: start;
`

export default RightImage

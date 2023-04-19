import React from 'react'
import styled from 'styled-components'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Title } from '../UI/Paragraph'

const LeftImage = ({ featuredImage, children, title }) => {
  const image = getImage(featuredImage)
  return (
    <Container>
      <Left>
        <GatsbyImage
          image={image}
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
`

export default LeftImage

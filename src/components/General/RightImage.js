import React from 'react'
import styled from 'styled-components'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Paragraph from '../UI/Paragraph'

const RightImage = ({ featuredImage, title, children, alt }) => {
  const image = getImage(featuredImage)
  return (
    <Container>
      <Left>
        <Paragraph title={title}>{children}</Paragraph>
      </Left>
      <Right>
        <GatsbyImage
          image={image}
          objectFit="cover"
          objectPosition="50% 50%"
          alt={alt}
        />
      </Right>
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  align-items: flex-end;
  grid-gap: 2rem;
  @media screen and (min-width: 768px) {
    grid-auto-flow: column;
    grid-gap: 64px;
    grid-template-columns: 2fr 3fr;

    justify-self: center;
  }
`

const Left = styled.div`
  display: grid;
`

const Right = styled.div`
  /* max-width: 600px; */
  display: grid;
  grid-gap: 2rem;
  @media screen and (min-width: 768px) {
  }
`

export default RightImage

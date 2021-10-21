import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import Paragraph from '../UI/Paragraph'

const LeftImage = ({ featuredImage, title, children, alt }) => {
  return (
    <Container>
      <Left>
        <Img
          fluid={featuredImage}
          objectFit="cover"
          objectPosition="50% 50%"
          alt={alt}
        />
      </Left>
      <Right>
        <Paragraph title={title}>{children}</Paragraph>
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
    grid-template-columns: 3fr 2fr;

    justify-self: center;
  }
`

const Left = styled.div`
  display: grid;
`

const Right = styled.div`
  max-width: 600px;
  display: grid;

  @media screen and (min-width: 768px) {
    padding-bottom: 40px;
  }
`

export default LeftImage

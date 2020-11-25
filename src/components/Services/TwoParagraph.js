import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { Title } from '../UI/Paragraph'

const TwoParagraph = ({ featuredImage, children, title }) => {
  return (
    <Container>
      <Left>
        {title && <Title>{title}</Title>}
        <Content>{children}</Content>
      </Left>
      <Right>
        <ImgS
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
  grid-gap: 2rem;
  grid-auto-flow: row;
  align-items: start;
`
const Right = styled.div``

const ImgS = styled(Img)`
  height: 100%;
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

export default TwoParagraph

import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import Paragraph from './element/Paragraph'

const LeftImage = ({ featuredImage }) => {
  return (
    <Container>
      
      <Left>
      <Img
          fluid={featuredImage}
          objectFit="cover"
          objectPosition="50% 50%"
          alt=""
        /></Left>
      <Right>
      <Paragraph title="Food Photography">
            <p>
            Missing Details
            </p>
          </Paragraph>
      </Right>
    </Container>
  )
}

const Container = styled.div`
 display: grid;
  grid-auto-flow:column;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2em;
  `

const Left = styled.div`
  display: grid;
`

const Right = styled.div`
  display: grid;
  align-self:flex-end;
`

export default LeftImage

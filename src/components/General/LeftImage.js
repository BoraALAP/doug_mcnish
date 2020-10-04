import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

const LeftImage = ({ featuredImage, title }) => {
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
        <div>
          <h1>{title}</h1>
          <p>
          Starting his career at the age of 15, Doug McNish began to hone his skills, and come to learn the intricacies of the food service industry. At the age of 21, Doug was un-happy and un-healthy. It was after watching an undercover video of animals in slaughter houses, that he decided to make the change and try a vegetarian diet. Months later, Doug would adopt a fully vegan lifestyle, which he continues today.
          </p>
        </div>

      </Right>
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  align-items: flex-end;
  grid-gap: 2em;
  
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
  grid-gap: 2em;
  @media screen and (min-width: 768px) {
    padding-bottom: 40px;
  }
`

export default LeftImage

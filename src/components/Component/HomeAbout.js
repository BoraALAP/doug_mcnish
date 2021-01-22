import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import Button from '../UI/Button'
import Paragraph from '../UI/Paragraph'

const HomeAbout = ({ featuredImage }) => {
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
        <Paragraph title="About Doug Mcnish">
          <p>
            Doug McNish knew that he was destined for a career in the kitchen
            when he began honing his skills at the age of 15, quickly learning
            all the intricacies of the food service industry. Although adept in
            his field, by the age of 20, Doug knew that he needed to make a
            change after watching footage of a slaughterhouse.
          </p>
          <p>
            He went vegetarian, and months later adopted a fully vegan
            lifestyle. It wasn’t long before he positioned himself as a pioneer
            in the vegan food movement, courageously aligning his career path
            with his morals in a time when veganism was relatively unknown.
          </p>
        </Paragraph>
        <Button>Learn More</Button>
      </Right>
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  align-items: center;
  
  @media screen and (min-width: 768px) {
  border: 12px solid ${({ theme }) => theme.color.accent};
    padding: 0 5rem;
    grid-auto-flow: column;
    grid-gap: 64px;
    grid-template-columns: 2fr 3fr;
    /* border-bottom: 1px solid ${({ theme }) => theme.color.accent}; */
    justify-self: center;
  }
`

const Left = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: grid;
  }
`

const Right = styled.div`
  max-width: 600px;
  display: grid;
  grid-gap: 2rem;
  @media screen and (min-width: 768px) {
    padding-bottom: 40px;
  }
`

export default HomeAbout

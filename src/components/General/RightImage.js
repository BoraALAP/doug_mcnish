import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

const RightImage = ({ featuredImage, title }) => {
  return (
    <Container>
      <Left>
        <div>
          {title && <h2>{title}</h2>}
          <p>
            Doug’s first cookbook, bestselling, Eat Raw, Eat Well was published
            internationally in Spring of 2012, and was awarded a Gourmand Award
            in Paris France for Best Vegetarian Cookbook in the world. Doug’s
            Second title, Raw, Quick & Delicious was published in the fall of
            2013, and his third book, Vegan Everyday was published in 2015, for
            which it too won a Gourmand Award as best Vegan Cookbook in the
            world for 2015. In November of 2017 Doug was awarded with the Now
            Magazine Readers Choice Award in his home town of Toronto Ontario,
            as Best Chef in the City, putting him in the same league of some of
            this country’s best.
          </p>

          <p>
            Doug is bringing Vegan cuisine to the mainstream and challenging
            ideas on ethics, the health and the environment. In addition to
            publishing 3 award winning books in three years, Doug currently
            helps operate Mythology Diner, a full-service Vegan Diner open seven
            days/week in Toronto Ontario. You can catch Doug online by following
            him on Twitter, Instagram or on Facebook, where he routinely shares
            his current projects, and his love for everything Vegan!
          </p>
        </div>
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
  align-items: flex-end;
  grid-gap: 32px;
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
  grid-gap: 32px;
  @media screen and (min-width: 768px) {
  }
`

export default RightImage

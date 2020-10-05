import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

import Paragraph from './element/Paragraph'

const TwoParagraph = ({ featuredImage }) => {
  return (
    <Container>
      <Left>
       
          <Paragraph title="Brand Representation">
            <p>
              Whether you are looking for representation at a trade show,
              online, television or more, Doug can take your brand and help
              elevate it in the mainstream market place.
            </p>
            <p>
              Through his years of dedicated hard work and business acumen, Doug
              has cultivated an understanding of retail trends and consumer
              demands in the Vegan market.
            </p>
            <p>
              Doug will work tirelessly one on one with you and your brand to
              help generate not only word of mouth buzz through online, print
              and television, but help to develop meaningful revenue for years
              to come.
            </p>
          </Paragraph>
    
     
          <Paragraph title="Co-Branding">
            <p>
              Do you have an exciting new Vegan product that is about to launch
              into the existing market place? Or an existing product looking for
              some fresh, new word of mouth buzz? Partnering the Doug McNish
              brand with your brand is a strategic marketing and advertising
              partnership wherein the success of both of the respective brands
              aims to bring success to each other.
            </p>
            <p>
              Working with Doug will serve as an effective tool to build
              business, boost awareness, and break into new markets. Doug is
              committed to making this a win-win situation for all parties
              involved.
            </p>
          </Paragraph>
       
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
grid-auto-flow: column;
grid-template-columns: 1fr 1fr;
grid-gap: 2em;
`
const Left = styled.div`
  display: grid;
  grid-gap: 2em;
  grid-auto-flow: row;
`
const Right = styled.div`

`

const ImgS = styled(Img)`
    height: 100%;
`


export default TwoParagraph

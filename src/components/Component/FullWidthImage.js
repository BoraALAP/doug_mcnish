import React from 'react'
import styled from 'styled-components'

import { ArrowDownCircle } from 'react-feather'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const FullWidthImage = ({ featuredImage }) => {
  const image = getImage(featuredImage)
  return (
    <Container>
      <GatsbyImage
        image={image}
        objectFit="cover"
        objectPosition="50% 50%"
        alt=""
      />
      <Box>
        <span>Scroll Down</span>
        <ArrowDownCircle color="white" size={24} />
      </Box>
    </Container>
  )
}

const Container = styled.div`
  width: 100vw;
  box-sizing: border-box;

  position: relative;
  .gatsby-image-wrapper {
    height: 25rem;
    @media screen and (min-width: 768px) {
      height: 600px;
    }
  }

  img {
    height: 100%;
    background-position: center center;
  }
`

const Box = styled.div`
  position: absolute;
  background-color: ${({ theme }) => theme.color.negative};
  padding: 2rem;
  display: grid;
  width: fit-content;
  grid-gap: 1rem;
  grid-auto-flow: row;
  justify-items: center;
  left: calc(50% - 75px);
  bottom: 0;
  span {
    color: ${({ theme }) => theme.color.positive};
  }
`

export default FullWidthImage

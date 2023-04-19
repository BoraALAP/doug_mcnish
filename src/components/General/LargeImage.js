import React from 'react'
import styled from 'styled-components'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const LargeImage = ({ featuredImage, to }) => {
  const image = getImage(featuredImage)

  return (
    <Container>
      <GatsbyImage
        image={image}
        objectFit="cover"
        objectPosition="50% 50%"
        alt={to}
      />
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  height: 100%;
`

export default LargeImage

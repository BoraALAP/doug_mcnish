import React from 'react'
import { Link } from 'gatsby'
import _ from 'lodash'
import styled from 'styled-components'
import Img from 'gatsby-image'
import Button from '../UI/Button'

const ProductCard = ({
  images,
  title,
  description,
  handle,
  productType,
  variants
}) => {
  const excerpt = _.truncate(description, {
    length: 100,
    omission: `…`
  })

  return (
    <Container to={`/product/${handle}`}>
      {
        <div>
          {images[0] ? <Img fluid={images[0].localFile.childImageSharp.fluid} /> : <NoImage><p>No Image</p></NoImage>}
        </div>
      }
      <Text>
        {title && <h3>{title}</h3>}
        {excerpt && <p>{excerpt}</p>}
      </Text>
      <ButtonS>Buy Now - {variants[0].price}</ButtonS>
    </Container>
  )
}

const Container = styled(Link)`
  display: grid;
  text-decoration: none;
  align-content: stretch;
  max-width: 31rem;
  width: inherit;
  grid-template-rows: min-content auto min-content;
  transition: ${({ theme }) => theme.transition};
  &:hover {
    box-shadow: ${({ theme }) => theme.boxShadow};
  }
`
const Text = styled.div`
  display: grid;
  padding: 1rem;
  grid-gap: 8px;
  align-self: start;
  h3,
  p {
    margin: 0;
  }
`

const ButtonS = styled(Button)`
  display: grid;
  align-self: end;
`

const NoImage = styled.div`
  display: grid;
  max-height: 300px;
  min-height: 145px;
  background: ${({ theme }) => theme.color.goldGradient};
  justify-content:center;
  align-items:center;
  p{
  color: ${({ theme }) => theme.color.positive};
}
`
export default ProductCard

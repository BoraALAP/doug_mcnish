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
  price
}
) => {

  const excerpt = _.truncate(description, {
    length: 100,
    omission: `…`
  })

return(
  <Container to={`/product/${handle}`}>
    { (
      <div>
        <Img fluid={ images[0].localFile.childImageSharp.fluid} />
      </div>
    )}
    <Text>
      {title && <h3>{title}</h3>}
      {excerpt && <p>{excerpt}</p>}


      </Text>
    <ButtonS>Buy Now - {price}</ButtonS>
  </Container>
)}



const Container = styled(Link)`
  display: grid;
  text-decoration: none;
  align-content: space-between;
  transition: ${({ theme }) => theme.transition};
  &:hover{
  box-shadow: ${({ theme }) => theme.boxShadow};

  }
`
const Text = styled.div`
  display: grid;
  padding: 16px;
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
export default ProductCard
import React, { useContext, useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import StoreContext from '../../context/StoreContext'
import ProductCard from './ProductCard'
import Button from '../UI/Button'

const ProductGrid = ({ limit, type="", showMore,title }) => {
  const [limitNum, setLimitNum] = useState(limit)

  // const {
  //   store: { checkout }
  // } = useContext(StoreContext)
  const { allShopifyProduct } = useStaticQuery(
    graphql`
      query allProductsQuery {
        allShopifyProduct(sort: { fields: [createdAt], order: DESC }) {
          edges {
            node {
              id
              title
              handle
              createdAt
              description
              productType
              images {
                id
                originalSrc
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 910) {
                      ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    }
                  }
                }
              }
              variants {
                price
              }
            }
          }
        }
      }
    `
  )

  // const getPrice = price =>
  //   Intl.NumberFormat(undefined, {
  //     currency: checkout.currencyCode ? checkout.currencyCode : 'EUR',
  //     minimumFractionDigits: 2,
  //     style: 'currency'
  //   }).format(parseFloat(price ? price : 0))

  const products = allShopifyProduct.edges ? 
      allShopifyProduct.edges.filter(({ node }) => { 
        if(type) { 
          return node.productType.toLowerCase() === type.toLowerCase()
        } else { 
          return false
        }}).map(({ node }) => ( <ProductCard {...node} key={node.id}/> ))
    : false 
    

  return (
    <Container>
      {title && <h2>{title}</h2>}
      {allShopifyProduct.edges ? (
        <>
        <Products>
          {products}
        </Products>
        { showMore && (
          <Button onClick={() => setLimitNum(limit + limitNum)}>
            Show More
          </Button>
        )} 
        </>
      ) : (
        <p>No Products found!</p>
      )}
    </Container>
  )
}

export default ProductGrid

const Container = styled.div`
  display: grid;
  justify-items: center;
  @media screen and (min-width: 768px) {
  padding: 0 5vw;
    }
`

const Products = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
  grid-gap:5vh;
  width: 100%;

  @media screen and (min-width: 768px) {
    grid-gap:5vw ;
    }
`


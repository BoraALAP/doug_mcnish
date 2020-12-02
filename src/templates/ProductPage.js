import React from 'react'
import { graphql } from 'gatsby'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import styled from 'styled-components'

// import { ChevronLeft } from 'react-feather'

import Layout from '../components/Global/Layout'
import ProductForm from '../components/Shop/ProductForm'
import ProductGalleryThumbnails from '../components/Shop/ProductGalleryThumbnails'
import Button from '../components/UI/Button'

const ProductPage = ({ data }) => {
  const product = data.shopifyProduct
  const thisEdge = data.allServices.edges.find(
    edge => edge.node.id === product.id
  )

  return (
    <Layout title={product.title || false}>
      <article itemScope itemType="http://schema.org/ProductPost">
        <Container>
          <Top>
            <Left>
              <ProductGalleryThumbnails productimages={product.images} />
            </Left>
            <Right>
              {product.title && <h1 itemProp="title">{product.title}</h1>}
              <ProductForm product={product} />
            </Right>
          </Top>

          <Body>
            <div
              dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
            />
          </Body>
          {thisEdge && (
            <Bottom>
              {thisEdge.previous &&
                thisEdge.previous.handle &&
                thisEdge.previous.productType === product.productType && (
                  <AniLink
                    cover
                    direction="down"
                    bg="linear-gradient(139deg, rgba(158,55,1,1) 25%, rgba(148,16,0,1) 100%)"
                    to={`/product/${thisEdge.previous.handle}`}
                  >
                    <Button secondary>Previous Product</Button>
                  </AniLink>
                )}
              {thisEdge.next &&
                thisEdge.next.handle &&
                thisEdge.next.productType === product.productType && (
                  <AniLink
                    cover
                    direction="down"
                    bg="linear-gradient(139deg, rgba(158,55,1,1) 25%, rgba(148,16,0,1) 100%)"
                    to={`/product/${thisEdge.next.handle}`}
                  >
                    <Button>Next Product</Button>
                  </AniLink>
                )}
            </Bottom>
          )}
        </Container>
      </article>
    </Layout>
  )
}

export default ProductPage

const Container = styled.div`
  display: grid;
  padding: ${({ theme }) => theme.pagePadding};
  grid-gap: 2rem;
`

const Top = styled.div`
  display: grid;
  justify-content: center;
  grid-auto-flow: row;

  grid-gap: 2rem;

  @media screen and (min-width: 768px) {
    grid-auto-flow: column;
    grid-template-columns: 1fr 1fr;
  }
`
const Left = styled.div`
  display: grid;
  justify-self: end;
`
const Right = styled.div`
  display: grid;
  align-items: center;
  align-content: center;
  justify-content: center;
  justify-items: center;
  text-align: center;
  grid-gap: 2rem;
  padding: 1.5em 1rem;
  @media screen and (min-width: 768px) {
    align-items: start;
    align-content: start;
    justify-content: start;
    justify-items: start;
    text-align: start;
  }
`

const Body = styled.div`
  text-align: center;
  justify-self: center;
  max-width: 650px;
`

const Bottom = styled.div`
  display: grid;
  grid-gap: 1.5rem;
  justify-content: center;
  grid-auto-flow: column;
`

export const pageQuery = graphql`
  query($handle: String!) {
    shopifyProduct(handle: { eq: $handle }) {
      id
      title
      handle
      productType
      description
      descriptionHtml
      shopifyId
      options {
        id
        name
        values
      }
      variants {
        id
        title
        price
        availableForSale
        # compareAtPrice
        shopifyId
        selectedOptions {
          name
          value
        }
      }
      priceRange {
        minVariantPrice {
          amount
          currencyCode
        }
        maxVariantPrice {
          amount
          currencyCode
        }
      }
      images {
        originalSrc
        id
        localFile {
          childImageSharp {
            fluid(maxWidth: 910) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }

    allServices: allShopifyProduct(sort: { fields: publishedAt, order: DESC }) {
      edges {
        node {
          id
          productType
        }
        next {
          title
          productType
          handle
        }
        previous {
          title
          productType
          handle
        }
      }
    }
  }
`

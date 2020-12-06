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
  const info = [
    {
      handle: 'classics-veganized',
      body: [
        {
          country: 'Canada',
          buttons: [
            {
              company: 'Amazon',
              link:
                'https://www.amazon.ca/gp/product/0735237069/ref=as_li_tl?ie=UTF8&camp=15121&creative=330641&creativeASIN=0735237069&linkCode=as2&tag=dougmcnish-20&linkId=60e5efb3776b43105b83e3d4ba75734a'
            },
            {
              company: 'Chapters Indigo',
              link:
                'https://www.chapters.indigo.ca/en-ca/books/product/9780735237063-item.html?s_campaign=aff-001-5056941-Penguin+Random+House+Canada+Limited-PLA-books-00-09-13710563-8727424&cjevent=5c2672f29adb11ea802f07b50a24060b'
            }
          ]
        },
        {
          country: 'USA',
          buttons: [
            {
              company: 'Amazon',
              link:
                'https://www.amazon.com/gp/product/0735237069?tag=randohouseinc7986-20#ace-6796040015'
            },
            {
              company: 'Barnes and Noble',
              link:
                'https://www.barnesandnoble.com/w/the-classics-veganized-doug-mcnish/1136201449;jsessionid=D42EF3C0C9AB07D7D5929C4BA2503DBF.prodny_store01-atgap14?ean=9780735237063&st=AFF&2sid=Random%20House%20Inc_8373827_NA&sourceId=AFFRandom%20House%20Inc'
            },
            {
              company: 'Books a Million (BAM)',
              link:
                'https://www.booksamillion.com/p/9780735237063?AID=10747236&PID=8373827&SID=PRHEFFDF5A7F1--9780735237063&cjevent=8318bf789adb11ea8035089b0a240611#'
            }
          ]
        },
        {
          country: 'Eastern Europe',
          buttons: [
            {
              company: 'Amazon',
              link:
                'https://www.amazon.de/Classics-Veganized-Favourite-Comfort-Lifestyle-ebook/dp/B084787TB9/ref=sr_1_1?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=the+classics+veganized&qid=1598632675&sr=8-1'
            }
          ]
        },
        {
          country: 'Western Europe and the UK',
          buttons: [
            {
              company: 'Amazon',
              link:
                'https://www.amazon.co.uk/Classics-Veganized-Favourite-Comfort-Lifestyle-ebook/dp/B084787TB9/ref=sr_1_1?dchild=1&keywords=the+classics+veganized&qid=1592841073&sr=8-1'
            }
          ]
        },
        {
          country: 'Australia',
          buttons: [
            {
              company: 'Amazon',
              link:
                'https://www.amazon.com.au/gp/offer-listing/0735237069/ref=tmm_pap_new_olp_0?ie=UTF8&condition=new&qid=1597260208&sr=8-1'
            }
          ]
        }
      ]
    },
    {
      handle: 'eat-raw-eat-well-400-raw-vegan-and-gluten-free-recipes',
      body: `3`
    },
    {
      handle: 'raw-quick-and-delicious-5-ingredient-recipes-in-just-15-minutes',
      body: `4`
    },
    {
      handle: 'vegan-everyday-500-delicious-recipes',
      body: `5`
    }
  ]

  const item = info.find(
    it => product.productType === 'Book' && it.handle === product.handle
  )

  console.log(item)

  console.log(product)
  const thisEdge = data.allServices.edges.find(
    edge => edge.node.id === product.id
  )

  const Form = () => {
    if (product.productType === 'Book') {
      return item.body.map(country => (
        <PurchaseBox>
          <h3>{country.country}</h3>
          <Buttons>
            {country.buttons.map(button => (
              <a href={button.link}>
                <Button>{button.company}</Button>
              </a>
            ))}
          </Buttons>
        </PurchaseBox>
      ))
    } else {
      return <ProductForm product={product} />
    }
  }

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
              <Form />
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

const PurchaseBox = styled.div`
  display: grid;
  grid-gap: 16px;
`

const Buttons = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-gap: 8px;

  @media screen and (min-width: 991px) {
    grid-auto-flow: column;
    justify-content: start;
  }
`

const H4 = styled.h4``

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

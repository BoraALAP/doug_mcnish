import React from 'react'
import { graphql } from 'gatsby'
import _ from 'lodash'
import styled from 'styled-components'

// import PageHeader from '../components/PageHeader'
// import PostSection from '../components/PostSection'
// import Content from '../components/Content'
import Layout from '../components/Global/Layout'
// import Accordion from '../components/UI/Accordion'
import FullWidthImage from '../components/Component/FullWidthImage'
import HomeAbout from '../components/Component/HomeAbout'

// import Hashtag from '../components/Component/Hashtag'
import ContentLayout from '../components/Global/ContentLayout'
import ProductGrid from '../components/Shop/ProductGrid'
import Paragraph from '../components/UI/Paragraph'
// import Meta from '../components/Global/Meta'
// import { InstagramFeed } from '../components/InstagramFeed'

export const convertProductsToPostFormat = products => {
  let formattedProducts = []
  products.forEach(service => {
    let singleItem = {
      title: service.title,
      excerpt: _.truncate(service.description, {
        length: 100,
        omission: `…`
      }),
      featuredImage: service.images[0].originalSrc,
      slug: '/product/' + service.handle,
      productType: service.productType,
      price: service.variants[0].price
    }
    formattedProducts.push(singleItem)
  })

  return formattedProducts
}

// Export Template for use in CMS preview
export const HomePageTemplate = ({
  headerImage,
  aboutImage,
  partner1,
  partner2,
  partner3,
  kaleImage,
  body
}) => {
  console.log(body)
  return (
    <Main>
      <FullWidthImage featuredImage={headerImage.fluid} />
      <ContentLayout>
        <HomeAbout featuredImage={aboutImage.fluid} />
        {/* <Partnership
          partner1={partner1.fixed}
          partner2={partner2.fixed}
          partner3={partner3.fixed}
        /> */}
        <Center>
          <h2>Be A Vegan Leader With Executive Chef Doug Mcnish</h2>
          <Paragraph>
            <p>
              The world is evolving, and so should your business. Every day,
              more people are choosing to open their minds and lead more ethical
              and sustainable lifestyles by voting with their dollars. The
              message that plant based diets are better for the planet, our
              fellow earthlings and our overall health has reached the
              international stage, and public support is mounting as science
              proves it to be true, again and again. And no, it’s not just a
              trend.
            </p>

            <p>
              Society’s movement towards embracing plant based diets, holistic
              healing and conscious consumerism has only just begun. Our
              collective evolution is officially underway, and the impact is
              reverberating through markets and industries around the world.
              Brands that choose to adapt their business models now can take
              advantage of this seismic shift in social thought and consumer
              behaviour, cementing themselves as leaders in the global movement
              towards compassionate and conscious living.
            </p>

            <p>
              Internationally award-winning Executive Vegan Chef Doug McNish
              will help your emerging or established business evolve it’s
              products, services and operations so you can capitalize on this
              revolutionary opportunity. Whether you are already a bonafide
              plant addict or are personally a born-and-raised plant sceptic,
              your business will prosper by offering more plant based and vegan
              options to your customers. When you decide to harness the power of
              plants and partner with Chef McNish, the transition will be as
              simple, strategic and profitable as possible.{' '}
            </p>

            <p>
              Ultimately, Chef Doug’s mission is to make Veganism and Plant
              Based Cuisine more accessible to the public on a global scale by
              using his skills, knowledge and passion to help forward-thinking
              brands bring gourmet, healthful plant based options and products
              to their customers. As an Executive Chef and Restaurant and Food
              Business Consultant, Chef McNish offers his expertise and talents
              as a gastronomer, menu developer, business consultant,
              restaurateur, public speaker and educator to collaborators across
              continents, bringing their business models into the modern world
              and maximizing their profitability and popularity, in turn.
            </p>

            <p>
              Chef Doug McNish has a demonstrable history of launching
              award-winning restaurants as well as wildly popular plant based
              menus and events, consulting on every aspect of business
              operations, kitchen staff training and recipe development. Among
              his most recent successes, Chef McNish was at the helm of
              launching Neon Tiger, Charleston’s first plant based restaurant
              which was awarded Best New Restaurant in Charleston 2021, beating
              out its conventional counterparts. Three of his four cookbooks,
              including best-selling publications Eat Raw, Eat Well and The
              Classics Veganized, are internationally recognized as among the
              Best Vegetarian Cookbooks in the world, having been awarded the
              Gourmand Award in 2012 and 2021, respectively.{' '}
            </p>

            <p>
              In 2017, he was granted the title of Best Chef in Toronto by local
              media outlets, and has appeared on national and international
              media networks as a culinary expert, giving food demonstrations as
              well as motivational and educational lectures related to holistic
              health and his entrepreneurialism. As a world-class Executive
              Vegan Chef, Restaurant Consultant and Educator, Doug McNish has
              partnered with renowned, elite brands and trailblazing businesses
              around the globe in his mission to make plant based cuisine
              beloved by the masses.{' '}
            </p>

            <p>
              Alongside his colleagues and collaborators, Chef McNish is leading
              the charge into a new era for our global community, creating a
              world where we no longer have to choose between convenience,
              indulgence and our conscience.{' '}
            </p>

            <p>
              Join the movement. Choose evolution, and be a Vegan leader with
              Chef Doug McNish.{' '}
            </p>
          </Paragraph>
        </Center>
        <ProductGrid type="book" title="Books" />
      </ContentLayout>
    </Main>
  )
}

// Export Default HomePage for front-end
const HomePage = ({
  data: {
    page,
    posts,
    products,
    projects,
    headerImage,
    aboutImage,
    partner1,
    partner2,
    partner3,
    kaleImage
  }
}) => {
  return (
    <Layout meta={page.frontmatter.meta || false}>
      <HomePageTemplate
        {...page}
        {...page.frontmatter}
        body={page.html}
        products={products.edges.map(service => ({
          ...service.node
        }))}
        headerImage={headerImage.childImageSharp}
        aboutImage={aboutImage.childImageSharp}
        partner1={partner1.childImageSharp}
        partner2={partner2.childImageSharp}
        partner3={partner3.childImageSharp}
        kaleImage={kaleImage.childImageSharp}
      />
    </Layout>
  )
}

export default HomePage

const Main = styled.div`
  grid-gap: 80px;
  display: grid;
`

const Center = styled.div`
  display: grid;
  justify-content: center;
  justify-self: center;
  max-width: 700px;
`

export const pageQuery = graphql`
  ## Query for HomePage data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query HomePage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      html
      frontmatter {
        title
        subtitle
        featuredImage
      }
    }

    products: allShopifyProduct(sort: { fields: publishedAt, order: DESC }) {
      edges {
        node {
          id
          title
          description
          productType
          images {
            originalSrc
          }
          handle
          variants {
            price
          }
        }
      }
    }

    headerImage: file(relativePath: { eq: "headerImage.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    aboutImage: file(relativePath: { eq: "doug.png" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    partner1: file(relativePath: { eq: "evviva.png" }) {
      childImageSharp {
        fixed(height: 70) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    partner2: file(relativePath: { eq: "neontiger.jpg" }) {
      childImageSharp {
        fixed(height: 70) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    partner3: file(relativePath: { eq: "sweden.jpg" }) {
      childImageSharp {
        fixed(height: 70) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    kaleImage: file(relativePath: { eq: "kaleImage.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

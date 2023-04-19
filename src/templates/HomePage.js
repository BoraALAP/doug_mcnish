import React from 'react'
import { graphql } from 'gatsby'

import styled from 'styled-components'

import Layout from '../components/Global/Layout'
import FullWidthImage from '../components/Component/FullWidthImage'
import HomeAbout from '../components/Component/HomeAbout'
import ContentLayout from '../components/Global/ContentLayout'
import ProductGrid from '../components/Shop/ProductGrid'
import Paragraph from '../components/UI/Paragraph'
import LeftImage from '../components/General/LeftImage'
import { PageLink } from '../components/UI/PageLink'
import Button from '../components/UI/Button'
import LargeImage from '../components/General/LargeImage'
import CenterBigText from '../components/General/CenterBigText'

// const convertProductsToPostFormat = (products) => {
//   let formattedProducts = []
//   products.forEach((service) => {
//     let singleItem = {
//       title: service.title,
//       excerpt: _.truncate(service.description, {
//         length: 100,
//         omission: `…`
//       }),
//       featuredImage: service.images[0].originalSrc,
//       slug: '/product/' + service.handle,
//       productType: service.productType,
//       price: service.variants[0].price
//     }
//     formattedProducts.push(singleItem)
//   })

//   return formattedProducts
// }

// Export Template for use in CMS preview
const HomePageTemplate = ({
  headerImage,
  aboutImage,
  join,
  cauliflowerImage,
  onCounter,
  pepper
}) => {
  return (
    <Main>
      <FullWidthImage
        featuredImage={aboutImage}
        alt="Chef Doug McNish smiles in a black and gold kitchen."
      />
      <ContentLayout>
        <HomeAbout />

        <LeftImage
          featuredImage={cauliflowerImage}
          alt="Chef Doug’s mission is to make Veganism more accessible"
        >
          <h2>Doug’s Mission: Vegan World Takeover</h2>
          <p>
            Internationally award-winning Executive Vegan Chef Doug McNish will
            help your emerging or established business evolve it’s products,
            services and operations so you can capitalize on this revolutionary
            opportunity. Whether you are already a bonafide plant addict or are
            personally a born-and-raised plant sceptic, your business will
            prosper by offering more plant based and vegan options to your
            customers. When you decide to harness the power of plants and
            partner with Chef McNish, the transition will be as simple,
            strategic and profitable as possible.
          </p>

          <p>
            Ultimately, Chef Doug’s mission is to make Veganism more accessible
            to the public on a global scale by using his skills, knowledge and
            passion to help forward-thinking brands bring gourmet, healthful
            plant based options and products to their customers.
          </p>
          <PageLink to="service">
            <Button>How Doug Can Help You</Button>
          </PageLink>
        </LeftImage>
        <Center>
          <Paragraph>
            <h2>Bringing The World The Power Of Plants</h2>
            <p>
              As an Executive Chef and Restaurant Consultant, Chef McNish offers
              his expertise and talents as a gastronomer, menu developer,
              business consultant, restaurateur, public speaker and educator to
              collaborators across continents, bringing their business models
              into the modern world and maximizing their profitability and
              popularity, in turn.
            </p>
            <p>
              Chef Doug McNish has a demonstrable history of launching
              award-winning restaurants as well as wildly popular plant based
              menus and events, consulting on every aspect of business
              operations, kitchen staff training and recipe development. Among
              his most recent successes, Chef McNish was at the helm of
              launching <PageLink to="partnership">Neon Tiger</PageLink>,
              Charleston’s first plant based restaurant which was awarded Best
              New Restaurant in Charleston 2021, beating out its conventional
              counterparts.
            </p>
            <LargeImage
              featuredImage={onCounter}
              alt="Doug McNish and his latest cookbook, The Classics Veganized."
            />

            <p>
              Three of his four cookbooks, including best-selling publications
              Eat Raw, Eat Well and The Classics Veganized, are internationally
              recognized as among the Best Vegetarian Cookbooks in the world,
              having been awarded the Gourmand Award in 2012 and 2021,
              respectively.{' '}
              <PageLink to="products">
                Shop Doug’s award-winning cookbooks and ebook recipe collections
                here.{' '}
              </PageLink>
            </p>

            <p>
              In 2017, Doug was granted the title of Best Chef in Toronto by
              local media outlets, and has appeared on national and
              international media networks as a culinary expert, giving food
              demonstrations as well as motivational and educational lectures
              related to holistic health and his entrepreneurialism.
            </p>
            <PageLink to="aboutme">
              <Button>Learn More About Doug</Button>
            </PageLink>
          </Paragraph>

          <Paragraph>
            <LargeImage
              featuredImage={pepper}
              alt="Doug McNish juggling three raw red peppers."
            />
            <h2>Revolutionize Your Business With Doug Mcnish</h2>
            <p>
              As a world-class Executive Vegan Chef, Restaurant Consultant and
              Educator, Doug McNish has partnered with renowned, elite brands
              and trailblazing businesses around the globe in his mission to
              make plant based cuisine beloved by the masses.
            </p>

            <p>
              Alongside his colleagues and collaborators, Chef McNish is leading
              the charge into a new era for our global community, creating a
              world where we no longer have to choose between convenience,
              indulgence and our conscience.
            </p>

            <p>
              Want to learn more about how Doug is teaming up with other vegan
              leaders, and how you can join the food revolution? Click the
              button below!
            </p>
            <PageLink to="partnership">
              <Button>Doug’s Strategic Partnerships</Button>
            </PageLink>
          </Paragraph>
        </Center>
        <CenterBigText>
          <h3>
            Join the movement. Choose evolution, and be a Vegan leader with Chef
            Doug McNish.
          </h3>
          <a href="mailto: chef@dougmcnish.com">
            <Button>Contact Doug</Button>
          </a>
        </CenterBigText>
        <LargeImage
          featuredImage={join}
          alt="Join the movement. Choose evolution, and be a Vegan leader with Chef
            Doug McNish."
        />

        <ProductGrid
          type="book"
          title="Shop Chef Doug’s Award-Winning Cookbooks"
        />
        <Paragraph>
          <p>
            You can harness the power of plants at home with Chef Doug McNish’s
            best-selling raw, gourmet and whole food Vegan recipes. His
            award-winning cookbooks Eat Raw, Eat Well, Vegan Everyday and The
            Classics Veganized have been recognized as “The Best Vegan
            Cookbooks” in the world, each earning a Gourmand Award. These iconic
            culinary masterpieces are a staple in every dedicated, diehard
            Vegan’s recipe repertoire, and make great gifts for all the plant
            addict and plant-curious loved ones in your life.
          </p>
        </Paragraph>
      </ContentLayout>
    </Main>
  )
}

// Export Default HomePage for front-end
const HomePage = ({
  data: {
    page,
    // products,
    join,
    pepper,
    headerImage,
    aboutImage,
    kaleImage,
    onCounter,
    cauliflowerImage
  }
}) => {
  return (
    <Layout meta={page.frontmatter.meta || false}>
      <HomePageTemplate
        {...page}
        {...page.frontmatter}
        body={page.html}
        // products={products.edges.map((service) => ({
        //   ...service.node
        // }))}
        headerImage={headerImage.childImageSharp}
        aboutImage={aboutImage.childImageSharp}
        kaleImage={kaleImage.childImageSharp}
        cauliflowerImage={cauliflowerImage.childImageSharp}
        join={join.childImageSharp}
        pepper={pepper.childImageSharp}
        onCounter={onCounter.childImageSharp}
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
  justify-items: center;

  gap: 3rem;
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

    # products: allShopifyProduct(sort: { publishedAt: DESC }) {
    #   edges {
    #     node {
    #       id
    #       title
    #       description
    #       productType
    #       images {
    #         originalSrc
    #       }
    #       handle
    #       variants {
    #         price
    #       }
    #     }
    #   }
    # }

    headerImage: file(relativePath: { eq: "headerImage.jpg" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
    aboutImage: file(
      relativePath: { eq: "Doug-Mcnish-About-featureImage.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData
      }
    }
    cauliflowerImage: file(relativePath: { eq: "Zaatar-cauliflower-2.jpg" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
    join: file(relativePath: { eq: "Doug-Mcnish-Join.jpg" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
    pepper: file(relativePath: { eq: "Doug-Mcnish-Pepper.jpg" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
    onCounter: file(relativePath: { eq: "Doug-Mcnish-Book-OnCounter.jpg" }) {
      childImageSharp {
        gatsbyImageData
      }
    }

    kaleImage: file(relativePath: { eq: "kaleImage.jpg" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`

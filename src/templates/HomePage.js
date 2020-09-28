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
import Partnership from '../components/Component/Partnership'
import Hashtag from '../components/Component/Hashtag'
import ContentLayout from '../components/Global/ContentLayout'
import ProductGrid from '../components/Shop/ProductGrid'

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
  kaleImage
}) => {
  
  return (
    <Main>
      <FullWidthImage featuredImage={headerImage.fluid} />
      <ContentLayout>
        <HomeAbout featuredImage={aboutImage.fluid} />
        <Partnership
          partner1={partner1.fixed}
          partner2={partner2.fixed}
          partner3={partner3.fixed}
        />
        <Hashtag featuredImage={kaleImage.fluid} />
        
          <ProductGrid type="book"/>
        
      </ContentLayout>

      {/* <PageHeader
      large
      title={title}
      subtitle={subtitle}
      backgroundImage={featuredImage}
    />

    <section className="section">
      <div className="container">
        <Content source={body} />
      </div>
    </section> */}

      {/* <PostSection
          title="Books"
          posts={convertProductsToPostFormat(products)}
          limit={4}
          type="book"
        /> */}

      {/* <section className="section">
      <div className="container">
        <PostSection title="features" />
        <Accordion title="features" items={accordion} />
      </div>
    </section>

    {!!posts.length && (
      <section className="section">
        <div className="container">
          <PostSection title="Recent Blog Posts" posts={posts} />
        </div>
      </section>
    )} */}
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
        posts={posts.edges.map(post => ({
          ...post.node,
          ...post.node.frontmatter,
          ...post.node.fields
        }))}
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
        accordion {
          title
          content
        }
      }
    }

    posts: allMarkdownRemark(
      limit: 3
      filter: { fields: { contentType: { eq: "posts" } } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "dddd MMMM DD, YYYY")
            categories {
              category
            }
            featuredImage
          }
        }
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
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    aboutImage: file(relativePath: { eq: "doug.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    partner1: file(relativePath: { eq: "evviva.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(height: 70) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    partner2: file(relativePath: { eq: "neontiger.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(height: 70) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    partner3: file(relativePath: { eq: "sweden.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(height: 70) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    kaleImage: file(relativePath: { eq: "kaleImage.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Main = styled.main`
  grid-gap: 80px;
  display: grid;
`

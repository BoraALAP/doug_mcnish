import React from 'react'
import { graphql } from 'gatsby'
// import styled from 'styled-components'

import Layout from '../components/Global/Layout'
import ContentLayout from '../components/Global/ContentLayout'
import TwoParagraph from '../components/Services/TwoParagraph'
import TwoColumn from '../components/Services/TwoColumn'
import LeftImage from '../components/Services/LeftImage'
import FourColumn from '../components/Services/FourColumn'
import ThreeColumn from '../components/Services/ThreeColumn'

// Export Template for use in CMS preview
export const ServicePageTemplate = ({ photo, dinner }) => {
  return (
    <ContentLayout>
      <TwoParagraph featuredImage={dinner.fluid} />
      <TwoColumn />
      <LeftImage featuredImage={photo.fluid} />
      <FourColumn />
      <ThreeColumn />
    </ContentLayout>
  )
}

// Export Default ServicePage for front-end
const ServicePage = ({
  data: {
    page,
    photo,
    dinner
  }
}) => {
  return (
    <Layout meta={page.frontmatter.meta || false}>
      <ServicePageTemplate
        {...page}
        {...page.frontmatter}
        body={page.html}
        photo={photo.childImageSharp}
        dinner={dinner.childImageSharp}
      />
    </Layout>
  )
}

export default ServicePage

export const pageQuery = graphql`
  ## Query for ServicePage data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query ServicePage($id: String!) {
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

    photo: file(relativePath: { eq: "photo.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    dinner: file(relativePath: { eq: "dinner.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

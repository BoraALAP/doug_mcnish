import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import ContentLayout from '../components/Global/ContentLayout'
import Layout from '../components/Global/Layout'

// Export Template for use in CMS preview
export const AboutMePageTemplate = ({
  title,
  subtitle,
  featuredImage,
  body
}) => {

  return (
    <Main>

      <ContentLayout>

      </ContentLayout>

     
    </Main>
  )
}

// Export Default AboutMePage for front-end
const AboutMePage = ({
  data: {
    page,
  }
}) => {
  return (
    <Layout meta={page.frontmatter.meta || false}>
      <AboutMePageTemplate
        {...page}
        {...page.frontmatter}
        body={page.html}
      />
    </Layout>
  )
}

export default AboutMePage

export const pageQuery = graphql`
  ## Query for AboutMePage data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query AboutMePage($id: String!) {
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



    headerImage: file(relativePath: { eq: "headerImage.jpg" }) {
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

const Main = styled.main`
  grid-gap: 80px;
  display: grid;
`


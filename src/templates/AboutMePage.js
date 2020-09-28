import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import ContentLayout from '../components/Global/ContentLayout'
import Layout from '../components/Global/Layout'
import LeftImage from '../components/General/LeftImage'
import CenterBigText from '../components/General/CenterBigText'
import RightImage from '../components/General/RightImage'
import LargeImage from '../components/General/LargeImage'

// Export Template for use in CMS preview
export const AboutMePageTemplate = ({
  title,
  subtitle,
  featuredImage,
  body,
  dougShow,
  openArms
}) => {
  console.log(dougShow);
  return (
    <Main>
      <ContentLayout>
        <LeftImage featuredImage={featuredImage.fluid} title={title}/>
        <CenterBigText />
        <RightImage featuredImage={dougShow.fluid} />
        <LargeImage featuredImage={openArms.fluid}/>
      </ContentLayout>
    </Main>
  )
}

// Export Default AboutMePage for front-end
const AboutMePage = ({ data: { page, youngDoug, dougShow, openArms } }) => {
  return (
    <Layout meta={page.frontmatter.meta || false}>
      <AboutMePageTemplate {...page} {...page.frontmatter} body={page.html} featuredImage={youngDoug.childImageSharp} dougShow={dougShow.childImageSharp} openArms={openArms.childImageSharp} />
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
      }
    }

    youngDoug: file(relativePath: { eq: "youngDoug.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 1600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    dougShow: file(relativePath: { eq: "dougShow.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 1600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    openArms: file(relativePath: { eq: "openArms.jpg" }) {
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

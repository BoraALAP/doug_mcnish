import React from 'react'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader'
import FormSignupAjax from '../components/FormSignupAjax'
import Content from '../components/Content'

import Layout from '../components/Global/Layout'
import ContentLayout from '../components/Global/ContentLayout'

// Export Template for use in CMS preview
const FormPageTemplate = ({
  body,
  title,
  subtitle,
  featuredImage,
  address,
  phone,
  email,
  locations
}) => (
  <ContentLayout>
    <PageHeader
      title={title}
      subtitle={subtitle}
      backgroundImage={featuredImage}
    />
    <section className="section Contact--Section1">
      <div className="container Contact--Section1--Container">
        <div>
          <Content source={body} />
        </div>
        <div>
          <FormSignupAjax name="email_signup_form" />
        </div>
      </div>
    </section>
  </ContentLayout>
)

const FormPage = ({ data: { page } }) => (
  <Layout
    meta={page.frontmatter.meta || false}
    title={page.frontmatter.title || false}
  >
    <FormPageTemplate {...page.frontmatter} body={page.html} />
  </Layout>
)

export default FormPage

export const pageQuery = graphql`
  query FormPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      html
      frontmatter {
        title
        template
        subtitle
        featuredImage
        address
        phone
        email
        locations {
          mapLink
          lat
          lng
        }
      }
    }
  }
`

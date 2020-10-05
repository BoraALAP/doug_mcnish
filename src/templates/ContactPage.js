import React from 'react'
import { Smartphone, Mail } from 'react-feather'
import { graphql } from 'gatsby'
import styled from 'styled-components'

// import FormSimpleAjax from '../components/FormSimpleAjax'
import Content from '../components/Content'
// import GoogleMap from '../components/GoogleMap'
import Layout from '../components/Global/Layout'
import ContentLayout from '../components/Global/ContentLayout'

// Export Template for use in CMS preview
export const ContactPageTemplate = ({
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
    <Content source={body} />
    <Info>
      {/* {address && (
        <a
          className="Contact--Details--Item"
          href={`https://www.google.com/maps/search/${encodeURI(address)}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {address}
        </a>
      )} */}
      {phone && (
        <Alink className="Contact--Details--Item" href={`tel:${phone}`}>
          <Smartphone /> {phone}
        </Alink>
      )}
      {email && (
        <Alink className="Contact--Details--Item" href={`mailto:${email}`}>
          <Mail /> {email}
        </Alink>
      )}
    </Info>

    
      {/* <FormSimpleAjax name="contact_form" /> */}
    

    {/* <GoogleMap locations={locations} /> */}
  </ContentLayout>
)

const ContactPage = ({ data: { page } }) => (
  <Layout
    meta={page.frontmatter.meta || false}
    title={page.frontmatter.title || false}
  >
    <ContactPageTemplate {...page.frontmatter} body={page.html} />
  </Layout>
)


const Info = styled.div`
  display: grid;
  grid-gap: 2rem;
`

const Alink = styled.a`
  display: grid;
  align-items:center;
  grid-auto-flow:column;
  grid-gap: 0.5rem;
  width: max-content;
`

export default ContactPage

export const pageQuery = graphql`
  query ContactPage($id: String!) {
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

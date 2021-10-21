import React from 'react'
import { Mail } from 'react-feather'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/Global/Layout'
import ContentLayout from '../components/Global/ContentLayout'

import AniLink from 'gatsby-plugin-transition-link/AniLink'
import LeftImage from '../components/General/LeftImage'

// Export Template for use in CMS preview
export const ContactPageTemplate = ({ photo, email }) => {
  console.log(photo)
  return (
    <ContentLayout>
      <Info>
        <LeftImage
          title="Plant Powered Business Inquiries"
          featuredImage={photo.fluid}
        >
          <p>
            Do you need help launching your plant based food or veggie-friendly
            business? Do you have a great vegan product that needs developing or
            marketing? Are you looking for a personalized plant based menu,
            informative and inspiring food demonstration or kitchen staff
            training for your event?
          </p>

          <p>
            If you think Chef Doug has the skills and expertise required to get
            your vegan food or business-related goals accomplished, let him
            know! He is passionate about helping others achieve their dreams,
            especially when it pertains to plant based cuisine and promoting
            veganism around the world.
          </p>

          <p>
            Send a brief email introducing yourself as well as your needs and
            expectations, and Chef McNish will get back to you as soon as he
            can.
          </p>

          <p>
            For more information about Doug’s extensive range of services and
            potential{' '}
            <AniLink
              to="/partnership/"
              cover
              direction="down"
              bg="linear-gradient(139deg, rgba(158,55,1,1) 25%, rgba(148,16,0,1) 100%)"
            >
              strategic partnership collaborations
            </AniLink>
            , you can learn more{' '}
            <AniLink
              to="/service/"
              cover
              direction="down"
              bg="linear-gradient(139deg, rgba(158,55,1,1) 25%, rgba(148,16,0,1) 100%)"
            >
              here.
            </AniLink>
          </p>
          {email && (
            <Alink className="Contact--Details--Item" href={`mailto:${email}`}>
              <Mail /> {email}
            </Alink>
          )}
        </LeftImage>
      </Info>
    </ContentLayout>
  )
}

const ContactPage = ({ data: { page, photo } }) => {
  return (
    <Layout
      meta={page.frontmatter.meta || false}
      title={page.frontmatter.title || false}
    >
      <ContactPageTemplate
        {...page.frontmatter}
        body={page.html}
        photo={photo.childImageSharp}
      />
    </Layout>
  )
}

const Info = styled.div`
  display: grid;
  grid-gap: 2rem;
`

const Alink = styled.a`
  display: grid;
  align-items: center;
  grid-auto-flow: column;
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
        email
      }
    }

    photo: file(relativePath: { eq: "Doug-Mcnish-Contact.jpg" }) {
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

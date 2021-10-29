import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/Global/Layout'
import ContentLayout from '../components/Global/ContentLayout'
import Paragraph from '../components/UI/Paragraph'
import Button from '../components/UI/Button'
import { Egale } from '../assets/logos/egale'
import Youtube from '../components/UI/Youtube'

// Export Template for use in CMS preview
export const EgalePageTemplate = ({ body }) => (
  <ContentLayout>
    <Info>
      <Egale />
      <Paragraph title="The Importance of Inclusivity in the Kitchen: In Support of Egale Canada">
        <p>
          Since his early youth, Doug was raised in the kitchens of various bars
          and restaurants across Toronto, working his way from dishwasher to
          line cook and ultimately to head chef. Unfortunately, there came a
          time in his career when he realized that growing up in this aggressive
          environment had taught him more than just cooking skills. Today, Doug
          is a huge supporter and fan of Egale Canada and their work advocating
          for the rights of 2SLGBTQI people across the country by informing
          public policy and inspiring cultural change through education,
          research, awareness and more.{' '}
          <a href="https://egale.ca/about/" target="_blank" rel="noreferrer">
            Inspired by Egale’s important work
          </a>
          , Chef Doug is doing his best to aid their mission of promoting human
          rights and equality by spreading the message of the importance of
          inclusivity throughout Canada’s restaurant industry.
        </p>

        <p>
          If you’ve never worked in the service or food industry, or if you’ve
          been in the industry for so long that you can’t see it clearly, you
          may not be aware of one of the best kept secrets in hospitality: There
          is a toxic culture that permeates many (if not most) back of house
          environments which can be extremely sexist, bigoted or otherwise
          hateful towards marginalized groups at times. Now, Chef McNish aims to
          work with industry organizations in an effort to change this toxic,
          oppressive culture by bringing Egale’s workplace sensitivity programs
          to kitchens and businesses across Canada.
        </p>

        <p>
          According to Doug, “We are living in a time where inclusivity is
          paramount. As a society, we need to understand and respect that
          everyone’s lived experiences are different. We need to come together
          now more than ever, instead of feeling divided.”
        </p>

        <p>
          To support Egale’s life-saving work, click the button below and learn
          more about their initiatives and donate to their crucially important
          work.
        </p>

        <a href="https://egale.ca/donate/" target="_blank" rel="noreferrer">
          <Button>Support LGBTQ2S+ Advocacy</Button>
        </a>
      </Paragraph>

      <Youtube id="ISBkEDXP_CA" />
    </Info>
  </ContentLayout>
)

const EgalePage = ({ data: { page } }) => {
  return (
    <Layout
      meta={page.frontmatter.meta || false}
      title={page.frontmatter.title || false}
    >
      <EgalePageTemplate {...page.frontmatter} />
    </Layout>
  )
}

const Info = styled.div`
  display: grid;

  justify-content: center;
`

export default EgalePage

export const pageQuery = graphql`
  query EgalePage($id: String!) {
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

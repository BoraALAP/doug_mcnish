import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

// import FormSimpleAjax from '../components/FormSimpleAjax'
// import Content from '../components/Content'
// import GoogleMap from '../components/GoogleMap'
import Layout from '../components/Global/Layout'
import ContentLayout from '../components/Global/ContentLayout'
import Paragraph from '../components/UI/Paragraph'
import Button from '../components/UI/Button'

// Export Template for use in CMS preview
export const EgalePageTemplate = ({ body }) => (
  <ContentLayout>
    {/* <Content source={body} /> */}

    <Info>
      <Paragraph title="The Importance of Inclusivity in the Kitchen: In Support of Egale Canada">
        <p>
          Since his early youth, Doug was raised in the kitchens of various bars
          and restaurants across Toronto, working his way from dishwasher to
          line cook and ultimately to head chef. Unfortunately, there came a
          time in his career when he realized that growing up in this aggressive
          environment had taught him more than just cooking skills. Today, Doug
          is a supporter of Egale Canada and their work advocating for the
          rights of 2SLGBTQI people across the country by informing public
          policy and inspiring cultural change through education, research,
          awareness and more. Inspired by Egale’s important work, Chef Doug is
          doing his best to aid their mission of promoting human rights and
          equality by spreading the message of the importance of inclusivity
          throughout Canada’s restaurant industry.
        </p>

        <p>
          If you’ve never worked in the service or food industry, or if you’ve
          been in the industry for so long that you can’t see it clearly, you
          may not be aware of one of the best kept secrets in hospitality: There
          is a toxic culture that permeates many (if not most) back of house
          environments which can be extremely sexist, bigoted or otherwise
          hateful towards marginalized groups at times. Now, Chef McNish aims to
          work with industry organizations in an effort to change this toxic,
          oppressive culture by bringing Egale’s workplace inclusion for gender
          and sexual diversity program to kitchens and businesses across Canada.{' '}
        </p>

        <p>
          According to Doug, “We are living in a time where inclusivity is
          paramount. As a society, we need to understand and respect that
          everyone’s lived experiences are different. We need to come together
          now more than ever, instead of feeling divided.” If you want to
          support Egale’s life-saving work, click the link below to learn more
          about their initiatives and donate to their crucially important cause.
        </p>

        <a href="https://egale.ca/donate/" target="_blank" rel="noreferrer">
          <Button>Donate</Button>
        </a>
      </Paragraph>
    </Info>
  </ContentLayout>
)

const EgalePage = ({ data: { page } }) => {
  console.log(page)
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
  grid-gap: 2rem;
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

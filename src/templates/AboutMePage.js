import React from 'react'
import { graphql } from 'gatsby'
// import styled from 'styled-components'

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
  dougOutside,
  openArms
}) => {
  return (
    <ContentLayout>
      <LeftImage featuredImage={featuredImage.fluid} title={title}>
        <p>
          Doug McNish knew that he was destined for a career in the kitchen when
          he began honing his skills at the age of 15, quickly learning all the
          intricacies of the food service industry. Although adept in his field,
          by the age of 20, Doug knew that he needed to make a change after
          watching footage of a slaughterhouse. He went vegetarian, and months
          later adopted a fully vegan lifestyle. It wasn’t long before he
          positioned himself as a pioneer in the vegan food movement,
          courageously aligning his career path with his morals in a time when
          veganism was relatively unknown.
        </p>
      </LeftImage>
      <CenterBigText>
        With his hunger and drive, Doug McNish has honed his craft and become a
        word class executive vegan chef, consultant, educator, brand
        spokesperson, author, speaker, and a committed vegan activist.
      </CenterBigText>
      <RightImage featuredImage={dougShow.fluid}>
        <p>
          Since then, Doug has become a globally recognized Executive Chef,
          consultant and author building his brand by creating innovative
          recipes for all kinds of cuisine, from classic comfort foods to
          gourmet gastronomical marvels. Nowadays, Doug’s career takes him all
          over the world, and his skills are utilized both outside of the
          kitchen and inside. He’s been featured on national and international
          television, regularly consults for restaurateurs and entrepreneurs
          like himself, has inspired and educated international audiences, and
          authored multiple cookbooks.
        </p>

        <p>
          Doug&#39;s first cookbook, the bestselling Eat Raw, Eat Well was
          published internationally in Spring of 2012, and was awarded a
          Gourmand Award in Paris, France for being the Best Vegetarian Cookbook
          in the world. His second title Raw, Quick &amp; Delicious was
          published in the Fall of 2013, and his third book, Vegan Everyday was
          published in 2015, which garnered him another Gourmand Award for Best
          Vegan Cookbook in the world. Doug’s fourth cookbook; The Classics
          Veganized: Over 120 Favourite Comfort Food Recipes for a Vegan
          Lifestyle was published in the Fall of 2020.
        </p>
      </RightImage>
      <LargeImage featuredImage={openArms.fluid} />

      <LeftImage featuredImage={dougOutside.fluid}>
        <p>
          Doug was awarded the title of Best Chef in the City by Now Magazine’s
          Readers’ Choice Awards in his hometown of Toronto, Ontario in 2017,
          putting him in league with many of the country’s best. After his
          various projects in Toronto found success, Doug expanded his brand
          into global markets, bringing his expertise to Europe, Australia and
          the United States, with plans to reach every continent. As a pioneer
          in the vegan movement, Doug’s work has been a part of helling to make
          vegan cuisine go mainstream, devoting himself to his vocation and
          activism in the name of ethics, health and the environment.
        </p>

        <p>
          You can keep up with Doug online by following him on Twitter,
          Instagram, YouTube and Facebook, where he routinely shares his ongoing
          projects, informative and inspiring content and his love for
          everything vegan.
        </p>
      </LeftImage>
    </ContentLayout>
  )
}

// Export Default AboutMePage for front-end
const AboutMePage = ({
  data: { page, youngDoug, dougShow, dougOutside, openArms }
}) => {
  return (
    <Layout meta={page.frontmatter.meta || false}>
      <AboutMePageTemplate
        {...page}
        {...page.frontmatter}
        body={page.html}
        featuredImage={youngDoug.childImageSharp}
        dougShow={dougShow.childImageSharp}
        dougOutside={dougOutside.childImageSharp}
        openArms={openArms.childImageSharp}
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
    dougOutside: file(relativePath: { eq: "dougOutside.jpg" }) {
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

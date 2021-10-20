import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import ContentLayout from '../components/Global/ContentLayout'
import Layout from '../components/Global/Layout'
import LeftImage from '../components/General/LeftImage'
import CenterBigText from '../components/General/CenterBigText'
import RightImage from '../components/General/RightImage'
import LargeImage from '../components/General/LargeImage'
import Paragraph from '../components/UI/Paragraph'

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
          Doug McNish is an internationally award-winning Executive Chef and
          Restaurant Consultant, best-selling Author, passionate educator,
          celebrated activist and pioneer of society’s plant-forward future with
          over two decades of expertise launching and developing successful
          businesses in the food industry.
        </p>
        <p>
          With his hunger and drive, Doug McNish has honed his craft and become
          a word class executive vegan chef, consultant, educator, brand
          spokesperson, author, speaker, and a committed vegan activist.
        </p>
      </LeftImage>
      <CenterBigText>
        Chef McNish’s mission is to make Veganism more accessible to the public
        on an international scale by using his skills, knowledge and passion to
        help emerging and established brands bring gourmet, healthful plant
        based options and products to their customers. He achieves this goal by
        offering his hard-earned talents as a gastronomer, menu developer,
        business consultant, restaurateur, public speaker and educator to
        collaborators across the continents, maximizing their business’s
        profitability and popularity.
      </CenterBigText>
      <RightImage featuredImage={dougShow.fluid}>
        <p>
          As a world-class Executive Vegan Chef, Restaurant Consultant and
          Educator, Doug McNish has partnered with renowned, elite brands and
          trailblazing businesses around the globe in his mission to make plant
          based cuisine beloved by the masses. McNish’s classical chef training
          and insistence on using the best ingredients allows him to create fine
          dining–style vegan and raw dishes that prominent food critic James
          Chatto called, “rich, dense and packed with flavour”. McNish graduated
          from George Brown’s culinary program and apprenticed at the Donalda
          Club, a private golf club in north Toronto. In 2004, McNish toiled at
          Jump Restaurant as a Chef de Partie, and later started a three-year
          stint at Couture Cuisine, being promoted from cook to a full-time
          manager. As manager, he oversaw 15 cooks at chef Arpi Magyar’s
          boutique catering company until his career took him into consulting,
          where he worked as Executive Chef for acclaimed restaurants such as
          Raw Aura Organic Cuisine.
        </p>
        <p>
          Chef McNish has since led the charge in many successful plant based
          business endeavours, with collaborations spanning Toronto, New York,
          Montreal, Melbourne, South Carolina, Stockholm and beyond. Chef Doug
          McNish is an expert and consultant on every aspect of restaurant and
          food business operations, kitchen staff training, menu and recipe
          development. One of his most recent successes involves his work with
          Neon Tiger, which he helped to establish as Charleston’s first plant
          based restaurant. Neon Tiger went on to win the title of Best New
          Restaurant in Charleston 2021, beating out its conventional culinary
          contenders. His first restaurant, Public Kitchen, was widely referred
          to as “one of Toronto’s favourite restaurants” by local media, as well
          as the popular Mythology Diner and Evviva Breakfast and Lunch’s highly
          celebrated vegan menu.
        </p>
      </RightImage>
      <LargeImage featuredImage={openArms.fluid} />

      <LeftImage featuredImage={dougOutside.fluid}>
        <p>
          In 2017, Chef McNish was granted the title of Best Chef in Toronto by
          local media outlets, and has been crowned the “Iron Chef” in multiple
          live cooking competitions. He has since appeared on national and
          international media networks showcasing his culinary knowledge and
          expertise, with several appearances on the popular television show
          Breakfast Television. He has been invited to lecture at notable
          industry events such as The River Gorge Remedy Conference in
          Washington, as well as local events located in Maui in collaboration
          with the Vegetarian Society of Hawai’i. In addition, he authored a
          bi-weekly column published by a Postmedia Network subsidiary, The
          Growth Op, titled Plant Food, in which he combined his respect for the
          healing properties of cannabis and whole foods, plant based diets,
          providing infused recipes and industry-related commentary.
        </p>
      </LeftImage>
      <Center>
        <Paragraph>
          <p>
            Chef McNish’s skills have been recognized across continents, and
            even on a global scale. Three of his four cookbooks, including
            best-selling publications Eat Raw, Eat Well, Vegan Everyday and The
            Classics Veganized, are recognized as being among the Best
            Vegetarian Cookbooks in the world, each earning the internationally
            acclaimed Gourmand Award in 2012, 2015 and 2021, respectively. This
            great honour is granted to the most innovative and groundbreaking
            works published in over 175 countries and regions, and Chef McNish
            is blown away with gratitude that he was chosen to receive the
            honour three times. In addition, Chef Doug is particularly proud of
            one career highlight, in which he was asked to develop the menu,
            organize the catering and oversee all kitchen operations during the
            2020 World Economic Forum in Davos, Switzerland for a Plant Based
            Green Debate. There, his gastronomic masterpieces were appreciated
            by hundreds of global dignitaries and decision-makers in a bid to
            call attention to sustainable lifestyle choices.
          </p>
          <p>
            Now, as an Executive Vegan Chef, Restaurant Consultant, Media
            Personality and more with over 23 years of experience in the food
            and service industry, McNish has dedicated his career to helping the
            world harness the power of plants. In doing so, he hopes to use his
            knowledge, skills and passion to spread the message and cuisine of
            Veganism, enriching as many lives, businesses and diets as possible.
          </p>
          <p>
            You can keep up with Doug online by following him @Dougmcnish on
            Twitter and Instagram, where he shares his ongoing projects,
            informative and inspiring content and his love for everything Vegan.
          </p>
        </Paragraph>
      </Center>
    </ContentLayout>
  )
}

const Center = styled.div`
  display: grid;
  justify-content: center;
`

// Export Default AboutMePage for front-end
const AboutMePage = ({
  data: { page, youngDoug, dougShow, dougOutside, openArms }
}) => {
  console.log(page)
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

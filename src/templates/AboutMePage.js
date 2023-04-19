import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import ContentLayout from '../components/Global/ContentLayout'
import Layout from '../components/Global/Layout'
import LeftImage from '../components/General/LeftImage'

import RightImage from '../components/General/RightImage'
import LargeImage from '../components/General/LargeImage'
import Paragraph from '../components/UI/Paragraph'

import { ExternalLink, PageLink } from '../components/UI/PageLink'
import Youtube from '../components/UI/Youtube'

// Export Template for use in CMS preview
const AboutMePageTemplate = ({
  title,
  subtitle,
  featuredImage,
  body,
  mission,
  dougShow,
  neonTiger,
  dougBook,
  book
}) => {
  return (
    <ContentLayout>
      <LeftImage
        featuredImage={featuredImage}
        title={title}
        alt="Doug McNish smiles and leans on a black kitchen counter."
      >
        <p>
          Doug McNish is an internationally award-winning Executive Chef and
          Restaurant Consultant, best-selling Author, passionate educator,
          celebrated activist and pioneer of society’s plant-forward future with
          over two decades of expertise launching and developing successful
          businesses in the food industry.
        </p>
      </LeftImage>
      <RightImage
        featuredImage={mission}
        alt="Doug McNish juggling three raw red peppers."
      >
        <h2>Doug’s Mission</h2>
        <p>
          Chef McNish’s mission is to make Veganism more accessible to the
          public on an international scale by using his skills, knowledge and
          passion to help emerging and established brands bring gourmet,
          healthful plant based options and products to their customers. He
          achieves this goal by offering his hard-earned talents as a
          gastronomer, menu developer, business consultant, restaurateur, public
          speaker and educator with collaborators across the continents,
          maximizing their business’s profitability and popularity. Interested
          in collaborating? Read more about Doug’s professional{' '}
          <PageLink to="service">food and business services</PageLink> here.
        </p>

        <p>
          As a world-class Executive Vegan Chef, Restaurant Consultant and
          Educator, Doug McNish has partnered with renowned, elite brands and
          trailblazing businesses around the globe in his mission to make plant
          based cuisine beloved by the masses. McNish’s classical chef training
          and insistence on using the best ingredients allows him to create fine
          dining–style vegan and raw dishes that prominent food critic James
          Chatto called, “rich, dense and packed with flavour”. You can read
          more about{' '}
          <PageLink to="partnership">
            Doug’s Strategic Partnerships here.
          </PageLink>
        </p>
      </RightImage>
      <Center>
        <Paragraph>
          <Youtube id="52nBlo4rxjg" />
          <h2>Making Veganism And Plant Based Cuisine Go Global</h2>

          <p>
            McNish graduated from George Brown’s culinary program and
            apprenticed at the Donalda Club, a private golf club in north
            Toronto. In 2004, McNish toiled at Jump Restaurant as a Chef de
            Partie, and later started a three-year stint at Couture Cuisine,
            being promoted from cook to a full-time manager. As manager, he
            oversaw 15 cooks at chef Arpi Magyar’s boutique catering company
            until his career took him into consulting, where he worked as
            Executive Chef for acclaimed restaurants such as Raw Aura Organic
            Cuisine.
          </p>

          <p>
            Chef McNish has since led the charge in many successful plant based
            business endeavours, with collaborations spanning Toronto,
            Melbourne, New York, Switzerland, Stockholm and beyond. Chef Doug
            McNish is an expert and consultant on every aspect of restaurant
            business operations, kitchen staff training, menu and recipe
            development.{' '}
          </p>

          <LargeImage
            featuredImage={neonTiger}
            alt="Chef McNish standing and smiling against the backdrop of Neon Tiger’s black and white, art-covered wall."
          />

          <p>
            One of his most recent successes involves his work with{' '}
            <a href="https://neontiger.com/" target="_blank" rel="noreferrer">
              Neon Tiger
            </a>
            , which he helped to establish as Charleston, South Carolina’s first
            plant based restaurant. Neon Tiger went on to win the title of{' '}
            <a
              href="https://charlestoncitypaper.com/neon-tiger-pushes-boundaries-with-all-vegan-reubens-chicken-sandwiches-and-more/"
              target="_blank"
              rel="noreferrer"
            >
              Best New Restaurant in Charleston 2021
            </a>
            , beating out its conventional culinary contenders. His first
            restaurant, Public Kitchen, was widely referred to as “one of
            Toronto’s favourite restaurants” by local media, as well as the
            popular Mythology Diner and Evviva Breakfast and Lunch’s highly
            celebrated vegan menu.
          </p>
        </Paragraph>
      </Center>

      <LeftImage
        featuredImage={dougShow}
        alt="Doug McNish doing a cooking demonstration on Breakfast Television, 2017."
      >
        <h2>Grateful And Growing: Chef Doug’s Career So Far</h2>
        <p>
          In 2017, Chef McNish was granted the title of{' '}
          <ExternalLink to="https://www.bttoronto.ca/videos/vegan-dishes-from-best-chef-doug-mcnish/">
            Best Chef in Toronto
          </ExternalLink>{' '}
          by local media outlets, and has been crowned the “Iron Chef” in
          multiple live cooking competitions. He has since appeared on national
          and international media networks showcasing his culinary knowledge and
          expertise, with several appearances on the popular television show
          <ExternalLink to="https://www.bttoronto.ca/videos/vegan-dishes-from-best-chef-doug-mcnish/">
            Breakfast Television
          </ExternalLink>
          . He has been invited to lecture at notable industry events such as
          The River Gorge Remedy Conference in Washington, as well as local
          events located in Maui in collaboration with the Vegetarian Society of
          Hawai’i.
        </p>
        <p>
          In addition, Doug authored a bi-weekly column published by{' '}
          <ExternalLink to="https://www.thegrowthop.com/cannabis-culture/cannabis-food/our-new-columnist-an-executive-vegan-chef-dishes-on-the-plant-my-love-for-cannabis-started-before-my-love-of-cooking">
            The Growth Op
          </ExternalLink>{' '}
          titled{' '}
          <ExternalLink to="https://www.thegrowthop.com/author/doug-mcnish-plant-food">
            Plant Food
          </ExternalLink>
          , in which he combined his respect for the healing properties of
          cannabis and whole foods, plant based diets, providing infused recipes
          and industry-related commentary.
        </p>
      </LeftImage>

      <RightImage
        featuredImage={dougBook}
        alt="Doug smiles and points to his most recent cookbook, The Classics Veganized, which won the 2021 Gourmand Award for Best Vegan Cookbook in the world. 
"
      >
        <h2>Author Of The “best” Vegetarian And Vegan Cookbooks</h2>
        <p>
          Chef McNish’s skills have been recognized across continents, and even
          on a global scale. Three of his four cookbooks, including best-selling
          publications{' '}
          <PageLink to="shop">
            Eat Raw, Eat Well, Vegan Everyday and The Classics Veganized
          </PageLink>
          , are recognized as being among the Best Vegetarian Cookbooks in the
          world, each earning the internationally acclaimed Gourmand Award in
          2012, 2015 and 2021, respectively. This great honour is granted to the
          most innovative and groundbreaking works published in over 175
          countries and regions, and Chef McNish is blown away with gratitude
          that he was chosen to receive the honour three times.{' '}
        </p>

        <p>
          In addition, Chef Doug is particularly proud of one career highlight,
          in which he was asked to develop the menu, organize the catering and
          oversee all kitchen operations during the{' '}
          <ExternalLink to="https://www.thegrowthop.com/cannabis-culture/doug-mcnish-goes-to-davos-to-curate-a-succulent-meal-that-is-entirely-plant-based-no-not-that-plant">
            2020 World Economic Forum in Davos, Switzerland
          </ExternalLink>
          . There, his gastronomic masterpieces were appreciated by hundreds of
          global dignitaries and decision-makers in a bid to call attention to
          sustainable lifestyle choices.
        </p>
      </RightImage>
      <Center>
        <Paragraph>
          <h2>World Class Chef, Consultant, Author, Activist</h2>

          <p>
            Now, as an Executive Vegan Chef, Restaurant Consultant, Media
            Personality and more with over 23 years of experience in the food
            and service industry, McNish has dedicated his career to helping the
            world harness the power of plants. In doing so, he hopes to use his
            knowledge, skills and passion to spread the message and cuisine of
            veganism, enriching as many lives, businesses and diets as possible.
          </p>

          <p>
            You can keep up with Doug online by following him @dougmcnish on
            <a
              href="https://twitter.com/dougmcnish?lang=en"
              target="_blank"
              rel="noreferrer"
            >
              Twitter
            </a>
            ,{' '}
            <a
              href="https://www.instagram.com/dougmcnish/?hl=en"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>{' '}
            and{' '}
            <a
              href="https://www.linkedin.com/in/douglas-mcnish-80002518/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>{' '}
            where he shares his ongoing projects, informative and inspiring
            content and his love for everything vegan and plant based cuisine.
          </p>

          <p>
            <PageLink
              to="shop"
              cover
              direction="down"
              bg="linear-gradient(139deg, rgba(158,55,1,1) 25%, rgba(148,16,0,1) 100%)"
            >
              Shop Doug’s award-winning cookbooks and recipe collection ebooks.
            </PageLink>
          </p>
          <LargeImage
            featuredImage={book}
            alt="Chef Doug McNish’s three latest cookbook, The Classics Veganized."
          />
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
  data: { page, aboutFeature, mission, dougShow, neonTiger, dougBook, book }
}) => {
  console.log(aboutFeature)
  return (
    <Layout meta={page.frontmatter.meta || false}>
      <AboutMePageTemplate
        {...page}
        {...page.frontmatter}
        body={page.html}
        featuredImage={aboutFeature.childImageSharp}
        mission={mission.childImageSharp}
        dougShow={dougShow.childImageSharp}
        neonTiger={neonTiger.childImageSharp}
        dougBook={dougBook.childImageSharp}
        book={book.childImageSharp}
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

    aboutFeature: file(
      relativePath: { eq: "Doug-Mcnish-About-featureImage.jpg" }
    ) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        gatsbyImageData
      }
    }
    mission: file(relativePath: { eq: "Doug-Mcnish-About-Mission.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        gatsbyImageData
      }
    }
    neonTiger: file(relativePath: { eq: "Doug-Mcnish-About-neonTiger.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        gatsbyImageData
      }
    }
    dougShow: file(relativePath: { eq: "dougShow.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        gatsbyImageData
      }
    }
    dougBook: file(relativePath: { eq: "Doug-Mcnish-About-Book.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        gatsbyImageData
      }
    }
    book: file(relativePath: { eq: "Doug-Mcnish-About-Book2.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        gatsbyImageData
      }
    }
  }
`

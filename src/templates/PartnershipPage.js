import React from 'react'

import { graphql } from 'gatsby'
import styled from 'styled-components'
import Content from '../components/Content'

import Layout from '../components/Global/Layout'
import ContentLayout from '../components/Global/ContentLayout'
import Paragraph from '../components/UI/Paragraph'
import { Egale } from '../assets/logos/egale'
import { ExternalLink, PageLink } from '../components/UI/PageLink'
import Button from '../components/UI/Button'

const ImageText = ({ src, alt, title, children }) => {
  return (
    <Container>
      {src && <Image src={src.src} alt={alt} objectFit="contain" />}

      <Paragraph subtitle={title}>{children}</Paragraph>
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  gap: 1rem;
  align-content: start;
`

const Image = styled.img`
  display: grid;
  width: auto;

  height: 100px;
`

// Export Template for use in CMS preview
export const PartnershipPageTemplate = ({
  title,
  evviva,
  gunnar,
  vegg,
  neonTiger
}) => (
  <ContentLayout noTop>
    <Content />
    <Paragraph title={title}>
      <p>
        As a world class Executive Vegan Chef, Author, Activist, Father and
        International Consultant, Doug McNish is honoured to collaborate with
        many trailblazing brands around the world in his mission to bring plant
        based cuisine and the vegan lifestyle to the masses. He is passionate
        about helping progressive brands in the food and hospitality industry
        break barriers and achieve success with his award-winning vegan recipes
        and decades of highly sought after culinary business expertise. Chef
        Doug McNish is especially grateful to the following brands, not only for
        their strategic partnerships, but for their corporate ethics and
        leadership in making plant based food and veganism more accessible to
        the public.
      </p>
    </Paragraph>
    <Info>
      <ImageText
        src={neonTiger.fluid}
        alt="neon tiger logo"
        title="Neon Tiger:
      Charleston’s Best New Restaurant Is Also It’s First Vegan Cocktail Bar"
      >
        <p>
          In 2020, Doug partnered with John Adamson to launch Charleston,
          <a
            href="https://charlestoncitypaper.com/vegan-restaurant-neon-tiger-opens-on-king-street-with-plant-based-drinks-pizzas-and-a-look-into-the-future/?oid=32088400"
            target="_blank"
            rel="noreferrer"
          >
            South Carolina’s first vegan restaurant
          </a>
          , a futuristic cocktail bar called Neon Tiger, set in the dystopian
          year 2048. With their shared passion for veganism, Doug and John’s
          close collaboration quickly proved to be a successful match as
          <a href="https://neontiger.com/" target="_blank" rel="noreferrer">
            Neon Tiger
          </a>
          was awarded the title of Best New Restaurant in all of Charleston by
          its community, beating their conventional culinary counterparts.
        </p>
        <p>
          Chef McNish spent a great deal of time developing and perfecting many
          unique vegan recipes for Neon Tiger’s menu, which pair beautifully
          with the array of incredible superfood cocktails also offered. He is
          particularly proud of the King Trumpet Calamari and Fromaggio and
          Champignon Pizza, which quickly became some of the most popular menu
          items.
        </p>
        <p>
          Despite being the first fully vegan establishment in Charleston, Chef
          Doug McNish says that “the public reception has been fantastic… more
          than half of the people who walk through the door are not even vegan”,
          proving that plant-powered cuisine is for everyone. Doug is honoured
          to have played an integral part in bringing vegan cuisine to the
          historic city of Charleston, South Carolina, and is eternally grateful
          to Adam, the Neon Tiger team and the local community for their
          kindness, generosity and support.
        </p>
      </ImageText>
      <ImageText
        src={evviva.fluid}
        alt="evvia logo"
        title="Evviva: Bringing Vegan
      Brunch and Classic Breakfast Foods to the Masses"
      >
        <p>
          As an experienced restaurateur and menu developer, Chef McNish was
          thrilled to partner with Evviva Breakfast and Lunch, an established
          restaurant chain with locations in Toronto and Vaughan, Ontario, (with
          more locations soon to launch!) to expand their brunch menu to include
          several tantalizing vegan takes on some of their most popular menu
          items in order to meet the needs of their customers. Evviva’s owners
          reached out to Chef McNish for his expertise in vegan recipe
          development and restaurant consulting in response to the growing
          requests by their customers to offer more plant based breakfast and
          lunch options.
        </p>
        <p>
          Ever since Evviva made the smart decision to listen to their
          customers, the brand’s local reputation has rapidly increased thanks
          to the massive popularity of their new vegan menu. On the morning of
          the vegan menu’s highly anticipated launch, dozens of people lined the
          streets waiting for their turn to order veganized versions of their
          favourite classic brunch and lunch dishes. Now, Chef Doug McNish’s
          plant powered recipes have become a staple in the Toronto brunch
          scene, putting Evviva on the map. Now, hundreds of people per day can
          experience such gastronomic masterpieces as his famous vegan Eggs
          Benedict, complete with runny yoke, and his mouth watering Reuban
          sandwich.
        </p>
        <p>
          Doug greatly appreciates Evviva for giving him the opportunity to
          adapt their business model, making vegan breakfast and brunch food
          more accessible to their customers across the Greater Toronto Area.
          Last but not least, he is very excited about their recent plans for
          expansion and the future collaborations it will bring as they continue
          to give more vegan comfort food options to the public.
        </p>
      </ImageText>
      <ImageText
        src={gunnar.fluid}
        alt="gunnar logo"
        title="GunnarMade, Health and
      Fitness Coach"
      >
        <p>
          Executive Vegan Chef Doug McNish has worked in the world of plant
          based whole foods for decades, so he’s proud to partner with Gunnar
          Made in his mission to nourish as many people as possible with healthy
          vegan meals. Based in Charleston, South Carolina, Gunnar Made is a
          health and fitness coach who specializes in creating nutritional and
          exercise programs that cater to each of his client's individual needs
          and strengths.
        </p>
        <p>
          Chef McNish has teamed up with Gunnar Made to offer a Whole Food Plant
          Based Meal Prep delivery service that utilizes Doug’s extensive
          knowledge of plant based whole foods and the limitless benefits they
          can offer our mind and bodies. With their combined expertise and
          talents, Chef McNish and Gunnar Made aim to teach as many people as
          possible about how they can improve their energy, gut health, immune
          system and more by following a whole foods plant based diet.
        </p>
      </ImageText>

      <ImageText
        src={vegg.fluid}
        alt="vegg logo"
        title="Vegg: Making Veganism Go
      Global"
      >
        <p>
          Before partnering with Vegg, Award-winning Gastronomer and Vegan Chef
          Doug McNish spent years perfecting his own vegan egg recipe. Now, Doug
          has worked with The Vegg to spread the cuisine and ethics of veganism
          throughout kitchens and establishments across North America, Australia
          and Europe in their shared mission to make plant based food and the
          vegan lifestyle more accessible to all.
        </p>
        <p>
          As a longtime supporter of Vegg, Doug is proud to work with an ethical
          company that understands the importance of infusing their business
          model and corporate culture with the values of compassion, ethics and
          environmentalism. With the help of Vegg and their plant based egg
          products, Chef Doug has been able to scale his vegan meal production
          exponentially, allowing him to bring all kinds of delicious plant
          based recipes to plant addicts and plant-curious foodies around the
          world.
        </p>
        <p>
          With the global popularity of plant based diets and the vegan
          lifestyle continuing to rise daily with no signs of slowing down, Doug
          is grateful to work with such a progressive brand as The Vegg.
          Together, they will help create a world where people don’t need to
          compromise their ethics for the sake of convenience, flavour or
          texture. Internationally acclaimed Executive Chef Doug McNish says, “I
          look forward to working with The Vegg for many years to come, bringing
          veganism to the masses around the world.”
        </p>
      </ImageText>
    </Info>
    <ImageText title="Eagle Canada: The Importance of Inclusivity and Human Rights Advocacy">
      <Egale />
      <p>
        Since he was 15 years old, Doug was raised in the kitchens of various
        bars and restaurants across Toronto, working his way from dishwasher to
        line cook and ultimately to head chef. Unfortunately, there came a time
        in his career when he realized that growing up in this aggressive
        environment had taught him more than just cooking skills.{' '}
      </p>

      <p>
        Today, Doug is a huge supporter and fan of{' '}
        <ExternalLink to="https://egale.ca/action/">Egale Canada</ExternalLink>{' '}
        and their work advocating for the rights of 2SLGBTQI people across the
        country by informing public policy and inspiring cultural change through
        education, research, awareness and more.
      </p>

      <p>
        Inspired by Egale’s important work, Chef Doug is doing his best to aid
        their mission of promoting human rights and equality by spreading the
        message of the importance of inclusivity throughout Canada’s restaurant
        industry. Read more about Egale Canada and how you can join Doug in
        supporting this life-saving cause by clicking the button below.
      </p>
      <PageLink to="egale">
        <Button>Eagle</Button>
      </PageLink>
    </ImageText>
  </ContentLayout>
)

const PartnershipPage = ({
  data: { page, vegg, gunnar, evviva, neonTiger }
}) => {
  return (
    <Layout
      meta={page.frontmatter.meta || false}
      title={page.frontmatter.title || false}
    >
      <PartnershipPageTemplate
        {...page.frontmatter}
        body={page.html}
        vegg={vegg.childImageSharp}
        gunnar={gunnar.childImageSharp}
        evviva={evviva.childImageSharp}
        neonTiger={neonTiger.childImageSharp}
      />
    </Layout>
  )
}

const Info = styled.div`
  display: grid;
  grid-gap: 4rem;

  @media screen and (min-width: 991px) {
    grid-template-columns: 1fr 1fr;
  }
`

export default PartnershipPage

export const pageQuery = graphql`
  query PartnershipPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      html

      frontmatter {
        title
        template
        subtitle
        featuredImage
      }
    }
    neonTiger: file(relativePath: { eq: "neontiger.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    evviva: file(relativePath: { eq: "evviva.png" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    gunnar: file(relativePath: { eq: "gunnar.png" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    vegg: file(relativePath: { eq: "vegg.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

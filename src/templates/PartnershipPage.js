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

const ImageText = ({ src, alt, title, to, children }) => {
  return (
    <Container>
      {src && (
        <ExternalLink to={to}>
          <Image src={src.src} alt={alt} objectFit="contain" />
        </ExternalLink>
      )}

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
const PartnershipPageTemplate = ({
  title,
  evviva,
  edgyvedge,
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
        to="https://neontiger.com/"
        t
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
          close collaboration quickly proved to be a successful match as{' '}
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
        to="https://evviva.ca/"
        t
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
        to="https://theedgyvedge.com/"
        src={edgyvedge.fluid}
        alt="edgyvedge logo"
        title="The Edgy Vedge: Bringing the Best of Plant Based to The Cayman Islands"
      >
        <p>
          Doug and the team behind{' '}
          <a href="https://theedgyvedge.com/" target="_blank" rel="noreferrer">
            The Edgy Vedge
          </a>{' '}
          first connected in the summer of 2021, instantly hit it off and
          decided to join forces over their shared love for all things vegan
          cuisine.{' '}
        </p>
        <p>
          Over the course of the next year, the team was able to work remotely
          through weekly zoom calls and spent countless hours preparing to build
          out and launch what is now one of Grand Cayman's first fully
          plant-based restaurants with a full service cocktail bar.
        </p>
        <p>
          Even though Grand Cayman is a small island of 70,000 people, it is
          widely known as the Culinary Capital of the Caribbean and The Edgy
          Vedge pulls no punches with its food, cocktails and kick ass service.
          With a full sit-down menu featuring an array of burgers, wraps, bowls,
          salads and other dishes like poutine, nachos and crispy crunchy
          cauliflower wings, The Edgy Vedge has established itself as one of the
          best plant-based culinary gastronomic destinations on the island.{' '}
        </p>
        <p>
          Because it is a combination of a restaurant and{' '}
          <a
            href="https://order.theedgyvedge.com/"
            target="_blank"
            rel="noreferrer"
          >
            deli-style marketplace
          </a>
          , diners can sit and enjoy their meal, and then take home their
          favorite signature proteins, dips and sauces, desserts, salads and
          more.{' '}
        </p>
        <p>
          Edgy and cool with comfort food and{' '}
          <a
            href="https://theedgyvedge.com/menus#drinks"
            target="_blank"
            rel="noreferrer"
          >
            zero-waste cocktails
          </a>{' '}
          the restaurant space is perfect for events, gatherings or nights out
          with friends.{' '}
        </p>
        <p>
          Also offering an{' '}
          <a
            href="https://order.theedgyvedge.com/"
            target="_blank"
            rel="noreferrer"
          >
            online ordering
          </a>{' '}
          feature to pre-order and pick up when in a rush.
        </p>
        <p>
          Doug has curated the most{' '}
          <a
            href="https://theedgyvedge.com/menus"
            target="_blank"
            rel="noreferrer"
          >
            incredible menu
          </a>{' '}
          for The Edgy Vedge and will work closely with the kitchen team to
          ensure quality and deliciousness is served. Every.Single.Time.
        </p>
      </ImageText>

      <ImageText
        src={vegg.fluid}
        to="https://thevegg.com/"
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
      <ExternalLink to="https://egale.ca/">
        <Egale />
      </ExternalLink>
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
        <Button>Egale</Button>
      </PageLink>
    </ImageText>
  </ContentLayout>
)

const PartnershipPage = ({
  data: { page, vegg, edgyvedge, evviva, neonTiger }
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
        edgyvedge={edgyvedge.childImageSharp}
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
    edgyvedge: file(relativePath: { eq: "edgyvedge.png" }) {
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

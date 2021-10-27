import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/Global/Layout'
import ContentLayout from '../components/Global/ContentLayout'
import TwoParagraph from '../components/Services/TwoParagraph'
import LeftImage from '../components/Services/LeftImage'
import RightImage from '../components/Services/RightImage'
import FourColumn from '../components/Services/FourColumn'
import TwoColumn from '../components/Services/TwoColumn'
import Paragraph from '../components/UI/Paragraph'
import { PageLink } from '../components/UI/PageLink'
import Button from '../components/UI/Button'

// Export Template for use in CMS preview
export const ServicePageTemplate = ({ photo, dinner, radisson, panise }) => {
  console.log(panise)
  return (
    <ContentLayout>
      <Paragraph title="PARTNER WITH CHEF DOUG MCNISH">
        <p>
          The world is evolving, and so should your business. Every day, more
          people are choosing to lead more ethical and sustainable lifestyles by
          adopting new habits and voting with their dollars.{' '}
        </p>
        <p>
          People are beginning to understand that plant based diets are not just
          better for farm animals and other earthlings, but also for our planet
          and our overall health. And no, it’s not just a trend.{' '}
        </p>

        <p>
          Society is finally embracing plant based diets, holistic healing and
          conscious consumerism and the impact is echoing through markets around
          the world. Brands that choose to evolve their business models now can
          capitalize on this seismic shift in social thought and consumer
          behaviour, centering themselves as leaders in the movement towards
          eco-conscious living.
        </p>

        <p>
          Globally acclaimed{' '}
          <PageLink to="aboutme">Executive Vegan Chef Doug McNish</PageLink>{' '}
          will help your emerging or established business evolve it’s products,
          services and operations so you can take advantage of this
          revolutionary opportunity to develop or diversify your revenue stream.
          Whether you are a self-proclaimed plant addict or plant sceptic, your
          business will benefit from offering more plant based and vegan options
          to your customers. When you decide to harness the power of plants and
          partner with Chef McNish, the growth of your business will be as
          simple, strategic and profitable as possible.{' '}
        </p>

        <p>
          Learn about some of{' '}
          <PageLink to="partnership">
            Chef Doug’s strategic partnerships and collaborations here.
          </PageLink>
        </p>
      </Paragraph>
      <FourColumn title="Food Services">
        <Paragraph subtitle="Menu Design and Development">
          <p>
            Whether you’re launching a new business and need a comprehensive
            menu designed from scratch or you’d like to diversify your existing
            menu to cater to a wider audience, Doug can execute your vision with
            his expert touch, on time and within budget. After an in-depth
            consultation to discuss your specific needs, goals and vision, Chef
            McNish will craft a customized menu full of his own unique and
            undeniably delicious recipes. What’s more, he will ensure that all
            the ingredients, time and preparation required to make your new menu
            a reality are fully accounted for through comprehensive food costing
            and sourcing within your budget. In addition to menu design and
            development, Chef Doug is an experienced food educator and can
            assist in any training that your BOH or FOH teams need to ensure
            that it will be executed properly on a daily basis, so your
            customers can come to expect the same tantalizing quality with every
            visit.
          </p>

          <PageLink to="contact">
            <Button>Contact Doug</Button>
          </PageLink>
        </Paragraph>
        <Paragraph subtitle="Kitchen Design and Functionality">
          <p>
            An often overlooked but absolutely crucial aspect of any food
            service business is understanding and organizing its kitchen
            operations. The functionality of the food you cook is just as
            important (if not more) as its quality. If you have an amazing
            recipe, but your kitchen isn’t equipped to handle the processes
            involved in consistently creating it en masse, then your recipe and
            the skills of your kitchen staff are useless.{' '}
          </p>

          <p>
            By partnering with Doug, you are teaming up with a dedicated and
            hands-on Executive Chef with tried and true methods and strategies
            that will save you time, money and hassle. Chef McNish is skilled in
            the art of kitchen set up, so your operations will be as efficient
            and profitable as possible. He has a passion for helping launch new
            food businesses, so even if you’re in the early stages of restaurant
            development, reach out for a consultation.{' '}
          </p>

          <PageLink to="contact">
            <Button>Contact Doug</Button>
          </PageLink>
        </Paragraph>
        <Paragraph subtitle="Supply Chain and Food Costing">
          <p>
            One of the most complicated and time-consuming demands related to
            any profitable food service business is the sourcing of products,
            setting up the supply chain and properly costing the final
            product(s).
          </p>

          <p>
            Through Doug's years of experience, he can support your business
            with a menu of cost-controlled systems and guidelines, ensuring that
            all the guesswork is taken out of the margins so you can always stay
            within your budget.
          </p>

          <p>
            His deliverables include a breakdown of fully executed turn-key
            supplier ordering sheets, inventory sheets and more. While this step
            is often neglected in the hubbub of launching a new business, every
            successful restaurant knows that it can not be ignored, and should
            be considered right from the start.
          </p>

          <PageLink to="contact">
            <Button>Contact Doug</Button>
          </PageLink>
        </Paragraph>
        <Paragraph subtitle="Equipment Ordering and Layout ">
          <p>
            Have you ever wanted to know what type of kitchen equipment is the
            best suited for your business, or even your home? What about the
            best way to lay it out in your existing, new, old, or soon-to-be new
            kitchen?
          </p>

          <p>
            Chef Doug knows how important the kitchen is to any dwelling, and he
            knows exactly how to ensure that it functions in the most efficient
            and profitable manner. Kitchen design should be considered an
            important and foundational building block for your business as you
            build your way to success.
          </p>

          <p>
            With Doug’s decades of professional food service experience, he will
            help you choose, purchase and implement the best equipment for your
            needs, goals and vision.
          </p>

          <PageLink to="contact">
            <Button>Contact Doug</Button>
          </PageLink>
        </Paragraph>
      </FourColumn>
      <RightImage featuredImage={radisson.fluid}>
        <Paragraph title="Hotel and Institutional Training">
          <p>
            Throughout Doug’s many years as a professional chef in the food
            service industry, he has immersed himself into the world of
            hospitality, partnering with boutique hotels and renowned chains
            both locally and globally.
          </p>

          <p>
            Doug has been a vital partner in implementing plant based menus
            across international hospitality destinations of every size and
            caliber. In addition to hotels, Doug is available for large-scale,
            institutional plant based consulting and training. Colleges,
            universities and other large food service operators have all
            benefited from Doug’s knowledge, passion and the skills that he
            passes down to his students and food service colleagues.
          </p>

          <PageLink to="contact">
            <Button>Contact Doug</Button>
          </PageLink>
        </Paragraph>
      </RightImage>
      <Single>
        <Paragraph title="Industrial and Large Scale Plant Based Recipe Development">
          <p>
            Doug is a skilled gastronomer, creating and designing recipes for
            all types of plant based products ranging from vegan meats and
            dairy-free cheeses, to sauces, dips, spreads, desserts and more.
            Areas of expertise include (but are not limited to) texturized
            vegetable protein based applications, various protein concentrates,
            hydrocolloid applications and other hybrid recipe concoctions. Doug
            is experienced in everything from early stage prototypes to large,
            scaled-up production, with a foundational understanding of food
            science.
          </p>

          <p>
            In addition, Chef McNish can lead clean-label and allergen-free
            recipe development, working with raw and organic whole foods. Doug
            is also a valuable resource to consult for all things ingredient
            sourcing, and can make recommendations on labels, nutrition panels
            and the functionality of foods.
          </p>
          <PageLink to="contact">
            <Button>Contact Doug</Button>
          </PageLink>
        </Paragraph>
      </Single>
      <FourColumn title="Private Services">
        <Paragraph subtitle="HIRE DOUG AS YOUR PRIVATE CHEF">
          <p>
            Have a special occasion coming up? Chef Doug and his team love
            providing personalized, memorable experiences for all occasions,
            creating customized menus serving clients in private home settings.
          </p>

          <p>
            Chef McNish is always a professional, providing friendly and
            customized meals, appetizers and more to single clients, couples or
            families both at home or abroad. Doug can create anything from raw
            living cuisine to vegan comfort food, catering to specialized diets
            like Gluten Free, Macrobiotic, allergy free and a wide variety of
            other dietary needs.
          </p>

          <p>
            For a fun and entertaining evening, Chef Doug can even turn your
            dining room into your own private cooking class! Contact him today
            for all your custom meal and menu development needs.
          </p>
          <PageLink to="contact">
            <Button>Contact Doug</Button>
          </PageLink>
        </Paragraph>
        <Paragraph subtitle="HIRE EXECUTIVE CHEF MCNISH FOR YOUR PRIVATE EVENTS">
          <p>
            Doug and his team are available to come to your home and entertain
            your guests for any type of event.
          </p>

          <p>
            If you’re planning a large event or fundraiser, Chef McNish can
            prepare you a plant based menu according to your needs and tastes,
            and even come train your kitchen staff to ensure its most delicious
            delivery to your guests.{' '}
          </p>

          <p>
            Whether you’re planning a lavish gala, an intimate evening at home,
            or a wine pairing fundraiser, Doug and his team can create and
            execute a masterpiece menu for you and your special guests.
          </p>
          <PageLink to="contact">
            <Button>Contact Doug</Button>
          </PageLink>
        </Paragraph>
        <Paragraph subtitle="PRIVATE MENU CONSULTATION AND RECIPE DEVELOPMENT">
          <p>
            Whether you already have staff in your kitchen, or you are looking
            to hire someone, Doug and his team are available to work with your
            team to implement vegan cuisine into your life.
          </p>

          <p>
            Chef McNish can come to you where you’re located and provide
            standardized recipes to suit any diet, with comprehension
            instructions in an organized physical and digital format. Hire Chef
            McNish to teach you or your staff how to re-create and execute his
            famous vegan meals, dips, snacks, sauces, dressings, salads,
            breakfasts, soups, desserts and more.
          </p>

          <p>
            Contact Chef Doug for your private menu development consultation,
            and elevate your event or business.
          </p>
          <PageLink to="contact">
            <Button>Contact Doug</Button>
          </PageLink>
        </Paragraph>
        <Paragraph subtitle="PRIVATE COOKING LESSONS AND DEMONSTRATIONS">
          <p>
            Doug is an experienced educator, and can come to your home to teach
            you or your staff all the proper skills, techniques and secrets of
            creating vegan cuisine.
          </p>
          <p>
            From raw living foods, to vegan comfort food, or gourmet whole food
            plant based recipes, Doug has passion for passing down his knowledge
            of plant based cuisine. Guaranteed, his private cooking lessons and
            demonstrations are beneficial for beginners as well as experienced
            chefs.
          </p>

          <p>
            If you’re looking to leap into the healthy vegan lifestyle or plant
            based diets, hire Executive Chef Doug McNish to teach you everything
            you’ll need to know, and guide you through this transformative
            journey.
          </p>
          <PageLink to="contact">
            <Button>Contact Doug</Button>
          </PageLink>
        </Paragraph>
      </FourColumn>
      <LeftImage featuredImage={photo.fluid}>
        <Paragraph title="PROFESSIONAL FOOD PHOTOGRAPHY AND PRESENTATION">
          <p>
            Throughout his decades of food business experience, Doug has
            received hands-on training with countless food photography projects,
            styling and preparing food for both television and online use.
          </p>

          <p>
            Chef McNish has a keen eye for light and texture, and a passion for
            the fine art of food photography. He will work with your or your
            team to develop and shoot vegan recipes out of his home studio in
            Toronto, or abroad. Together, you can promote, elevate and market
            your food business brand!
          </p>

          <p>
            Please note that during COVID-19 Doug is still travelling abroad and
            able to work with you or your team in virtually any country in the
            world.{' '}
          </p>
          <PageLink to="contact">
            <Button>Contact Doug</Button>
          </PageLink>
        </Paragraph>
      </LeftImage>
      <TwoColumn title="STRATEGIC PARTNERSHIP OPPORTUNITIES">
        <Paragraph subtitle="PUBLIC COOKING DEMONSTRATIONS">
          <p>
            Entertain, educate and inspire your audience by hiring Executive
            Chef Doug McNish to instruct a public cooking demonstration, passing
            on his professional kitchen and vegan cuisine tips and tricks. Doug
            will instruct and inspire your guests with his sense of humor and
            honest approach to kitchen wisdom and knowledge.
          </p>

          <p>
            From kale salads and superfood smoothies, to gourmet vegan comfort,
            Doug can transform and excite any audience to embrace eating (and
            living) in a more ethical way.
          </p>

          <p>
            Chef McNish has entertained and educated audiences across live
            television, corporate offices and health conferences around the
            world. Everyone benefits from learning more about plant based
            cooking, and Doug is always happy to respectfully answer any
            questions your audience may have.
          </p>
          <PageLink to="contact">
            <Button>Contact Doug</Button>
          </PageLink>
        </Paragraph>
        <Paragraph subtitle="VIRTUAL COOKING CLASSES AND DEMONSTRATIONS">
          <p>
            Doug is available to travel internationally, but virtual cooking
            classes and vegan cuisine demonstrations can be just as educational!
            Entertain and inspire your audience by hiring Doug to instruct a
            public cooking demonstration while projected onto a big screen, so
            your team can learn all his kitchen and vegan cuisine pointers.{' '}
          </p>

          <p>
            Chef McNish has entertained and educated audiences across live
            television, corporate offices and health conferences around the
            world, in person and virtually. Everyone benefits from learning more
            about plant based cooking, and Doug is always happy to respectfully
            answer any questions your audience may have about plant based
            cuisine and the vegan lifestyle.
          </p>
          <PageLink to="contact">
            <Button>Contact Doug</Button>
          </PageLink>
        </Paragraph>
      </TwoColumn>

      <TwoParagraph featuredImage={panise.fluid}>
        <Paragraph subtitle="STRATEGIC PARTNERSHIP AND AND CO-BRANDING">
          <p>
            Do you have an exciting new plant based product that is about to
            launch? Or, do you already have an existing product but are looking
            to stir up some fresh, new buzz? Partnering the Doug McNish brand is
            a strategic marketing and advertising tactic, helping us both to
            reach a wider audience and more success.
          </p>

          <p>
            Working with Doug is an effective marketing move that can build your
            brand, boost brand awareness, and allow you to break into new
            markets. Doug is committed to making this a win-win situation for
            all parties involved.
          </p>

          <p>
            Reach out to Doug for a free consultation, and let’s grow together!
          </p>
          <PageLink to="contact">
            <Button>Contact Doug</Button>
          </PageLink>
        </Paragraph>
        <Paragraph subtitle="BRAND REPRESENTATION">
          <p>
            Whether you are looking for representation at a trade show, online,
            television or more, Chef Doug can elevate your brand and cement it’s
            authority in the vegan market as well as in the minds of
            plant-forward customers.{' '}
          </p>

          <p>
            Through his years of dedicated hard work and business acumen, Doug
            has cultivated an understanding of retail trends and consumer
            demands in the vegan market, and wants to help progressive vegan
            food businesses reach success.
          </p>

          <p>
            Doug will work with you to determine the best advertising and social
            marketing strategy throughout online, print and television outlets
            so you can secure meaningful revenue for years to come.
          </p>
          <PageLink to="contact">
            <Button>Contact Doug</Button>
          </PageLink>
        </Paragraph>
      </TwoParagraph>
    </ContentLayout>
  )
}

const Single = styled.div`
  max-width: 600px;
  display: grid;
  align-self: center;
  margin: auto;
`

// Export Default ServicePage for front-end
const ServicePage = ({ data: { page, photo, dinner, radisson, panise } }) => {
  return (
    <Layout meta={page.frontmatter.meta || false}>
      <ServicePageTemplate
        {...page}
        {...page.frontmatter}
        body={page.html}
        photo={photo.childImageSharp}
        dinner={dinner.childImageSharp}
        radisson={radisson.childImageSharp}
        panise={panise.childImageSharp}
      />
    </Layout>
  )
}

export default ServicePage

export const pageQuery = graphql`
  ## Query for ServicePage data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query ServicePage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      html
      frontmatter {
        title
        subtitle
        featuredImage
        accordion {
          title
          content
        }
      }
    }

    photo: file(relativePath: { eq: "photo.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    dinner: file(relativePath: { eq: "dinner.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    radisson: file(relativePath: { eq: "radisson.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    panise: file(relativePath: { eq: "panise.jpg" }) {
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

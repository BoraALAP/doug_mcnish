import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/Global/Layout'
import ContentLayout from '../components/Global/ContentLayout'
import TwoParagraph from '../components/Services/TwoParagraph'
// import TwoColumn from '../components/Services/TwoColumn'
import LeftImage from '../components/Services/LeftImage'
import RightImage from '../components/Services/RightImage'
import FourColumn from '../components/Services/FourColumn'
import ThreeColumn from '../components/Services/ThreeColumn'
import Paragraph from '../components/UI/Paragraph'

// Export Template for use in CMS preview
export const ServicePageTemplate = ({ photo, dinner, social }) => {
  return (
    <ContentLayout>
      <Paragraph title="Services">
        <p>
          The world is evolving, and so should your business. Every day, more
          people are choosing to lead more ethical and sustainable lifestyles by
          adopting new habits and voting with their dollars. People are
          beginning to understand that plant based diets are not just better for
          farm animals and other earthlings, but also for our planet and our
          overall health. And no, it’s not just a trend.
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
          Globally acclaimed Executive Vegan Chef Doug McNish will help your
          emerging or established business evolve it’s products, services and
          operations so you can take advantage of this revolutionary opportunity
          to develop or diversify your revenue stream. Whether you are a
          self-proclaimed plant addict or plant skeptic, your business will
          benefit from offering more plant based and vegan options to your
          customers. When you decide to harness the power of plants and partner
          with Chef McNish, the growth of your business will be as simple,
          strategic and profitable as possible.
        </p>
      </Paragraph>

      <FourColumn title="Food Services">
        <Paragraph subtitle="Menu Design and Development">
          <p>
            Whether you’re launching a new business and need a comprehensive
            menu designed from scratch or you’d like to diversify your existing
            menu to cater to a wider audience, Doug can execute your vision with
            his expert touch, on time and within budget.
          </p>
          <p>
            After an in-depth consultation to discuss your specific needs, goals
            and vision, Chef McNish will craft a customized menu full of his own
            unique and undeniably delicious recipes. What’s more, he will ensure
            that all the ingredients, time and preparation required to make your
            new menu a reality are fully accounted for through comprehensive
            food costing and sourcing within your budget.
          </p>
          <p>
            In addition to menu design and development, Chef Doug is an
            experienced food educator and can assist in any training that your
            BOH or FOH teams need to ensure that it will be executed properly on
            a daily basis, so your customers can come to expect the same
            tantalizing quality with every visit.
          </p>
          <p>
            Please <a href="mailto: chef@dougmcnish.com">click here to book</a>a
            time to discuss your menu needs with Doug's team
          </p>
        </Paragraph>
        <Paragraph subtitle="Kitchen Design and Functionality">
          <p>
            An often overlooked but absolutely crucial aspect of any food
            service business is understanding and organizing its kitchen
            operations. The functionality of the food you cook is just as
            important (if not more) as its quality. If you have an amazing
            recipe, but your kitchen isn’t equipped to handle the processes
            involved in consistently creating it en masse, then your recipe and
            the skills of your kitchen staff are useless.
          </p>
          <p>
            By partnering with Doug, you are teaming up with a dedicated and
            hands-on Executive Chef with tried and true methods and strategies
            that will save you time, money and hassle. Chef McNish is skilled in
            the art of kitchen set up, so your operations will be as efficient
            and profitable as possible. He has a passion for helping launch new
            food businesses, so even if you’re in the early stages of restaurant
            development, reach out for a consultation.
          </p>

          <p>
            Please <a href="mailto: chef@dougmcnish.com">click here to book</a>a
            time to discuss your kitchen functionality needs with Doug's team
          </p>
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

          <p>
            Please <a href="mailto: chef@dougmcnish.com">click here to book</a>a
            time to discuss your supply chain and food costing needs with Doug's
            team.
          </p>
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

          <p>
            Please <a href="mailto: chef@dougmcnish.com">click here to book</a>a
            time to discuss your kitchen equipment and layout needs with Doug's
            team.
          </p>
        </Paragraph>
      </FourColumn>
      <RightImage featuredImage={social.fluid}>
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

          <p>
            <a href="mailto: chef@dougmcnish.com">
              Reach out to Doug and his team here
            </a>
            to book a consultation.
          </p>
        </Paragraph>
      </RightImage>
      <Single>
        <Paragraph title="Industrial and Large Scale Plant Based Recipe Development">
          <p>
            Looking to enter the fast-growing and ever-changing Plant Based
            Marketplace but not sure where to start? Or, do you have a promising
            idea for a product and need further guidance to turn it into a
            reality?
          </p>

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

          <p>
            From iteration to final product, Doug is able to help you and your
            team bring your concept from dream to shelf with expertise and
            precision.
          </p>
        </Paragraph>
      </Single>
      <ThreeColumn title="Private Services">
        <Paragraph subtitle="Private Chef">
          <p>
            Doug and his team are experienced at creating customized menus for
            clients in private home settings.
          </p>
          <p>
            Doug and his team are able to prepare meals for single clients,
            couples or families both at home or abroad.
          </p>
          <p>
            Taking the time to listen to your personal needs, Doug and his team
            can create raw living cuisine, vegan comfort food, Gluten Free,
            macrobiotic or, an extensive menu to cater to a wide variety of
            other dietary needs.
          </p>
          <p>
            Whether every day, every other day, weekly or, even monthly,
            <a href="mailto: chef@dougmcnish.com">contact Doug and his team</a>
            now to see if there is a plan and schedule that best suits your busy
            lifestyle.
          </p>
        </Paragraph>
        <Paragraph subtitle="Private Events">
          <p>
            Doug and his team are available to come to your home and entertain
            your guests for any type of event.
          </p>
          <p>
            Whether a lavish gala, an intimate evening at home, or a wine
            pairing fundraiser, Doug and his team can create and execute a
            masterpiece menu for you and yours.
          </p>
          <p>
            In addition to large private events, Doug and his team are available
            to turn your dining room into your own private cooking class!
          </p>
          <p>
            <a href="mailto: chef@dougmcnish.com">
              Contact Doug and his team now
            </a>
            for in home private dining events!
          </p>
        </Paragraph>
        <Paragraph subtitle="Private Menu Consultation">
          <p>
            Whether you already have staff in your kitchen, or you are looking
            to hire someone, Doug and his team are available to work with your
            team to help implement vegan cuisine into your life.
          </p>
          <p>
            Doug and his team can be available to come to your home, provide
            standardized, easy to follow recipes in binder format, and teach
            staff how to re-create and execute his vegan meals, dips, snacks,
            sauces, dressings, salads, breakfasts, soups, desserts etc.
          </p>
          <p>
            <a href="mailto: chef@dougmcnish.com">
              Contact Doug and his team now
            </a>
            for private at home or at office consultation
          </p>
        </Paragraph>
      </ThreeColumn>
      <LeftImage featuredImage={photo.fluid}>
        <Paragraph title="Food Photography and Recipe Development + Representation ">
          <p>
            Most brands need online content these days, but don't know where to
            start. Doug is able to use his years of culinary experience, and
            recipe development, and utilize those with his new found love of
            food photography to help promote, elevate and market your brand!
          </p>
          <p>
            Over the years Doug has received hands-on training with countless
            food photography projects, as well as styling and preparing food for
            both television and online use.
          </p>
          <p>
            Doug has been able to attain a key eye for light and texture and
            tackle the art of food photography. He is able to work with your or
            your team to develop and shoot vegan recipes out of his home studio
            in Toronto, or abroad.
          </p>
          <p>
            Please note that during COVID-19 Doug is still travelling abroad and
            able to work with you or your team in virtually any country in the
            world. To book a meeting with his team please
            <a href="mailto: chef@dougmcnish.com">click here</a>
          </p>
        </Paragraph>
      </LeftImage>
      <ThreeColumn title="Cooking Demos">
        <Paragraph subtitle="Private Demos">
          <p>
            Doug is available to come to your home and teach you, or your staff,
            the proper skills, techniques and secrets of creating vegan cuisine.
          </p>
          <p>
            From raw living foods, to comfort vegan, or whole food plant based,
            Doug’s skilled teachings are not only beneficial for the novice
            cook, but the seasoned chef as well.
          </p>
          <p>
            From stocking shelves, shopping for ingredients to final
            preparation, Doug will teach you the ins and outs of taking that
            next step to living a vegan lifestyle!
          </p>
          <p>
            To schedule a time to speak with Doug's team about having him come
            to your home <a href="mailto: chef@dougmcnish.com">click here</a>.
          </p>
        </Paragraph>
        <Paragraph subtitle="Public Demos">
          <p>
            Interested in entertaining your audience while they learn beneficial
            kitchen tips and vegan cuisine? Doug will instruct and inspire your
            guests with his sense of humor and honest approach to kitchen wisdom
            and knowledge.
          </p>
          <p>
            From kale salads and superfood smoothies, to gourmet vegan comfort,
            Doug can help transform and inspire your group to embrace eating
            (and living) in an ethical way.
          </p>

          <p>
            Whether large corporate, or in an intimate office space, he is
            perfect to hire as an inspirational teacher for both ethical, and
            healthy eating!
          </p>
          <p>
            To schedule a time to speak with Doug's team about having him teach
            your team, <a href="mailto: chef@dougmcnish.com">click here</a>.
          </p>
        </Paragraph>
        <Paragraph subtitle="Virtual Public Cooking Demo">
          <p>
            Interested in entertaining your audience virtually while they learn
            beneficial kitchen tips and vegan cuisine? Doug will instruct and
            inspire your guests with his sense of humor and honest approach to
            kitchen wisdom and knowledge.
          </p>
          <p>
            From kale salads and superfood smoothies, to gourmet vegan comfort,
            Doug can help transform and inspire your group to embrace eating
            (and living) in an ethical way.
          </p>
          <p>
            Whether large corporate, or in an intimate office space, he is
            perfect to hire as an inspirational teacher for both ethical, and
            healthy eating!
          </p>
          <p>
            To schedule a time to speak with Doug's team about having him teach
            your team, <a href="mailto: chef@dougmcnish.com">click here</a>.
          </p>
        </Paragraph>
      </ThreeColumn>
      <Single>
        <Paragraph title="Co-Branding">
          <p>
            Do you have an exciting new Vegan product that is about to launch
            into the existing market place? Or an existing product looking for
            some fresh, new word of mouth buzz? Partnering the Doug McNish brand
            with your brand is a strategic marketing and advertising partnership
            wherein the success of both of the respective brands aims to bring
            success to each other.
          </p>
          <p>
            Working with Doug will serve as an effective tool to build business,
            boost awareness, and break into new markets. Doug is committed to
            making this a win-win situation for all parties involved.
          </p>
          <p>
            <a href="mailto: chef@dougmcnish.com">Click here</a> to schedule a
            time to speak to the Doug McNish team about having Doug help you
            grow further with your business now!
          </p>
        </Paragraph>
      </Single>
      <TwoParagraph featuredImage={dinner.fluid}>
        <Paragraph title="Brand Representation">
          <p>
            Whether you are looking for representation at a trade show, online,
            television or more, Doug can take your brand and help elevate it in
            the mainstream market place.
          </p>
          <p>
            Through his years of dedicated hard work and business acumen, Doug
            has cultivated an understanding of retail trends and consumer
            demands in the Vegan market.
          </p>
          <p>
            Doug will work tirelessly one on one with you and your brand to help
            generate not only word of mouth buzz through online, print and
            television, but help to develop meaningful revenue for years to
            come.
          </p>

          <p>
            To schedule a time to speak with Doug's team about having him
            represent your brand
            <a href="mailto: chef@dougmcnish.com">click here</a>
          </p>
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
const ServicePage = ({ data: { page, photo, dinner, social } }) => {
  return (
    <Layout meta={page.frontmatter.meta || false}>
      <ServicePageTemplate
        {...page}
        {...page.frontmatter}
        body={page.html}
        photo={photo.childImageSharp}
        dinner={dinner.childImageSharp}
        social={social.childImageSharp}
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
    social: file(relativePath: { eq: "social.jpg" }) {
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

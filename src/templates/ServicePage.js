import React from 'react'
import { graphql } from 'gatsby'
// import styled from 'styled-components'

import Layout from '../components/Global/Layout'
import ContentLayout from '../components/Global/ContentLayout'
import TwoParagraph from '../components/Services/TwoParagraph'
import TwoColumn from '../components/Services/TwoColumn'
import LeftImage from '../components/Services/LeftImage'
import RightImage from '../components/Services/RightImage'
import FourColumn from '../components/Services/FourColumn'
import ThreeColumn from '../components/Services/ThreeColumn'
import Paragraph from '../components/UI/Paragraph'

// Export Template for use in CMS preview
export const ServicePageTemplate = ({ photo, dinner, social }) => {
  return (
    <ContentLayout>
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
        </Paragraph>

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
        </Paragraph>
      </TwoParagraph>
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
            world. To book a meeting with his team please click here
          </p>
        </Paragraph>
      </LeftImage>
      <FourColumn title="Food Services">
        <Paragraph subtitle="Menu Design and Development">
          <p>
            <p>
              Whether you are just opening, or you would like to revitalize your
              existing menu, Doug can execute on time and on budget.
            </p>
            <p>
              Utilizing current technique, and on trend industry recipes, he
              will deliver a fully executable menu based on your specific needs.
            </p>
            <p>
              In addition to development, he can assist in instructing you and
              your team on proper execution daily, ensuring your customers
              receive the same final product each and every time they visit your
              business!
            </p>
          </p>
        </Paragraph>
        <Paragraph subtitle="Kitchen Design and Functionality">
          <p>
            One of the most complicated and difficult to manage aspects of any
            food service business is the kitchen. Just as important (if not
            more) as the food you cook, is the functionality of it.
          </p>
          <p>
            By hiring Doug, you are bringing on board a dedicated and hands on
            Executive Chef with working methods to help you save time, money and
            hassle.
          </p>
          <p>
            By bringing Doug on board from day one, he can help make the ease of
            designing a kitchen space more efficient and profitable.
          </p>
          <p>
            Finally, Doug can take a hands on approach and help show each member
            of your staff how (and where) to store all kitchen items such as
            pots and pans, bottles and all other kitchen equipment.
          </p>
        </Paragraph>
        <Paragraph subtitle="Supply Chain and Food Costing">
          <p>
            One of the most important, and time consuming aspects of any food
            service business, are the sourcing of products, setting up the
            supply chain and properly costing the final product(s).
          </p>
          <p>
            Through Doug's years of experience, he can support your business
            with a menu of cost controlled systems and guidelines, helping to
            ensure the guesswork is taken out of margins and hard costs.
          </p>
          <p>
            His deliverables can include a breakdown of fully executed turn key
            supplier ordering sheets, inventory sheets and more. This step is
            necessary for success in any food service business and often
            neglected.
          </p>
        </Paragraph>
        <Paragraph subtitle="Equipment Ordering and Layout ">
          <p>
            Have you ever wanted to know what type of kitchen equipment is the
            best suited for your business, or even your home? What about the
            best way to lay it out in your existing, new, old, or soon to be new
            kitchen?
          </p>
          <p>
            Doug will take the time to make it function in the most efficient
            and profitable manner, helping you on your way to success.
          </p>
          <p>
            With Doug’s years of professional food service experience, he will
            work to help you purchase and fit the best equipment for you and
            your business or home.
          </p>
        </Paragraph>
      </FourColumn>
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
            Whether every day, every other day, weekly or, even monthly, contact
            Doug and his team now to see if there is a plan and schedule that
            best suits your busy lifestyle.
          </p>
        </Paragraph>
        <Paragraph subtitle="Private Events">
          <p>
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
              In addition to large private events, Doug and his team are
              available to turn your dining room into your own private cooking
              class!
            </p>
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
        </Paragraph>
      </ThreeColumn>
      <RightImage featuredImage={social.fluid}>
        <Paragraph title="Hotel and Institutional Training">
          <p>
            With Doug's 20+ years in the food service industry, he has immersed
            himself into hotel brands and chains both locally and globally.
          </p>

          <p>
            From small 5 star boutique hotels, to large industrial hotels, Doug
            has been a vital partner in implementing plant based menus in
            international destinations across the world.
          </p>

          <p>
            In addition to hotels, Doug is available for large scale
            institutional plant based consulting. Colleges, universities and
            other large food service operators have all benefited from Doug’s
            knowledge and dedication to plant based cuisine.
          </p>
        </Paragraph>
      </RightImage>
      <TwoColumn>
        <Paragraph subtitle="Corporate Lunch + Learn">
          <p>
            Whether to a crowd of 5 or 5000, Doug can motivate and teach the art
            of vegan cuisine in the workplace.
          </p>
          <p>
            Chef McNish knows first hand the benefits of changing your diet to
            improve productivity and success. Paired with a Certified Plant
            Based Nutritionist, you or your team will be given the tools you
            need to change your diet and life. A healthier workforce is a more
            productive one afterall!
          </p>
        </Paragraph>
        <Paragraph subtitle="Public Speaking">
          <p>
            During his career, Doug has brought his energy and enthusiasm to a
            vast array of public forums.
          </p>
          <p>
            Whether it’s speaking to thousands of fellow vegans in Hawaii,
            taking the stage at LA Green Living Festival, giving cooking demos
            in NYC, North Carolina, on television, to hundreds of industry
            professionals, or an auditorium of elementary school children, Doug
            will uplift and inspire any audience. His signature cooking demos
            are part teaching, part humor and part inspiration!
          </p>
        </Paragraph>
      </TwoColumn>
    </ContentLayout>
  )
}

// Export Default ServicePage for front-end
const ServicePage = ({ data: { page, photo, dinner, social } }) => {
  console.log(page.frontmatter.meta)
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

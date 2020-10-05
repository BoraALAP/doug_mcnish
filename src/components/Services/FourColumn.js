import React from 'react'
import styled from 'styled-components'
import Paragraph, {Title} from '../UI/Paragraph'

const FourColumn = props => { 
  return (
    <Container>
       <Title>Cooking Demos</Title>
      <Content>
        <Paragraph subtitle="Menu Design and Development">
          <p>
          Whether you are just opening, or you would like to revitalize your existing menu, Doug can execute on time and on budget.  Utilizing current technique, and on trend industry recipes, he will deliver a fully executable menu based on your specific needs.  In addition to development, he can assist in instructing you and your team on proper execution daily, ensuring your customers receive the same final product each and every time they visit your business! 
          </p>
        </Paragraph>
        <Paragraph subtitle="Kitchen Design and Functionality">
          <p>
          One of the most complicated and difficult to manage aspects of any food service business is the kitchen.  Just as important (if not more) as the food you cook, is the functionality of it.  By hiring Doug, you are bringing on board a dedicated and hands on Executive Chef with working methods to help you save time, money and hassle.  By bringing Doug on board from day one, he can help make the ease of designing a kitchen space more efficient and profitable.   Finally, Doug can take a hands on approach and help show each member of your staff how (and where) to place the pots and pans, bottles and other various items.  
          </p>
        </Paragraph>
        <Paragraph subtitle="Food Costing and Supply Chain">
          <p>
          One of the most important, and time consuming aspects of any food service business, are the sourcing of products, setting up the supply chain and properly costing the final product(s).  Through Doug's years of experience, he can support your business with a menu of cost controlled systems and guidelines, helping to ensure the guesswork is taken out of margins and hard costs.  His deliverables can include a breakdown of fully executed turn key supplier ordering sheets, inventory sheets and more.  This step is necessary for success in any food service business and often neglected. 
          </p>
        </Paragraph>
        <Paragraph subtitle="Equipment Ordering and Layout ">
          <p>
          Have you ever wanted to know what type of kitchen equipment is the best suited for your business, or even your home?  What about the best way to lay it out in your existing, new, old, or soon to be new kitchen?  Doug will take the time to make it function in the most efficient and profitable manner, helping you on your way to success.  With Doug’s years of professional food service experience, he will work to help to you purchase and fit the best equipment for you. 
          </p>
        </Paragraph>
      </Content>
      
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  
`

const Content = styled.div`
  display: grid;
  grid-auto-flow: row;
  align-items: start;
  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`


export default FourColumn

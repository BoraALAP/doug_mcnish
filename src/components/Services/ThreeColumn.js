import React from 'react'
import styled from 'styled-components'
import Paragraph, {Title} from '../UI/Paragraph'

const ThreeColumn = props => { 
  return (
    <Container>
      <Title>Private Services</Title>
      <Content>
        <Paragraph subtitle="Private Chef">
          <p>
          Doug is experienced at creating customized menus for clients in private home settings. Doug is able to prepare meals for single clients, couple or families. Taking the time to listen to your personal needs, Doug can create raw living cuisine, vegan comfort food, Gluten Free, macrobiotic or, an extensive menu to cater to a wide variety of other dietary needs.  Whether every day, every other day, weekly or, even monthly, contact Doug now to see if there is a plan and schedule that best suits your busy lifestyle.
          </p>
        </Paragraph>
        <Paragraph subtitle="Private Events">
          <p>
          Doug is available to come to your home and entertain your guests for any type of event.  Whether a five course gala, a three course a romantic evening, or a wine pairing fundraiser,  Doug can create and execute a masterpiece menu for you and yours. In addition to large private events, Doug is available to turn your dining room into your own private cooking class! 
          </p>
        </Paragraph>
        <Paragraph subtitle="Private Menu Consultation">
          <p>
          Whether you have staff in your kitchen preparing meals, or you are looking to hire someone, Doug is available to work with your team to help implement vegan cuisine into your life.  Doug can be available to come to your home, provide standardized, easy to follow recipes in binder format, and teach staff how to re-create and execute his vegan meals, dips, snacks, sauces, dressings, salads, breakfasts, soups, desserts etc.  
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
  grid-auto-flow:row;
  align-items: start;
  @media screen and (min-width: 768px) {
    grid-auto-flow:column;
    grid-template-columns: 1fr 1fr 1fr;
    
  }
  
`


export default ThreeColumn

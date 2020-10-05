import React from 'react'
import styled from 'styled-components'
import Paragraph from './element/Paragraph'

const TwoColumn = props => { 
  return (
    <Container>
     <Title>Food Services</Title>
      <Content>
        <Paragraph subtitle="Private Demos">
          <p>
            Doug is available to come to your home and teach you, or your staff,
            the proper skills, techniques and secrets of creating vegan cuisine.
            From raw living foods, to comfort vegan, and whole plant based low
            oil, Doug’s skilled teachings are not only beneficial for the novice
            cook, but the seasoned chef as well. From stocking shelves, shopping
            for ingredients to final preparation, Doug will teach you the ins
            and outs of taking that next step to living a vegan lifestyle!
          </p>
        </Paragraph>
        <Paragraph subtitle="Public Demos">
          <p>
            Interested in entertaining your audience while they learn beneficial
            kitchen tips and vegan cuisine? Doug will instruct and inspire your
            guests with his sense of humor and honest approach to kitchen wisdom
            and knowledge. From kale salads and superfood smoothies, to gourmet
            vegan comfort, Doug can help transform and inspire your group to
            embrace eating (and living) in an ethical way. Whether large
            corporate or in an intimate office space, he is perfect to hire as
            an inspirational teacher for both ethcial, and healthy eating!{' '}
          </p>
        </Paragraph>
      </Content>
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  grid-gap: 1.5em;
  
`

const Content = styled.div`
  display: grid;
  grid-auto-flow:column;
  grid-template-columns: 1fr 1fr;
`

const Title = styled.h1``

export default TwoColumn

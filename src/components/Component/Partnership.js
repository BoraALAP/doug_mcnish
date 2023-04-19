import React from 'react'
import styled from 'styled-components'
import { GatsbyImage } from 'gatsby-plugin-image'

const Partnership = ({ partner1, partner2, partner3 }) => {
  return (
    <Container>
      <h2> Partnership </h2>
      <Logos>
        <GatsbyImageS
          fixed={partner1}
          // objectFit="cover"
          objectPosition="50% 50%"
          alt=""
        />
        <GatsbyImageS
          fixed={partner2}
          // objectFit="cover"
          objectPosition="50% 50%"
          alt=""
        />
        <GatsbyImageS
          fixed={partner3}
          // objectFit="cover"
          objectPosition="50% 50%"
          alt=""
        />
      </Logos>
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  justify-items: center;
  grid-gap: 2rem;
  h2 {
    margin: 0;
  }
`

const Logos = styled.div`
  display: grid;
  grid-auto-flow: row;
  justify-content: center;
  justify-items: center;
  grid-gap: 2rem;

  @media screen and (min-width: 768px) {
    grid-auto-flow: column;
  }
`

const GatsbyImageS = styled(GatsbyImage)`
  height: 40px;
`

export default Partnership

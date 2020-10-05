import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

const Hashtag = ({ featuredImage }) => {
  return (
    <Container>
      <Left>
        <Img
          fluid={featuredImage}
          objectFit="cover"
          objectPosition="50% 50%"
          alt=""
        />
      </Left>
      <Right>
        <h2>#kaleisthenewbeef</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
          vulputate mauris id euismod rutrum. Suspendisse interdum sapien sed
          elementum commodo.
        </p>
      </Right>
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  grid-auto-flow: row;
  justify-content: center;
  align-items: end;
  justify-items: center;
  @media screen and (min-width: 768px) {
    grid-auto-flow: column;
  }
`
const Left = styled.div`
  display: grid;
  width: 80%;
  height: 80%;

  @media screen and (min-width: 768px) {
    height: 32vw;
    width: 32vw;
  }
`

const Right = styled.div`
  display: grid;
  background: ${({ theme }) => theme.color.goldGradient};
  padding: 2rem;
  width: fit-content;
  grid-gap: 1rem;
  z-index: 20;
  h2,
  p {
    color: ${({ theme }) => theme.color.positive};
    margin: 0;
  }

  @media screen and (min-width: 768px) {
    margin-left: -64px;
    margin-bottom: 64px;
    max-width: 31rem;
  }
`

export default Hashtag

import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import Button from '../UI/Button'
import Paragraph from '../UI/Paragraph'

const HomeAbout = ({ featuredImage }) => {
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
        <Paragraph title="About Doug Mcnish" >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            vulputate mauris id euismod rutrum. Suspendisse interdum sapien sed
            elementum commodo. Phasellus eu varius arcu. Nunc vel vulputate
            augue. Class aptent taciti sociosqu ad litora torquent per conubia
            nostra, per inceptos himenaeos.
          </p>

          <p>
            Nam pulvinar erat nec lectus porttitor aliquet. Fusce hendrerit ante
            et augue porta viverra. Maecenas nisi nisl, porta vitae augue ut,
            accumsan cursus sapien. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Vivamus nec cursus enim. Morbi laoreet erat at
            vestibulum tristique. Maecenas posuere vel eros tempor feugiat. Cras
            sollicitudin enim sit amet odio ullamcorper euismod. Morbi et nisi
            vehicula, pharetra erat id, porttitor nibh. Sed ligula tortor,
            volutpat vitae orci non, vehicula egestas turpis. Etiam ut enim
            sapien.
          </p>
          </Paragraph>
        <Button>Learn More</Button>
      </Right>
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  align-items: flex-end;
  
  @media screen and (min-width: 768px) {
    grid-auto-flow: column;
    grid-gap: 64px;
    grid-template-columns: 2fr 3fr;
    border-bottom: 1px solid ${({ theme }) => theme.color.accent};
    justify-self: center;
  }
`

const Left = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: grid;
  }
`

const Right = styled.div`
  max-width: 600px;
  display: grid;
  grid-gap: 2rem;
  @media screen and (min-width: 768px) {
    padding-bottom: 40px;
  }
`

export default HomeAbout

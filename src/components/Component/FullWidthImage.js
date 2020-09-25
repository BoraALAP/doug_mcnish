import React from 'react'
import styled from 'styled-components'
import ArrowDown from '../../assets/icons/ArrowDown'
import Img from 'gatsby-image'

const FullWidthImage = ({ featuredImage }) => {
  return (
    <Container>
      <Img
        fluid={featuredImage}
        objectFit="cover"
        objectPosition="50% 50%"
        alt=""
      />
      <Box>
        <span>Scroll Down</span>
        <ArrowDown />
      </Box>
    </Container>
  )
}

const Container = styled.div`
  width: 100vw;
  box-sizing: border-box;
  
  position: relative;
  .gatsby-image-wrapper{
    height: 400px;
    @media screen and (min-width: 768px){
   height: 600px;
    }

  }

  img {
    height: 100%;
    background-position: center center;
  }
`

const Box = styled.div`
  position: absolute;
  background-color: ${({ theme }) => theme.color.negative};
  padding: 32px;
  display: grid;
  width: fit-content;
  grid-gap: 16px;
  grid-auto-flow: row;
  justify-items: center;
  left: calc(50% - 75px);
  bottom: 0;
  span {
    color: ${({ theme }) => theme.color.positive};
  }
`

export default FullWidthImage

import React from 'react'
import styled from 'styled-components'
import Button from '../UI/Button'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
// import LargeImage from '../General/LargeImage'
import Paragraph from '../UI/Paragraph'
import Youtube from '../UI/Youtube'

const HomeAbout = ({ featuredImage }) => {
  return (
    <Container>
      {/* <LargeImage
        featuredImage={featuredImage}
        alt="Chef Doug McNish smiles in a black and gold kitchen."
      /> */}
      <Youtube id="BtQZhXXBD_Q" />
      <Paragraph title="Be A Vegan Leader With Executive Chef Doug Mcnish">
        <p>
          The world is evolving, and so should your business. Every day, more
          people are choosing to open their minds and lead more ethical and
          sustainable lifestyles by voting with their dollars. The message that
          plant based diets are better for the planet, our fellow earthlings and
          our overall health has reached the international stage, and public
          support is mounting as science proves it to be true, again and again.
          And no, it’s not just a trend.
        </p>
        <p>
          Society’s movement towards embracing plant based diets, holistic
          healing and conscious consumerism has only just begun. Our collective
          evolution is officially underway, and the impact is reverberating
          through markets and industries around the world. Brands that choose to
          adapt their business models now can take advantage of this seismic
          shift in social thought and consumer behaviour, cementing themselves
          as leaders in the global movement towards compassionate and conscious
          living.
        </p>
        <AniLink
          to="/partnership/"
          cover
          direction="down"
          bg="linear-gradient(139deg, rgba(158,55,1,1) 25%, rgba(148,16,0,1) 100%)"
        >
          <Button>Strategic Partnerships</Button>
        </AniLink>
      </Paragraph>
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  align-items: center;
  padding: 1.5rem 1.5rem;

  @media screen and (min-width: 768px) {
    border: 12px solid ${({ theme }) => theme.color.accent};
    padding: 5rem 5rem;
    grid-auto-flow: row;

    justify-self: center;
  }
`

export default HomeAbout

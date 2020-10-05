import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Image from '../UI/Image'
import Button from '../UI/Button'

const PostCard = ({
  featuredImage,
  title,
  excerpt,
  date,
  client,
  slug,
  price,
  categories = [],
  className = '',
  ...props
}) => (
  <Container to={slug}>
    {featuredImage && (
      <div>
        <Image background src={featuredImage} alt={title} />
      </div>
    )}
    <Text>
      {title && <h3>{title}</h3>}
      {/* <div>
        {date} <br />
      </div> */}

      {excerpt && <p>{excerpt}</p>}
    </Text>
    <ButtonS>Buy Now - {price}</ButtonS>
  </Container>
)



const Container = styled(Link)`
  display: grid;
  text-decoration: none;
  align-content: space-between;
  transition: ${({ theme }) => theme.transition};
  &:hover{
  box-shadow: ${({ theme }) => theme.boxShadow};

  }
`
const Text = styled.div`
  display: grid;
  padding: 1rem;
  grid-gap: 8px;
  align-self: start;
  h3,
  p {
    margin: 0;
  }
`

const ButtonS = styled(Button)`
  display: grid;
  align-self: end;
`
export default PostCard
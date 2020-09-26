import React, { useState } from 'react'
import styled from 'styled-components'

import PostCard from '../components/PostCard'
import Button from './UI/Button'

const PostSection = props => {
  const { limit, title, posts, showMore, type } = props

  const [limitNum, setLimitNum] = useState(limit)
  let visiblePosts = []
  if (type) {
    visiblePosts = posts
      .filter(post => post.productType.toLowerCase() === type)
      .slice(0, limit || posts.length)
  } else {
    visiblePosts = posts.slice(0, limit || posts.length)
  }

  console.log(posts)

  return (
    <Container>
      {title && <h2>{title}</h2>}
      {!!visiblePosts.length && (
        <Products>
          {visiblePosts.map((post, index) => (
            <PostCard key={post.title + index} {...post} />
          ))}
        </Products>
      )}
      {showMore && visiblePosts.length < posts.length && (
        <div>
          {showMore && (
            <Button onClick={() => setLimitNum(limit + limitNum)}>
              Show More
            </Button>
          )}
        </div>
      )}
    </Container>
  )
}

export default PostSection

const Container = styled.div`
  display: grid;
  justify-items: center;
  @media screen and (min-width: 768px) {
  padding: 0 5vw;
    }
`

const Products = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
  grid-gap:5vh;
  width: 100%;

  @media screen and (min-width: 768px) {
    grid-gap:5vw ;
    }
`

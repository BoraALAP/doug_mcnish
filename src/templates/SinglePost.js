import React, { Fragment } from 'react'
import _get from 'lodash/get'
import { Link, graphql } from 'gatsby'
import { ChevronLeft } from 'react-feather'

import PageHeader from '../components/PageHeader'
import Content from '../components/Content'
import Layout from '../components/Global/Layout'
import ContentLayout from '../components/Global/ContentLayout'

export const SinglePostTemplate = ({
  title,
  featuredImage,
  date,
  body,
  nextPostURL,
  prevPostURL,
  categories = []
}) => {
  const pageFeaturedImage = featuredImage.startsWith('http')
    ? featuredImage
    : '../' + featuredImage
  return (
    <ContentLayout>
      <PageHeader backgroundImage={pageFeaturedImage} />
      <article itemScope itemType="http://schema.org/BlogPosting">
        <div>
          <Link to="/blog/">
            <ChevronLeft /> BACK
          </Link>
          <div>
            <div>
              {date}
              {categories && (
                <Fragment>
                  <span> |</span>
                  {categories.map((cat, index) => (
                    <span key={cat.category}>
                      {cat.category}
                      {/* Add a comma on all but last category */}
                      {index !== categories.length - 1 ? ',' : ''}
                    </span>
                  ))}
                </Fragment>
              )}
            </div>

            {title && <h1 itemProp="title">{title}</h1>}

            <div>
              <Content source={body} />
            </div>

            <div>
              {prevPostURL && <Link to={prevPostURL}>Previous Post</Link>}
              {nextPostURL && <Link to={nextPostURL}>Next Post</Link>}
            </div>
          </div>
        </div>
      </article>
    </ContentLayout>
  )
}

// Export Default SinglePost for front-end
const SinglePost = ({ data: { post, allPosts } }) => {
  const thisEdge = allPosts.edges.find(edge => edge.node.id === post.id)
  return (
    <Layout
      meta={post.frontmatter.meta || false}
      title={post.frontmatter.title || false}
    >
      <SinglePostTemplate
        {...post}
        {...post.frontmatter}
        body={post.html}
        nextPostURL={_get(thisEdge, 'next.fields.slug')}
        prevPostURL={_get(thisEdge, 'previous.fields.slug')}
      />
    </Layout>
  )
}

export default SinglePost

export const pageQuery = graphql`
  ## Query for SinglePost data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query SinglePost($id: String!) {
    post: markdownRemark(id: { eq: $id }) {
      ...Meta
      html
      id
      frontmatter {
        title
        template
        subtitle
        featuredImage
        date(formatString: "dddd MMMM DD, YYYY")
        categories {
          category
        }
      }
    }

    allPosts: allMarkdownRemark(
      filter: { fields: { contentType: { eq: "posts" } } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          id
        }
        next {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
        previous {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`

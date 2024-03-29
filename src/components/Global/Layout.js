import React, { useState } from 'react'
// import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import styled, { ThemeProvider } from 'styled-components'
import GlobalStyle from '../../styles/global'
import { primaryTheme, secondaryTheme } from '../../styles/theme'
// import favicon from '../../assets/favicon.ico'
import Meta from './Meta'
import Nav from './Nav'
import Footer from './Footer'
import ContextProvider from '../../provider/ContextProvider'

const Layout = ({ children, meta }) => {
  // eslint-disable-next-line
  const [mode, setMode] = useState(true)
  return (
    <ContextProvider>
      <StaticQuery
        query={graphql`
          query IndexLayoutQuery {
            settingsYaml {
              siteTitle
              siteDescription
              googleTrackingId
              socialMediaCard {
                image
              }
            }
            allPosts: allMarkdownRemark(
              filter: { fields: { contentType: { eq: "postCategories" } } }
              sort: { frontmatter: { date: DESC } }
            ) {
              edges {
                node {
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
        `}
        render={(data) => {
          const { socialMediaCard, googleTrackingId } = data.settingsYaml || {},
            subNav = {
              posts: data.allPosts.hasOwnProperty('edges')
                ? data.allPosts.edges.map((post) => {
                    return { ...post.node.fields, ...post.node.frontmatter }
                  })
                : false
            }

          return (
            <ThemeProvider theme={mode ? primaryTheme : secondaryTheme}>
              <GlobalStyle />
              {/* <Helmet
                defaultTitle={`${title} | ${siteTitle}`}
                titleTemplate={`%s | ${siteTitle}`}
              >
                {title}
                <link
                  href="https://ucarecdn.com"
                  rel="preconnect"
                  crossorigin
                />
                <link rel="icon" href={favicon} />
                <link rel="dns-prefetch" href="https://ucarecdn.com" />
               
              </Helmet> */}

              <Meta
                googleTrackingId={googleTrackingId}
                absoluteImageUrl={
                  socialMediaCard &&
                  socialMediaCard.image &&
                  socialMediaCard.image
                }
                {...meta}
                {...data.settingsYaml}
              />

              <Nav subNav={subNav} />

              <Fragment>{children}</Fragment>

              <Footer />
            </ThemeProvider>
          )
        }}
      />
    </ContextProvider>
  )
}

export default Layout

const Fragment = styled.div`
  display: grid;
  padding: 6em 0;
`

import AniLink from 'gatsby-plugin-transition-link/AniLink'
import React from 'react'

export const PageLink = ({ to, children }) => {
  return (
    <AniLink
      to={`/${to}`}
      cover
      direction="down"
      bg="linear-gradient(139deg, rgba(158,55,1,1) 25%, rgba(148,16,0,1) 100%)"
    >
      {children}
    </AniLink>
  )
}

export const ExternalLink = ({ to, children }) => {
  return (
    <a href={to} target="_blank" rel="noreferrer">
      {children}
    </a>
  )
}

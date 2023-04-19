import React from 'react'
import { Route } from 'react-router-dom'

const Function = () => (
  <Route
    path="/"
    render={({ location }) => {
      // Assumes google analytics code already added to index.html
      if (typeof window.ga === 'function') {
        window.ga('set', 'page', location.pathname + location.search)
        window.ga('send', 'pageview')
      }
      return null
    }}
  />
)

export default Function

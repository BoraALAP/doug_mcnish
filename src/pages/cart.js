import React from 'react'

import Layout from '../components/Global/Layout'
import Cart from '../components/Cart'

const CartPage = () => {
  const meta = {
    title: 'Awarded Best Vegan Cookbook in the World',
    description:
      'Purchase Top Vegan Chef Doug McNish’s award-winning cookbooks here. Thank you for your support. '
  }
  return (
    <Layout meta={meta}>
      <Cart />
    </Layout>
  )
}

export default CartPage

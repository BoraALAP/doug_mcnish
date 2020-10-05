import React from 'react'
import Layout from '../components/Global/Layout'
import ProductGrid from '../components/Shop/ProductGrid'
import styled from 'styled-components'

const ServicesPage = () => (
  <Layout>
    <Container>
      <ProductGrid type="book" title="Books" />
      <ProductGrid type="tshirt" title="Tshirts" />
      <ProductGrid type="e-book" title="E-Books" />
    </Container>
  </Layout>
)

const Container = styled.section`
  display: grid;
  grid-gap: 5rem;
  padding: ${({ theme }) => theme.pagePadding};
`

export default ServicesPage

import React from 'react'
import Layout from '../components/Global/Layout'
import ProductGrid from '../components/Shop/ProductGrid'
import styled from 'styled-components'
import Paragraph from '../components/UI/Paragraph'

const ShopPage = () => {
  const meta = {
    title: 'Shop The Best Vegan Cookbooks',

    description:
      'Chef Doug McNish’s cookbooks have been named The Best Vegan Cookbook in the world, twice. His first and last plant based cookbooks were awarded the Gourmand Award in 2012 and 2021.'
  }
  return (
    <Layout meta={meta}>
      <Container>
        <Paragraph title="SHOP DOUG MCNISH: HARNESS THE POWER OF PLANTS">
          <p>
            You can harness the power of plants at home with Chef Doug McNish’s
            award-winning raw, gourmet and whole food Vegan recipes. His
            best-selling cookbooks Eat Raw, Eat Well, Vegan Everyday and The
            Classics Veganized were all recognized as “The Best Vegan Cookbook”
            in the world, each earning the globally acclaimed Gourmand Award in
            2012, 2015 and 2020, respectively. For more bite-sized dish ideas,
            choose from a wide selection of recipe collections, available
            everywhere you go in ebook format. Chef McNish has shared countless
            simple, easy Vegan recipes for every occasion, as well as more
            advanced, gourmet vegan recipes for more ambitious Vegan food
            aficionados.
          </p>

          <p>
            These iconic culinary masterpieces are a staple in every dedicated,
            diehard Vegan’s recipe repertoire, and make great gifts for all the
            plant addict and plant-curious loved ones in your life.
          </p>
        </Paragraph>

        <ProductGrid type="book" title="Books" />
        <ProductGrid type="tshirt" title="Tshirts" />
        <ProductGrid type="e-book" title="E-Books" />
      </Container>
    </Layout>
  )
}

const Container = styled.section`
  display: grid;
  grid-gap: 5rem;
  padding: ${({ theme }) => theme.pagePadding};
`

export default ShopPage

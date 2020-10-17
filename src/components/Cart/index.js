import React, { useContext } from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import StoreContext from '../../context/StoreContext'
import LineItem from './LineItem'
import styled from 'styled-components'
import Button from '../UI/Button'

const Cart = () => {
  const {
    store: { checkout }
  } = useContext(StoreContext)

  const handleCheckout = () => {
    window.open(checkout.webUrl)
  }

  const line_items = checkout.lineItems.map(line_item => {
    return <LineItem key={line_item.id.toString()} line_item={line_item} />
  })

  return (
    <Container>
      <h1>Cart</h1>
      {checkout.lineItems.length > 0 ? (
        <>
          <Chart>
            <Title>
              <b>Image</b>
              <b>Product</b>
              <b>Quantity</b>
              <b>Price</b>
              <b>Amount</b>
            </Title>
            {line_items}
          </Chart>
          <Bottom>
            <InfoBox>
              <Info>
                <h2>Subtotal</h2>${checkout.subtotalPrice}
              </Info>
              {/* <Info><h2>Total</h2>${checkout.totalPrice}</Info> */}
            </InfoBox>
            <Button
              onClick={handleCheckout}
              disabled={checkout.lineItems.length === 0}
            >
              Check out
            </Button>
          </Bottom>
        </>
      ) : (
        <AniLink
          to="/products"
          cover
          direction="down"
          bg="linear-gradient(139deg, rgba(158,55,1,1) 25%, rgba(148,16,0,1) 100%)"
        >
          <Box>
          <p>You have no product added to your cart.</p>
          <H4>Check out the shop</H4>

          </Box>
        </AniLink>
      )}
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  padding: ${({ theme }) => theme.pagePadding};
  grid-gap: ${({ theme }) => theme.gridGap};
`

const Chart = styled.div`
  display: grid;
  grid-gap: 1.5rem;
`
const Bottom = styled.div`
  display: grid;
  grid-gap: 1.5rem;

  @media screen and (min-width: 768px) {
    width: 40vw;
    justify-self: end;
  }
`

const Box = styled.div`
  display: grid;
  width: 100%;
  text-align: center;
  align-content: center;
  background-color: ${({ theme }) => theme.color.lightGrey};
  justify-items:center;
  padding: 3em 2em;
  box-sizing: border-box;
`

const H4 = styled.div`
  display: grid;

`

const InfoBox = styled.div`
  display: grid;
  grid-auto-flow: column;
  border: ${({ theme }) => `1px solid ${theme.color.primary}`};
  padding: 3em 2rem;
  text-align: center;
  @media screen and (min-width: 768px) {
    text-align: left;
  }
`

const Info = styled.div`
  display: grid;
  grid-gap: 1rem;
`

const Title = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: 1fr 2fr 1fr 1fr 1fr 1fr;
  }
`

export default Cart

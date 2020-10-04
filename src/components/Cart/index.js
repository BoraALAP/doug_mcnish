import React, { useContext } from 'react'

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
        <Info><h2>Subtotal</h2>${checkout.subtotalPrice}</Info>
        {/* <Info><h2>Total</h2>${checkout.totalPrice}</Info> */}
        </InfoBox>
        <Button
          onClick={handleCheckout}
          disabled={checkout.lineItems.length === 0}
        >
          Check out
        </Button>
      </Bottom>
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  padding: ${({ theme }) => theme.pagePadding};
  grid-gap: 3em;
`

const Chart = styled.div`
  display: grid;
  grid-gap: 1.5em;
`
const Bottom = styled.div`
  display: grid;
  grid-gap: 1.5em;
  
  @media screen and (min-width: 768px) {
    width: 40vw;
    justify-self: end;
  }
`

const InfoBox = styled.div`
  display: grid;
  grid-auto-flow: column;
  border:  ${({ theme }) => `1px solid ${theme.color.primary}`};
  padding: 3em 2em;
  text-align: center;
  @media screen and (min-width: 768px) {
    text-align: left;
  }
`

const Info = styled.div`
  display: grid;
  grid-gap: 1em;
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

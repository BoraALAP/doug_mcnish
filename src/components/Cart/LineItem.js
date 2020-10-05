import React, { useContext } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import StoreContext from '../../context/StoreContext'
import Button from '../UI/Button'

const LineItem = ({ line_item }) => {
  const {
    removeLineItem,
    store: { client, checkout }
  } = useContext(StoreContext)

  const variantImage = line_item.variant.image ? (
    <img
      src={line_item.variant.image.src}
      alt={`${line_item.title} product shot`}
      height="60px"
    />
  ) : null
  /* eslint-disable no-unused-vars */
  const selectedOptions = line_item.variant.selectedOptions
    ? line_item.variant.selectedOptions.map(
        option => `${option.name}: ${option.value} `
      )
    : null
  /* eslint-enable no-unused-vars */
  const handleRemove = () => {
    removeLineItem(client, checkout.id, line_item.id)
  }

  return (
    <Container to={`/product/${line_item.variant.product.handle}`}>
      <span>{variantImage}</span>
      <Line>{line_item.title}</Line>
      {/* <Line>
          {line_item.variant.selectedOptions[0].value}
        </Line> */}
      <Line>
        <Label>Quantity</Label>
        {line_item.quantity}
      </Line>
      <Line>
        <Label>Price</Label>${line_item.variant.price}
      </Line>
      <Line>
        <Label>Total</Label>${(line_item.quantity * line_item.variant.price).toFixed(2)}
      </Line>

<ButtonS>
      <Button secondary onClick={handleRemove}>
        Remove
      </Button>
      </ButtonS>
    </Container>
  )
}

const Container = styled(Link)`
  display: grid;
  background-color: ${({ theme }) => theme.color.lightGrey};
  grid-auto-flow: row;
  justify-content: center;
  justify-items: center;
  text-align: center;
  padding: 2em;
  grid-gap: 1em;
  @media screen and (min-width: 768px) {
    grid-auto-flow: column;
    grid-template-columns: 1fr 2fr 1fr 1fr 1fr 1fr;
    align-items: center;
    width: auto;
    justify-content: start;
    justify-items: start;
    text-align: start;
    padding: 0;
    grid-gap: 0;
    background-color: transparent;
  }
`

const Label = styled.div`
  display: grid;
  text-align: center;
  font-weight: 700;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

const Line = styled.div`
  display: grid;
`

const ButtonS = styled.div`
  justify-self:end;
`

export default LineItem

import React, { useState } from 'react'
import styled from 'styled-components'

const Thumbnails = ({ size, indexNum, onClick }) => {
  const [num, setNum] = useState(indexNum)
  
  return (
    <Container>
      {size.map((item, index) => {
        return(
        <Circle
          key={index}
          onClick={() => {setNum(index); onClick(index)}}
          onKeyDown={() => {setNum(index); onClick(index)}}
        >
          <Dot active={num === index}/>
        </Circle>
      )})}
    </Container>
  )
}

const Container = styled.div`
display: grid;
grid-auto-flow: column;
grid-gap: 16px;
justify-content: center;
`

const Circle = styled.div`
  display: grid;
  border-radius: 100%;
  width: 10px;
  height: 10px;
  border: ${({ theme }) => `1px solid ${theme.color.negative}`};
`

const Dot = styled.div`
  display: grid;
  border-radius: 100%;
  width: 8px;
  height: 8px;
  margin: 1px;
  background-color: ${props =>
    props.active ? props.theme.color.accent : 'transparent'};
`

export default Thumbnails

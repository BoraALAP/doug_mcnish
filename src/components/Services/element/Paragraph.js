import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Paragraph = ({ title, subtitle, children }) => {
  console.log(children);
  return (
    <Container>
      <TitleS>{title}</TitleS>
      <SubTitle>{subtitle}</SubTitle>
      {children.length > 1 ? children.map((child, index) => (
        <ParagraphS key={index}>{child}</ParagraphS>
      )) : <ParagraphS>{children}</ParagraphS>}
    </Container>
  )
}

export const Title = ({children}) => {
  return(
    <Container>
      <Title>{children}</Title>
    </Container>
  )
}

Paragraph.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  children: PropTypes.array.isRequired
}

const Container = styled.div``

const TitleS = styled.h2`
  display: grid;
`

const SubTitle = styled.h3`
  display: grid;
  padding: 0 1.5em;
  color: ${({ theme }) => theme.color.grey};
`

const ParagraphS = styled.div`
  display: grid;
  padding: 0 1.5em;
`

export default Paragraph

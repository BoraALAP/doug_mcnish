import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Paragraph = ({ title, subtitle, children }) => {
  return (
    <Container>
      {title && <TitleS>{title}</TitleS>}
      {subtitle && <SubTitle>{subtitle}</SubTitle>}
      <Content>
        {Array.isArray(children) && children.length > 1 ? (
          children.map((child, index) => (
            <ParagraphS key={index}>{child}</ParagraphS>
          ))
        ) : (
          <ParagraphS>{children}</ParagraphS>
        )}
      </Content>
    </Container>
  )
}

export const Title = ({ children }) => {
  return (
    <Container>
      <TitleS>{children}</TitleS>
    </Container>
  )
}

Paragraph.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  children: PropTypes.array.isRequired
}

const Container = styled.div`
  display: grid;
  grid-gap: 0.75rem;
  margin-top: 1.5rem;
`

const Content = styled.div`
  display: grid;
  grid-gap: 0.75rem;
`

const TitleS = styled.h1`
  display: grid;
`

const SubTitle = styled.h3`
  display: grid;
  padding: 0 1.5rem;
  color: ${({ theme }) => theme.color.grey};
`

const ParagraphS = styled.div`
  display: grid;
  padding: 0 1.5rem;
  max-width: 600px;
`

export default Paragraph

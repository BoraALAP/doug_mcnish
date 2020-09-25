import React from 'react';
import styled from 'styled-components';
 
const Button = ({children, primary, secondary}) => {
  return (
    <Container primary={primary} secondary={secondary}>
      {children}
    </Container>
  );
};
 
const Container = styled.button`
  border-radius: 6px;
  padding: 12px 24px;
  background-color: ${( props ) => props.secondary ? props.theme.color.positive : props.theme.color.negative};
  color: ${( props ) => props.secondary ? props.theme.color.negative : props.theme.color.positive};
  font-size: 0.875em;
  @media screen and (min-width: 768px){
  max-width: 400px;
  }
`;
 
export default Button
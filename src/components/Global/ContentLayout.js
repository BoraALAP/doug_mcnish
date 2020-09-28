import React from 'react';
import styled from 'styled-components';
 
const ContentLayout = (props) => {
  return (
    <Container noTop={props.noTop}>
      {props.children}
    </Container>
  );
};
 
const Container = styled.div`
display: grid;
  padding: ${(props) => props.noTop ? `0  ${props.theme.paddingW}` : props.theme.pagePadding  };
  box-sizing: border-box;
  grid-gap: 80px;
`;
 
export default ContentLayout
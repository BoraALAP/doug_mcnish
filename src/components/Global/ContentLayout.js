import React from 'react';
import styled from 'styled-components';
 
const ContentLayout = (props) => {
  return (
    <Container>
      {props.children}
    </Container>
  );
};
 
const Container = styled.div`
display: grid;
  padding: 0 ${({ theme }) => theme.pagePadding};
  box-sizing: border-box;
  grid-gap: 80px;
`;
 
export default ContentLayout
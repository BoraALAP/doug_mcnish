import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image'
 
const LargeImage = ({featuredImage}) => {
  return (
    <Container>
      <Img
          fluid={featuredImage}
          objectFit="cover"
          objectPosition="50% 50%"
          alt=""
        />
    </Container>
  );
};
 
const Container = styled.div`
display: grid;

`;
 
export default LargeImage
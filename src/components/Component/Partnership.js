import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image'
 
const Partnership = ({partner1, partner2, partner3}) => {

  return (
    <Container>
      <h2> Partnership </h2>
      <Logos>
      <ImgS
        fixed={partner1}
        // objectFit="cover"
        objectPosition="50% 50%"
        alt=""
      />
      <ImgS
        fixed={partner2}
        // objectFit="cover"
        objectPosition="50% 50%"
        alt=""
      />
      <ImgS
        fixed={partner3}
        // objectFit="cover"
        objectPosition="50% 50%"
        alt=""
      />
   
      </Logos>
    </Container>
  );
};
 
const Container = styled.div`
display: grid;
justify-items: center;
`;

const Logos = styled.div`
display: grid;
grid-auto-flow: column;
justify-content: center;
grid-gap: 32px;
`;

const ImgS = styled(Img)`
  height: 40px;
`
 
export default Partnership
import React from 'react';
import styled from 'styled-components';
 
const CenterBigText = (props) => {
  return (
    <Container>
      <H4>With his hunger and drive, Doug McNish has honed his craft and become a word class executive vegan chef, consultant, educator, brand spokesperson, author, speaker, and a committed vegan activist.</H4>
    </Container>
  );
};
 
const Container = styled.div`

display: grid;
justify-items:center;
text-align: center;
`;

const H4 = styled.h4`
  display: grid;
  width: 75%;
`
 
export default CenterBigText
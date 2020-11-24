import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 10px;
  margin-right: 10px;
  padding-top: 20px;
  padding-bottom: 20px;
`;

const Header = styled.h2`
  display: inline-block;
  font-size: 32px;
  font-family: Arial;
  margin: 0;
`;

const WriteReviewButton = styled.button`
  display: inline-block;
  color: #fff;
  font-size: 14px;
  font-family: Roboto
  font-weight: bold;
  background-color: #e71836;
  padding: none;
  padding-top: .5rem;
  padding-right: 1rem;
  padding-bottom: .5rem;
  padding-left: 1rem;
  border: none;
`;


let Heading = () => {
  return (
    <HeaderContainer>
      <Header>Reviews</Header>
      <WriteReviewButton>WRITE A REVIEW</WriteReviewButton>
    </HeaderContainer>
  );
};

export default Heading;
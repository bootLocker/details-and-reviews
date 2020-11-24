import React from 'react';
import styled, { css } from 'styled-components';

const PaginationBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background: #F7F7F7;
  margin-left: 10px;
  margin-bottom: 10px;
  margin-right: 10px;
`;

const PageRange = styled.div`
  font-size: 16px;
  font-family: Arial;
  margin-right: 728px;
  padding: 10px;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 4px;
`;

const Button = styled.button`
  height: 30px;
  border: none;

  &:focus {
    background: #dddddd;
    outline: 0;
  }
`;

let PaginationBar = (props) => {
  return (
    <PaginationBarContainer>
      <PageRange>
        {props.firstReviewIndex + 1} - {props.lastReviewIndex + 1} of {props.totalCount} Reviews
      </PageRange>
      <ButtonContainer>
        <Button value='prev' onClick={props.handleClick} >◄</Button>
        <Button value='next' onClick={props.handleClick} >►</Button>
      </ButtonContainer>
    </PaginationBarContainer>
  );
};

export default PaginationBar;
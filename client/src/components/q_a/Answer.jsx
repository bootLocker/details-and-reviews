/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const StyledAnswersContainer = styled.div`
  background-color: rgb(247, 247, 247);
  padding: 0 10px 10px 10px;
  margin-bottom: 10px;
  margin-left: 10px;
  margin-right: 10px;
`;

const StyledAnswerHeader = styled.div`
  padding: 15px 10px 0px;

  #author {
    font-weight: 700;
  }
`;

const StyledAnswerBody = styled.div`
  color: #515151;
  padding: 0px 10px;
  padding-top: 10px;
  font-weight: 350;
`;

const StyledAnswerFooter = styled.div`
  display: flex;
  margin-top: 64px;
  padding: 0px 10px;
  font-size: 13px;
  color: #515151;
  text-align: center;
  align-items: center;

  button {
  display: inline-block;
  background: none;
  color: inherit;
  border: none;
  padding: 6px 9px;
  margin-left: 5px;
  font: inherit;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  outline: inherit;
  align-items: start;
  }

  button:hover {
    text-decoration: underline;
    box-shadow: inset 0 0 5px rgba(0,0,0,.2);
  }
`;

const Answer = (props) => {
  const {
    nickName, answer, helpfulScore,
    nonHelpfulScore,
  } = props;

  return (
    <StyledAnswersContainer>
      <StyledAnswerHeader>
        <div id="author">
          {nickName}
        </div>
      </StyledAnswerHeader>
      <StyledAnswerBody>
        {answer}
      </StyledAnswerBody>
      <StyledAnswerFooter>
        Helpful?
        <button type="button">
          {' Yes · '}
          {helpfulScore}
        </button>
        <button type="button">
          {'No · '}
          {nonHelpfulScore}
        </button>
        <button type="button">REPORT</button>
      </StyledAnswerFooter>
    </StyledAnswersContainer>
  );
};

export default Answer;

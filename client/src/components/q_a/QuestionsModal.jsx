import React from 'react';
import styled from 'styled-components';
import Answer from './Answer.jsx';
import AnswerSubmission from './AnswerSubmission.jsx';

const StyledQuestionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
  padding-top: 10px;
  justify-content: space-between;

  #content {
    display: flex;
    flex-direction: column;
  }

  #content h4 {
    margin: 0;
    font-size: 16px;
  }

  #content button {
    background: none;
    border: none;
    padding: 0;
    font: inherit;
    outline: inherit;
    text-decoration: none;
    color: black;
    font-size: 17px;
    font-weight: 700;
    line-height: 24px;
    margin-top: 5px;
  }


  #count {
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 6px 14px;
    font-size: 13px;
  }

  #count #number {
    font-weight: 500;
    font-size: 16px;
  }

`;

const QuestionsModal = (props) => {
  const {
    nickName, question, answers,
  } = props;

  answers.sort((a, b) => ((a.helpfulScore < b.helpfulScore) ? 1 : -1));
  return (
    <>
      <StyledQuestionsContainer>
        <div id="content">
          <h4>
            {nickName}
          </h4>
          <button type="button">
            {question}
          </button>
        </div>
        <div id="count">
          <span id="number">
            { answers.length }
          </span>
          {answers.length === 1 ? <span>answer</span> : <span>answers</span>}
        </div>
      </StyledQuestionsContainer>
      { answers.map((answer, index) => (
        <Answer
          key={answer._id}
          index={index}
          nickName={answer.nickName}
          answer={answer.response}
          helpfulScore={answer.helpfulScore}
          nonHelpfulScore={answer.nonHelpfulScore}
        />
      ))}
      <AnswerSubmission />
    </>
  );
};

export default QuestionsModal;

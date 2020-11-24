/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
import React from 'react';
import styled from 'styled-components';
import Answer from './Answer.jsx';

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
    cursor: pointer;
    outline: inherit;
    text-decoration: none;
    color: black;
    font-size: 17px;
    font-weight: 700;
    line-height: 24px;
    margin-top: 5px;
  }

  #content button:hover{
    text-decoration: underline;
    color: #036ad8;

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

  #count:hover {
    text-decoration: underline;
  }
`;

const AnswerButtonContainer = styled.div`
  padding: 0px 10px 10px 10px;
  margin-top: 30px;

  button {
    font-family: Roboto;
    appearance: none;
    background-color: rgb(247, 247, 247);
    border: none;
    text-transform: uppercase;
    padding: 2px 10px;
    color: #515151;
    font-size: 14px;
    line-height: 28px;
    font-style: normal;
    font-weight: 700;
    font-variant: normal;
    text-decoration: none;
    text-shadow: none;
    outline: none;
    cursor: pointer;
  }

  button:hover {
    text-decoration: underline;
    box-shadow: inset 0 0 5px rgba(0,0,0,.2);
  }
`;

const Questions = (props) => {
  const {
    nickName, question, answers, showModal, id,
  } = props;

  // answers.map((answer) => {
  //   if (answer && answers.indexOf(answer) === 0) {
  //     answer.nickName = 'Pete';
  //   }
  // });
  answers.sort((a, b) => ((a.helpfulScore < b.helpfulScore) ? 1 : -1));
  return (
    <>
      <StyledQuestionsContainer>
        <div id="content">
          <h4>
            {nickName}
          </h4>
          <button type="button" onClick={() => showModal(id)}>
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
      <AnswerButtonContainer>
        <button type="button" onClick={() => showModal(id)}> Answer This Question </button>
      </AnswerButtonContainer>
      { answers.map((answer, index) => (
        index === 0 ? (
          <Answer
            key={answer._id}
            index={index}
            nickName={answer.nickName}
            answer={answer.response}
            helpfulScore={answer.helpfulScore}
            nonHelpfulScore={answer.nonHelpfulScore}
          />
        )
          : null
      ))}
    </>
  );
};

export default Questions;

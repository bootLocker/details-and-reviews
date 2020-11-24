
import React from 'react';
import styled from 'styled-components';
import { MdCancel } from 'react-icons/md';
import QuestionsModal from './QuestionsModal.jsx';

const StyledModalContainer = styled.div`
  height: 100%;
  position: absolute;

  body {
    min-height: 100%;
  }

  #component-header {
    padding: 10px 12px 0px 12px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .modal {
    width: 95%;
    box-sizing: border-box;
    position: relative!important;
    padding: 20px;
    background: white;
    top: 80%;
    left: 42%;
    transform: translate(-50%,-50%);
    z-index: 2;
    margin: auto;
  }
`;

const StyledOverlay = styled.div`
  position:fixed;
  opacity: 1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, .5);
  z-index: 1;
`;

function AnswerModal(props) {
  const { show, currentQuestion, handleModalCloseClick } = props;
  if (!show) {
    return null;
  }
  return (
    <>
      <StyledModalContainer>
        <div className="modal" id="modal">
          <div id="component-header">
            <h1>Post Answer</h1>
            <MdCancel
              size="1.75em"
              color="#767676"
              onClick={() => handleModalCloseClick()}
            />
          </div>
          <div className="content">
            <QuestionsModal
              key={currentQuestion._id}
              id={currentQuestion._id}
              nickName={currentQuestion.nickName}
              date={currentQuestion.date}
              question={currentQuestion.query}
              answers={currentQuestion.answers}
            />
          </div>
        </div>
      </StyledModalContainer>
      <StyledOverlay />
    </>
  );
}

export default AnswerModal;

import React from 'react';
import axios from 'axios';
import styled, { createGlobalStyle } from 'styled-components';
import Questions from './Questions.jsx';
import Pagination from './Pagination.jsx';
import RequestInfo from './RequestInfo.jsx';
import AnswerModal from './AnswerModal.jsx';

const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }

  #info-button{
    background: none!important;
    border: none;
    padding: 0!important;
    font-family: Roboto;
    font-size: 14px;
    color: #036ad8;
    text-decoration: none;
    cursor: pointer;
    margin: 0px 10px;
    outline: none;
}
`;

const StyledHeader = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0px 10px;
  padding: 20px 0px;
  height: 44px;

  h1 {
    display: inline-block;
    margin: 0;
  }

  button {
    font-family: Roboto;
    display: inline-block;
    background-color: #e71836;
    color: white;
    text-align: center;
    font-size: 14px;
    font-weight: 540;
    text-transform: uppercase;
    text-shadow: none;
    padding: 7px 14px;
    cursor: pointer;
    border-style: none;
    height: 44px;
    outline: none;
  }

  button:hover {
    background-color: #be122b;
  }
`;

const StyledQuestionBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0px 10px 10px;
  background: rgb(247, 247, 247);
  text-align: center;
  align-items: center;

  #numberOfQuestions {
    text-transform: inherit;
    position: relative;
    float: left;
    padding: 10px;
  }

  #dropdownTarget {
    background:transparent;
    border:0px;
    padding: 10px;
    justify-content: flex-end;
  }

  #dropdownArrow {
    font-size: 10px;
    line-height: 12px;
    top: 50%;
  }

  button {
    justify-content: flex-end;
  }
`;

class QA extends React.Component {
  constructor() {
    super();
    this.state = {
      questions: [],
      currentPage: 1,
      questionsPerPage: 10,
      requestInfo: false,
      modalOpen: false,
      currentQuestion: {},
    };

    this.handleRightClick = this.handleRightClick.bind(this);
    this.handleLeftClick = this.handleLeftClick.bind(this);
    this.handleRequestClick = this.handleRequestClick.bind(this);
    this.handleCloseRequestClick = this.handleCloseRequestClick.bind(this);
    this.handleModalCloseClick = this.handleModalCloseClick.bind(this);
    this.showModal = this.showModal.bind(this);
    this.reqRef = React.createRef();
    this.questionRef = React.createRef();
    this.answerRef = React.createRef();
  }

  componentDidMount() {
    axios.get('api/questions/adidas_don_issue_2')
      .then((results) => {
        this.setState({
          questions: results.data.questions,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  handleLeftClick() {
    this.setState((prevState) => (
      { currentPage: prevState.currentPage - 1 }
    ), () => this.questionRef.current.scrollIntoView());
  }

  handleRightClick() {
    this.setState((prevState) => (
      { currentPage: prevState.currentPage + 1 }
    ), () => this.questionRef.current.scrollIntoView());
  }

  handleRequestClick() {
    this.setState({ requestInfo: true }, () => this.reqRef.current.scrollIntoView());
  }

  handleCloseRequestClick() {
    this.setState({ requestInfo: false });
  }

  handleModalCloseClick() {
    this.setState({ modalOpen: false });
  }

  showModal(id) {
    const { questions } = this.state;
    const filteredQuestion = questions.filter((question) => question._id === id)[0];
    this.setState({ modalOpen: true, currentQuestion: filteredQuestion },
      () => this.answerRef.current.scrollIntoView());
  }

  render() {
    const {
      questions, currentPage, questionsPerPage, requestInfo, modalOpen, currentQuestion,
    } = this.state;

    const indexOfLastQuestion = currentPage * questionsPerPage;
    const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage;
    const currentQuestions = questions.slice(indexOfFirstQuestion, indexOfLastQuestion);
    const totalPages = Math.ceil(questions.length / questionsPerPage);

    return (
      <>
        <GlobalStyle />
        <StyledHeader>
          <h1>Questions</h1>
          {questions.length === 0 ? null : (
            <button type="button" onClick={this.handleRequestClick}>Request Info</button>)}
        </StyledHeader>
        <div ref={this.questionRef} />
        {questions.length === 0 ? <button type="button" id="info-button" onClick={this.handleRequestClick}>Be the first to request info</button> : (
          <StyledQuestionBar>
            <span id="numberOfQuestions">
              {currentPage !== totalPages ? (
                `${indexOfFirstQuestion + 1}
                    – ${indexOfLastQuestion} of ${questions.length} Questions`)
                : (`${indexOfFirstQuestion + 1}
                      – ${questions.length} of ${questions.length} Questions`)}
            </span>
          </StyledQuestionBar>
        )}
        <>
          <div ref={this.answerRef} />
          <AnswerModal
            show={modalOpen}
            currentQuestion={currentQuestion}
            handleModalCloseClick={this.handleModalCloseClick}
          />
        </>
        {currentQuestions.map((question) => (
          <Questions
            key={question._id}
            id={question._id}
            nickName={question.nickName}
            date={question.date}
            question={question.query}
            answers={question.answers}
            showModal={this.showModal}
            modalOpen={modalOpen}
          />
        ))}
        { (questions && questions.length > 10) ? (
          <StyledQuestionBar>
            <span id="numberOfQuestions">
              {currentPage !== totalPages ? (
                `${indexOfFirstQuestion + 1}
                  – ${indexOfLastQuestion} of ${questions.length} Questions`)
                : (`${indexOfFirstQuestion + 1}
                    – ${questions.length} of ${questions.length} Questions`)}
            </span>
            <span id="interactive">
              <Pagination
                handleRightClick={this.handleRightClick}
                handleLeftClick={this.handleLeftClick}
                currentPage={currentPage}
                lastPage={totalPages}
              />
            </span>
          </StyledQuestionBar>
        ) : null}
        {requestInfo ? (
          <>
            <RequestInfo
              handleCloseRequestClick={this.handleCloseRequestClick}
            />
            <div ref={this.reqRef} />
          </>
        ) : null}
      </>
    );
  }
}

export default QA;

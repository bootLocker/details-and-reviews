import React from 'react';
import styled, { css } from 'styled-components';
import { MdCancel } from 'react-icons/md';

const StyledInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 100;
  width: 80vw;

  #component-header {
    padding: 10px 12px 0px 12px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  #rule {
    padding: 0px 20px;
    font-size: 12px;
    margin-bottom: 11px;
    color: #515151;
  }

  #infoBox {
    padding: 15px 20px 30px 20px;
    border-top: 1px solid #ddd;
    background-color: #f7f7f7;
  }

  #top-header{
    color: #515151;
    padding-bottom: 5px;
  }

  #question {
    padding: 0px 15.5px 0px 0px;
    font-weight: 600;
  }

  #answer {
    padding: 0px 15.5px 0px 0px;
    font-weight: 600;
  }

  textarea{
    font-family: Arial;
    font-size: 15px;
    font-weight: 400;
    display: flex;
    width: 96%;
    border-radius: .25em;
    margin: 10px;
    padding: 7.5px 15px;
    border: 1px solid;
    border-color: #bbb #ddd #ddd;
    resize: none;
    overflow-wrap: break-word;
    overflow: hidden;
    height: 80px;
  }

  #email-container{
    display: flex;
    flex-direction: column;
    padding: 10px 10px 5px 10px;
  }

  #email-container input {
    width: 45%;
    height: 20px;
    padding: 7.5px 15px;
    margin: 10px 0px;
    font-size: 15px;
  }

  #terms {
    display: flex;
    flex-direction: column;
    padding: 0px 50px 0px 20px;
  }

  #agreement {
    display: flex;
    flex-direction: row;
    padding-bottom: 10px;
    text-align: center;
    align-items: center;
  }

  #checkbox {
    display: inline-block;
    font-size: 15px;
    line-height: 1em;
    margin: 0 .25em 0 0;
    padding: 0;
    width: 1.25em;
    height: 1.4em;
    border-radius: .25em;
    vertical-align: text-top;
    cursor: pointer;
  }

  #conditions {
    font-size: 12px;
  }

  #fineprint {
    margin-top: 5px;
    margin-bottom: 12px;
    font-size: .76em;
    color: #515151;
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
    margin-left: 10px;
  }

  button:hover {
    background-color: #be122b;
  }
`;
const RequestInfo = (props) => {
  const { handleCloseRequestClick } = props;
  return (
    <>
      <StyledInfoContainer>
        <div id="component-header">
          <h1>Request Info About this Product</h1>
          <MdCancel
            size="1.75em"
            color="#767676"
            onClick={() => handleCloseRequestClick()}
          />
        </div>
        <div id="rule">
          Required fields are marked with *
        </div>
        <div id="infoBox">
          <div id="top">
            <div id="top-header">
              <span id="question">Question*</span>
              Maximum of 255 characters.
            </div>
            <textarea
              maxLength="255"
              placeholder="Example: Does this product fit true to size?
                What material is this product made of?
                Is this product made for running?"
            />
          </div>
          <div id="email-container">
            <div id="email-literal">Email</div>
            <input type="email" placeholder="Example: yourname@example.com" />
          </div>
          <div id="terms">
            <div id="agreement">
              <input type="checkbox" id="checkbox" />
              <div id="conditions">I agree to the terms and conditions </div>
            </div>
            <span id="fineprint">
              You may receive emails regarding this submission.
              Any emails will include the ability to opt-out of future communications.
            </span>
          </div>
          <button type="submit">
            Post Question
          </button>
        </div>
      </StyledInfoContainer>
    </>
  );
};

export default RequestInfo;

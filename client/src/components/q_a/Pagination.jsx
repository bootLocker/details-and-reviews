/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const StyledButtons = styled.div`
  button {
    padding: 5px 14px;
    margin-left: 1px;
    margin-right: 3px;
    background-color: #ededed;
    box-shadow: none;
    outline: none;
    border: none;
  }

  button:hover {
    text-decoration: underline;
    box-shadow: inset 0 0 5px rgba(0,0,0,.2);
  }
`;

const Pagination = (props) => {
  const {
    handleRightClick, handleLeftClick, currentPage, lastPage,
  } = props;
  return (
    <>
      <StyledButtons>
        {currentPage === 1 ? (
          <button type="button" className="inactive">
            ◄
          </button>
        )
          : (
            <button
              type="button"
              className="active"
              onClick={() => handleLeftClick()}
            >
              ◄
            </button>
          )}
        {currentPage === lastPage ? (
          <button type="button" className="inactive">
            ►
          </button>
        ) : (
          <button
            type="button"
            className="active"
            onClick={() => handleRightClick()}
          >
            ►
          </button>
        )}
      </StyledButtons>
    </>
  );
};

export default Pagination;

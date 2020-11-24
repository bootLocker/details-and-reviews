import React from 'react';
import styled, { css } from 'styled-components';
import { RiStarFill } from 'react-icons/ri';

const Rating = styled.div`
  font-size: 13px;
  margin-top: 6px;
  margin-bottom: 6px;
`;

const RatingLabel = styled.span`
  font-size: 16px;
  color: #515151;
  padding: 5px;
`;

const RatingCount = styled.span`
  font-size: 16px;
  color: #515151;
  text-align: center;
  padding-right: 5px;
  padding-bottom: 3px;
  padding-left: 6px;
`;

const HistorgramContainer = styled.span`
  padding-left: 10px;
  padding-right: 18px;
`;

const HistogramBar = styled.span`
  display: inline-flex;
  align-items: center;
  background-color: #ccc;
  height: 10px;
  width: 255px;
  margin: 0;
  border-radius: 2px;

  ${props => props.emphasized && css `
    background-color: #515151;
    width: ${props => props.width};
  `}
`;

let SnapshotRow = (props) => {
  return (
    <Rating>
      <RatingLabel>{props.rating.label} </RatingLabel>
      <RiStarFill/>
      <HistorgramContainer>
        <HistogramBar>
          <HistogramBar emphasized width={props.rating.width} />
        </HistogramBar>
      </HistorgramContainer>
      <RatingCount>{props.rating.number}</RatingCount>
    </Rating>
  );
};

export default SnapshotRow;
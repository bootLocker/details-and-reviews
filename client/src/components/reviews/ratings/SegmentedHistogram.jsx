import React from 'react';
import _ from 'lodash';
import styled, { css } from 'styled-components';
import { RiStarFill } from 'react-icons/ri';

const HistogramContainer = styled.span`
padding-top: 13px;
padding-left: 10px;
padding-right: 18px;
`;

const HistogramBar = styled.span`
display: inline-flex;
align-items: center;
background-color: #ccc;
height: 8px;
width: 144px;
margin: 0;
border-radius: 2px;

${props => props.emphasized && css `
  background-color: #515151;
  width: ${props => props.width};
  overflow: visible;
`}

${props => props.block && css `
  display: content;
  background-color: #transparent;
  width: 28.8px;
  border-right: solid thin white;
`}
`;

let SegmentedHistogram = (props) => {
  let rating = 0;

  _.each(props.reviews, (review) => {
    rating += review[props.type];
  });

  rating = (rating / props.reviews.length) * 28.8;

  let width = rating.toString() + 'px';

  return (
    <HistogramContainer>
      <HistogramBar>
        <HistogramBar emphasized width={width} />
      </HistogramBar>
    </HistogramContainer>
  );
};

export default SegmentedHistogram;
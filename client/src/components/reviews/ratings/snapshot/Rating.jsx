import React from 'react';
import styled, { css } from 'styled-components';
import { RiStarFill } from 'react-icons/ri';

const Rating = styled.div`
font-size: 13px;
margin-top: 3px;
margin-bottom: 3px;
`;

const RatingLabel = styled.span`
font-size: 16px;
color: #515151;
`;

const HistogramBar = styled.span`
display: inline-flex;
align-items: center;
background-color: #ccc;
height: 10px;
width: 255px;
margin: 0;
padding: 0;
border-radius: 2px;

${props => props.emphasized && css `
  background-color: #515151;
  width: ${props => props.width};
`}
`;

function RatingBar(props) {
  return (
    <Rating>
          <RatingLabel>{props.rating.label}</RatingLabel>
          <RiStarFill/>
          <HistogramBar><HistogramBar emphasized width={props.rating.width} /> </HistogramBar>
          <RatingLabel>{props.rating.number}</RatingLabel>
        </Rating>
  )
}

export default RatingBar
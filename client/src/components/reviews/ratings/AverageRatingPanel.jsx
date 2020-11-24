import React from 'react';
import styled from 'styled-components';
import Stars from '../Stars.jsx';
import SegmentedHistogram from './SegmentedHistogram.jsx';

const Panel = styled.div`
  display: inline-block;
  width: 50%;
  float: right;
`;

const Title = styled.h3`
  font-size: 16px;
  font-weight: normal;
  color: #0e1111;
  margin: 0;
  padding: 10px;
`;

const AverageRatings = styled.div`
  display: table;
  margin-top: 10px;
  margin-left: 10px;
  margin-bottom: 20px;
  margin-right: 10px;se
  padding: 0;
`;

const RatingRow = styled.div`
  display: table-row;
  height: 30px;
  padding-top: 10px;
`;

const RatingLabel = styled.span`
  padding: 0;
  padding-top: 10px;
  display:table-cell;
  font-size: 16px;
  color: #0e1111;
`;

const StarsContainer = styled.span`
  padding-left: 10px
`;

const RatingScore = styled.span`
  display:table-cell;
  font-size: 16px;
  color: #0e1111;
`;

let AverageRatingPanel = (props) => {
  let ratings = {
    overallRating: 0,
    qualityRating: 0,
    valueRating: 0
  };

  _.each(props.reviews, (review) => {
    ratings.overallRating += review.overallRating;
    ratings.qualityRating += review.qualityRating;
    ratings.valueRating += review.valueRating;
  });

  for (let rating in ratings) {
    ratings[rating] = ratings[rating] / props.reviews.length;
  }

  return (
    <Panel>
      <Title>Average Customer Ratings</Title>
      <AverageRatings>
        <RatingRow>
          <RatingLabel>Overall</RatingLabel>
          <StarsContainer><Stars reviews={props.reviews} color={'#515151'}/></StarsContainer>
          <RatingScore>{ratings.overallRating}</RatingScore>
        </RatingRow>
        <RatingRow>
          <RatingLabel>Quality of Product</RatingLabel>
          <SegmentedHistogram reviews={props.reviews} type={'qualityRating'} />
          <RatingScore>{ratings.qualityRating}</RatingScore>
        </RatingRow>
        <RatingRow>
          <RatingLabel>Value of Product</RatingLabel>
          <SegmentedHistogram reviews={props.reviews} type={'valueRating'} />
          <RatingScore>{ratings.valueRating}</RatingScore>
        </RatingRow>
      </AverageRatings>
    </Panel>
  );
};

export default AverageRatingPanel;
import React from 'react';
import styled from 'styled-components';
import Rating from './Rating.jsx';
import Stars from '../Stars.jsx';

const Title = styled.h3`
  font-size: 16px;
  font-weight: normal;
  color: #0e1111;
  margin: 0;
  padding: 10px;
`;

const AverageRatings = styled.div`
margin-top: 10px;
margin-left: 10px;
margin-bottom: 20px;
margin-right: 10px;se
padding: 0;
`;

let AverageRatingPanel = (props) => {
  let ratings = [];

  for (let rating in props.overallRatings) {
    let rting = {
      label: rating,
      number: props.overallRatings[rating],
      width: (((props.overallRatings[rating] / props.numberOfReviews) * 255).toString() + 'px')
    };

    ratings.push(rting);
  }

  ratings.sort((a, b) => a.label > b.label ? -1 : 1);

  let mappedRatingComponents = ratings.map(rating => {
    return <Rating rating={rating} />;
  });

  return (
    <div>
      <Title>Average Customer Ratings</Title>
      <AverageRatings>
        {mappedRatingComponents}
      </AverageRatings>
    </div>
  );
};

export default AverageRatingPanel;
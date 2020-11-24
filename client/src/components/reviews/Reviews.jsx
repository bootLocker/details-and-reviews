import React from 'react';
import styled from 'styled-components';
import Review from './Review.jsx';

const ReviewsContainer = styled.div`
  margin: 0;
  padding: 0;
`;

let Reviews = (props) => {
  let reviews = props.currentReviews.map((review) => {
    return (
      <Review data={review[1]} />
    );
  });

  return (
    <ReviewsContainer>
      {reviews}
    </ReviewsContainer>
  );
};

export default Reviews;
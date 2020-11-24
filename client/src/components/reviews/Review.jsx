import React from 'react';
import styled from 'styled-components';
import ReviewProfile from './ReviewSections/Profile/ReviewProfile.jsx';
import ReviewContent from './ReviewSections/Content/ReviewContent.jsx';

const ReviewContainer = styled.div`
  display: flex;
  vertical-align: middle;
  margin: 0;
  margin-left: 10px;
  margin-right: 10px;
  padding: 0;
`;

let Review = (props) => {
  return (
    <ReviewContainer>
      <ReviewProfile username={props.data.nickname} location={props.data.location}/>
      <ReviewContent data={props.data}/>
    </ReviewContainer>
  );
};

export default Review;
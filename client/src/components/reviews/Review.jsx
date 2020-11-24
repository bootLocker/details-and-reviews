import React from 'react';
import styled from 'styled-components';
import Profile from './Profile.jsx';

const ReviewContainer = styled.div`
  display: flex;
  margin: 0;
  margin-left: 10px;
  margin-right: 10px;
  padding: 0;
`;



let Review = (props) => {
  return (
    <ReviewContainer>
      <Profile username={props.data.nickname} location={props.data.location}/>
    </ReviewContainer>
  );
};

export default Review;
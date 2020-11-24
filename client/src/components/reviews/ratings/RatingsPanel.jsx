import React from 'react';
import styled from 'styled-components';
import SnapshotPanel from './SnapshotPanel.jsx';
import AverageRatingPanel from './AverageRatingPanel.jsx';

const RatingsContainer = styled.div`
  display: flex;
  margin-left: 10px;
  margin-right: 10px;
`;

let RatingsPanel = (props) => {
  return (
    <RatingsContainer>
      <SnapshotPanel overallRatings={props.overallRatings} numberOfReviews={props.reviews.length} />
      <AverageRatingPanel reviews={props.reviews}/>
    </RatingsContainer>
  );
};

export default RatingsPanel;